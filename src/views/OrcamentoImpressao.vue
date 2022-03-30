<template>
  <div class="page d-flex flex-row flex-column-fluid">
    <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
      <!-- begin:: Content -->
      <div id="kt_content" class="d-flex flex-column flex-column-fluid">
        <!-- begin:: Content Body -->
        <div class="post d-flex flex-column-fluid d-none">
          <div class="container">
            <div className="card card-custom">
              <div class="card-body">
                <!-- begin::Wrapper-->
                <div
                  class="d-flex w-100 justify-content-between align-items-center"
                >
                  <div class="d-flex flex-column">
                    <img
                      alt="Logo"
                      src="media/logos/logo.png"
                      class="w-200px"
                    />
                    <div class="text-muted">engenharia@tecnodesign-projetos.com.br</div>
                  </div>
                  <div class="d-flex flex-column">
                    <div
                      class="d-flex justify-content-between align-items-center mb-2"
                    >
                      <span class="text-success me-3 fs-3">
                        Orçamento
                      </span>
                      <span class="fs-3">
                        #{{ model.orcamento.numeroOrcamento }}
                      </span>
                    </div>
                    <div class="flex-root d-flex flex-column align-items-end">
                      <span class="fw-bold">Data do orçamento</span>
                      <span class="text-muted fs-5">{{
                        model.orcamento.criadoEm
                      }}</span>
                    </div>
                    <div class="flex-root d-flex flex-column align-items-end">
                      <span class="fw-bold">Elaborado por:</span>
                      <span class="text-muted fs-5">Pedro Henrique Stival</span>
                    </div>
                  </div>
                </div>
                <div
                  class="w-100 d-flex align-items-center justify-content-center"
                >
                  <div
                    class="image-input-wrapper w-300px h-300px"
                    :style="
                      `background-size: cover;background-image: url('${model.orcamento.imagem}')`
                    "
                  ></div>
                </div>
                <div class="d-flex flex-column align-items-start mt-20">
                  <div class="d-flex align-items-center">
                    <span class="text-primary fw-bolder fs-3 w-200px"
                      >Total com imposto:</span
                    >
                    <span class="fw-bolder fs-5">{{
                      model.orcamento.total
                    }}</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="text-primary fw-bolder fs-3 w-200px"
                      >Prazo de entrega:</span
                    >
                    <span class="fw-bolder fs-5"
                      >{{ model.orcamento.prazoEntrega }} dias</span
                    >
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="text-primary fw-bolder fs-3 w-200px"
                      >Forma de pagamento:</span
                    >
                    <span class="fw-bolder fs-5">{{
                      model.orcamento.formaPagamento
                    }}</span>
                  </div>
                </div>
                <div class="mb-10 mt-10 d-none">
                  <div class="row ">
                    <div
                      class="col-4 d-flex flex-column justify-content-center align-items-start"
                    >
                      <span class="text-primary fw-bolder fs-3"
                        >Total com imposto:
                      </span>
                      <div class="fs-3">
                        {{ model.orcamento.total }}
                      </div>
                    </div>
                    <div
                      class="col-4 d-flex flex-column justify-content-center align-items-center"
                    >
                      <span class="text-primary fw-bolder fs-3"
                        >Prazo de entrega:
                      </span>
                      <div class="fs-3">
                        {{ model.orcamento.prazoEntrega }} dias
                      </div>
                    </div>
                    <div
                      class="col-4 d-flex flex-column justify-content-center align-items-end"
                    >
                      <span class="text-primary fw-bolder fs-3"
                        >Forma de pagamento:
                      </span>
                      <div class="fs-3">
                        {{ model.orcamento.formaPagamento }} dias
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" style="margin-top: 50rem !important">
                  <div
                    class="col-4 d-flex flex-column"
                    v-for="grupo in model.orcamento.items"
                    :key="grupo.id"
                  >
                    <h3>{{ grupo.nomeGrupo }}</h3>
                    <div
                      class="fs-6 text-muted my-2"
                      v-for="item in grupo.items"
                      :key="item.id"
                    >
                      {{ item.descricao }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex w-100 justify-content-between align-items-center">
          <div class="d-flex flex-column">
            <img alt="Logo" src="media/logos/logo.png" class="w-300px" />
            <div class="text-muted" style="font-size:20px">
              Av Marechal floriano peixoto, 696 - Curitiba/PR
            </div>
            <div class="text-muted" style="font-size:20px">
              contato@tecnodesign.com
            </div>
          </div>
          <div class="d-flex flex-column">
            <div
              class="d-flex justify-content-between align-items-center mb-2 "
            >
              <span class="text-success me-2" style="font-size:26px">
                Orçamento
              </span>
              <span class="" style="font-size:22px">
                #{{ model.orcamento.numeroOrcamento }}
              </span>
            </div>
            <div class="flex-root d-flex flex-column align-items-end">
              <span class="fw-bold" style="font-size:20px"
                >Data do orçamento</span
              >
              <span class="text-muted" style="font-size:20px">{{
                model.orcamento.criadoEm
              }}</span>
            </div>
            <div class="flex-root d-flex flex-column align-items-end">
              <span class="fw-bold" style="font-size:20px">Elaborado por:</span>
              <span class="text-muted" style="font-size:20px"
                >Tecnodesign</span
              >
            </div>
          </div>
        </div>
        <div
          class="w-100 d-flex align-items-center justify-content-center my-20"
        >
          <div
            class="image-input-wrapper w-400px h-400px"
            :style="
              `background-size: cover;background-image: url('${model.orcamento.imagem}')`
            "
          ></div>
        </div>
        <div class="d-flex flex-column align-items-start mt-20">
          <div class="d-flex align-items-center">
            <span class="text-primary fw-bolder w-300px" style="font-size:26px"
              >Total com imposto:</span
            >
            <span class="fw-bolder" style="font-size:22px">{{
              model.orcamento.total
            }}</span>
          </div>
          <div class="d-flex align-items-center">
            <span class="text-primary fw-bolder w-300px" style="font-size:26px"
              >Prazo de entrega:</span
            >
            <span class="fw-bolder" style="font-size:22px"
              >{{ model.orcamento.prazoEntrega }} dias</span
            >
          </div>
          <div class="d-flex align-items-center">
            <span class="text-primary fw-bolder w-300px" style="font-size:26px"
              >Forma de pagamento:</span
            >
            <span class="fw-bolder" style="font-size:22px">{{
              model.orcamento.formaPagamento
            }}</span>
          </div>
        </div>
        <div class="mb-10 mt-10 d-none">
          <div class="row ">
            <div
              class="col-4 d-flex flex-column justify-content-center align-items-start"
            >
              <span class="text-primary fw-bolder fs-3"
                >Total com imposto:
              </span>
              <div class="fs-3">
                {{ model.orcamento.total }}
              </div>
            </div>
            <div
              class="col-4 d-flex flex-column justify-content-center align-items-center"
            >
              <span class="text-primary fw-bolder fs-3"
                >Prazo de entrega:
              </span>
              <div class="fs-3">{{ model.orcamento.prazoEntrega }} dias</div>
            </div>
            <div
              class="col-4 d-flex flex-column justify-content-center align-items-end"
            >
              <span class="text-primary fw-bolder fs-3"
                >Forma de pagamento:
              </span>
              <div class="fs-3">{{ model.orcamento.formaPagamento }} dias</div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 15rem !important">
          <div
            class="col-4 d-flex flex-column pb-5"
            v-for="grupo in model.orcamento.items"
            :key="grupo.id"
          >
            <span style="font-size: 18px">{{ grupo.nomeGrupo }}</span>
            <div
              class="fs-4 text-muted my-2"
              v-for="item in grupo.items"
              :key="item.id"
            >
              {{ item.descricao }}
            </div>
          </div>
        </div>
        <div class="row" v-if="model.orcamento.observacao.length > 0">
          <div class="col-12 d-flex flex-column pb-5">
            <span style="font-size: 18px">Observação</span>
            <div class="fs-4 text-muted my-2">
              {{ model.orcamento.observacao }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media print {
  .hidden-print {
    display: none;
  }
}
</style>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "orcamentoImpressao",
  setup() {
    const route = useRouter();
    const orcamentoId = route.currentRoute.value.params.orcamentoId;
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
        items: null,
        observacao: null
      }
    });

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const valor = computed(() => {
      return formatter.format(model.orcamento.valor);
    });

    ApiService.get(`orcamento/${orcamentoId}`).then(({ data }) => {
      model.orcamento = data;
    });

    const print = () => {
      window.print();
      return false;
    };

    return {
      model,
      formatter,
      valor,
      print
    };
  }
});
</script>
