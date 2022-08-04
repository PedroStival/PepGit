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
                    <div class="w-100 border" :class="x.ok ? 'border-success' : 'border-warning'" style="height: 15px;" v-if="contarItemsOk(x) > 0 || (x.numero == 2 || x.numero == 3) ">
                        <div  :class="x.ok ? 'bg-success' : 'bg-warning'" style="height: 100%; color: #fff; font-size:8px; text-align: right;" :style="`width:${contarItemsOk(x)}%`">{{contarItemsOk(x)}}%</div>
                    </div>
                    <div v-else>
                    <span class="text-danger">À fazer</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex mt-3">
            <div class="w-500px bg-light px-2" style="border-radius: 5px;">
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
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="itemSelecionado != null && !(itemSelecionado.capitulo == 4 && (itemSelecionado.numero == 1 || itemSelecionado.numero == 2 || itemSelecionado.numero == 4)) && !(itemSelecionado.capitulo == 7 && itemSelecionado.numero == 4)">
                    <span class="titulo-resposta text-uppercase">{{itemSelecionado.capitulo}}.{{itemSelecionado.numero}} - {{itemSelecionado.titulo}}</span>
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
                                        v-model="capitulo2.ativo"
                                    />
                                    <label class="form-check-label" for="capitulo2">Habilitar resposta?</label>
                                </div>
                     <div class="alert alert-warning my-3">
                        Caso esteja desativado a mensagem padrão será <br />
                        "Este Manual foi concebido seguindo as diretrizes de Referências Normativas da ISO9001:2015."
                    </div>
                    <label v-if="capitulo2.ativo == true">Resposta: </label>
                    <textarea :rows="6" style="w-100" v-model="capitulo2.texto" v-if="capitulo2.ativo == true"></textarea>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                        <button class="btn btn-sm btn-primary" @click="salvarCapitulo(capitulo2)">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="capituloSelecionado && capituloSelecionado.numero == 3">
                    <span class="titulo-resposta text-uppercase">3 - TERMOS E DEFINIÇÕES</span>
                    <div class="form-check form-check-solid form-switch fv-row">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="capitulo3"
                                        v-model="capitulo3.ativo"
                                    />
                                    <label class="form-check-label" for="capitulo3">Habilitar resposta?</label>
                                </div>
                    <div class="alert alert-warning my-3">
                        Caso esteja desativado a mensagem padrão será <br />
                        "Este Manual foi concebido seguindo as diretrizes de Termos e Definições da ISO9001:2015."
                    </div> 
                    <label v-if="capitulo3.ativo == true">Resposta: </label>
                    <textarea :rows="6" style="w-100" v-model="capitulo3.texto" v-if="capitulo3.ativo == true"></textarea>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                        <button class="btn btn-sm btn-primary" @click="salvarCapitulo(capitulo3)">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="itemSelecionado != null && itemSelecionado.capitulo == 4 && itemSelecionado.numero == 1">
                    <span class="titulo-resposta text-uppercase">{{itemSelecionado.capitulo}}.{{itemSelecionado.numero}} - {{itemSelecionado.titulo}}</span>
                    <div class="p-5 rounded bg-secondary text-dark fw-semobold mb-2" data-kt-element="message-text" v-if="itemSelecionado.norma">
                        <p>Recorte da ISO9001:2015:</p>
                        <span v-html="itemSelecionado.norma"></span>
                    </div>
                    <label>Resposta: </label>
                    <div class="w-100 px-2">
                        <div class="row">
                            <div class="border col-3 min-h-100px py-2 d-flex flex-column">
                                <h5 class="text-center">Strengths</h5>
                                <ul class="list-group list-group-flush min-h-100px m-3 border border-secondary flex-fill">
                                    <li class="list-group-item d-flex justify-content-between" v-for="(s, index) in strengths" :key="index">
                                        <span>{{s}}</span>
                                        <div class="deleteSwot" @click="deleteSwot(strengths, index)"></div>
                                    </li>
                                </ul>
                                <div class="w-100 d-flex">
                                    <input class="form-control form-control-sm me-2" v-model="ns" />
                                    <button class="btn btn-sm btn-info" @click="addSWOT(strengths, ns); ns = ''">Add</button>
                                </div>
                            </div>
                            <div class="border col-3 min-h-100px py-2 d-flex flex-column">
                                <h5 class="text-center">Weaknesses</h5>
                                <ul class="list-group list-group-flush min-h-100px m-3 border border-secondary flex-fill">
                                    <li class="list-group-item d-flex justify-content-between" v-for="(w, index) in weaknesses" :key="index">
                                        <span>{{w}}</span>
                                        <div class="deleteSwot" @click="deleteSwot(weaknesses, index)"></div>
                                    </li>
                                </ul>
                                <div class="w-100 d-flex">
                                    <input class="form-control form-control-sm me-2" v-model="nw" />
                                    <button class="btn btn-sm btn-info" @click="addSWOT(weaknesses, nw); nw = ''">Add</button>
                                </div>
                            </div>
                            <div class="border col-3 min-h-100px py-2 d-flex flex-column">
                                <h5 class="text-center">Opportunities</h5>
                                <ul class="list-group list-group-flush min-h-100px m-3 border border-secondary flex-fill">
                                    <li class="list-group-item d-flex justify-content-between" v-for="(o, index) in opportunities" :key="index">
                                        <span>{{o}}</span>
                                        <div class="deleteSwot" @click="deleteSwot(opportunities, index)"></div>
                                    </li>
                                </ul>
                                <div class="w-100 d-flex">
                                    <input class="form-control form-control-sm me-2" v-model="no" />
                                    <button class="btn btn-sm btn-info" @click="addSWOT(opportunities, no); no = ''">Add</button>
                                </div>
                            </div>
                            <div class="border col-3 min-h-100px py-2 d-flex flex-column">
                                <h5 class="text-center">Threats</h5>
                                <ul class="list-group list-group-flush min-h-100px m-3 border border-secondary flex-fill">
                                    <li class="list-group-item d-flex justify-content-between" v-for="(t, index) in threats" :key="index">
                                        <span>{{t}}</span>
                                        <div class="deleteSwot" @click="deleteSwot(threats, index)"></div>
                                    </li>
                                </ul>
                                <div class="w-100 d-flex">
                                    <input class="form-control form-control-sm me-2" v-model="nt" />
                                    <button class="btn btn-sm btn-info" @click="addSWOT(threats, nt); nt = ''">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <div>
                            <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                            <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#auditoria_interna_popup" v-if="itemSelecionado.auditoriaInterna != null && itemSelecionado.auditoriaInterna.length > 0" @click="abrirAuditoriaInterna(itemSelecionado)">Auditoria interna</button>
                        </div>
                        <button class="btn btn-sm btn-primary" @click="salvarSWOT">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="itemSelecionado != null && itemSelecionado.capitulo == 4 && itemSelecionado.numero == 2">
                    <span class="titulo-resposta text-uppercase">{{itemSelecionado.capitulo}}.{{itemSelecionado.numero}} - {{itemSelecionado.titulo}}</span>
                    <div class="p-5 rounded bg-secondary text-dark fw-semobold mb-2" data-kt-element="message-text" v-if="itemSelecionado.norma">
                        <p>Recorte da ISO9001:2015:</p>
                        <span v-html="itemSelecionado.norma"></span>
                    </div>
                    <label>Resposta: </label>
                    <div class="w-100 px-2 d-flex flex-column justify-content-center align-items-center">
                        <table class="table mb-3">
                            <thead>
                                <th><div class="parte-interessada-topo bg-secondary">Parte interessada</div></th>
                                <th><div class="parte-interessada-topo bg-secondary">Expectativas</div></th>
                                <th><div class="parte-interessada-topo bg-secondary">Métodos para atender as expectativas</div></th>
                            </thead>
                            <tbody>
                                <tr v-for="(parte, index) in partesInteressadas" :key="index" style="border-bottom:solid 1px #cecece;">
                                    <td><div class="d-flex justify-content-between w-100"><span>{{parte.nome}}</span> </div></td>
                                    <td><div class="d-flex justify-content-between w-100"><span>{{parte.expectativa}}</span></div></td>
                                    <td><div class="d-flex justify-content-between w-100"><span>{{parte.metodo}}</span> <div class="deleteSwot" @click="deleteParteInteressada(index)"></div></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="w-100 d-flex">
                            <input class="form-control form-control-sm me-2" placeholder="Parte interessada" v-model="novaParte.nome" />
                            <input class="form-control form-control-sm me-2" placeholder="Expectativa" v-model="novaParte.expectativa" />
                            <input class="form-control form-control-sm me-2" placeholder="Método para atender" v-model="novaParte.metodo" />
                            <button class="btn btn-sm btn-info" @click="addParteInteressada(novaParte); novaParte = {}">Add</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <div>
                            <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                            <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#auditoria_interna_popup" v-if="itemSelecionado.auditoriaInterna != null && itemSelecionado.auditoriaInterna.length > 0" @click="abrirAuditoriaInterna(itemSelecionado)">Auditoria interna</button>
                        </div>
                        <button class="btn btn-sm btn-primary" @click="salvarParteInteressada">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="itemSelecionado != null && itemSelecionado.capitulo == 4 && itemSelecionado.numero == 4">
                    <span class="titulo-resposta text-uppercase">{{itemSelecionado.capitulo}}.{{itemSelecionado.numero}} - {{itemSelecionado.titulo}}</span>
                    <div class="p-5 rounded bg-secondary text-dark fw-semobold mb-2" data-kt-element="message-text" v-if="itemSelecionado.norma">
                        <p>Recorte da ISO9001:2015:</p>
                        <span v-html="itemSelecionado.norma"></span>
                    </div>
                    <label>Resposta: </label>
                    <textarea :rows="6" style="w-100" v-model="itemSelecionado.resposta"></textarea>
                    <div class="alert alert-warning my-3">
                        Adicione a imagem do fluxo no quadro abaixo!
                    </div>
                    <div
                        class="image-input image-input-outline"
                        data-kt-image-input="true"
                        style="background-image: url(media/avatars/blank.png)"
                    >
                    <!--begin::Preview existing avatar-->
                    <div
                        class="image-input-wrapper w-100 mh-200px"
                        style="min-width: 200px"
                        :style="`background-image: url('${sistemaGestao.imagem !== null ? sistemaGestao.imagem : previewImage}')`"
                    ></div>
                    <!--end::Preview existing avatar-->

                    <!--begin::Label-->
                    <label
                        class="
                        btn btn-icon btn-circle btn-active-color-primary
                        w-25px
                        h-25px
                        bg-white
                        shadow
                        "
                        data-kt-image-input-action="change"
                        data-bs-toggle="tooltip"
                        title="Change avatar"
                    >
                        <i class="bi bi-pencil-fill fs-7"></i>

                        <!--begin::Inputs-->
                        <input
                            type="file"
                            name="avatar"
                            @change="onFileAdd"
                            accept=".png, .jpg, .jpeg"
                            ref="imagem"
                        />
                        <input type="hidden" name="avatar_remove" />
                        <!--end::Inputs-->
                    </label>
                    <!--end::Label-->

                    <!--begin::Remove-->
                    <span
                        class="
                        btn btn-icon btn-circle btn-active-color-primary
                        w-25px
                        h-25px
                        bg-white
                        shadow
                        "
                        data-kt-image-input-action="remove"
                        data-bs-toggle="tooltip"
                        @click="removeImage()"
                        title="Remove avatar"
                    >
                    <i class="bi bi-x fs-2"></i>
                  </span>
                  <!--end::Remove-->
                </div>
                    <div class="d-flex justify-content-between mt-3">
                        <div>
                            <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                            <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#auditoria_interna_popup" v-if="itemSelecionado.auditoriaInterna != null && itemSelecionado.auditoriaInterna.length > 0" @click="abrirAuditoriaInterna(itemSelecionado)">Auditoria interna</button>
                        </div>
                        <button class="btn btn-sm btn-primary" @click="salvarSistemaGestao">Salvar</button>
                    </div>
                </div>
                <div class="d-flex flex-column bg-light p-2 w-100 mb-3" style="margin-left: 10px; border-radius:10px" v-if="itemSelecionado != null && itemSelecionado.capitulo == 7 && itemSelecionado.numero == 4">
                    <span class="titulo-resposta text-uppercase">{{itemSelecionado.capitulo}}.{{itemSelecionado.numero}} - {{itemSelecionado.titulo}}</span>
                    <div class="p-5 rounded bg-secondary text-dark fw-semobold mb-2" data-kt-element="message-text" v-if="itemSelecionado.norma">
                        <p>Recorte da ISO9001:2015:</p>
                        <span v-html="itemSelecionado.norma"></span>
                    </div>
                    <label>Resposta: </label>
                    <div class="w-100 px-2 d-flex flex-column justify-content-center align-items-center">
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
                                    <td><div class="d-flex justify-content-between w-100"><span>{{c.parteInteressada}}</span> </div></td>
                                    <td><div class="d-flex justify-content-between w-100"><span>{{c.responsavel}}</span> </div></td>
                                    <td><div class="d-flex justify-content-between w-100"><span>{{c.conteudo}}</span> </div></td>
                                    <td><div class="d-flex justify-content-between w-100"><span>{{c.quando}}</span> </div></td>
                                    <td><div class="d-flex justify-content-between w-100"><span>{{c.metodo}}</span> </div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="w-100 d-flex">
                            <!-- <input class="form-control form-control-sm me-2" placeholder="Parte interessada" v-model="novaComunicacao.nome" /> -->
                            <el-select
                                class="form-select-solid me-2 min-w-150px"
                                placeholder="Parte interessada"
                                v-model="novaComunicacao.parteInteressada"
                            >
                                <el-option v-for="(p, index) in partesInteressadas" :key="index" :label="p.nome" :value="p.nome">{{p.nome}}</el-option>
                            </el-select>
                            <input class="form-control form-control-sm me-2" placeholder="Responsável" v-model="novaComunicacao.responsavel" />
                            <input class="form-control form-control-sm me-2" placeholder="Conteúdo/Temas" v-model="novaComunicacao.conteudo" />
                            <input class="form-control form-control-sm me-2" placeholder="Quando/Periocidade" v-model="novaComunicacao.quando" />
                            <input class="form-control form-control-sm me-2" placeholder="Método/Ferramentas" v-model="novaComunicacao.metodo" />
                            <button class="btn btn-sm btn-info" @click="AddComunicacao(novaComunicacao); novaComunicacao = {}">Add</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <div>
                            <button class="btn btn-sm btn-warning me-3">Anexar documentos</button>
                            <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#auditoria_interna_popup" v-if="itemSelecionado.auditoriaInterna != null && itemSelecionado.auditoriaInterna.length > 0" @click="abrirAuditoriaInterna(itemSelecionado)">Auditoria interna</button>
                        </div>
                        <button class="btn btn-sm btn-primary" @click="salvarComunicacao">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  </div>
  <AuditoriaInternaPopup :listaAuditoria="auditoriaInterna" @close="closeAuditoriaInterna" />
