<template>
    <div style="width:100%; max-width: 800px; margin-left:auto; margin-right:auto">
    <div class="w-100 mw-1000 d-flex bg-secondary">
        <div class="flex-shrink-1 border-primary" style="width:33%"></div>
        <div class="w-100 d-flex flex-column align-items-center p-2 border border-dark border-top-0 border-bottom-0">
            <h2>MANUAL DA QUALIDADE</h2>
            <h2>SGQ - SISTEMA DE GESTÃO DA QUALIDADE</h2>
        </div>
        <div class="flex-shrink-1 d-flex flex-column justify-content-center" style="width:33%">
            <div class="px-2">
                <span>CÓDIGO: MQ</span>
            </div>
            <div class="px-2 py-1 border border-dark border-left-0 border-right-0">
                <span>VERSÃO: 01</span>
            </div>
            <div class="px-2">
                <span>DATA: 01/10/2022</span>
            </div>
        </div>
    </div>
    <div v-for="capitulo in auditoria" :key="capitulo.id">
        <div class="w-100 d-flex align-items-center bg-primary text-white mb-3">
            <span class="text-uppercase align-self-center p-2">CAPÍTULO {{capitulo.numero}} - {{capitulo.titulo}}</span>
        </div>
        <div v-for="item in capitulo.items" :key="item.id">
            <div class="w-100 d-flex align-items-center bg-secondary text-dark">
                <span class="text-uppercase p-2">{{capitulo.numero}}.{{item.numero}} {{item.titulo}}</span>
            </div>
            <div class="w-100 text-center py-5">
                <span>{{item.resposta}}</span>
            </div>
            <div v-for="subitem in item.subItems" :key="subitem.id" style="margin-left:25px">
                <div class="w-100 d-flex align-items-center bg-secondary text-dark">
                    <span class="text-uppercase p-2">{{capitulo.numero}}.{{item.numero}}.{{subitem.numero}} - {{subitem.titulo}}</span>
                </div>
                <div class="w-100 text-center py-5">
                    <span>{{subitem.resposta}}</span>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>

</style>

<script lang="ts">

interface AuditoriaInterna {
    id: string;
    capitulo: string;
    capituloId: string;
    item: string;
    itemId: string;
    conforme: boolean;
    titulo:string;
}

interface SubItem {
  id: string;
  capitulo: number;
  item: number;
  itemId: string;
  capituloId: string;
  titulo: string;
  norma: string;
  numero: number;
  ok: boolean;
  resposta: string;
  auditoriaInterna: Array<AuditoriaInterna>;
}

interface Item {
  id: string;
  capitulo: number;
  capituloId: string;
  titulo: string;
  norma: string;
  numero: number;
  ok: boolean;
  resposta: string;
  subItems: Array<SubItem>;
  auditoriaInterna: Array<AuditoriaInterna>;
}

interface Capitulo {
  id: string;
  numero: number;
  ok: boolean;
  items: Array<Item>;
}

import { defineComponent, ref, computed } from "vue";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";


export default defineComponent({
  name: "Manual",
  components: { },
  setup() {
    const route = useRouter();
    const auditoria = ref<Array<Capitulo>>();

    const empresaId = route.currentRoute.value.params.empresaId;
    ApiService.get("manual-auditoria/" + empresaId).then(({ data }) => {
      auditoria.value = data;
    });

    return {auditoria};
  }
});
</script>
