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
                    Orçamento #21342
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
                  <div class="col-12 mb-3">
                    <label class="form-label fs-4 fw-bolder text-success mb-5"
                      >Forma construtiva:</label
                    >
                    <div class="d-flex flex-stack mb-2">
                      <div class="me-5">
                        <label class="fs-6">Padrão polimold</label>
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="0"
                        />
                      </label>
                    </div>

                    <div class="d-flex flex-stack mb-2">
                      <div class="me-5">
                        <label class="fs-6"
                          >Cavidades postiçadas e alojadas nas placas P1 e
                          P2</label
                        >
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="0"
                        />
                      </label>
                    </div>

                    <div class="d-flex flex-stack mb-2">
                      <div class="me-5">
                        <label class="fs-6"
                          >Conceito do molde com terceira placa</label
                        >
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="0"
                        />
                      </label>
                    </div>
                  </div>

                  <div class="col-12 mb-3">
                    <label class="form-label fs-4 fw-bolder text-success mb-5"
                      >Elementos de centralização:</label
                    >
                    <div class="d-flex flex-stack mb-2">
                      <div class="me-5">
                        <label class="fs-6">Centralizador paralelo</label>
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="0"
                        />
                      </label>
                    </div>

                    <div class="d-flex flex-stack mb-2">
                      <div class="me-5">
                        <label class="fs-6">Centralizador cônico</label>
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="0"
                        />
                      </label>
                    </div>

                    <div class="d-flex flex-stack mb-2">
                      <div class="me-5">
                        <label class="fs-6"
                          >Travamento em ângulo na região das colunas direto nas
                          placas P1 e P2</label
                        >
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="0"
                        />
                      </label>
                    </div>

                    <div class="d-flex flex-stack mb-2">
                      <div class="me-5">
                        <label class="fs-6"
                          >Travamento em ângulo na região das colunas com
                          postiços temperados</label
                        >
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="0"
                        />
                      </label>
                    </div>

                    <div class="d-flex flex-stack mb-2">
                      <div class="me-5">
                        <label class="fs-6"
                          >Placas de balanceamento e distribuição de carga nas
                          faces das placas P1 e P2</label
                        >
                      </div>
                      <label
                        class="form-check form-switch form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="d-flex flex-column w-100 me-2">
                    <div class="d-flex flex-stack mb-2">
                      <span class="text-muted me-2 fs-7 fw-bold">
                        25%
                      </span>
                    </div>

                    <div class="progress h-6px w-100">
                      <div
                        class="progress-bar"
                        style="background-image: linear-gradient(to right, #6444C4, #00BBFF);"
                        role="progressbar"
                        :style="{ width: 25 + '%' }"
                        :aria-valuenow="25"
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
import { defineComponent, reactive } from "vue";
import { saveToken } from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";
import { ElementAnimateUtil } from "@/assets/ts/_utils/ElementAnimateUtil";

export default defineComponent({
  name: "projetoCheck",
  setup() {
    const route = useRouter();
    return {};
  }
});
</script>
