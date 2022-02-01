<template>
  <div class="page d-flex flex-row flex-column-fluid">
    <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
      <!-- begin:: Content -->
      <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
        <!-- begin:: Content Body -->
        <div class="post d-flex flex-column-fluid">
          <div class="container">
            <div className="card card-custom">
              <div class="card-body py-20">
                <!-- begin::Wrapper-->
                <div
                  class="d-flex justify-content-between flex-column flex-sm-row mb-10"
                >
                  <h4 class="fw-boldest text-primary fs-2qx pe-5 pb-7">
                    Orçamento #{{ model.orcamento.numeroOrcamento }}
                  </h4>
                  <!--end::Logo-->
                  <div class="text-sm-end">
                    <!--begin::Logo-->
                    <a href="#" class="d-block mw-150px ms-sm-auto">
                      <img
                        alt="Logo"
                        src="media/logos/logo.png"
                        class="w-100"
                      />
                    </a>
                    <!--end::Logo-->
                    <!--begin::Text-->
                    <!--end::Text-->
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mb-3" v-for="grupo in model.orcamento.items" :key="grupo.id">
                    <label class="form-label fs-4 fw-bolder text-success mb-5"
                      >{{ grupo.nomeGrupo }}:</label
                    >
                    <div class="d-flex flex-stack mb-2" v-for="item in grupo.items" :key="item.id">
                      <div class="me-5">
                        <label class="fs-6">{{ item.descricao }}</label>
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          @change="checkar(item.id)"
                          v-model="item.isDone"
                          :value="item.isDone"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="d-flex flex-column w-100 me-2">
                    <div class="d-flex flex-stack mb-2">
                      <span class="text-muted me-2 fs-7 fw-bold">
                        {{ porcentagem }}%
                      </span>
                    </div>

                    <div class="progress h-6px w-100">
                      <div
                        class="progress-bar"
                        style="background-image: linear-gradient(to right, #6444C4, #00BBFF);"
                        role="progressbar"
                        :style="{ width: porcentagem + '%' }"
                        :aria-valuenow="porcentagem"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <!-- end::Wrapper-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { saveToken } from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";
import { ElementAnimateUtil } from "@/assets/ts/_utils/ElementAnimateUtil";

export default defineComponent({
  name: "projetoCheck",
  setup() {
    const route = useRouter();
    const orcamentoId = route.currentRoute.value.params.orcamentoId;
    const porcentagem = ref(0);
    const model = reactive({
      orcamento: {
        numeroOrcamento: null,
        projetista: null,
        nomeDaEmpresa: null,
        contato: null,
        emailContato: null,
        prazoEntrega: 0,
        valor: 0,
        valorImposto: 0,
        formaPagamento: null,
        projeto: null,
        criadoEm: null,
        items: null
      }
    });

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const valor = computed(() => {
      return formatter.format(model.orcamento.valor);
    });

    const checkar = (id) => {
      ApiService.get(`orcamento/item-check/${id}`).then(({ data }) => {
        porcentagem.value = data;
      });
    }

    ApiService.get(`orcamento/${orcamentoId}`).then(({ data }) => {
      model.orcamento = data;
      porcentagem.value = data.progresso;
    });

    return {
      model,
      formatter,
      valor,
      porcentagem,
      checkar
    };
  }
});
</script>
