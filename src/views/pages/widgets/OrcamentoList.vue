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
                <th class="min-w-140px">Data entrega</th>
                <th class="min-w-120px d-none d-md-block">Progresso</th>
                <th class="min-w-100px text-end">Ações</th>
              </tr>
            </thead>
            <!--end::Table head-->

            <!--begin::Table body-->
            <tbody>
              <template v-for="(item, index) in list" :key="index">
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      {{ item.numero }}
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column">
                        <a
                          href="#"
                          class="text-dark fw-bolder text-hover-primary fs-6"
                          >{{ item.nome }}</a
                        >

                        <span
                          class="text-muted fw-bold text-muted d-block fs-7"
                          >{{ item.email }}</span
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
                    <span class="text-dark fw-bolder text-hover-primary d-block fs-6">19/01/2022</span>
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
                    <a
                      href="#"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotone/General/Binocular.svg"
                        />
                      </span>
                    </a>

                    <a
                      href="#"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotone/Communication/Write.svg"
                        />
                      </span>
                    </a>

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
  components: { },
  props: {
    orcamentos: Array
  },
  setup() {
        const list = [
      {
        numero: "O.T.001_2022",
        nome: "Cliente 1",
        email: "cliente1@gmail.com",
        telefone: "(41) 99953-3553",
        projeto: "Molde de injeção",
        projetista: "João da silva",
        color: "primary",
        progresso: 25
      },
      {
        numero: "O.T.001_2022",
        nome: "Cliente 2",
        email: "cliente2@gmail.com",
        telefone: "(41) 99975-4758",
        projeto: "Estampos",
        projetista: "Kleber Oliveira",
        color: "primary",
        progresso: 50
      },
      {
        numero: "O.T.001_2022",
        nome: "Cliente 3",
        email: "cliente3@gmail.com",
        telefone: "(41) 98877-7881",
        projeto: "Estampos",
        projetista: "João da silva",
        color: "primary",
        progresso: 75
      },
      {
        numero: "O.T.001_2022",
        nome: "Cliente 4",
        email: "cliente4@gmail.com",
        telefone: "(41) 99995-2748",
        projeto: "Molde de injeção",
        projetista: "Fernanda Gentil",
        color: "success",
        progresso: 100
      }
    ];
    return {
      list
    };
  }
});
</script>
