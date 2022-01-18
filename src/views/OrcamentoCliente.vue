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
                    class="d-flex justify-content-between flex-column flex-sm-row mb-19"
                  >
                    <div class="d-flex flex-column">
                      <h2 class="text-success pe-5 pb-7">
                        Orçamento
                      </h2>
                      <div class="fs-4 mb-5">
                        #O.T.001_2022
                      </div>
                      <div class="fw-bolder fs-4">
                        Empresa do cliente
                      </div>
                      <div class="fs-5">
                        Pedro Henrique Stival
                        <span class="fs-6 text-muted">(pedro@gmail.com)</span>
                      </div>
                    </div>

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
                      <div class="text-sm-end fw-bold fs-4 text-muted mt-7">
                        <span class="text-muted">Elaborado por: </span
                        ><span class="fw-bolder">Pedro Henrique Stival</span>
                        <div class="flex-root d-flex flex-column mt-5 mb-5">
                          <span class="text-muted">Data do orçamento</span>
                          <span class="fs-5">5 de Janeiro de 2022</span>
                        </div>
                        <div>
                          Av Marechal floriano peixoto, 696 - Curitiba/PR
                        </div>
                        <div>contato@tecnodesign.com</div>
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
                      <div class="row mb-10 mt-10">
                        <div class="col-4 d-flex flex-column justify-content-center align-items-start">
                          <span class="text-primary fw-bolder fs-3">Total com imposto: </span>
                          <div class="fs-3">
                            R$5.000,00
                          </div>
                        </div>
                        <div class="col-4 d-flex flex-column justify-content-center align-items-center">
                          <span class="text-primary fw-bolder">Prazo de entrega: </span>
                          <div class="fs-3">
                            25 dias
                          </div>
                        </div>
                        <div class="col-4 d-flex flex-column justify-content-center align-items-end">
                          <div class="flex-root d-flex flex-column text-end fs-3">
                            <span class="text-primary fw-bolder">Forma de pagamento</span>
                            <span class="fs-5"
                              >40% de entrada - R$400,00
                              <br />
                              30% em 28 dias - R$300,00
                              <br />
                              30% em 42 dias - R$300,00</span
                            >
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
                      <!--end::Billing & shipping-->
                      <!--begin:Order summary-->
                      <div class="separator"></div>
                      <div class="d-flex justify-content-between flex-column mt-10">
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
                              <tr>
                                <!--begin::Product-->
                                <td>
                                  <div class="d-flex align-items-center">
                                    <div class="ms-5">
                                      <div class="fw-bolder">
                                        Forma construtiva
                                      </div>
                                      <div class="fs-6 text-muted">
                                        Monobloco cavidades direto nas placas P1
                                        e P2
                                      </div>
                                      <div class="fs-6 text-muted">
                                        Conceito do molde com terceira placa
                                      </div>
                                      <div class="fs-6 text-muted">
                                        Molde especial dimensões das placas
                                        conforme solicitação do cliente
                                      </div>
                                    </div>
                                    <!--end::Title-->
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <!--begin::Product-->
                                <td>
                                  <div class="d-flex align-items-center">
                                    <div class="ms-5">
                                      <div class="fw-bolder">
                                        Elementos móveis
                                      </div>
                                      <div class="fs-6 text-muted">
                                        Gavetas acionadas por cilindro
                                        hidráulico
                                      </div>
                                    </div>
                                    <!--end::Title-->
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <!--begin::Product-->
                                <td>
                                  <div class="d-flex align-items-center">
                                    <div class="ms-5">
                                      <div class="fw-bolder">
                                        Sistema de injeção
                                      </div>
                                      <div class="fs-6 text-muted">
                                        Canal frio - Com ponto de injeção tipo
                                        UNHA DE GATO (deixar uma marca por baixo
                                        no produto)
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
import { defineComponent, reactive } from "vue";
import { saveToken } from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";
import { ElementAnimateUtil } from "@/assets/ts/_utils/ElementAnimateUtil";

export default defineComponent({
  name: "orcamentoCliente",
  setup() {
    const route = useRouter();
    const laudoId = route.currentRoute.value.params.laudoId;
    const model = reactive({
      laudo: {
        marca: null,
        modelo: null,
        quilometragem: null,
        anoFabricacao: null,
        anoModelo: null,
        chassi: null,
        placa: null,
        items: [],
        evidencias: [],
        documentos: []
      }
    });

    const isImage = fileUrl => {
      const imgExtensions = ["jpg", "png", "jpeg", "bmp"];
      const videoExtensions = ["mkv", "mp4", "webm"];
      const lastDot = fileUrl.lastIndexOf(".");

      const ext = fileUrl.substring(lastDot + 1);

      if (imgExtensions.includes(ext)) {
        return true;
      } else {
        return false;
      }
    };

    const removeWhiteSpace = text => {
      return text?.replace(" ", "");
    };

    const goToMensagemProblema = item => {
      ElementAnimateUtil.scrollTo(
        document.getElementById(removeWhiteSpace(item)),
        24
      );
    };

    const getItemsOk = list => {
      if (!list) return;
      return list.filter(x => {
        return x.positivo === true;
      }).length;
    };

    const getCategoriaComProblema = list => {
      if (!list) return;
      return list.filter(x => {
        return x.items.some(y => y.positivo === false);
      });
    };

    const getItemsComProblema = list => {
      if (!list) return;
      return list.filter(x => {
        return x.positivo === false;
      });
    };

    const compare = (a, b) => {
      if (a["ordem"] < b["ordem"]) {
        return -1;
      }
      if (a["ordem"] > b["ordem"]) {
        return 1;
      }
      return 0;
    };

    const getImagensCategoria = categoria => {
      return model.laudo.evidencias
        .filter(x => {
          return x["categoria"] == categoria;
        })
        .map(x => {
          return x;
        })
        .sort(compare);
    };

    const getTextoCorreto = categoria => {
      let palavra = categoria;
      switch (categoria) {
        case "ConservacaoInterna":
          palavra = "Conservação Interna";
          break;
        case "ConservacaoExterna":
          palavra = "Conservação Externa";
          break;
        case "Identificacao":
          palavra = "Identificação";
          break;
        case "Perifericos":
          palavra = "Periféricos";
          break;
        default:
          break;
      }
      return palavra;
    };

    ApiService.get(`laudo/${laudoId}`).then(({ data }) => {
      model.laudo = data;
    });

    return {
      model,
      isImage,
      getItemsOk,
      getCategoriaComProblema,
      getItemsComProblema,
      getImagensCategoria,
      goToMensagemProblema,
      removeWhiteSpace,
      getTextoCorreto
    };
  }
});
</script>
