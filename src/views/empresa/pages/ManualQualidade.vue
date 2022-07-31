<template>
  <div class="card">
    <div class="card-header border-0 py-2">
      <h3 class="card-title fw-bolder">Manual da Qualidade</h3>
    </div>
    <div class="card-body">
        <div class="d-flex flex-column justify-items-center align-items-start">
            <div style="padding: 12px; border-radius: 5px;" class="d-flex w-100 bg-light">
                <div @click="selecionarCapitulo(x)" v-for="x in auditoria" :key="x.numero" style="border: solid 1px #cecece; padding: 12px; border-radius: 10px; cursor: pointer" class="d-flex flex-column me-2 bg-white">
                    <span>Capitulo {{ x.numero }}</span>
                    <div class="w-100 border" :class="x.ok ? 'border-success' : 'border-danger'" style="height: 15px;">
                        <div  :class="x.ok ? 'bg-success' : 'bg-danger'" style="height: 100%; color: #fff; font-size:10px; text-align: right;" :style="`width:${contarItemsOk(x)}%`">{{contarItemsOk(x)}}%</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex mt-3">
            <div class="w-300px bg-light px-2" style="border-radius: 5px;">
                <div v-for="item in listaItems" :key="item.numero" class="d-flex flex-column w-100 border p-2 my-2 bg-white" style="border-radius:10px; cursor: pointer;" @click="selecionarItem(item)">
                    <div class="d-flex justify-content-between align-items-center" >
                        <span class="titulo text-uppercase">{{item.capitulo}}.{{item.numero}} - {{item.titulo}}</span>
                        <div style="width: 10px; height:10px; border-radius: 10px" :class="item.ok ? 'bg-success' : 'bg-danger'"></div>
                    </div>
                    <div class="d-flex flex-column w-100 my-2 " style="border-radius:10px; cursor: pointer; padding-left: 12px;" v-if="item.subItems && item.subItems.length > 0">
                        <div v-for="i in item.subItems" :key="i.numero" class="d-flex justify-content-between align-items-center my-2">
                            <span class="titulo text-uppercase">{{i.capitulo}}.{{i.item}}.{{i.numero}} - {{i.titulo}}</span>
                            <div style="width: 10px; height:10px; border-radius: 10px" :class="i.ok ? 'bg-success' : 'bg-danger'"></div>
                        </div>
                    </div>
                </div>
                <div v-if="capituloSelecionado && capituloSelecionado.numero == 2">
                    <div class="d-flex flex-column w-100 border p-2 my-2 bg-white" style="border-radius:10px; cursor: pointer;">
                        <div class="d-flex justify-content-between align-items-center" >
                            <span class="titulo text-uppercase">2 - REFERÊNCIAS NORMATIVAS</span>
                        </div>
                    </div>
                </div>
                <div v-if="capituloSelecionado && capituloSelecionado.numero == 3">
                    <div class="d-flex flex-column w-100 border p-2 my-2 bg-white" style="border-radius:10px; cursor: pointer;">
                        <div class="d-flex justify-content-between align-items-center" >
                            <span class="titulo text-uppercase">3 - TERMOS E DEFINIÇÕES</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column w-100">
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="itemSelecionado != null">
                    <span class="titulo-resposta">{{itemSelecionado.capitulo}}.{{itemSelecionado.numero}} - {{itemSelecionado.titulo}}</span>
                    <div class="p-5 rounded bg-secondary text-dark fw-semobold mb-2" data-kt-element="message-text" v-if="itemSelecionado.norma">
                        <p>Recorte da ISO9001:2015:</p>
                        <span v-html="itemSelecionado.norma"></span>
                    </div>
                    <label>Resposta: </label>
                    <textarea :rows="6" style="w-100" v-model="itemSelecionado.resposta"></textarea>
                    <div class="d-flex justify-content-between mt-3">
                        <div>
                            <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                            <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#auditoria_interna_popup" v-if="itemSelecionado.auditoriaInterna != null && itemSelecionado.auditoriaInterna.length > 0" @click="abrirAuditoriaInterna(itemSelecionado)">Auditoria interna</button>
                        </div>
                        <button class="btn btn-sm btn-primary" @click="salvarRespostaItem">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px"  v-for="subItem in listaSubItems" :key="subItem.numero">
                    <span class="titulo-resposta text-uppercase">{{subItem.capitulo}}.{{subItem.item}}.{{subItem.numero}} - {{subItem.titulo}}</span>
                    <div class="p-5 rounded bg-secondary text-dark fw-semobold mb-2" data-kt-element="message-text" v-if="itemSelecionado && itemSelecionado.norma">
                        <p>Recorte da ISO9001:2015:</p>
                        "<span v-html="itemSelecionado.norma"></span>"
                    </div>
                    <label>Resposta: </label>
                    <textarea :rows="6" style="w-100" v-model="subItem.resposta"></textarea>
                    <div class="d-flex justify-content-between mt-3">
                        <div>
                        <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                        <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                    data-bs-target="#auditoria_interna_popup" v-if="subItem.auditoriaInterna != null && subItem.auditoriaInterna.length > 0" @click="abrirAuditoriaInterna(subItem)">Auditoria interna</button>
                        </div>
                        <button class="btn btn-sm btn-primary" @click="salvarRespostaSubItem(subItem)">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="capituloSelecionado && capituloSelecionado.numero == 2">
                    <span class="titulo-resposta text-uppercase">2 - REFERÊNCIAS NORMATIVAS</span>
                    <div class="form-check form-check-solid form-switch fv-row">
                                    <input
                                        class="form-check-input form-input-sm"
                                        type="checkbox"
                                        id="capitulo2"
                                    />
                                    <label class="form-check-label" for="capitulo2">Habilitar resposta?</label>
                                </div>
                    <label>Resposta: </label>
                    <textarea :rows="6" style="w-100"></textarea>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                        <button class="btn btn-sm btn-primary">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="capituloSelecionado && capituloSelecionado.numero == 3">
                    <span class="titulo-resposta text-uppercase">3 - TERMOS E DEFINIÇÕES</span>
                    <div class="form-check form-check-solid form-switch fv-row">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="capitulo3"
                                    />
                                    <label class="form-check-label" for="capitulo3">Habilitar resposta?</label>
                                </div>
                    <label>Resposta: </label>
                    <textarea :rows="6" style="w-100"></textarea>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                        <button class="btn btn-sm btn-primary">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  </div>
  <AuditoriaInternaPopup :listaAuditoria="auditoriaInterna" @close="closeAuditoriaInterna" />
