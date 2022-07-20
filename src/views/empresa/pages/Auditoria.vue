<template>
  <div class="card">
    <div class="card-header border-0 py-2">
      <h3 class="card-title fw-bolder">Auditoria</h3>
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
                        <span class="titulo">{{item.capitulo}}.{{item.numero}} - {{item.titulo}}</span>
                        <div style="width: 10px; height:10px; border-radius: 10px" :class="item.ok ? 'bg-success' : 'bg-danger'"></div>
                    </div>
                    <div class="d-flex flex-column w-100 my-2 " style="border-radius:10px; cursor: pointer; padding-left: 12px;" v-if="item.subItems && item.subItems.length > 0">
                        <div v-for="i in item.subItems" :key="i.numero" class="d-flex justify-content-between align-items-center my-2">
                            <span class="titulo">{{i.capitulo}}.{{i.item}}.{{i.numero}} - {{i.titulo}}</span>
                            <div style="width: 10px; height:10px; border-radius: 10px" :class="i.ok ? 'bg-success' : 'bg-danger'"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column w-100">
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="itemSelecionado != null && itemSelecionado.norma">
                    <span class="titulo-resposta">{{itemSelecionado.capitulo}}.{{itemSelecionado.numero}} - {{itemSelecionado.titulo}}</span>
                    <div class="p-5 rounded bg-light-primary text-dark fw-semobold mb-2" data-kt-element="message-text"><span v-html="itemSelecionado.norma"></span></div>
                    <label>Resposta: </label>
                    <textarea rows="6" style="w-100"></textarea>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-sm btn-info">Anexar documentos</button>
                        <button class="btn btn-sm btn-info" data-bs-toggle="modal"
                                    data-bs-target="#auditoria_interna_popup" v-if="itemSelecionado.auditoriaInterna != null && itemSelecionado.auditoriaInterna.length > 0" @click="abrirAuditoriaInterna(item)">Auditoria interna</button>
                        <button class="btn btn-sm btn-primary">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px"  v-for="subItem in listaSubItems" :key="subItem.numero">
                    <span class="titulo-resposta">{{subItem.capitulo}}.{{subItem.item}}.{{subItem.numero}} - {{subItem.titulo}}</span>
                    <div class="p-5 rounded bg-light-primary text-dark fw-semobold mb-2" data-kt-element="message-text">
                        <span v-html="subItem.norma"></span>
                    </div>
                    <label>Resposta: </label>
                    <textarea rows="6" style="w-100"></textarea>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-sm btn-info">Anexar documentos</button>
                        <button class="btn btn-sm btn-info" data-bs-toggle="modal"
                                    data-bs-target="#auditoria_interna_popup" v-if="subItem.auditoriaInterna != null && subItem.auditoriaInterna.length > 0" @click="abrirAuditoriaInterna(subItem)">Auditoria interna</button>
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
}

interface Item {
  id: string;
  capitulo: number;
  capituloId: string;
  titulo: string;
  norma: string;
  numero: number;
  ok: boolean;
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


export default defineComponent({
  name: "Auditoria",
  components: { AuditoriaInternaPopup },
  setup() {

    const listaItems = ref([]);
    const itemSelecionado = ref(null);
    const listaSubItems = ref([]);
    const auditoriaInterna = ref([]);
     const modal = ref<HTMLElement | null>(null);
    const auditoria = ref<Array<Capitulo>>();

    ApiService.get("manual-auditoria").then(({ data }) => {
      auditoria.value = data;
    });


    const selecionarCapitulo = (capitulo) => {
        listaItems.value = []
        listaItems.value = capitulo.items;
    } 

    const selecionarItem = (item) => {
        itemSelecionado.value = item;
        listaSubItems.value = []
        listaSubItems.value = item.subItems;
    }

    const abrirAuditoriaInterna = (item) => {
        auditoriaInterna.value = item.auditoriaInterna
        console.log(item.auditoriaInterna);
    }

    const closeAuditoriaInterna = () => {
      auditoriaInterna.value = [];
    };

    const contarItemsOk = (capitulo) => {
        const sum = capitulo.items.reduce((accumulator, object) => {
            if (object.ok == true) {
                return accumulator + 1
            } else {
                return accumulator
            }
        }, 0);
        return (sum * 100) / capitulo.items.length;
    }

    return {auditoria, selecionarCapitulo, selecionarItem, listaItems, listaSubItems, itemSelecionado, contarItemsOk,auditoriaInterna, abrirAuditoriaInterna};
  }
});
</script>
