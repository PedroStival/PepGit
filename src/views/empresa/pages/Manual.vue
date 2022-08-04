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
            <div class="w-100 d-flex align-items-center bg-secondary text-dark" v-if="item.ok">
                <span class="text-uppercase p-2">{{capitulo.numero}}.{{item.numero}} {{item.titulo}}</span>
            </div>
            <div class="w-100 text-center py-5" v-if="item.ok">
                <div v-if="capitulo.numero == 4 && item.numero == 1" class="w-100 d-flex justify-content-center align-items-center">
                    <table>
                        <thead>
                            <th></th>
                            <th><div class="swot-topo bg-secondary">Fatores Positivos</div></th>
                            <th><div class="swot-topo bg-secondary">Fatores Negativos</div></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><div class="swot-topo bg-secondary" style="writing-mode: vertical-rl;">Fatores Internos</div></td>
                                <td>
                                    <div>Strengths</div>
                                    <ul class="list-group list-group-flush m-3 border border-secondary">
                                        <li class="list-group-item d-flex justify-content-between" v-for="(t, index) in strengths" :key="index">
                                            <span>{{t}}</span>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <div>Weakness</div>
                                    <ul class="list-group list-group-flush m-3 border border-secondary">
                                        <li class="list-group-item d-flex justify-content-between" v-for="(t, index) in weaknesses" :key="index">
                                            <span>{{t}}</span>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><div class="swot-topo bg-secondary" style="writing-mode: vertical-rl;">Fatores Externos</div></td>
                                <td>
                                    <div>Oportunities</div>
                                    <ul class="list-group list-group-flush m-3 border border-secondary">
                                        <li class="list-group-item d-flex justify-content-between" v-for="(t, index) in opportunities" :key="index">
                                            <span>{{t}}</span>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <div>Threats</div>
                                    <ul class="list-group list-group-flush m-3 border border-secondary">
                                        <li class="list-group-item d-flex justify-content-between" v-for="(t, index) in threats" :key="index">
                                            <span>{{t}}</span>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="capitulo.numero == 4 && item.numero == 2">
                    <table class="table mb-3">
                        <thead>
                            <th><div class="parte-interessada-topo bg-secondary">Parte interessada</div></th>
                            <th><div class="parte-interessada-topo bg-secondary">Expectativas</div></th>
                            <th><div class="parte-interessada-topo bg-secondary">Métodos para atender as expectativas</div></th>
                        </thead>
                        <tbody>
                            <tr v-for="(parte, index) in partesInteressadas" :key="index" style="border-bottom:solid 1px #cecece;">
                                <td>{{parte.nome}}</td>
                                <td>{{parte.expectativa}}</td>
                                <td>{{parte.metodo}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="capitulo.numero == 4 && item.numero == 4">
                    <img :src="sistemaGestao.imagem" class="max-w-100" />
                </div>
                <div v-if="capitulo.numero == 7 && item.numero == 4">
                    <table class="table mb-3">
                        <thead>
                            <th><div class="parte-interessada-topo bg-secondary">Parte interessada</div></th>
                            <th><div class="parte-interessada-topo bg-secondary">Responsável</div></th>
                            <th><div class="parte-interessada-topo bg-secondary">Conteúdo/Temas</div></th>
                            <th><div class="parte-interessada-topo bg-secondary">Quando/Periocidade</div></th>
                            <th><div class="parte-interessada-topo bg-secondary">Método/Ferramentas</div></th>
                        </thead>
                        <tbody>
                            <tr v-for="(c, index) in comunicacao" :key="index" style="border-bottom:solid 1px #cecece;">
                                <td>{{c.parteInteressada}}</td>
                                <td>{{c.responsavel}}</td>
                                <td>{{c.conteudo}}</td>
                                <td>{{c.quando}}</td>
                                <td>{{c.metodo}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span>{{item.resposta}}</span>
            </div>
            <div v-for="subitem in item.subItems" :key="subitem.id" style="margin-left:25px">
                <div class="w-100 d-flex align-items-center bg-secondary text-dark" v-if="subitem.ok">
                    <span class="text-uppercase p-2">{{capitulo.numero}}.{{item.numero}}.{{subitem.numero}} - {{subitem.titulo}}</span>
                </div>
                <div class="w-100 text-center py-5" v-if="subitem.ok">
                    <span>{{subitem.resposta}}</span>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
 .swot-topo {
    padding: 12px;
    border-radius: 20px;
    margin-right: 12px;
 }

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

interface ParteInteressada {
  nome: string;
  expectativa: string;
  metodo: string;
}

interface Comunicacao {
  parteInteressada: string;
  responsavel: string;
  conteudo: string;
  quando: string;
  metodo: string;
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
    const strengths = ref<Array<string>>([]);
    const weaknesses = ref<Array<string>>([]);
    const opportunities = ref<Array<string>>([]);
    const threats = ref<Array<string>>([]);
    const partesInteressadas = ref<Array<ParteInteressada>>([]);
    const comunicacao = ref<Array<Comunicacao>>([]);
    const sistemaGestao = ref({
        imagem: null
    });

    const empresaId = route.currentRoute.value.params.empresaId;
    ApiService.get("manual-auditoria/" + empresaId).then(({ data }) => {
      auditoria.value = data.capitulos;
      if (data.swot) {
        strengths.value = data.swot.strengths;
        weaknesses.value = data.swot.weaknesses;
        opportunities.value = data.swot.opportunities;
        threats.value = data.swot.threats;
      }
      if (data.parteInteressada) {
        partesInteressadas.value = data.parteInteressada;
      }
      if (data.comunicacao) {
        comunicacao.value = data.comunicacao
      }
      if (data.sistemaGestao && data.sistemaGestao.length > 0 ) {
        sistemaGestao.value.imagem = data.sistemaGestao
      }
    });

    return {auditoria,comunicacao,partesInteressadas, strengths, weaknesses, opportunities, threats, sistemaGestao};
  }
});
</script>