</template>
<style>
    .titulo {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 200px
    }

    .titulo-resposta {
        font-size: 16px;
    padding: 10px 0;
    font-weight: bold;
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

import { defineComponent, ref, computed } from "vue";
import AuditoriaInternaPopup from "@/views/empresa/pages/Widget/AuditoriaInternaPopup.vue"
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";


export default defineComponent({
  name: "ManualQualidade",
  components: { AuditoriaInternaPopup },
  setup() {
    const route = useRouter();
    const listaItems = ref<Array<Item>>([]);
    const capituloSelecionado = ref();
    const itemSelecionado = ref<Item | null>(null);
    const listaSubItems = ref<Array<SubItem>>([]);
    const auditoriaInterna = ref([]);
    const modal = ref<HTMLElement | null>(null);
    const auditoria = ref<Array<Capitulo>>();

    const empresaId = route.currentRoute.value.params.empresaId;
    ApiService.get("manual-auditoria/" + empresaId).then(({ data }) => {
      auditoria.value = data;
    });

    const salvarRespostaItem = () => {
        const data = {
            empresaId: empresaId,
            itemId: itemSelecionado.value?.id,
            resposta: itemSelecionado.value?.resposta
        }
        ApiService.post("manual-auditoria/resposta", data).then(({ data }) => {
            auditoria.value = data;
        });
    }

    const salvarRespostaSubItem = (subItem) => {
        const data = {
            empresaId: empresaId,
            subItemId: subItem.id,
            resposta: subItem.resposta
        }
        ApiService.post("manual-auditoria/resposta", data).then(({ data }) => {
            auditoria.value = data;
        });
    }

    const selecionarCapitulo = (capitulo) => {
        capituloSelecionado.value = capitulo;
        listaItems.value = []
        listaItems.value = capitulo.items;
        itemSelecionado.value = null;
        listaSubItems.value = [];
    } 

    const selecionarItem = (item) => {
        itemSelecionado.value = item;
        listaSubItems.value = []
        listaSubItems.value = item.subItems;
    }

    const abrirAuditoriaInterna = (item) => {
        if (item.auditoriaInterna) {
            auditoriaInterna.value = item.auditoriaInterna
        } else {
            auditoriaInterna.value = [];
        }
    }

    const closeAuditoriaInterna = () => {
      auditoriaInterna.value = [];
    };

    const contarItemsOk = (capitulo) => {
        if (capitulo.items.length == 0) return 0;
        const sum = capitulo.items.reduce((accumulator, object) => {
            if (object.ok == true) {
                return accumulator + 1
            } else {
                return accumulator
            }
        }, 0);
        return (sum * 100) / capitulo.items.length;
    }

    return {auditoria,capituloSelecionado, selecionarCapitulo, selecionarItem,salvarRespostaItem,salvarRespostaSubItem, listaItems, listaSubItems, itemSelecionado, contarItemsOk,auditoriaInterna, abrirAuditoriaInterna, closeAuditoriaInterna};
  }
});
</script>
