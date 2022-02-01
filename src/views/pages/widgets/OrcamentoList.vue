<template>
  <div id="style-4">
    <div class="card">
      <!--begin::Header-->
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bolder fs-3 mb-1">Orçamentos</span>
        </h3>

        <div
          class="card-toolbar"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-trigger="hover"
          title="Click to add a user"
        >
          <router-link
            class="btn btn-sm btn-light-primary"
            :to="{ name: 'Orcamento' }"
          >
            <span class="svg-icon svg-icon-3">
              <inline-svg src="media/icons/duotone/General/Bookmark.svg" />
            </span>
            Novo orçamento
          </router-link>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body py-3">
        <!--begin::Table container-->
        <div class="table-responsive">
          <!--begin::Table-->
          <table
            class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
          >
            <!--begin::Table head-->
            <thead>
              <tr class="fw-bolder text-muted">
                <th class="min-w-100px">Nº Orçamento</th>
                <th class="min-w-150px">Cliente</th>
                <th class="min-w-140px">Projeto</th>
                <th class="min-w-140px">Criado</th>
                <th class="min-w-140px">Prazo</th>
                <th class="min-w-120px d-none d-md-block">Progresso</th>
                <th class="min-w-100px text-end">Ações</th>
              </tr>
            </thead>
            <!--end::Table head-->

            <!--begin::Table body-->
            <tbody>
              <template v-for="(item, index) in orcamentos" :key="index">
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      {{ item.numeroOrcamento }}
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column">
                        <a
                          href="#"
                          class="text-dark fw-bolder text-hover-primary fs-6"
                          >{{ item.nomeDaEmpresa }}</a
                        >

                        <span
                          class="text-muted fw-bold text-muted d-block fs-7"
                          >{{ item.emailContato }}</span
                        >
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-dark fw-bolder text-hover-primary d-block fs-6"
                      >{{ item.projeto }}</a
                    >
                    <span class="text-muted fw-bold text-muted d-block fs-7">Projetista: {{ item.projetista }}</span>
                  </td>
                  <td>
                    <span class="text-dark fw-bolder text-hover-primary d-block fs-6">{{ item.criadoEm }}</span>
                  </td>
                  <td>
                    <span class="text-dark fw-bolder text-hover-primary d-block fs-6">{{ item.prazoEntrega }} dias</span> 
                  </td>
                  <td class="text-end d-none d-md-block">
                    <div class="d-flex flex-column w-100 me-2">
                      <div class="d-flex flex-stack mb-2">
                        <span class="text-muted me-2 fs-7 fw-bold">
                          {{ item.progresso }}%
                        </span>
                      </div>

                      <div class="progress h-6px w-100">
                        <div
                          class="progress-bar"
                          style="background-image: linear-gradient(to right, #6444C4, #00BBFF);"
                          role="progressbar"
                          :style="{ width: item.progresso + '%' }"
                          :aria-valuenow="item.progresso"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <router-link
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                      target="_blank"
                      :to="{ name: 'orcamento-cliente', params: { orcamentoId: item.id } }"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotone/General/Binocular.svg"
                        />
                      </span>
                    </router-link>
                    <!-- <a
                      target="_blank"
                      :href="'orcamento-cliente/' + item.id"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotone/General/Binocular.svg"
                        />
                      </span>
                    </a> -->
                     <router-link
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                      target="_blank"
                      :to="{ name: 'projeto-check', params: { orcamentoId: item.id } }"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotone/Communication/Write.svg"
                        />
                      </span>
                    </router-link>

                    <a
                      href="#"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg src="media/icons/duotone/General/Trash.svg" />
                      </span>
                    </a>
                  </td>
                </tr>
              </template>
            </tbody>
            <!--end::Table body-->
          </table>
          <!--end::Table-->
        </div>
        <!--end::Table container-->
      </div>
      <!--begin::Body-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "OrcamentoList",
  components: { RouterLink },
  props: {
    orcamentos: Array
  }
});
</script>
