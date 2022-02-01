<template>
  <div className="row">
    <div className="col-lg-12 mb-20">
      <OrcamentoList :orcamentos="orcamentos" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import OrcamentoList from "@/views/pages/widgets/OrcamentoList.vue";

import { saveToken } from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "Dashboard",
  components: { OrcamentoList },
  setup() {
    const orcamentos = ref([]);

    onMounted(() => {
      ApiService.get("orcamento/listar").then(({ data }) => {
        orcamentos.value = data;
      });
    });

    return {
      OrcamentoList,
      orcamentos
    };
  }
});
</script>
