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
                v-model="cadastro.numero"
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
              >{{ categoria.nome }}:</label
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
                v-model="cadastro.imposto"
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
import { defineComponent, ref, computed } from "vue";
import * as Yup from "yup";
import { Field } from "vee-validate";

export default defineComponent({
  name: "Orcamento",
  components: { Field },
  setup() {
    const valoresIniciais = {
      nome: null,
      valor: null,
      imposto: null
    };
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

    const listaCategoria = [
      {
        id: 1,
        nome: "Forma construtiva",
        items: [
          {
            id: 1,
            categoriaId: 1,
            descricao: "Padrão polimod"
          },
          {
            id: 2,
            categoriaId: 1,
            descricao: "Monobloco cavidades direto nas placas P1 e P2"
          },
          {
            id: 3,
            categoriaId: 1,
            descricao: "Cavidades postiçadas e alojadas nas placas P1 e P2"
          },
          {
            id: 4,
            categoriaId: 1,
            descricao: "Conceito do molde com terceira placa"
          },
          {
            id: 5,
            categoriaId: 1,
            descricao: "Molde especial dimensões das placas conforme solicitação do cliente"
          }
        ]
      },
      {
        id: 2,
        nome: "Elementos móveis",
        items: [
          {
            id: 101,
            categoriaId: 2,
            descricao: "Gavetas"
          },
          {
            id: 102,
            categoriaId: 2,
            descricao: "Gavetas acionadas por cilindro hidráulico"
          },
          {
            id: 103,
            categoriaId: 2,
            descricao: "Mandíbulas"
          },
          {
            id: 104,
            categoriaId: 2,
            descricao: "Mandíbulas (LOUCA)"
          },
          {
            id: 105,
            categoriaId: 2,
            descricao: "Pinças flexíveis"
          },
          {
            id: 106,
            categoriaId: 2,
            descricao: "Macho roscado - Acionamento por motor hidráulico"
          },
          {
            id: 107,
            categoriaId: 2,
            descricao: "Macho roscado - Acionamento por motor hidráulico + engrenagem e cremalheira"
          },
          {
            id: 108,
            categoriaId: 2,
            descricao: "Macho colapsivo"
          }
        ]
      },
      {
        id: 3,
        nome: "Elementos de centralização",
        items: [
          {
            id: 201,
            categoriaId: 3,
            descricao: "Centralizador paralelo"
          },
          {
            id: 202,
            categoriaId: 3,
            descricao: "Centralizador cônico"
          },
          {
            id: 203,
            categoriaId: 3,
            descricao: "Travamento em ângulo na região das colunas direto nas placas P1 e P2"
          },
          {
            id: 204,
            categoriaId: 3,
            descricao: "Travamento em ângulo na região das colunas com postiços temperados"
          },
          {
            id: 204,
            categoriaId: 3,
            descricao: "Placas de balanceamento e distribuição de carga nas faces das placas P1 e P2"
          }
        ]
      },
      {
        id: 4,
        nome: "Sistema de injeção",
        items: [
          {
            id: 301,
            categoriaId: 4,
            descricao: "Canal frio - Direto no produto (Corte manual e deixar uma marca no produto)"
          },
          {
            id: 302,
            categoriaId: 4,
            descricao: "Canal frio - Com ponto de injeção tipo SUBMARINO (deixar uma marca no produto)"
          },
          {
            id: 303,
            categoriaId: 4,
            descricao: "Canal frio - Com ponto de injeção tipo SUBMARINO injetando pelas gavetas (deixar uma marca no produto)"
          },
          {
            id: 304,
            categoriaId: 4,
            descricao: "Canal frio - Com ponto de injeção tipo UNHA DE GATO (deixar uma marca por baixo no produto)"
          },
          {
            id: 305,
            categoriaId: 4,
            descricao: "Canal frio - Com ponto de injeção tipo RESTRITA (Corte manual e deixar uma marca no produto)"
          },
          {
            id: 306,
            categoriaId: 4,
            descricao: "Canal frio - Com ponto de injeção tipo LEQUE (Corte manual e deixar uma marca no produto)"
          },
          {
            id: 307,
            categoriaId: 4,
            descricao: "Canal frio - Com ponto de injeção tipo CAPILAR (Rompe automaticamente e deixar uma pequena marca no produto)"
          },
          {
            id: 308,
            categoriaId: 4,
            descricao: "Câmara quente sobre canal frio com ponto de injeção tipo CAPILAR (Rompe automaticamente e deixar uma pequena marca no produto)"
          },
          {
            id: 309,
            categoriaId: 4,
            descricao: "Câmara quente sobre canal frio com ponto de injeção tipo SUBMARINO injetado pelas gavetas (Deixar uma marca no produto)"
          },
          {
            id: 310,
            categoriaId: 4,
            descricao: "Bico quente sobre canal frio com ponto de injeção tipo CAPILAR (Rompe automaticamente e deixar uma pequena marca no produto)"
          },
          {
            id: 311,
            categoriaId: 4,
            descricao: "Bico quente sobre canal frio com ponto de injeção tipo SUBMARINO injetado pelas gavetas (Deixar uma marca no produto)"
          }
        ]
      },
      {
        id: 5,
        nome: "Sistema de extração",
        items: [
          {
            id: 401,
            categoriaId: 5,
            descricao: "Extratores cilindricos"
          },
          {
            id: 402,
            categoriaId: 5,
            descricao: "Bucha extratora"
          },
          {
            id: 403,
            categoriaId: 5,
            descricao: "Lâminas extratoras"
          },
          {
            id: 404,
            categoriaId: 5,
            descricao: "Réguas ou postiços"
          },
          {
            id: 405,
            categoriaId: 5,
            descricao: "Por placa"
          },
          {
            id: 406,
            categoriaId: 5,
            descricao: "Com acelerador (PLUS)"
          },
          {
            id: 407,
            categoriaId: 5,
            descricao: "Extração forçada"
          },
          {
            id: 408,
            categoriaId: 5,
            descricao: "Cilindro hidráulico para acionar o conjunto de extração"
          },
          {
            id: 409,
            categoriaId: 5,
            descricao: "Extração pelo lado da injeção"
          },
          {
            id: 410,
            categoriaId: 5,
            descricao: "Sistema de dupla extração"
          },
          {
            id: 411,
            categoriaId: 5,
            descricao: "Puxador tipo garra mecânica"
          },
          {
            id: 412,
            categoriaId: 5,
            descricao: "Válvula de ar"
          }
        ]
      },
      {
        id: 6,
        nome: "Sistema de segurança",
        items: [
          {
            id: 501,
            categoriaId: 6,
            descricao: "Roscas para movimentação em todas as placas acima de 12KG - 02 Roscas em cada lateral da placa - 08 Roscas no total"
          },
          {
            id: 502,
            categoriaId: 6,
            descricao: "Sistema de segurança - Retorno mecânico do conjunto extrator"
          },
          {
            id: 503,
            categoriaId: 6,
            descricao: "Sistema de segurança - Sensor de posição de avanço e recuo do conjunto extrator"
          }
        ]
      },
      {
        id: 7,
        nome: "Sistema de refrigeração",
        items: [
          {
            id: 601,
            categoriaId: 7,
            descricao: "Padrão da rosca dos plugs - 1/4 NPT"
          },
          {
            id: 602,
            categoriaId: 76,
            descricao: "Padrão da rosca dos plugs - 1/4 BSP"
          },
          {
            id: 603,
            categoriaId: 7,
            descricao: 'Manifold de distribuição de refrigeração com plug de 1"'
          },
          {
            id: 604,
            categoriaId: 7,
            descricao: 'Mandíbula refrigerada'
          },
          {
            id: 605,
            categoriaId: 7,
            descricao: 'Gaveta refrigerada'
          },
          {
            id: 606,
            categoriaId: 7,
            descricao: 'Macho interno fixado e refrigerado a partir da placa base inferior'
          },
          {
            id: 607,
            categoriaId: 7,
            descricao: 'Macho interno refrigerado a partir da placa base inferior porém com placa porta macho'
          },
          {
            id: 608,
            categoriaId: 7,
            descricao: 'Entradas e saídas identificadas com gravação'
          },
          {
            id: 609,
            categoriaId: 7,
            descricao: 'Entradas e saídas identificadas com gravação e com plugs de cores diferentes'
          },
          {
            id: 610,
            categoriaId: 7,
            descricao: 'Entradas e saídas identificadas com gravação e com plugs e mangueiras de cores diferentes'
          }
        ]
      },
      {
        id: 8,
        nome: "Material à ser injetado",
        items: [
          {
            id: 701,
            categoriaId: 8,
            descricao: "ABS"
          },
          {
            id: 702,
            categoriaId: 8,
            descricao: "Polipropileno copolimero"
          },
          {
            id: 703,
            categoriaId: 8,
            descricao: 'PEAD'
          },
          {
            id: 704,
            categoriaId: 8,
            descricao: 'PEBD'
          },
          {
            id: 705,
            categoriaId: 8,
            descricao: 'Nylon PA6'
          },
          {
            id: 706,
            categoriaId: 8,
            descricao: 'Nylon PA66'
          },
          {
            id: 707,
            categoriaId: 8,
            descricao: 'Poliacetal'
          },
          {
            id: 708,
            categoriaId: 8,
            descricao: 'PMMA'
          },
          {
            id: 709,
            categoriaId: 8,
            descricao: 'Nylon PA66 com 15% de FV'
          },
          {
            id: 710,
            categoriaId: 8,
            descricao: 'Nylon PA66 com 20% de FV'
          },
          {
            id: 710,
            categoriaId: 8,
            descricao: 'Nylon PA66 com 30% de FV'
          }
        ]
      }
    ];

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const valor = computed(() => {
      return formatter.format(cadastro.value.valor);
    });

    const imposto = computed(() => {
      return formatter.format(cadastro.value.imposto);
    });

    const total = computed(() => {
      let valor = parseFloat(cadastro.value.valor);
      let imposto = parseFloat(cadastro.value.imposto);

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
        if (obj.categoriaId == id) return obj;
      });
    };

    const cadastrar = () => {
      return false;
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
