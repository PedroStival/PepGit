<template>
  <main class="d-flex align-items-center justify-content-center">
    <div class="card card-custom gutter-b example example-compact w-100">
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bolder fs-3 mb-1">Novo orçamento</span>
        </h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Nº do Orçamento</span>
              </label>
              <!--end::Label-->
              <input
                type="text"
                class="form-control form-control-lg form-control-solid"
                placeholder=""
                v-model="cadastro.numeroOrcamento"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Projetista</span>
              </label>
              <!--end::Label-->
              <input
                type="text"
                name="vboProjetista"
                class="form-control form-control-lg form-control-solid"
                placeholder=""
                v-model="cadastro.projetista"
              />
            </div>
          </div>
        </div>
        <div class="row mt-15">
          <div class="col-12">
            <label class="form-label fs-4 fw-bolder text-primary mb-5"
              >Itens do orçamento:</label
            >
          </div>
          <div
            class="col-md-6 mb-3"
            v-for="(categoria, index) in listaCategoria"
            :key="index"
          >
            <label
              class="form-label fs-4 fw-bolder text-success mb-5 border-bottom border-success"
              >{{ categoria.nomeGrupo }}:</label
            >
            <div
              class="d-flex flex-stack mb-2"
              v-for="item in categoria.items"
              :key="item.id"
            >
              <div class="me-5">
                <label class="fs-6">{{ item.descricao }}</label>
              </div>
              <label
                class="form-check form-switch form-check-custom form-check-solid"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="0"
                  @change="addOrRemoveItem(item)"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="row mt-15">
          <div class="col-md-6">
            <label class="form-label fs-4 fw-bolder text-primary mb-5"
              >Informações do cliente:</label
            >
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Nome da empresa:</span>
              </label>
              <!--end::Label-->

              <input
                type="text"
                class="form-control form-control-lg form-control-solid"
                v-model="cadastro.nomeDaEmpresa"
              />
            </div>
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Contato</span>
              </label>
              <!--end::Label-->

              <input
                type="text"
                class="form-control form-control-lg form-control-solid"
                v-model="cadastro.contato"
              />
            </div>

            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>E-mail de contato</span>
              </label>
              <!--end::Label-->

              <input
                type="text"
                class="form-control form-control-lg form-control-solid"
                v-model="cadastro.emailContato"
              />
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <!-- <div class="d-flex flex-column mb-5 fv-row">
                <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                  <span>Observação</span>
                </label>

                <textarea
                  name="notes"
                  class="form-control form-control-solid"
                  rows="3"
                ></textarea>
              </div> -->
            <!--end::Input group-->
            <!--begin::Input group-->
            <!--end::Input group-->
          </div>
          <div class="col-md-6">
            <label class="form-label fs-4 fw-bolder text-primary mb-5"
              >Informações de pedido:</label
            >
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Prazo de entrega</span>
              </label>
              <!--end::Label-->
              <Field
                type="number"
                name="vboPrazoEntrega"
                class="form-control form-control-lg form-control-solid text-end"
                placeholder=""
                v-model="cadastro.prazoEntrega"
              />
            </div>

            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Valor</span>
              </label>
              <!--end::Label-->
              <Field
                type="number"
                name="vboValor"
                class="form-control form-control-lg form-control-solid text-end"
                placeholder=""
                v-model="cadastro.valor"
              />
            </div>

            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Valor do imposto:</span>
              </label>
              <!--end::Label-->
              <Field
                type="number"
                name="vboImposto"
                class="form-control form-control-lg form-control-solid text-end"
                placeholder=""
                v-model="cadastro.valorImposto"
              />
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Forma de pagamento</span>
              </label>
              <!--end::Label-->

              <textarea
                name="notes"
                class="form-control form-control-solid"
                rows="3"
                v-model="cadastro.formaPagamento"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-column">
          <div class="col-12">
            <label class="form-label fs-4 fw-bolder text-primary">Resumo</label>
          </div>
          <!--begin::Table-->
          <div class="table-responsive border-bottom mb-9">
            <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0">
              <tbody class="fw-bold text-gray-600">
                <!--begin::Products-->
                <tr v-for="categoria in listaCategoria" :key="categoria.id">
                  <!--begin::Product-->
                  <td v-if="getItemsSelecionados(categoria.id).length > 0">
                    <div class="d-flex align-items-center">
                      <div class="ms-5">
                        <div class="fw-bolder">{{ categoria.nome }}</div>
                        <div
                          class="fs-6 text-muted"
                          v-for="item in getItemsSelecionados(categoria.id)"
                          :key="item.id"
                        >
                          {{ item.descricao }}
                        </div>
                      </div>
                      <!--end::Title-->
                    </div>
                  </td>
                </tr>
                <!--end::Products-->
                <!--begin::Subtotal-->
                <tr>
                  <td colspan="3" class="text-end">Subtotal</td>
                  <td class="text-end min-w-100px mw-100px">{{ valor }}</td>
                </tr>
                <!--end::Subtotal-->
                <!--begin::VAT-->
                <tr>
                  <td colspan="3" class="text-end">Imposto</td>
                  <td class="text-end min-w-100px mw-100px">{{ imposto }}</td>
                </tr>
                <tr>
                  <td colspan="3" class="fs-3 text-dark fw-bolder text-end">
                    Total
                  </td>
                  <td
                    class="text-dark fs-3 fw-boldest text-end min-w-100px mw-100px"
                  >
                    {{ total }}
                  </td>
                </tr>

                <tr>
                  <td
                    colspan="4"
                    class="fs-3 text-dark fw-bolder text-end"
                  >
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="cadastrar"
                    >Criar orçamento</button>
                  </td>
                </tr>
                <!--end::Grand total-->
              </tbody>
            </table>
          </div>
          <!--end::Table-->
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import * as Yup from "yup";
import { Field } from "vee-validate";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "Orcamento",
  components: { Field },
  setup() {
    const valoresIniciais = {
      nome: null,
      valor: null,
      imposto: null
    };

    const listaCategoria = ref([]);
    const itemsSelecionados = ref<any>([]);
    const cadastro = ref<any>(JSON.parse(JSON.stringify(valoresIniciais)));

    const validacoes = Yup.object().shape({
      vboValor: Yup.number()
        .nullable()
        .required()
        .label("Valor"),
      vboImposto: Yup.number()
        .nullable()
        .required()
        .label("Imposto")
    });

    

    onMounted(() => {
      ApiService.get("item/listar/1").then(({ data }) => {
        listaCategoria.value = data;
      });
    });

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const valor = computed(() => {
      return formatter.format(cadastro.value.valor);
    });

    const imposto = computed(() => {
      return formatter.format(cadastro.value.valorImposto);
    });

    const total = computed(() => {
      let valor = parseFloat(cadastro.value.valor);
      let imposto = parseFloat(cadastro.value.valorImposto);

      if (isNaN(valor)) valor = 0;

      if (isNaN(imposto)) imposto = 0;

      return formatter.format(valor + imposto);
    });

    const addOrRemoveItem = item => {
      if (itemsSelecionados.value.indexOf(item) > -1) {
        itemsSelecionados.value.splice(
          itemsSelecionados.value.indexOf(item),
          1
        );
      } else {
        itemsSelecionados.value.push(item);
      }
    };

    const getItemsSelecionados = id => {
      return itemsSelecionados.value.filter(function(obj) {
        if (obj.tipo == id) return obj;
      });
    };

    const cadastrar = () => {

      cadastro.value.items = itemsSelecionados.value.map(function(obj){
        return {
          itemId: obj.id,
          descricao: obj.descricao
        }
      });

      ApiService.post("orcamento/registrar", cadastro.value).then(({data}) => {
        console.log(data);
      })
       .catch(({ response }) => {
        console.log(response);
      })
    };

    return {
      Field,
      cadastro,
      listaCategoria,
      addOrRemoveItem,
      getItemsSelecionados,
      validacoes,
      valor,
      imposto,
      total,
      cadastrar
    };
  }
});
</script>