</template>
<style>
    .parte-interessada-topo {
        margin-right: 12px;
    }

    .deleteSwot {
        cursor: pointer;
    }

    .deleteSwot:after{
        display: inline-block;
        content: "\00d7"; /* This will render the 'X' */
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
  ativo: boolean;
  resposta: string;
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
import AuditoriaInternaPopup from "@/views/empresa/pages/Widget/AuditoriaInternaPopup.vue"
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";


export default defineComponent({
  name: "ManualQualidade",
  components: { AuditoriaInternaPopup },
  setup() {
    const route = useRouter();
    const previewImage = ref("media/avatars/blank.png");
    const imagem = ref<any>();
    const listaItems = ref<Array<Item>>([]);
    const capituloSelecionado = ref();
    const itemSelecionado = ref<Item | null>(null);
    const listaSubItems = ref<Array<SubItem>>([]);
    const auditoriaInterna = ref([]);
    const modal = ref<HTMLElement | null>(null);
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
    const capitulo2 = ref({
        ativo: false,
        texto: ''
    });
    const capitulo3 = ref({
        ativo: false,
        texto: ''
    });
    const novaParte = ref<ParteInteressada>({
        nome: "",
        metodo: "",
        expectativa: ""
    });

    const novaComunicacao = ref<Comunicacao>({
        parteInteressada: "",
        responsavel: "",
        conteudo: "",
        quando: "",
        metodo: ""
    });


    const empresaId = route.currentRoute.value.params.empresaId;
    ApiService.get("manual-auditoria/" + empresaId).then(({ data }) => {
      auditoria.value = data.capitulos;
      const c2 = data.capitulos.find(x => x.numero == 2);
      const c3 = data.capitulos.find(x => x.numero == 3);

      if (c2) {
        capitulo2.value.ativo = c2.ativo;
        capitulo2.value.texto = c2.resposta;
      }
      if (c3) {
        capitulo3.value.ativo = c3.ativo;
        capitulo3.value.texto = c3.resposta;
      }


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

    const addSWOT = (lista, item) => {
        if (item.length > 0) {
            lista.push(item);
        }
    }

    const salvarSWOT = () => {
        const data = {
            empresaId: empresaId,
            strengths: strengths.value,
            weaknesses: weaknesses.value,
            opportunities: opportunities.value,
            threats: threats.value
        }
        ApiService.post("manual-auditoria/swot", data).then(({ data }) => {
            console.log("ok");
        });
    }

    const deleteSwot = (lista, index) => {
        lista.splice(index, 1); 
    }

    const addParteInteressada = (parte) => {
        partesInteressadas.value.push({
            nome: parte.nome,
            expectativa: parte.expectativa,
            metodo: parte.metodo
        });
    }

    const deleteParteInteressada = (index) => {
        partesInteressadas.value.splice(index, 1);
    }

    const salvarParteInteressada = () => {
        const data = {
            empresaId: empresaId,
            parteInteressada : partesInteressadas.value
        }
        ApiService.post("manual-auditoria/parte-interessada", data).then(({ data }) => {
            console.log("ok");
        });
    }

    const AddComunicacao = (c) => {
        comunicacao.value.push({
            parteInteressada: c.parteInteressada,
            responsavel: c.responsavel,
            conteudo: c.conteudo,
            quando: c.quando,
            metodo: c.metodo
        });
    }

    const salvarComunicacao = () => {
        const data = {
            empresaId: empresaId,
            comunicacao : comunicacao.value
        }
        ApiService.post("manual-auditoria/comunicacao", data).then(({ data }) => {
            console.log("ok");
        });
    }

    const onFileAdd = event => {
      sistemaGestao.value.imagem = null;
      const input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            previewImage.value = e.target.result;
          };
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    };

    const removeImage = () => {
      sistemaGestao.value.imagem = null;
      previewImage.value = "media/avatars/blank.png";
    };

    const salvarSistemaGestao = () => {
      salvarRespostaItem();
      const formData = new FormData();
      formData.append("imagem", imagem.value.files[0]);
      formData.append("empresaId", empresaId.toString());
      ApiService.post("manual-auditoria/sistema-gestao", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
    };

    const salvarCapitulo = (obj) => {
        const data = {
            empresaId: empresaId,
            capituloId: capituloSelecionado.value.id,
            capitulo: capituloSelecionado.value.numero,
            ativo: obj.ativo,
            resposta: obj.texto
        }
        ApiService.post("manual-auditoria/capitulo-resposta", data).then(({ data }) => {
            console.log("ok");
        });
    }

    return {auditoria,previewImage, imagem,sistemaGestao, capituloSelecionado,salvarCapitulo,capitulo2,capitulo3, removeImage,onFileAdd,salvarSistemaGestao, partesInteressadas,novaParte,AddComunicacao,salvarComunicacao, novaComunicacao,comunicacao, addParteInteressada,salvarParteInteressada, deleteParteInteressada, selecionarCapitulo, selecionarItem,salvarRespostaItem,salvarRespostaSubItem, listaItems, listaSubItems, itemSelecionado, contarItemsOk,auditoriaInterna, abrirAuditoriaInterna, closeAuditoriaInterna, strengths, weaknesses, opportunities, threats, addSWOT, salvarSWOT, deleteSwot};
  }
});
</script>
