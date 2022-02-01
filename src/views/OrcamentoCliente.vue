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
                <div class="mw-lg-950px mx-auto w-100">
                  <!-- begin::Header-->
                  <div
                    class="d-flex justify-content-between flex-column flex-sm-row mb-19 "
                  >
                    <div class="d-flex flex-column">
                      <div class="text-sm-end d-block d-md-none mb-10">
                        <!--begin::Logo-->
                        <a href="#" class="ms-sm-auto ">
                          <img
                            alt="Logo"
                            src="media/logos/logo.png"
                            class="w-200px" />
                        </a>
                        <!--end::Logo-->
                        <!--begin::Text-->
                        <div class="text-sm-end fs-4 mt-7 w-100">
                          <span class="fw-bold ">Elaborado por: </span>
                          <br />
                          <span class="text-muted">Pedro Henrique Stival</span>
                          <div class="flex-root d-flex flex-column mt-5 mb-5">
                            <span class="fw-bold">Data do orçamento</span>
                            <span class="text-muted fs-5">{{ model.orcamento.criadoEm }}</span>
                          </div>
                          <div class="text-muted">
                            Av Marechal floriano peixoto, 696 - Curitiba/PR
                          </div>
                          <div class="text-muted">contato@tecnodesign.com</div>
                        </div>
                        <!--end::Text-->
                      </div>
                      <h2 class="text-success pe-5 pb-2">
                        Orçamento
                      </h2>
                      <div class="fs-4 mb-5">
                        {{ model.orcamento.numeroOrcamento }}
                      </div>
                      <div class="fw-bolder fs-4">
                        {{ model.orcamento.nomeDaEmpresa }}
                      </div>
                      <div class="fs-5">
                        {{ model.orcamento.contato }}
                        <span class="fs-6 text-muted">({{ model.orcamento.emailContato }})</span>
                      </div>
                    </div>

                    <!--end::Logo-->
                    <div class="text-sm-end d-none d-md-block ">
                      <!--begin::Logo-->
                      <a href="#" class=" ms-sm-auto ">
                        <img
                          alt="Logo"
                          src="media/logos/logo.png"
                          class="w-200px"
                        />
                      </a>
                      <!--end::Logo-->
                      <!--begin::Text-->
                      <div class="text-sm-end fs-4  mt-7">
                        <span class="fw-bold">Elaborado por: </span>
                        <br />
                        <span class="text-muted">Pedro Henrique Stival</span>
                        <div class="flex-root d-flex flex-column mt-5 mb-5">
                          <span class="fw-bold">Data do orçamento</span>
                          <span class="fs-5 text-muted">{{ model.orcamento.criadoEm }}</span>
                        </div>
                        <div class="text-muted">
                          Av Marechal floriano peixoto, 696 - Curitiba/PR
                        </div>
                        <div class="text-muted">contato@tecnodesign.com</div>
                      </div>
                      <!--end::Text-->
                    </div>
                  </div>
                  <!--end::Header-->
                  <!--begin::Body-->
                  <div class="pb-12">
                    <!--begin::Wrapper-->
                    <div class="separator"></div>
                    <div class="d-flex flex-column">
                      <!--end::Order details-->
                      <!--begin::Billing & shipping-->
                      <div class="d-none d-md-block mb-10 mt-10 ">
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

                          <!-- <div class="flex-root d-flex flex-column">
                                <span class="text-muted">Shipping Address</span>
                                <span class="fs-6">Unit 1/23 Hastings Road,
                                <br>Melbourne 3000,
                                <br>Victoria,
                                <br>Australia.</span>
                              </div> -->
                        </div>
                      </div>
                      <div class="d-block d-md-none mb-10 mt-10">
                        <div class="row">
                          <div
                            class="col-12 d-flex flex-column justify-content-center align-items-center my-5"
                          >
                            <span class="text-primary fw-bolder fs-3"
                              >Prazo de entrega:
                            </span>
                            <div class="fs-3">
                              {{ model.orcamento.prazoEntrega }} dias
                            </div>
                          </div>

                          <div
                            class="col-12 d-flex flex-column justify-content-center align-items-center my-5"
                          >
                            <span class="text-primary fw-bolder fs-3"
                              >Total com imposto:
                            </span>
                            <div class="fs-3">
                              {{ model.orcamento.total }}
                            </div>
                          </div>

                          <div
                            class="col-12 d-flex flex-column justify-content-center align-items-center my-5"
                          >

                              <span class="text-primary fw-bolder fs-3"
                                >Forma de pagamento</span
                              >
                              <span class="fs-3">
                                {{ model.orcamento.formaPagamento }}
                              </span>
                            </div>
                         

                          <!-- <div class="flex-root d-flex flex-column">
                                <span class="text-muted">Shipping Address</span>
                                <span class="fs-6">Unit 1/23 Hastings Road,
                                <br>Melbourne 3000,
                                <br>Victoria,
                                <br>Australia.</span>
                              </div> -->
                        </div>
                      </div>
                      <!--end::Billing & shipping-->
                      <!--begin:Order summary-->
                      <div class="separator"></div>
                      <div
                        class="d-flex justify-content-between flex-column mt-10"
                      >
                        <div class="col-12">
                          <label class="form-label fs-3 fw-bolder text-primary"
                            >Resumo</label
                          >
                        </div>
                        <!--begin::Table-->
                        <div class="table-responsive border-bottom mb-9">
                          <table
                            class="table align-middle table-row-dashed fs-6 gy-5 mb-0"
                          >
                            <tbody class="fw-bold text-gray-600">
                              <!--begin::Products-->
                              <tr
                                v-for="grupo in model.orcamento.items"
                                :key="grupo.id"
                              >
                                <!--begin::Product-->
                                <td>
                                  <div class="d-flex align-items-center">
                                    <div class="ms-5">
                                      <div class="fw-bolder">
                                        {{ grupo.nomeGrupo }}
                                      </div>
                                      <div
                                        class="fs-6 text-muted my-2"
                                        v-for="item in grupo.items"
                                        :key="item.id"
                                      >
                                        {{ item.descricao }}
                                      </div>
                                    </div>
                                    <!--end::Title-->
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--end::Table-->
                      </div>
                      <!--end:Order summary-->
                    </div>
                    <!--end::Wrapper-->
                  </div>
                  <!--end::Body-->
                  <!-- begin::Footer-->
                  <!-- end::Footer-->
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
import { computed, defineComponent, reactive } from "vue";
import { saveToken } from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";
import { ElementAnimateUtil } from "@/assets/ts/_utils/ElementAnimateUtil";

export default defineComponent({
  name: "orcamentoCliente",
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

    ApiService.get(`orcamento/${orcamentoId}`).then(({ data }) => {
      model.orcamento = data;
    });

    return {
      model,
      formatter,
      valor
    };
  }
});
</script>
