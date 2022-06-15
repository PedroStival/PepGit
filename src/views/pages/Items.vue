<template>
  <main class="d-flex align-items-center justify-content-center">
    <div class="card card-custom gutter-b example example-compact w-100">
      <div class="card-body">
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
            <div class="d-flex flex-stack mb-2">
              <input type="text" class="form-control form-control-solid me-3"
              :ref="
                  el => {
                    inputs.push(el);
                  }
                ">
              <button class="btn btn-primary" @click="cadastrar(categoria.nomeGrupo, categoria.grupoId, index)"
              >Adicionar</button>
            </div>
            <div
              class="d-flex flex-stack mb-2"
              v-for="(item, itemIndex) in categoria.items"
              :key="item.id"
            >
              <div class="me-5 d-flex align-items-center justify-content-between w-100">
                <label class="fs-6">{{ item.descricao }}</label>
                <button class="btn btn-sm btn-secondary" @click="excluir(categoria.grupoId, itemIndex, item.id)"
              ><span><i class="fa fa-trash"></i></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Field } from "vee-validate";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Items",
  components: {},
  setup() {
    const inputs = ref<any>([]);
    const router = useRouter();
    const tipoId = router.currentRoute.value.params.tipoId;
    const listaCategoria = ref<any>([]);
    const btnCriar = ref<HTMLButtonElement>();

    onMounted(() => {
      ApiService.get(`item/listar/${tipoId}`).then(({ data }) => {
        listaCategoria.value = data;
      });
    });

    const excluir = (grupoId, index, id) => {
       ApiService.delete("/item/excluir/" + id)
        .then(({ data }) => {
          listaCategoria.value[grupoId - 1].items.splice(index, 1);
        })
        .catch((resp) => {
          console.log(resp);
        });
    }

    const cadastrar = (nomeGrupo, grupoId, index) => {
      const item = inputs.value[index].value;
      const request = {
        grupoId: grupoId,
        descricao: item,
        nomeGrupo: nomeGrupo,
        tipo: tipoId
      };

      ApiService.post("item", request)
        .then(({ data }) => {
          console.log(data);
          listaCategoria.value[index].items.push(data);
        })
        .catch((resp) => {
          console.log(resp);
        });
    };

    return {
      Field,
      listaCategoria,
      cadastrar,
      btnCriar,
      inputs,
      excluir
    };
  }
});
</script>
