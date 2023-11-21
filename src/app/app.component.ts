import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular_signals_tutorial';

}

export const courses = [
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/d4b4263a-98e9-4dfb-968f-d18572a1dd31/",
    "uuid": "d4b4263a-98e9-4dfb-968f-d18572a1dd31",
    "codigo": 7,
    "descricao": "Tecnologia em Design Gráfico - Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "",
    "coordenador": "Daniel Alvares Lourenco",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/febc1c18-a22c-4225-821f-2571d744af34/",
      "uuid": "febc1c18-a22c-4225-821f-2571d744af34"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/febc1c18-a22c-4225-821f-2571d744af34/"
    ],
    "ch": 2044
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/6289fadc-67bb-4fef-b77a-767764f8b5dc/",
    "uuid": "6289fadc-67bb-4fef-b77a-767764f8b5dc",
    "codigo": 9,
    "descricao": "Técnico em Transporte Aquaviário Subsequente - Cabedelo Centro",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO CABEDELO CENTRO - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 177, de 15 de agosto de 2014, convalidada pela Resolução CS/IFPB nº 228, de 10 de outubro de 2014.",
    "coordenador": "Ticiano Vanderlei de Siqueira Alves",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1070a491-5538-493c-ab3f-733522bff9c2/",
      "uuid": "1070a491-5538-493c-ab3f-733522bff9c2"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1070a491-5538-493c-ab3f-733522bff9c2/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5ddd3fa5-8f0d-4aa4-8a34-a8f7991148dc/"
    ],
    "ch": 997
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/027463ac-fec7-443e-8efc-13d18210c0bf/",
    "uuid": "027463ac-fec7-443e-8efc-13d18210c0bf",
    "codigo": 23,
    "descricao": "Especialização em Gestão dos Recursos Ambientais do Semiárido - Campus Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "Resoluções N° 187 e 188, de 05 de novembro de 2013 que regulamentam a oferta de Cursos de Pós-Graduação Lato Sensu no âmbito do Instituto Federal de Educação, Ciência e Tecnologia da Paraíba.",
    "coordenador": "Francinaldo Leite da Silva",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a724c133-38d5-44de-b9b9-9cd26081f48f/",
      "uuid": "a724c133-38d5-44de-b9b9-9cd26081f48f"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a724c133-38d5-44de-b9b9-9cd26081f48f/"
    ],
    "ch": 420
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/935d01d0-754c-4d15-b4c9-fcd5081d8f24/",
    "uuid": "935d01d0-754c-4d15-b4c9-fcd5081d8f24",
    "codigo": 25,
    "descricao": "Especialização em Gestão Pública - EAD",
    "diretoria": "Coordenação do Curso de Licenciatura em Letras EAD",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "Resolução CS/IFPB nº 242, de 13 de Dezembro 2012; Edital nº 19/2012 PNAP.",
    "coordenador": "Edlaine Correia Sinezio Martins",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f181afb3-7848-415e-9482-e3110c1e9361/",
      "uuid": "f181afb3-7848-415e-9482-e3110c1e9361"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f181afb3-7848-415e-9482-e3110c1e9361/"
    ],
    "ch": 510
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/fc92b86b-5f03-4015-b9f5-3e5e78298d4c/",
    "uuid": "fc92b86b-5f03-4015-b9f5-3e5e78298d4c",
    "codigo": 39,
    "descricao": "Bacharelado em Administração - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "Portaria SERES/MEC nº 705, de 18/12/2013, Publicado no D.O.U. nº 246, Seção 1, Folhas 149-157 de 19/12/2013.",
    "coordenador": "Cibele de Albuquerque Tome",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0e03e3de-70d6-45ef-ab66-2871800e11b3/",
      "uuid": "0e03e3de-70d6-45ef-ab66-2871800e11b3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0e03e3de-70d6-45ef-ab66-2871800e11b3/"
    ],
    "ch": 2878
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a4be6faa-f785-4389-af7d-cb12f36dc941/",
    "uuid": "a4be6faa-f785-4389-af7d-cb12f36dc941",
    "codigo": 40,
    "descricao": "Bacharelado em Administração Pública - PNAP - João Pessoa",
    "diretoria": "Coordenação do Curso de Licenciatura em Letras EAD",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "Portaria SERES/MEC nº 1.118, de 30/10/2017, Publicado no D.O.U. nº 209, Seção 1, Folhas 37 de 31/10/2017.",
    "coordenador": "Odilon Saturnino Silva Neto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f3c047e6-6bba-4cc0-ab75-c9e87dde28e3/",
      "uuid": "f3c047e6-6bba-4cc0-ab75-c9e87dde28e3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f3c047e6-6bba-4cc0-ab75-c9e87dde28e3/"
    ],
    "ch": 2890
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/78821067-d464-4817-9aeb-4539dde01da2/",
    "uuid": "78821067-d464-4817-9aeb-4539dde01da2",
    "codigo": 41,
    "descricao": "Bacharelado em Engenharia Civil - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "Autorização: Resolução CS/IFPB nº 158, de 24 de setembro de 2013.",
    "coordenador": "Jose Tavares de Luna Neto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a8dcdfa4-f24b-46f9-9564-99d2770e76d0/",
      "uuid": "a8dcdfa4-f24b-46f9-9564-99d2770e76d0"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a8dcdfa4-f24b-46f9-9564-99d2770e76d0/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fd92e8d5-6bd6-4dba-8b61-d9dee8055de2/"
    ],
    "ch": 3642
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/bee88ee8-1cf1-4068-812a-b4432296bdd0/",
    "uuid": "bee88ee8-1cf1-4068-812a-b4432296bdd0",
    "codigo": 42,
    "descricao": "Bacharelado em Medicina Veterinária - Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "Portaria SERES/MEC nº 122, de 22 de abril de 2016, Publicado no D.O.U nº. 77, Seção 1, Folha nº 16, de 25/04/2016.",
    "coordenador": "Daniel Cezar da Silva",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2f70bdd2-2504-4425-9a7b-eb191f3de9ef/",
      "uuid": "2f70bdd2-2504-4425-9a7b-eb191f3de9ef"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2f70bdd2-2504-4425-9a7b-eb191f3de9ef/"
    ],
    "ch": 4400
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/76096309-36f4-4759-8a7e-9cc0f6fb6bca/",
    "uuid": "76096309-36f4-4759-8a7e-9cc0f6fb6bca",
    "codigo": 43,
    "descricao": "Licenciatura em Computação e Informática - EAD - Cajazeiras",
    "diretoria": "COORDENAÇÃO DE EDUCAÇÃO À DISTANCIA - CAMPUS CAJAZEIRAS",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "Resolução nº 170 - CS/IFPB, de 03 de outubro de 2013.",
    "coordenador": "Fabio Abrantes Diniz",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/351641b4-ff0a-46e4-b923-c0066edd8b74/",
      "uuid": "351641b4-ff0a-46e4-b923-c0066edd8b74"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/478c56fd-d6cb-4a25-98a8-f829d7475277/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/351641b4-ff0a-46e4-b923-c0066edd8b74/"
    ],
    "ch": 3190
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/08fb7eef-efe3-4a35-ae18-b7eca6d60901/",
    "uuid": "08fb7eef-efe3-4a35-ae18-b7eca6d60901",
    "codigo": 44,
    "descricao": "Licenciatura em Educação Física - Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "Resolução CS/IFPB nº 160, de 01 de outubro de 2012.",
    "coordenador": "Gertrudes Nunes de Melo",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8de90ff8-45f4-4b2e-9067-4dae1a1904b2/",
      "uuid": "8de90ff8-45f4-4b2e-9067-4dae1a1904b2"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/62d93961-3cf4-494a-b026-f307bddbd5d8/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8de90ff8-45f4-4b2e-9067-4dae1a1904b2/"
    ],
    "ch": 2770
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/9d08f4cb-ac12-4400-90ae-34d69b59bb41/",
    "uuid": "9d08f4cb-ac12-4400-90ae-34d69b59bb41",
    "codigo": 45,
    "descricao": "CURSO SUPERIOR DE LICENCIATURA EM EDUCAÇÃO FÍSICA",
    "diretoria": "COORDENAÇÃO DE EAD-CAMPUS SOUSA",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "Portaria SERES/MEC nº 1.012, de 25 de setembro de 2017, publicada no D.O.U nº 186, Seção 1, Folha nº 17, de 27 de setembro de 2017.",
    "coordenador": "Richardson Correia Marinheiro",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8de90ff8-45f4-4b2e-9067-4dae1a1904b2/",
      "uuid": "8de90ff8-45f4-4b2e-9067-4dae1a1904b2"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8de90ff8-45f4-4b2e-9067-4dae1a1904b2/"
    ],
    "ch": 2770
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/9361ea3d-e734-44e8-8dbc-07f7b7ed4765/",
    "uuid": "9361ea3d-e734-44e8-8dbc-07f7b7ed4765",
    "codigo": 46,
    "descricao": "Licenciatura em Letras à Distância com Habilitação em Língua Portuguesa - João Pessoa",
    "diretoria": "Coordenação do Curso de Licenciatura em Letras EAD",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "Resolução CS/IFPB Nº 166, de 13 de novembro de 2015.\r\nDe acordo com a Portaria MEC nº 23, de 21 de dezembro de 2017, Artigo 101.",
    "coordenador": "Jose Moacir Soares da Costa Filho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/590abe78-0692-4b5f-8a83-93c2b6366b89/",
      "uuid": "590abe78-0692-4b5f-8a83-93c2b6366b89"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/590abe78-0692-4b5f-8a83-93c2b6366b89/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/3c4b2b27-2062-4dec-b1ae-31510c0eaa69/"
    ],
    "ch": 2480
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/84249203-3b59-47d5-967d-6402155b069e/",
    "uuid": "84249203-3b59-47d5-967d-6402155b069e",
    "codigo": 47,
    "descricao": "Licenciatura em Matemática - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "AUTORIZAÇÃO: RESOLUÇÃO CS/IFPB Nº 088, DE 28/09/2010. RECONHECIMENTO: Portaria SERES/MEC nº 698 de 01/10/2015, Publicado no D.O.U.\r\nnº 190, Seção 1, Folhas 637-638 de 05/10/2015.",
    "coordenador": "Kissia Carvalho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/31e05e3e-f023-4ce9-adbb-6e071d41e673/",
      "uuid": "31e05e3e-f023-4ce9-adbb-6e071d41e673"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/31e05e3e-f023-4ce9-adbb-6e071d41e673/"
    ],
    "ch": 3218
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/394f9ae6-ab93-45d7-9e7d-2b9b1993b66b/",
    "uuid": "394f9ae6-ab93-45d7-9e7d-2b9b1993b66b",
    "codigo": 48,
    "descricao": "Licenciatura em Química - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "Portaria SERES/MEC nº 1094, de 24/12/2015, Publicado no D.O.U. nº 249, Seção 1, Folhas 55-63 de 30/12/2015.",
    "coordenador": "Suely Oliveira Carneiro",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/3843abbb-7d6f-4a7a-8332-d666232a87a3/",
      "uuid": "3843abbb-7d6f-4a7a-8332-d666232a87a3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/3843abbb-7d6f-4a7a-8332-d666232a87a3/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/21112561-a140-4b7b-8f54-f389b964c432/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0ad16143-c411-44a9-b1b3-0e36b780422a/"
    ],
    "ch": 2996
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/0549ca52-670f-4525-a4a9-f41a077e200c/",
    "uuid": "0549ca52-670f-4525-a4a9-f41a077e200c",
    "codigo": 49,
    "descricao": "Licenciatura em Química - Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "Portaria SERES/MEC nº 815, de 29 de outubro de 2015, Publicado no D.O.U nº 208, Seção 1, Folha nº: 22, de 30/10/2015.",
    "coordenador": "Antonio Jose Ferreira Gadelha",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e8e9a305-86e5-4ad9-9080-d9b48b551e30/",
      "uuid": "e8e9a305-86e5-4ad9-9080-d9b48b551e30"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0e794b51-c16a-4f7a-848c-86836fc62954/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e8e9a305-86e5-4ad9-9080-d9b48b551e30/"
    ],
    "ch": 2990
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b6d1d778-f2aa-4703-9c26-ca53380130ab/",
    "uuid": "b6d1d778-f2aa-4703-9c26-ca53380130ab",
    "codigo": 50,
    "descricao": "Tecnologia em Agroecologia - Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria SERES/MEC nº 37, de 17/01/2018, Publicado no D.O.U. Nº 13, Seção 1, Folhas 15-17 de 18/01/2018.",
    "coordenador": "Paulo Alves Wanderley",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fe4f60d4-263c-4fe8-9a9a-ddf5c06b50b7/",
      "uuid": "fe4f60d4-263c-4fe8-9a9a-ddf5c06b50b7"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6d3e9bc8-8fbd-40ee-99a0-6cc7e2fb33d9/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fe4f60d4-263c-4fe8-9a9a-ddf5c06b50b7/"
    ],
    "ch": 2460
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e01f2ccc-89be-46b7-8ae6-df9b6aca3734/",
    "uuid": "e01f2ccc-89be-46b7-8ae6-df9b6aca3734",
    "codigo": 51,
    "descricao": "Tecnologia em Agroecologia - Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria SERES/MEC nº 518 DE 15/10/2013, publicada no D.O.U. nº 201, seção 1, folha nº 24 DE 16/10/2013.",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/862e672b-b8a7-42e9-9095-a0d134209ebf/",
      "uuid": "862e672b-b8a7-42e9-9095-a0d134209ebf"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/862e672b-b8a7-42e9-9095-a0d134209ebf/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/635ec6da-9a09-45e7-963b-b1f793aefd07/"
    ],
    "ch": 2514
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/1a0c2bec-6ea9-4a6e-9137-b69fd98d3a6e/",
    "uuid": "1a0c2bec-6ea9-4a6e-9137-b69fd98d3a6e",
    "codigo": 52,
    "descricao": "Tecnologia em Alimentos - Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria SERES/MEC Nº: 614, de 30 de outubto de 2014. Publicada no D.O.U. Nº 211, Seção 1, Folha 19, de 31 de outubro de 2014.",
    "coordenador": "Juliana Maria Guedes de Oliveira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/42dfd1f5-bdb3-4252-a853-1ac6d99006aa/",
      "uuid": "42dfd1f5-bdb3-4252-a853-1ac6d99006aa"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/42dfd1f5-bdb3-4252-a853-1ac6d99006aa/"
    ],
    "ch": 2603
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b7829939-f597-4452-97f5-a6a8cdbff5d3/",
    "uuid": "b7829939-f597-4452-97f5-a6a8cdbff5d3",
    "codigo": 53,
    "descricao": "Tecnologia em Análise e Desenvolvimento de Sistemas - Monteiro",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "",
    "coordenador": "Cleyton Caetano de Souza",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/58ec3703-da43-4190-ba38-8391f81bf0b4/",
      "uuid": "58ec3703-da43-4190-ba38-8391f81bf0b4"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/58ec3703-da43-4190-ba38-8391f81bf0b4/"
    ],
    "ch": 2069
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/26dd642f-e75f-4322-aa27-47870463e532/",
    "uuid": "26dd642f-e75f-4322-aa27-47870463e532",
    "codigo": 54,
    "descricao": "Tecnologia em Análise e Desenvolvimento de Sistemas - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "AUTORIZAÇÃO:Resolução 022/2005 - Conselho Diretor, de 03/10/2005.",
    "coordenador": "Francisco Daladier Marques Junior",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6f8bda3d-3e33-4925-8277-4418bf0f07c3/",
      "uuid": "6f8bda3d-3e33-4925-8277-4418bf0f07c3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6f8bda3d-3e33-4925-8277-4418bf0f07c3/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/aa3d4d7a-c4f6-4671-ad6d-2dc82315ad23/"
    ],
    "ch": 2548
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/9ba4e50d-71ed-4630-b815-f5ffcf07544a/",
    "uuid": "9ba4e50d-71ed-4630-b815-f5ffcf07544a",
    "codigo": 56,
    "descricao": "Tecnologia em Automação Industrial - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Resolução Nº 016/2004-CD de 21 de setembro de 2004.",
    "coordenador": "Severino Cesarino da Nobrega Neto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c7e2f5a3-41a1-4ff8-aaa5-a0dd92543bb8/",
      "uuid": "c7e2f5a3-41a1-4ff8-aaa5-a0dd92543bb8"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c7e2f5a3-41a1-4ff8-aaa5-a0dd92543bb8/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e8409e8e-596d-4750-87a2-d382f4e05ba6/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/df56adec-5063-4e78-b063-6c6dd69458ff/"
    ],
    "ch": 2807
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/33ef0cd8-cc84-4cce-805f-6190be773384/",
    "uuid": "33ef0cd8-cc84-4cce-805f-6190be773384",
    "codigo": 57,
    "descricao": "Tecnologia em Construção de Edifícios - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria SERES/MEC nº 286, de 21/12/2012,  publicado no D.O.U nº 249, Seção 1, Folhas nº 13; 66, de 27/12/2012.",
    "coordenador": "Walter Ladislau de Barros Ribeiro",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0b07e44c-29d7-4137-8c4d-1cbf42bb2d62/",
      "uuid": "0b07e44c-29d7-4137-8c4d-1cbf42bb2d62"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0b07e44c-29d7-4137-8c4d-1cbf42bb2d62/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0fc5a9cf-4cc5-4b6c-9814-36e03c472960/"
    ],
    "ch": 2419
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/cc0dfc89-2454-447a-8ed0-a204a17dfd60/",
    "uuid": "cc0dfc89-2454-447a-8ed0-a204a17dfd60",
    "codigo": 58,
    "descricao": "Tecnologia em Construção de Edifícios - Monteiro",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria SERES/MEC nº 299, de 14/04/2015, Publicado no D.O.U. nº 72, Seção 1, Folhas 16-17 de 16/04/2015.",
    "coordenador": "Whelson Oliveira de Brito",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/eb6b134b-039e-408b-937d-576e31f549b3/",
      "uuid": "eb6b134b-039e-408b-937d-576e31f549b3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/eb6b134b-039e-408b-937d-576e31f549b3/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f95e928b-10c9-41c9-bd33-0b80a45e8c65/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/58e36630-fe34-4aae-9014-fda325fa1c85/"
    ],
    "ch": 2975
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/dcaa790d-5780-4eb7-b034-95039ec7e123/",
    "uuid": "dcaa790d-5780-4eb7-b034-95039ec7e123",
    "codigo": 59,
    "descricao": "Tecnologia em Design de Interiores - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria MEC nº 522, de 15/10/2013, publicada no D.O.U. nº 202, Seção 1, Folha nº 23, de 17/10/2013.",
    "coordenador": "Raphaela Cristhina Claudino Moreira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e12225a8-c9ff-41fa-b929-59094f0a1d8e/",
      "uuid": "e12225a8-c9ff-41fa-b929-59094f0a1d8e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e12225a8-c9ff-41fa-b929-59094f0a1d8e/"
    ],
    "ch": 1999
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b8d7871e-9494-45e7-993a-5dc0b685abc2/",
    "uuid": "b8d7871e-9494-45e7-993a-5dc0b685abc2",
    "codigo": 60,
    "descricao": "Tecnologia em Geoprocessamento - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Autorizado pela Resolução nº  10 CD/CEFET/PB de 24/09/2001.",
    "coordenador": "Luciene Ferreira Gama",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/96d3c54d-a8fd-466d-818d-1bad4e6d085f/",
      "uuid": "96d3c54d-a8fd-466d-818d-1bad4e6d085f"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/96d3c54d-a8fd-466d-818d-1bad4e6d085f/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ce51cbde-33a9-4793-91b8-02d25f6d0224/"
    ],
    "ch": 2335
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/abe1dfe5-175a-4e9c-ad99-0ad5d39f1cf1/",
    "uuid": "abe1dfe5-175a-4e9c-ad99-0ad5d39f1cf1",
    "codigo": 61,
    "descricao": "Tecnologia em Gestão Ambiental - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria  SERES/MEC nº 298, de 27/12/2012, publicado no D.O.U nº 251, Seção 1, Folhas nº 143-144 de 31/12/2012.",
    "coordenador": "Mirella Leoncio Motta e Costa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/13a06ae8-7938-4b13-98b2-ba7a6c8b628e/",
      "uuid": "13a06ae8-7938-4b13-98b2-ba7a6c8b628e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/13a06ae8-7938-4b13-98b2-ba7a6c8b628e/"
    ],
    "ch": 1982
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/378719b6-24a7-4030-ae45-ef7747affc43/",
    "uuid": "378719b6-24a7-4030-ae45-ef7747affc43",
    "codigo": 62,
    "descricao": "Tecnologia em Gestão Ambiental - Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "",
    "coordenador": "Joao Abilio Diniz",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f677cd04-e13c-4051-948d-0d14dac326fc/",
      "uuid": "f677cd04-e13c-4051-948d-0d14dac326fc"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f677cd04-e13c-4051-948d-0d14dac326fc/"
    ],
    "ch": 1831
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a20f2731-577b-44c6-b48e-06d602cf52f0/",
    "uuid": "a20f2731-577b-44c6-b48e-06d602cf52f0",
    "codigo": 63,
    "descricao": "Tecnologia em Negócios Imobiliários - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria SETEC/MEC nº 123 de 03/04/2008, publicado no D.O.U. nº 65, Seção 1, Folha nº 16, de 04/04/2008.",
    "coordenador": "Felipe Flavio Bezerra Rocha",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ea3dc994-4a71-402e-8c60-2dbf4f9f7486/",
      "uuid": "ea3dc994-4a71-402e-8c60-2dbf4f9f7486"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ea3dc994-4a71-402e-8c60-2dbf4f9f7486/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9f0101ac-a39b-48c7-8de4-e1521cc97873/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c60675a9-1dec-42e1-a82d-b4a436321df4/"
    ],
    "ch": 1854
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/c6d5c116-941e-420e-ad9f-3c384d0ddf21/",
    "uuid": "c6d5c116-941e-420e-ad9f-3c384d0ddf21",
    "codigo": 64,
    "descricao": "Tecnologia em Redes de Computadores - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria GD/CEFET-PB nº 837, de 06/08/1998.",
    "coordenador": "Marcio Emanuel Ugulino de Araujo Junior",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/86277dc8-f292-429d-b50e-b3c7e7ab8103/",
      "uuid": "86277dc8-f292-429d-b50e-b3c7e7ab8103"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/86277dc8-f292-429d-b50e-b3c7e7ab8103/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/935a50bd-b74d-49ff-89c5-3cac89826451/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/71fffae9-cbeb-4cf6-b2e5-bc9adfc5d554/"
    ],
    "ch": 2317
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/79edddf8-eee0-4e24-a282-0451bde7e11b/",
    "uuid": "79edddf8-eee0-4e24-a282-0451bde7e11b",
    "codigo": 65,
    "descricao": "Tecnologia em Segurança no Trabalho - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "RESOLUÇÃO CS/IFPB Nº 116, DE 19 DE JUNHO DE 2012.",
    "coordenador": "Hanne Alves Bakke",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/15aa260d-1319-4ef9-90b7-aacf78208f2c/",
      "uuid": "15aa260d-1319-4ef9-90b7-aacf78208f2c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/15aa260d-1319-4ef9-90b7-aacf78208f2c/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ecf992a5-e329-4f22-b202-0cf20641a5a0/"
    ],
    "ch": 2539
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b9c94b6e-dcd5-4b89-911c-f27eb3283aaf/",
    "uuid": "b9c94b6e-dcd5-4b89-911c-f27eb3283aaf",
    "codigo": 66,
    "descricao": "Tecnologia em Sistemas de Telecomunicações - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria MEC nº 3.562, de 13/12/2002, publicado no D.O.U. nº 242, Seção 1, Folha 42, de 16/12/2002. Renovação com base no art. 63 da Portaria Normativa MEC nº 40 de 12/12/2007.",
    "coordenador": "Gustavo Araujo Cavalcante",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e93d7455-27dc-4ce1-b88e-0c55e034afb8/",
      "uuid": "e93d7455-27dc-4ce1-b88e-0c55e034afb8"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e93d7455-27dc-4ce1-b88e-0c55e034afb8/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7ba37fbd-7a15-4692-a992-4947f5fa3519/"
    ],
    "ch": 2565
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/81f40e91-11fe-4aae-a3c9-cb12978e72fa/",
    "uuid": "81f40e91-11fe-4aae-a3c9-cb12978e72fa",
    "codigo": 67,
    "descricao": "Tecnologia em Sistemas para Internet - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Resolução do Conselho Diretor Nº 006/2003",
    "coordenador": "Candido Jose Ramos do Egypto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/72e45e6b-2438-4f02-963d-76bcb53044bb/",
      "uuid": "72e45e6b-2438-4f02-963d-76bcb53044bb"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/72e45e6b-2438-4f02-963d-76bcb53044bb/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/748fba3a-d73e-42b8-8c2b-60887d86d5a2/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/de35b28a-db3b-4659-84fd-bf242341154c/"
    ],
    "ch": 2704
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/6c3b2697-5403-467a-8b00-c6797ffb73fd/",
    "uuid": "6c3b2697-5403-467a-8b00-c6797ffb73fd",
    "codigo": 68,
    "descricao": "Bacharelado em Engenharia Elétrica - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "Portaria SERES/MEC nº 1094, de 24/12/2015, Publicado no D.O.U. nº 249, Seção 1, Folhas 55-63 de 30/12/2015.",
    "coordenador": "Alvaro de Medeiros Maciel",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0ce7c85c-36b7-44f5-857b-ba78b953c6e9/",
      "uuid": "0ce7c85c-36b7-44f5-857b-ba78b953c6e9"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0ce7c85c-36b7-44f5-857b-ba78b953c6e9/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/17995125-0d65-43c1-907e-d270ee9f1ac8/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/46e1104e-eca3-47af-b8c0-8f17c6f1d4f7/"
    ],
    "ch": 3881
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/8481eadd-cf6a-4f24-af7e-e1568fc6663c/",
    "uuid": "8481eadd-cf6a-4f24-af7e-e1568fc6663c",
    "codigo": 69,
    "descricao": "Técnico em Eletromecânica Subsequente - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 35, de 26  de dezembro de 2008 e Resolução CS/IFPB nº 242, de 17 de dezembro de 2015.",
    "coordenador": "Marco Damasceno de Sousa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1d2febb8-8869-44d9-8602-4d8e81626c66/",
      "uuid": "1d2febb8-8869-44d9-8602-4d8e81626c66"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1d2febb8-8869-44d9-8602-4d8e81626c66/"
    ],
    "ch": 1332
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/db44eecf-c01a-4e74-813d-499c4e4c486c/",
    "uuid": "db44eecf-c01a-4e74-813d-499c4e4c486c",
    "codigo": 70,
    "descricao": "Técnico em Contabilidade Integrado - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 060, de 19 de agosto de 2011.",
    "coordenador": "Marcella Braga Tavares Dutra",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/003e3600-0749-4095-9a1f-cb0e496647fa/",
      "uuid": "003e3600-0749-4095-9a1f-cb0e496647fa"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6d195841-c4e7-4212-80d5-81fdec3065df/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/003e3600-0749-4095-9a1f-cb0e496647fa/"
    ],
    "ch": 3502
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/32f12bc8-8af4-4d1f-a3e0-8413f2c8d7ee/",
    "uuid": "32f12bc8-8af4-4d1f-a3e0-8413f2c8d7ee",
    "codigo": 71,
    "descricao": "Técnico em Controle Ambiental Integrado - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFET - PB nº 35, de 26 de dezembro de 2008.",
    "coordenador": "Marcia Viana da Silva",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/18b56491-1cfe-4c68-91f7-88dde9b204ca/",
      "uuid": "18b56491-1cfe-4c68-91f7-88dde9b204ca"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/18b56491-1cfe-4c68-91f7-88dde9b204ca/"
    ],
    "ch": 3539
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/c6ce4fc9-3225-4846-864a-37ed12803936/",
    "uuid": "c6ce4fc9-3225-4846-864a-37ed12803936",
    "codigo": 73,
    "descricao": "Técnico em Edificações Integrado - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 41, de 10 de setembro de 2009.",
    "coordenador": "Fernanda de Castro Farias",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9f2b8f8f-49f7-4abe-a4cd-dde54426181d/",
      "uuid": "9f2b8f8f-49f7-4abe-a4cd-dde54426181d"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/50c8f534-8f2a-4d54-8c36-51a53dbd3e8d/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9f2b8f8f-49f7-4abe-a4cd-dde54426181d/"
    ],
    "ch": 3845
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/4c905a1c-144d-4d26-93c7-9607f391b131/",
    "uuid": "4c905a1c-144d-4d26-93c7-9607f391b131",
    "codigo": 74,
    "descricao": "Técnico em Edificações Integrado - Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 34, de 10 de setembro de 2009.",
    "coordenador": "Camila Campos Gomez Fama",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f84bfe72-a9b0-47c3-915a-2eb0cb3356e5/",
      "uuid": "f84bfe72-a9b0-47c3-915a-2eb0cb3356e5"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f84bfe72-a9b0-47c3-915a-2eb0cb3356e5/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/154b3e90-690f-4956-8179-cbaa43ff59da/"
    ],
    "ch": 3632
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/57c0a2ee-643a-41df-818e-6f4b06db3cf3/",
    "uuid": "57c0a2ee-643a-41df-818e-6f4b06db3cf3",
    "codigo": 75,
    "descricao": "Técnico em Edificações Integrado - Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 31, de 10 de setembro de 2009.",
    "coordenador": "Pablo Francisco Honorato Sampaio",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d8f69075-8a0a-44b7-ad7d-2129b4184c41/",
      "uuid": "d8f69075-8a0a-44b7-ad7d-2129b4184c41"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d8f69075-8a0a-44b7-ad7d-2129b4184c41/"
    ],
    "ch": 3480
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/63a0f32e-7cd0-4e5b-ac0f-e2dcdd62673f/",
    "uuid": "63a0f32e-7cd0-4e5b-ac0f-e2dcdd62673f",
    "codigo": 76,
    "descricao": "Técnico em Edificações Integrado - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFET-PB n º 035, de 26 de dezembro de 2008.",
    "coordenador": "Ana Maria Kluppel Pereira Gaiao",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d67f5859-8cd7-4454-9d35-d181e91fd64e/",
      "uuid": "d67f5859-8cd7-4454-9d35-d181e91fd64e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d67f5859-8cd7-4454-9d35-d181e91fd64e/"
    ],
    "ch": 3970
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/284df621-9351-4d50-a3ff-79520957570a/",
    "uuid": "284df621-9351-4d50-a3ff-79520957570a",
    "codigo": 77,
    "descricao": "Técnico em Edificações Integrado - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 35, de 26 de dezembro de 2008 e Resolução CS/IFPB nº 138-Cs, de 11 de agosto De 2017.",
    "coordenador": "Fernando Coutinho Van Woensel",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5d5b429f-cb0b-42bc-a57c-aa632325df9b/",
      "uuid": "5d5b429f-cb0b-42bc-a57c-aa632325df9b"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5d5b429f-cb0b-42bc-a57c-aa632325df9b/"
    ],
    "ch": 3840
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/629c5514-3e18-41af-99b9-6107f8c3fbaf/",
    "uuid": "629c5514-3e18-41af-99b9-6107f8c3fbaf",
    "codigo": 78,
    "descricao": "Técnico em Edificações Subsequente - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO CD/CEFET/PB Nº 025-A, DE 26 DE DEZEMBRO DE 2008",
    "coordenador": "Fernanda de Castro Farias",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e55ed60d-fd4c-40f9-abfc-e2157ea33490/",
      "uuid": "e55ed60d-fd4c-40f9-abfc-e2157ea33490"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e55ed60d-fd4c-40f9-abfc-e2157ea33490/"
    ],
    "ch": 1231
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/cf76ee97-1be7-4187-9d4c-6d169458a74a/",
    "uuid": "cf76ee97-1be7-4187-9d4c-6d169458a74a",
    "codigo": 79,
    "descricao": "Técnico em Edificações Subsequente - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO CS/IFPB Nº 64, DE 22 DE AGOSTO DE 2011.",
    "coordenador": "Fernando Coutinho Van Woensel",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/10511192-b32d-47ce-a495-73a3f3007214/",
      "uuid": "10511192-b32d-47ce-a495-73a3f3007214"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/10511192-b32d-47ce-a495-73a3f3007214/"
    ],
    "ch": 1334
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ac6d3b2e-de47-4519-8c55-45dc6496ba24/",
    "uuid": "ac6d3b2e-de47-4519-8c55-45dc6496ba24",
    "codigo": 80,
    "descricao": "Técnico em Eletromecânica Integrado - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 35, de 26 de dezembro de 2008 e Resolução CS/IFPB nº 06, de 01 de março de 2016.",
    "coordenador": "Marco Damasceno de Sousa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c6afb61f-1b1e-4935-a01a-0227ced31f0c/",
      "uuid": "c6afb61f-1b1e-4935-a01a-0227ced31f0c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c6afb61f-1b1e-4935-a01a-0227ced31f0c/"
    ],
    "ch": 3472
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/32f70190-8a72-4535-b7ab-7016c3cf76cb/",
    "uuid": "32f70190-8a72-4535-b7ab-7016c3cf76cb",
    "codigo": 81,
    "descricao": "Técnico em Eletrônica Integrado - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 035, de 26 de dezembro de 2008.",
    "coordenador": "Rafaelle de Aguiar Correia",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/454580a5-4871-42d2-921c-25033ab649ab/",
      "uuid": "454580a5-4871-42d2-921c-25033ab649ab"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/454580a5-4871-42d2-921c-25033ab649ab/"
    ],
    "ch": 3941
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/f43d37a4-1dbf-4a1b-9e21-4111f69e3d4b/",
    "uuid": "f43d37a4-1dbf-4a1b-9e21-4111f69e3d4b",
    "codigo": 82,
    "descricao": "Técnico em Eletrotécnica Integrado - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 035, de 26 de dezembro de 2008.",
    "coordenador": "Vagner Fonseca Nobrega",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/86a444b7-54d0-40db-bfe1-2c0c9a0d1c37/",
      "uuid": "86a444b7-54d0-40db-bfe1-2c0c9a0d1c37"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/86a444b7-54d0-40db-bfe1-2c0c9a0d1c37/"
    ],
    "ch": 4076
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a599e4f6-2920-49b5-8c19-4178ed4e16f1/",
    "uuid": "a599e4f6-2920-49b5-8c19-4178ed4e16f1",
    "codigo": 83,
    "descricao": "Técnico em Eletrotécnica Subsequente - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO CS/IFPB Nº 058, DE 19 DE AGOSTO DE 2011.",
    "coordenador": "Zuila Kelly da Costa Couto Fernandes de Araujo",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fc7837ab-95a1-49e0-8998-3875e4535b8e/",
      "uuid": "fc7837ab-95a1-49e0-8998-3875e4535b8e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fc7837ab-95a1-49e0-8998-3875e4535b8e/"
    ],
    "ch": 1330
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/7ca0cfa8-86ca-4510-afc6-4bdfa342d2b7/",
    "uuid": "7ca0cfa8-86ca-4510-afc6-4bdfa342d2b7",
    "codigo": 84,
    "descricao": "Técnico em Geologia Integrado - Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "RESOLUÇÃO CS/IFPB Nº 144, DE 15 DE AGOSTO DE 2012.",
    "coordenador": "Anderson de Medeiros Souza",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/af5ab7cb-099f-4677-b9d0-75f6f9c75a1f/",
      "uuid": "af5ab7cb-099f-4677-b9d0-75f6f9c75a1f"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/af5ab7cb-099f-4677-b9d0-75f6f9c75a1f/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/90141e82-82e2-4686-a8f9-94575daf5136/"
    ],
    "ch": 3321
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/19b50ce3-c1c5-45ac-9cea-65671b32604c/",
    "uuid": "19b50ce3-c1c5-45ac-9cea-65671b32604c",
    "codigo": 85,
    "descricao": "Técnico em Informática Integrado - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução nº 84 CS/IFPB, de 13 de maio de 2013.",
    "coordenador": "Andre Lira Rolim",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/859daddb-778a-444e-868e-8caa460252db/",
      "uuid": "859daddb-778a-444e-868e-8caa460252db"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/859daddb-778a-444e-868e-8caa460252db/"
    ],
    "ch": 3638
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ba25fcf6-5c26-4eeb-aa0c-29e120d44ab4/",
    "uuid": "ba25fcf6-5c26-4eeb-aa0c-29e120d44ab4",
    "codigo": 86,
    "descricao": "Técnico em Informática Integrado - Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Autorização/Resolução CS/IFPB nº 135, de 26/08/2013",
    "coordenador": "Lucius Vinicius Rocha Machado",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/67a254f4-3561-426c-996a-059ec15d4f01/",
      "uuid": "67a254f4-3561-426c-996a-059ec15d4f01"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bd9f94d8-da58-4a27-a7fd-4e9390f142f6/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b5239d94-2435-4bd6-a4d0-c46add649baa/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/67a254f4-3561-426c-996a-059ec15d4f01/"
    ],
    "ch": 3505
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/290c809c-384a-4b63-bdd9-96dfc5f05887/",
    "uuid": "290c809c-384a-4b63-bdd9-96dfc5f05887",
    "codigo": 87,
    "descricao": "Técnico em Instrumento Musical Subsequente - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução   nº   035/ 2008 -  CD/ CEFET - PB, de 26 dezembro  de 2008.",
    "coordenador": "Italan Carneiro Bezerra",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/40d3d4af-efb7-48f7-a55b-fe2d890940e8/",
      "uuid": "40d3d4af-efb7-48f7-a55b-fe2d890940e8"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5838f989-85c5-4fa8-8d46-509e98cb95e4/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/40d3d4af-efb7-48f7-a55b-fe2d890940e8/"
    ],
    "ch": 1089
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/5e5a3d13-023d-4987-8fcf-e198bf3c3b05/",
    "uuid": "5e5a3d13-023d-4987-8fcf-e198bf3c3b05",
    "codigo": 88,
    "descricao": "Técnico em Instrumento Musical Integrado - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 35, de 26 de dezembro de 2008.",
    "coordenador": "Italan Carneiro Bezerra",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/119c5381-9df6-4d6d-be43-35cefbeb2a77/",
      "uuid": "119c5381-9df6-4d6d-be43-35cefbeb2a77"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/57564ebb-d94a-439b-aa9b-d7458dab168c/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/119c5381-9df6-4d6d-be43-35cefbeb2a77/"
    ],
    "ch": 3878
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/101c55cd-1807-4d0e-90c0-f8680eb3b4d3/",
    "uuid": "101c55cd-1807-4d0e-90c0-f8680eb3b4d3",
    "codigo": 89,
    "descricao": "Técnico em Manutenção e Suporte em Informática Integrado - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 40, de 10 de setembro de 2009.",
    "coordenador": "Pedro Batista de Carvalho Filho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/10193dc3-541d-40c5-bf2e-6d07dd82fdd9/",
      "uuid": "10193dc3-541d-40c5-bf2e-6d07dd82fdd9"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/10193dc3-541d-40c5-bf2e-6d07dd82fdd9/"
    ],
    "ch": 3611
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/0f4aeedd-2342-45b6-9d29-5a0c4b2a1c49/",
    "uuid": "0f4aeedd-2342-45b6-9d29-5a0c4b2a1c49",
    "codigo": 90,
    "descricao": "Técnico em Manutenção e Suporte em Informática Subsequente - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO CS/IFPB Nº 039, DE 10 DE SETEMBRO DE 2009",
    "coordenador": "Pedro Batista de Carvalho Filho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c5d8f9f0-63dc-472b-8cc5-cb8d2337af01/",
      "uuid": "c5d8f9f0-63dc-472b-8cc5-cb8d2337af01"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c5d8f9f0-63dc-472b-8cc5-cb8d2337af01/"
    ],
    "ch": 1000
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/be89af81-8cda-4812-bfe1-1cdb063e6124/",
    "uuid": "be89af81-8cda-4812-bfe1-1cdb063e6124",
    "codigo": 92,
    "descricao": "Técnico em Manutenção e Suporte em Informática Subsequente - Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO CD/CEFET/PB Nº 023-B, DE 26 DE DEZEMBRO DE 2008.",
    "coordenador": "Antonio de Paula Dias Queiroz",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/32b24d35-1405-4f97-ad1a-126afb5b291c/",
      "uuid": "32b24d35-1405-4f97-ad1a-126afb5b291c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/32b24d35-1405-4f97-ad1a-126afb5b291c/"
    ],
    "ch": 1000
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/7110fcbd-4d2f-4c42-ad55-7ce9964c486a/",
    "uuid": "7110fcbd-4d2f-4c42-ad55-7ce9964c486a",
    "codigo": 93,
    "descricao": "Técnico em Mecânica Integrado ao Ensino Médio - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/ CEFET- PB nº 035, de 26 de dezembro de 2008.",
    "coordenador": "Francisco Antonio de Franca Neto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/43384155-a66c-444c-b313-a118bd27abde/",
      "uuid": "43384155-a66c-444c-b313-a118bd27abde"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/43384155-a66c-444c-b313-a118bd27abde/"
    ],
    "ch": 3894
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/c3a1fdae-5c50-4dd1-a09a-48383dc1cd98/",
    "uuid": "c3a1fdae-5c50-4dd1-a09a-48383dc1cd98",
    "codigo": 95,
    "descricao": "Técnico em Meio Ambiente Integrado (PROEJA) - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado EJA",
    "resolucao_criacao": "RESOLUÇÃO CS /IFPB N° 52, DE 27 DE MARÇO DE 2015.",
    "coordenador": "Juan Parente Santos",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bd7a209d-9feb-4772-aff6-e7977a13a2bf/",
      "uuid": "bd7a209d-9feb-4772-aff6-e7977a13a2bf"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bd7a209d-9feb-4772-aff6-e7977a13a2bf/"
    ],
    "ch": 2204
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/15e46a87-14e4-4650-8559-4b9a5f09ddbb/",
    "uuid": "15e46a87-14e4-4650-8559-4b9a5f09ddbb",
    "codigo": 96,
    "descricao": "Técnico em Mineração Subsequente - Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO CD/CEFET/PB Nº 024, DE 26 DE DEZEMBRO DE 2008.",
    "coordenador": "Lidiane Cristina Felix Gomes",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/308b6e80-0e36-493f-888f-5db39496c8c0/",
      "uuid": "308b6e80-0e36-493f-888f-5db39496c8c0"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ce459ad2-7b72-4fb5-97bc-49e53158a98e/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/308b6e80-0e36-493f-888f-5db39496c8c0/"
    ],
    "ch": 1416
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/6f01b961-a3e0-42f4-bbb5-9e74978bbef5/",
    "uuid": "6f01b961-a3e0-42f4-bbb5-9e74978bbef5",
    "codigo": 102,
    "descricao": "Técnico em Controle Ambiental Integrado - Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFETPB nº 031, de 26 de dezembro de 2008.",
    "coordenador": "Carlos Alberto Nobrega Sobrinho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/03d538d0-f358-44b5-be19-5f626958b2ad/",
      "uuid": "03d538d0-f358-44b5-be19-5f626958b2ad"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/03d538d0-f358-44b5-be19-5f626958b2ad/"
    ],
    "ch": 3544
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/609ad2a4-9a8c-4daa-b7af-b8d7f3b994e6/",
    "uuid": "609ad2a4-9a8c-4daa-b7af-b8d7f3b994e6",
    "codigo": 103,
    "descricao": "Técnico em Instrumento Musical Integrado - Monteiro",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 75, de 17 de setembro de 2010, convalidada pela Resolução CS/IFPB nº 82, de 27 de setembro de 2010.",
    "coordenador": "Marlon Barros de Lima",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c90d1051-2d84-4fef-96a7-7e877cf8f96c/",
      "uuid": "c90d1051-2d84-4fef-96a7-7e877cf8f96c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c50ef32a-13f2-4cdd-9732-7770a1659a46/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c90d1051-2d84-4fef-96a7-7e877cf8f96c/"
    ],
    "ch": 3469
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/520894db-a5b6-45a0-874c-636536da7855/",
    "uuid": "520894db-a5b6-45a0-874c-636536da7855",
    "codigo": 104,
    "descricao": "Técnico em Manutenção e Suporte em Informática Integrado - Monteiro",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 38, de 10 de setembro de 2009. Convalidada pela Resolução CS/IFPB nº 142 - CS de 11 de agosto de 2017.",
    "coordenador": "Fabio Sampaio dos Santos Camara",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1af98021-8696-4f7d-9d4e-bd0faab2444a/",
      "uuid": "1af98021-8696-4f7d-9d4e-bd0faab2444a"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/385b7403-14c2-4713-a244-8c04469794b2/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1af98021-8696-4f7d-9d4e-bd0faab2444a/"
    ],
    "ch": 3842
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/0e7f5cae-aa78-4598-aa1f-c27e1d2100cc/",
    "uuid": "0e7f5cae-aa78-4598-aa1f-c27e1d2100cc",
    "codigo": 105,
    "descricao": "Técnico em Manutenção e Suporte em Informática Subsequente - Monteiro",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução Nº 023/2008 - CD/CEFET da Paraíba, de 26 de dezembro de 2008.",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7a67501d-ccc8-4574-9bde-aea7af27504e/",
      "uuid": "7a67501d-ccc8-4574-9bde-aea7af27504e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7a67501d-ccc8-4574-9bde-aea7af27504e/"
    ],
    "ch": 1000
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/228f30f3-3590-4912-b071-770532e71ac1/",
    "uuid": "228f30f3-3590-4912-b071-770532e71ac1",
    "codigo": 106,
    "descricao": "Técnico em Edificações Subsequente - Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET/PB nº 025 e 025-B, de 26 de dezembro de 2008.",
    "coordenador": "Pablo Francisco Honorato Sampaio",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/09ea8a50-8676-4c69-8058-dfb8e665c830/",
      "uuid": "09ea8a50-8676-4c69-8058-dfb8e665c830"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/09ea8a50-8676-4c69-8058-dfb8e665c830/"
    ],
    "ch": 1335
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ed288b06-1a77-4975-ac04-5bafa6c33538/",
    "uuid": "ed288b06-1a77-4975-ac04-5bafa6c33538",
    "codigo": 107,
    "descricao": "Técnico em Manutenção e Suporte em Informática Subsequente - Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET/PB nº 023 e 023-C, de 26 de dezembro de 2008.",
    "coordenador": "Yara Regina Pereira Silva Menezes de Sa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/40cb94f6-e83d-4a71-a168-83389f00456e/",
      "uuid": "40cb94f6-e83d-4a71-a168-83389f00456e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/40cb94f6-e83d-4a71-a168-83389f00456e/"
    ],
    "ch": 999
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ad605294-c188-4553-a11f-2536c97acd7d/",
    "uuid": "ad605294-c188-4553-a11f-2536c97acd7d",
    "codigo": 124,
    "descricao": "Especialização em Desenvolvimento e Meio Ambiente",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "RESOLUÇÃO-CS N° 25, DE 02 DE AGOSTO DE 2018.",
    "coordenador": "Pedro Henrique Pinheiro Xavier Pinto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7a2240fc-a28e-4ac0-9220-aa8c76037085/",
      "uuid": "7a2240fc-a28e-4ac0-9220-aa8c76037085"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7a2240fc-a28e-4ac0-9220-aa8c76037085/"
    ],
    "ch": 420
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/f339ebd4-c2ca-4b0d-8cbb-e4432273a23c/",
    "uuid": "f339ebd4-c2ca-4b0d-8cbb-e4432273a23c",
    "codigo": 139,
    "descricao": "Licenciatura em Física - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "Autorização: Resolução CS/IFPB Nº 161, de 01 de outubro de 2012.",
    "coordenador": "Francisco Geraldo da Costa Filho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6d4df1ab-9072-494c-9fca-895216ff0faf/",
      "uuid": "6d4df1ab-9072-494c-9fca-895216ff0faf"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6d4df1ab-9072-494c-9fca-895216ff0faf/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8ad9aca3-b58d-47f0-8c4a-49c07eca19f4/"
    ],
    "ch": 3005
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/3cbe21dd-d21a-42d7-82db-4a3f0aff1f2c/",
    "uuid": "3cbe21dd-d21a-42d7-82db-4a3f0aff1f2c",
    "codigo": 140,
    "descricao": "Licenciatura em Matemática - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "Autorização: Resolução CS/IFPB Nº 86, de 28 de setembro de 2010.",
    "coordenador": "Jonathas Jeronimo Barbosa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/48564fec-9cce-47fe-9033-b4dd63cabca6/",
      "uuid": "48564fec-9cce-47fe-9033-b4dd63cabca6"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/48564fec-9cce-47fe-9033-b4dd63cabca6/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1e944e13-013d-4bc3-ab13-ed6414823b42/"
    ],
    "ch": 3160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/109e05e0-497a-4500-a1e9-5dfd69a96b36/",
    "uuid": "109e05e0-497a-4500-a1e9-5dfd69a96b36",
    "codigo": 144,
    "descricao": "Mestrado Acadêmico em Engenharia Elétrica - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Mestrado",
    "resolucao_criacao": "Resolução Conselho Superior Nº 29, de 23 de abril de 2010.",
    "coordenador": "Suzete Elida Nobrega Correia",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/50a811bb-4a6b-4017-9ce0-825a42479551/",
      "uuid": "50a811bb-4a6b-4017-9ce0-825a42479551"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/50a811bb-4a6b-4017-9ce0-825a42479551/"
    ],
    "ch": 360
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/02d602f8-019f-4419-823e-f6983739a0eb/",
    "uuid": "02d602f8-019f-4419-823e-f6983739a0eb",
    "codigo": 160,
    "descricao": "Técnico em Agroindústria Integrado ao Ensino Médio (PROEJA) - Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado EJA",
    "resolucao_criacao": "Resolução CS/IFPB nº 11, de 05 de junho de 2009.",
    "coordenador": "Josefa Josydeth Santana Candida",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b7e4d49c-67a1-48b2-9d5a-c0046bbf6c76/",
      "uuid": "b7e4d49c-67a1-48b2-9d5a-c0046bbf6c76"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b7e4d49c-67a1-48b2-9d5a-c0046bbf6c76/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/84f807cd-391b-40a4-87c3-d42321071ad5/"
    ],
    "ch": 1999
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/d4abb939-9131-47fc-8a43-061008415811/",
    "uuid": "d4abb939-9131-47fc-8a43-061008415811",
    "codigo": 175,
    "descricao": "Tecnologia em Construção de Edifícios - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Reconhecimento: Portaria SERES/ MEC Nº 297,  de 14/04/2015, publicada no D.O.U. Nº 72, Seção 1, Folha nº 13, de 16/04/2015.",
    "coordenador": "Frankslale Fabian Diniz de Andrade Meira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9eaf2e7e-2632-4698-9e03-f1621350ef48/",
      "uuid": "9eaf2e7e-2632-4698-9e03-f1621350ef48"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9eaf2e7e-2632-4698-9e03-f1621350ef48/"
    ],
    "ch": 2618
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/23909be5-8638-4c09-9652-be8f8018bbf1/",
    "uuid": "23909be5-8638-4c09-9652-be8f8018bbf1",
    "codigo": 177,
    "descricao": "Tecnologia em Telemática - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Portaria SERES/MEC nº 282, de 01/07/2016, Publicado no D.O.U. nº 126, Seção 1, Folhas nº 16 de 04/07/2016.",
    "coordenador": "Jose Gilson de Lucena Gomes",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c1a246c7-374d-44cc-8cac-ec3a804e64da/",
      "uuid": "c1a246c7-374d-44cc-8cac-ec3a804e64da"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c1a246c7-374d-44cc-8cac-ec3a804e64da/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/14997a4e-985a-4595-a3d4-3f173b597f98/"
    ],
    "ch": 2580
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ba1b9840-60eb-431f-98e1-7a03d45800f5/",
    "uuid": "ba1b9840-60eb-431f-98e1-7a03d45800f5",
    "codigo": 180,
    "descricao": "Técnico em Meio Ambiente Subsequente - Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET/PB nº 29, de 26 de dezembro de 2008, convalidada pela Resolução CS/IFPB nº 156, de 24 de setembro de\r\n2013",
    "coordenador": "Andressa de Araujo Porto Vieira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/4550480e-b786-4236-8f4a-5d213e4fca92/",
      "uuid": "4550480e-b786-4236-8f4a-5d213e4fca92"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/4550480e-b786-4236-8f4a-5d213e4fca92/"
    ],
    "ch": 1204
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/132a2da0-a49f-46a1-b776-d4dfaa4e2deb/",
    "uuid": "132a2da0-a49f-46a1-b776-d4dfaa4e2deb",
    "codigo": 181,
    "descricao": "TÉCNICO EM ADMINISTRAÇÃO INTEGRADO AO ENSINO MÉDIO NA MODALIDADE PROEJA",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado EJA",
    "resolucao_criacao": "Resolução n° 77/2015. Consuper 02 de junho de 2015",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2c5cf2ba-4e4d-43d0-aec8-17d42f77b96b/",
      "uuid": "2c5cf2ba-4e4d-43d0-aec8-17d42f77b96b"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2c5cf2ba-4e4d-43d0-aec8-17d42f77b96b/"
    ],
    "ch": 1951
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e29154c0-0873-4964-b8b4-73ef523a6948/",
    "uuid": "e29154c0-0873-4964-b8b4-73ef523a6948",
    "codigo": 182,
    "descricao": "Técnico em Agroindústria Integrado - Sousa/São Gonçalo",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 65, de 30 de novembro de 2009, convalidada pela Resolução CS/IFPB n° 292, de 12 de dezembro de 2014.",
    "coordenador": "Suely Cristina Pereira de Lima Oliveira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a3d6ad9c-8877-4591-92c9-e7dc71b59988/",
      "uuid": "a3d6ad9c-8877-4591-92c9-e7dc71b59988"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a3d6ad9c-8877-4591-92c9-e7dc71b59988/"
    ],
    "ch": 3332
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/9ae36508-68d9-4bca-a32a-176da3deaaeb/",
    "uuid": "9ae36508-68d9-4bca-a32a-176da3deaaeb",
    "codigo": 184,
    "descricao": "Técnico em Agropecuária Integrado - Sousa/São Gonçalo",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 17, de 10 de junho de 2009, convalidada pela Resolução CS/IFPB n° 210, de 10 de outubro de 2014.",
    "coordenador": "Marcelo Helder Medeiros Santana",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/06bc72f3-1c8c-4110-a0a2-66d6e6d67e78/",
      "uuid": "06bc72f3-1c8c-4110-a0a2-66d6e6d67e78"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/06bc72f3-1c8c-4110-a0a2-66d6e6d67e78/"
    ],
    "ch": 3498
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/020e1cf2-9bb1-461e-9354-faf124ad70e2/",
    "uuid": "020e1cf2-9bb1-461e-9354-faf124ad70e2",
    "codigo": 185,
    "descricao": "Técnico em Agropecuária Subsequente - Sousa/São Gonçalo",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 62, de 30 de novembro de 2009; convalidada pela Resolução nº 211, de 10 de outubro de 2014.",
    "coordenador": "Marcelo Helder Medeiros Santana",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8fcd1fe1-abdc-4b83-9e4e-250c793261eb/",
      "uuid": "8fcd1fe1-abdc-4b83-9e4e-250c793261eb"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8fcd1fe1-abdc-4b83-9e4e-250c793261eb/"
    ],
    "ch": 1231
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ccdf693d-6a2c-4481-a680-96c676a3ad93/",
    "uuid": "ccdf693d-6a2c-4481-a680-96c676a3ad93",
    "codigo": 186,
    "descricao": "Técnico em Edificações Subsequente - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 63, de 22 de agosto de 2011.",
    "coordenador": "Ana Maria Kluppel Pereira Gaiao",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a547ec42-c567-48e6-a1b0-9e57a3de1710/",
      "uuid": "a547ec42-c567-48e6-a1b0-9e57a3de1710"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a547ec42-c567-48e6-a1b0-9e57a3de1710/"
    ],
    "ch": 1264
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/590731c6-bfc4-41c1-963e-786a231c0730/",
    "uuid": "590731c6-bfc4-41c1-963e-786a231c0730",
    "codigo": 191,
    "descricao": "Técnico em Eletrônica Subsequente - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 33, de 10 de setembro de 2009.",
    "coordenador": "Rafaelle de Aguiar Correia",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/4a0a4ccb-4189-4399-b1ae-7191c8f45157/",
      "uuid": "4a0a4ccb-4189-4399-b1ae-7191c8f45157"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/4a0a4ccb-4189-4399-b1ae-7191c8f45157/"
    ],
    "ch": 1382
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/740bddc3-b684-43c4-8f15-aee9b3284684/",
    "uuid": "740bddc3-b684-43c4-8f15-aee9b3284684",
    "codigo": 192,
    "descricao": "Técnico em Eletrotécnica Subsequente - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 035, de 26/12/2008.",
    "coordenador": "Vagner Fonseca Nobrega",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f37e78a5-ea37-456b-b6ce-c82b0b0c444a/",
      "uuid": "f37e78a5-ea37-456b-b6ce-c82b0b0c444a"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f37e78a5-ea37-456b-b6ce-c82b0b0c444a/"
    ],
    "ch": 1313
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/72f42894-c5e3-4c50-9230-bda575144cd6/",
    "uuid": "72f42894-c5e3-4c50-9230-bda575144cd6",
    "codigo": 195,
    "descricao": "Técnico em Equipamentos Biomédicos Subsequente - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 035, de 26/12/2008.",
    "coordenador": "Cristovao Macio de Oliveira Lima Filho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/61e1e708-d7e7-4495-8cb5-caddfcd670fa/",
      "uuid": "61e1e708-d7e7-4495-8cb5-caddfcd670fa"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/61e1e708-d7e7-4495-8cb5-caddfcd670fa/"
    ],
    "ch": 1325
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ffa97c16-750a-426c-a720-9022b028d426/",
    "uuid": "ffa97c16-750a-426c-a720-9022b028d426",
    "codigo": 198,
    "descricao": "Técnico em Informática Integrado - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 074/2010 , de 17 de setembro de 2010. Convalidada pela Resolução CS/IFPB nº 81, de 27 de setembro de 2010.",
    "coordenador": "Bruno Jacome Cavalcanti",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/95d03dc8-83fe-4062-8075-b75aa19bcd4a/",
      "uuid": "95d03dc8-83fe-4062-8075-b75aa19bcd4a"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/95d03dc8-83fe-4062-8075-b75aa19bcd4a/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2adec418-1cb0-47fe-a78e-184f12f6726d/"
    ],
    "ch": 3575
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/cbb799b5-24fa-42a0-b3f1-db3d60aa4551/",
    "uuid": "cbb799b5-24fa-42a0-b3f1-db3d60aa4551",
    "codigo": 199,
    "descricao": "Técnico em Informática Integrado - Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 62 de 19 de agosto de 2011.",
    "coordenador": "Francisco Tiberio Felizmino de Araujo",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e4db985f-19b3-4e5f-8b3b-01d3d948f5c4/",
      "uuid": "e4db985f-19b3-4e5f-8b3b-01d3d948f5c4"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e4db985f-19b3-4e5f-8b3b-01d3d948f5c4/"
    ],
    "ch": 3334
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/f44f9a5c-4270-4ac9-a075-dd2423421dff/",
    "uuid": "f44f9a5c-4270-4ac9-a075-dd2423421dff",
    "codigo": 201,
    "descricao": "Técnico em Informática Subsequente - Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 17, de 10 de junho de 2009, convalidada pela Resolução CS/IFPB n° 210, de 10 de outubro de 2014",
    "coordenador": "Francisco Tiberio Felizmino de Araujo",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8be5bfd2-5f56-4200-ae95-6c49fced8790/",
      "uuid": "8be5bfd2-5f56-4200-ae95-6c49fced8790"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8be5bfd2-5f56-4200-ae95-6c49fced8790/"
    ],
    "ch": 1201
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/5e6bfb35-9947-4a00-b8aa-31883a07e635/",
    "uuid": "5e6bfb35-9947-4a00-b8aa-31883a07e635",
    "codigo": 204,
    "descricao": "Técnico em Manutenção e Suporte em Informática Subsequente - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 034, de 21 de dezembro de 2006 e Resolução CD/CEFET-PB nº 035, de 26 de dezembro de 2008.",
    "coordenador": "Bruno Jacome Cavalcanti",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0e659ce7-1e87-4e73-9cd8-c9a2fee86afa/",
      "uuid": "0e659ce7-1e87-4e73-9cd8-c9a2fee86afa"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0e659ce7-1e87-4e73-9cd8-c9a2fee86afa/"
    ],
    "ch": 1000
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/df94a8e2-98cc-4bcc-8d42-b10d1bcf663b/",
    "uuid": "df94a8e2-98cc-4bcc-8d42-b10d1bcf663b",
    "codigo": 206,
    "descricao": "Técnico em Mecânica Subsequente - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 035, de 26/12/2008.",
    "coordenador": "Francisco Antonio de Franca Neto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9af2f411-144b-4aff-a6b8-61f3baf61ef5/",
      "uuid": "9af2f411-144b-4aff-a6b8-61f3baf61ef5"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9af2f411-144b-4aff-a6b8-61f3baf61ef5/"
    ],
    "ch": 1200
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/c17cb7ad-cdf1-4335-9b67-f3d51ed63f7f/",
    "uuid": "c17cb7ad-cdf1-4335-9b67-f3d51ed63f7f",
    "codigo": 207,
    "descricao": "Técnico em Meio Ambiente Integrado - Sousa/São Gonçalo",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 76, de 17 de setembro de 2010, convalidada pela Resolução CS/IFPB nº 83, de 27 de setembro de 2010.",
    "coordenador": "Jose Guimaraes de Carvalho Neto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/07268065-6aff-4e28-955c-1a1266c3c314/",
      "uuid": "07268065-6aff-4e28-955c-1a1266c3c314"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/07268065-6aff-4e28-955c-1a1266c3c314/"
    ],
    "ch": 3367
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/550cd25a-117b-4765-9e58-3ec4390a9365/",
    "uuid": "550cd25a-117b-4765-9e58-3ec4390a9365",
    "codigo": 208,
    "descricao": "Técnico em Meio Ambiente Integrado - Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 59, de 19 de agosto de 2011, convalidada pela Resolução CS/IFPB nº 235, de 30 de dezembro de 2013.",
    "coordenador": "Andressa de Araujo Porto Vieira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0578a216-f161-464c-a58a-05e9879bbc4e/",
      "uuid": "0578a216-f161-464c-a58a-05e9879bbc4e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0578a216-f161-464c-a58a-05e9879bbc4e/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2ac2160d-dbc7-4578-87fb-811f8d428aef/"
    ],
    "ch": 3542
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/baf755c8-2437-40f8-935d-d720d38d916d/",
    "uuid": "baf755c8-2437-40f8-935d-d720d38d916d",
    "codigo": 211,
    "descricao": "Técnico em Petróleo e Gás Integrado - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução  CS/IFPB nº 032/2009, de 10 de setembro de 2009",
    "coordenador": "Iliana de Oliveira Guimaraes",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8928fdbd-a287-4320-8325-b038a5ccfba9/",
      "uuid": "8928fdbd-a287-4320-8325-b038a5ccfba9"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8928fdbd-a287-4320-8325-b038a5ccfba9/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5d48bc06-a4d6-4dff-9855-2661c770f20d/"
    ],
    "ch": 3472
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/852fa122-4934-4b60-a2ca-db1513863904/",
    "uuid": "852fa122-4934-4b60-a2ca-db1513863904",
    "codigo": 213,
    "descricao": "Técnico em Recursos Pesqueiros Integrado - Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 140, de 15 de agosto de 2012.",
    "coordenador": "Joana Angelica Lyra Vogeley de Carvalho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5461cac7-85b5-43ab-bb8a-c14b2e62ef39/",
      "uuid": "5461cac7-85b5-43ab-bb8a-c14b2e62ef39"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5461cac7-85b5-43ab-bb8a-c14b2e62ef39/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/4c8aab47-7b26-434f-9ebd-bf5cbe18e195/"
    ],
    "ch": 3406
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/583bc91e-b58f-4b3d-932d-fe988c2cf0b0/",
    "uuid": "583bc91e-b58f-4b3d-932d-fe988c2cf0b0",
    "codigo": 214,
    "descricao": "Técnico em Recursos Pesqueiros Subsequente - Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO CS/IFPB Nº 141, DE 15 DE AGOSTO DE 2012.",
    "coordenador": "Joana Angelica Lyra Vogeley de Carvalho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f3be2b58-9056-42bc-a318-468481e44161/",
      "uuid": "f3be2b58-9056-42bc-a318-468481e44161"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f3be2b58-9056-42bc-a318-468481e44161/"
    ],
    "ch": 1160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/8434b2c8-4eec-459e-aecb-bf4aaef3b260/",
    "uuid": "8434b2c8-4eec-459e-aecb-bf4aaef3b260",
    "codigo": 215,
    "descricao": "Técnico em Secretariado Subsequente - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 229, de 10 de outubro de 2014.",
    "coordenador": "Everaldo Souto Salvador",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0f218cd1-7433-4f59-9739-2e5f339eb403/",
      "uuid": "0f218cd1-7433-4f59-9739-2e5f339eb403"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0f218cd1-7433-4f59-9739-2e5f339eb403/"
    ],
    "ch": 800
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/fc2c25b4-3506-4a03-97b4-156480406f70/",
    "uuid": "fc2c25b4-3506-4a03-97b4-156480406f70",
    "codigo": 218,
    "descricao": "Técnico em Mineração Integrado - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 033, de 21 de dezembro de 2006 e Resolução CD/CEFET-PB nº 035, de 26 de dezembro de 2008.",
    "coordenador": "Francisco de Assis Souza",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/50c3729e-d1b3-4546-9666-793a23a97a6d/",
      "uuid": "50c3729e-d1b3-4546-9666-793a23a97a6d"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5185b156-3f2a-4b98-a8fd-8ff1405b8ec4/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/50c3729e-d1b3-4546-9666-793a23a97a6d/"
    ],
    "ch": 3944
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/8ba90a25-a77a-442a-8acd-b9a28b3e92ac/",
    "uuid": "8ba90a25-a77a-442a-8acd-b9a28b3e92ac",
    "codigo": 219,
    "descricao": "Técnico em Eventos Integrado (PROEJA) - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado EJA",
    "resolucao_criacao": "Resolução CS/IFPB nº 013, de 05 de junho de 2009.",
    "coordenador": "Viviane Costa Fonseca de Almeida Medeiros",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/35d50610-736a-4a97-b932-d7c03f9fb8d7/",
      "uuid": "35d50610-736a-4a97-b932-d7c03f9fb8d7"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/35d50610-736a-4a97-b932-d7c03f9fb8d7/"
    ],
    "ch": 2354
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/61ff6995-90a3-4e75-b7b8-6be67abf29f0/",
    "uuid": "61ff6995-90a3-4e75-b7b8-6be67abf29f0",
    "codigo": 220,
    "descricao": "Técnico em Informática Subsequente - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 96, de 02 de junho de 2015.",
    "coordenador": "Bruno Jacome Cavalcanti",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7ddd7279-c4fe-4f81-8e2d-7c94eca46573/",
      "uuid": "7ddd7279-c4fe-4f81-8e2d-7c94eca46573"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7ddd7279-c4fe-4f81-8e2d-7c94eca46573/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9f986822-e91c-4983-b49e-d30db5e97dfa/"
    ],
    "ch": 1034
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/bdd90b55-ce1e-4e9c-a5a1-3672e31c81fa/",
    "uuid": "bdd90b55-ce1e-4e9c-a5a1-3672e31c81fa",
    "codigo": 221,
    "descricao": "Técnico em Mineração Subsequente - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CD/CEFET-PB nº 035, de 21 de dezembro de 2006 e Resolução CD/CEFET-PB nº 035, de 26 de dezembro de 2008.",
    "coordenador": "Francisco de Assis Souza",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1b9fd87e-8d95-4d60-83d8-b3056ac2dd64/",
      "uuid": "1b9fd87e-8d95-4d60-83d8-b3056ac2dd64"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1b9fd87e-8d95-4d60-83d8-b3056ac2dd64/"
    ],
    "ch": 1199
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b86c7e5c-36fd-4465-8e6c-93c956931f27/",
    "uuid": "b86c7e5c-36fd-4465-8e6c-93c956931f27",
    "codigo": 224,
    "descricao": "Técnico em Informática Integrado - Guarabira",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS GUARABIRA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 142, de 15 de agosto de 2012,  convalidada pela Resolução CS/IFPB nº 17, de 02 de agosto de 2018.",
    "coordenador": "Otacilio de Araujo Ramos Neto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1fdf6abb-21c2-422e-b1e0-16a75c816179/",
      "uuid": "1fdf6abb-21c2-422e-b1e0-16a75c816179"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1fdf6abb-21c2-422e-b1e0-16a75c816179/"
    ],
    "ch": 3641
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/1198eba8-aee4-48ad-9f47-2c7dfca6202a/",
    "uuid": "1198eba8-aee4-48ad-9f47-2c7dfca6202a",
    "codigo": 225,
    "descricao": "Técnico em Edificações Integrado - Guarabira",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS GUARABIRA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 133, de 26 de agosto de 2013.",
    "coordenador": "Taysa Tamara Viana Machado",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8cd63f57-89cb-475e-8d02-09007abe1f86/",
      "uuid": "8cd63f57-89cb-475e-8d02-09007abe1f86"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/8cd63f57-89cb-475e-8d02-09007abe1f86/"
    ],
    "ch": 3939
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/02dbcd8f-8218-455f-9eda-728974e75c6a/",
    "uuid": "02dbcd8f-8218-455f-9eda-728974e75c6a",
    "codigo": 226,
    "descricao": "Tecnologia em Gestão Comercial - Guarabira",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS GUARABIRA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "Resolução CS/IFPB nº 67, de 06 de outubro de 2011, convalidada pela Resolução CS/IFPB nº 62, de 27 de março de 2015.",
    "coordenador": "Raissa de Azevedo Barbosa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e0b9de9a-3b9f-4146-8b33-7ce1d0efb4c9/",
      "uuid": "e0b9de9a-3b9f-4146-8b33-7ce1d0efb4c9"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ec27dbea-42f2-4cba-9ee6-1f4f18ad0b14/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e0b9de9a-3b9f-4146-8b33-7ce1d0efb4c9/"
    ],
    "ch": 1735
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/47b898c3-dcc1-4e21-b62e-b33b8b757aa4/",
    "uuid": "47b898c3-dcc1-4e21-b62e-b33b8b757aa4",
    "codigo": 227,
    "descricao": "Técnico em Contabilidade Integrado - Guarabira",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS GUARABIRA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 61, de 19 de agosto de 2011, convalidada pela Resolução CS/IFPB nº 37-CS, de 20 de Fevereiro de 2017.",
    "coordenador": "Aniuska Almeida Nepomuceno Fontinelli",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/01361a83-509b-4db6-b928-1b9fa0cdbc25/",
      "uuid": "01361a83-509b-4db6-b928-1b9fa0cdbc25"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/01361a83-509b-4db6-b928-1b9fa0cdbc25/"
    ],
    "ch": 3535
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a853f2ec-0a59-4581-a54c-70f30249fc95/",
    "uuid": "a853f2ec-0a59-4581-a54c-70f30249fc95",
    "codigo": 228,
    "descricao": "Técnico em Edificações Integrado - Catolé do Rocha",
    "diretoria": "DIRETORIA GERAL - CAMPUS CATOLÉ DO ROCHA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Autorização/Resolução CS/IFPB Nº 115, de 22/07/2015.",
    "coordenador": "Jose de Arimateia Augusto de Lima",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/af44b260-7567-4dd4-a2ff-c23ff24e41ce/",
      "uuid": "af44b260-7567-4dd4-a2ff-c23ff24e41ce"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/af44b260-7567-4dd4-a2ff-c23ff24e41ce/"
    ],
    "ch": 3409
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/09121154-a024-43b1-bf7d-1dd7db11172e/",
    "uuid": "09121154-a024-43b1-bf7d-1dd7db11172e",
    "codigo": 229,
    "descricao": "Técnico em Informática Integrado - Campus Esperança",
    "diretoria": "DIREÇÃO GERAL - CAMPUS ESPERANÇA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 110, de 22 de julho de 2015, convalidada pela Resolução CS/IFPB nº 158, de 13 de novembro de 2015.",
    "coordenador": "Andre Atanasio Maranhao Almeida",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cd48e22b-f8d0-48dd-8987-e3baa2b5de21/",
      "uuid": "cd48e22b-f8d0-48dd-8987-e3baa2b5de21"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cd48e22b-f8d0-48dd-8987-e3baa2b5de21/"
    ],
    "ch": 3373
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a656ded1-1acb-4a8c-bbab-bf8f9073b087/",
    "uuid": "a656ded1-1acb-4a8c-bbab-bf8f9073b087",
    "codigo": 230,
    "descricao": "Técnico em Edificações Integrado - Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Autorização/Resolução CS/IFPB Nº 116, de 22/07/2015.",
    "coordenador": "Pedro Henrique Silva Gabi",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ce7a12a2-2e35-4eff-8885-3ed6060fbf37/",
      "uuid": "ce7a12a2-2e35-4eff-8885-3ed6060fbf37"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ce7a12a2-2e35-4eff-8885-3ed6060fbf37/"
    ],
    "ch": 3409
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b043f34c-65b6-4748-9099-6edcd5185a6c/",
    "uuid": "b043f34c-65b6-4748-9099-6edcd5185a6c",
    "codigo": 231,
    "descricao": "Técnico em Automação Industrial Integrado - Itabaiana",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITABAIANA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Autorização/Resolução CS/IFPB Nº 118, de 22/07/2015.",
    "coordenador": "Dandara Monalisa Mariz da Silva Quirino Bezerra",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ebefce0c-97af-4ed4-8e00-002d55cb9a17/",
      "uuid": "ebefce0c-97af-4ed4-8e00-002d55cb9a17"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ebefce0c-97af-4ed4-8e00-002d55cb9a17/"
    ],
    "ch": 3422
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/cc0dd3a9-ac6e-4873-8551-4424e70280a1/",
    "uuid": "cc0dd3a9-ac6e-4873-8551-4424e70280a1",
    "codigo": 232,
    "descricao": "Técnico em Eletromecânica Integrado - Itabaiana",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITABAIANA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Autorização/Resolução CS/IFPB Nº 119, de 22/07/2015.",
    "coordenador": "Jarbas Santos Medeiros",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b98eaf3c-9724-4704-b91c-d7bf494cd0a6/",
      "uuid": "b98eaf3c-9724-4704-b91c-d7bf494cd0a6"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b98eaf3c-9724-4704-b91c-d7bf494cd0a6/"
    ],
    "ch": 3419
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/967073f3-89fb-4f61-8f22-eb8a1053108d/",
    "uuid": "967073f3-89fb-4f61-8f22-eb8a1053108d",
    "codigo": 233,
    "descricao": "Técnico em Informática Subsequente -  Campus Esperança",
    "diretoria": "DIREÇÃO GERAL - CAMPUS ESPERANÇA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 111, de 22 de julho de 2015, convalidada pela Resolução CS/IFPB nº 169, de 13 de novembro de 2015.",
    "coordenador": "Andre Atanasio Maranhao Almeida",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f9396663-d6ce-410b-bd71-8ac96fe47a03/",
      "uuid": "f9396663-d6ce-410b-bd71-8ac96fe47a03"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f9396663-d6ce-410b-bd71-8ac96fe47a03/"
    ],
    "ch": 1233
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/abfade11-d115-447c-9460-d27c85d9b435/",
    "uuid": "abfade11-d115-447c-9460-d27c85d9b435",
    "codigo": 234,
    "descricao": "Técnico em Informática Integrado - Santa Rita",
    "diretoria": "DIREÇÃO GERAL - CAMPUS SANTA RITA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 112, de 22 de julho de 2015, convalidada pela Resolução CS/IFPB nº 243, de 17 de dezembro de 2015.",
    "coordenador": "Ligiane Gomes Marinho Salvino",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c1162955-e259-4e56-98d4-12d1ff49075e/",
      "uuid": "c1162955-e259-4e56-98d4-12d1ff49075e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c1162955-e259-4e56-98d4-12d1ff49075e/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9aff7db0-305e-43fe-9089-433d6e890370/"
    ],
    "ch": 3308
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e608081d-3d12-4716-81ef-6e522719ddcd/",
    "uuid": "e608081d-3d12-4716-81ef-6e522719ddcd",
    "codigo": 235,
    "descricao": "Técnico em Meio Ambiente Integrado - Santa Rita",
    "diretoria": "DIREÇÃO GERAL - CAMPUS SANTA RITA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "- Resolução CS/IFPB nº 108, de 22 de julho de 2015, convalidada pela Resolução CS/IFPB nº 231, de 17 de dezembro de 2015.",
    "coordenador": "Magdalena Duarte Costa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/74af59b6-455f-4087-bdf7-a5841389d462/",
      "uuid": "74af59b6-455f-4087-bdf7-a5841389d462"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/74af59b6-455f-4087-bdf7-a5841389d462/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e32f9082-51e5-480a-9288-2466b865cefb/"
    ],
    "ch": 3307
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/70048803-598f-439e-a7f4-7b0a96569494/",
    "uuid": "70048803-598f-439e-a7f4-7b0a96569494",
    "codigo": 236,
    "descricao": "Técnico em Cuidados de Idosos Subsequente - Mangabeira",
    "diretoria": "CENTRO DE REFERENCIA DE MANGABEIRA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB n°120, de 31/07/2015 convalidada pela Resolução CS/IFPB n° 33, de 19 dezembro de 2018.",
    "coordenador": "Dione Marques Figueiredo Guedes Pereira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f263ea2a-28b8-4798-b901-cecd00857d61/",
      "uuid": "f263ea2a-28b8-4798-b901-cecd00857d61"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f263ea2a-28b8-4798-b901-cecd00857d61/"
    ],
    "ch": 1329
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/12ff4df6-11be-4e3f-b335-f1065fc53d25/",
    "uuid": "12ff4df6-11be-4e3f-b335-f1065fc53d25",
    "codigo": 237,
    "descricao": "Técnico em Pesca Subsequente - Cabedelo Centro/Lucena",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO CABEDELO CENTRO - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 113, de 22 de julho de 2015, convalidada pela Resolução CS/IFPB nº 33-CS, de 20 de fevereiro de 2017.",
    "coordenador": "Marceu Oliveira Adissi",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e09f2dbf-5942-4945-bce1-7ed561e2138a/",
      "uuid": "e09f2dbf-5942-4945-bce1-7ed561e2138a"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e09f2dbf-5942-4945-bce1-7ed561e2138a/"
    ],
    "ch": 993
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b2cadaf3-2484-4b4e-934b-b26283528398/",
    "uuid": "b2cadaf3-2484-4b4e-934b-b26283528398",
    "codigo": 238,
    "descricao": "Técnico Experimental em Náutica Subsequente - Cabedelo Centro",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO CABEDELO CENTRO - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 114, de 22 de julho de 2015, convalidada pela Resolução CS/IFPB nº 38-CS, de 20 de fevereiro de 2017.",
    "coordenador": "Veronica Pereira Batista",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fb9ccd56-75a2-4cf2-a89a-8aef5e40acff/",
      "uuid": "fb9ccd56-75a2-4cf2-a89a-8aef5e40acff"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fb9ccd56-75a2-4cf2-a89a-8aef5e40acff/"
    ],
    "ch": 1000
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/d196beee-bfc5-43a5-aeb8-f1e3e1381e17/",
    "uuid": "d196beee-bfc5-43a5-aeb8-f1e3e1381e17",
    "codigo": 242,
    "descricao": "Técnico em Eletrotécnica Integrado - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 109, de 22 de julho de 2015, convalidada pela Resolução CS/IFPB nº 161, de 15 de dezembro de 2017.",
    "coordenador": "Flavio Torres Filho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/46559bf7-3b5b-43ae-a2d1-d7fae029f914/",
      "uuid": "46559bf7-3b5b-43ae-a2d1-d7fae029f914"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/46559bf7-3b5b-43ae-a2d1-d7fae029f914/"
    ],
    "ch": 3978
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/cda57a5d-a8af-402d-af00-49fabf1a252b/",
    "uuid": "cda57a5d-a8af-402d-af00-49fabf1a252b",
    "codigo": 243,
    "descricao": "Técnico em Segurança do Trabalho Integrado - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 117, de 22 de julho de 2015, convalidada pela Resolução CS/IFPB nº 56-CS, de 20 de março de 2017.",
    "coordenador": "Davi de Sousa Silva",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bf2c9762-0a15-4383-b78c-276187b135db/",
      "uuid": "bf2c9762-0a15-4383-b78c-276187b135db"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bf2c9762-0a15-4383-b78c-276187b135db/"
    ],
    "ch": 3973
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e075565e-5228-49e0-868c-ba48c347e29e/",
    "uuid": "e075565e-5228-49e0-868c-ba48c347e29e",
    "codigo": 244,
    "descricao": "Licenciatura em Ciências Biológicas - Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "RESOLUÇÃO CS/IFPB Nº 155, DE 05 DE NOVEMBRO DE 2015. Convalidada pela Resolução CS/IFPB nº 58-CS, de 20 de março de 2017.",
    "coordenador": "Thiago Leite de Melo Ruffo",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6da3ce70-f4dc-47e8-86c0-c31504fc9476/",
      "uuid": "6da3ce70-f4dc-47e8-86c0-c31504fc9476"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6da3ce70-f4dc-47e8-86c0-c31504fc9476/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c3862f1d-7738-4d8d-8e3e-7b00d88cda7f/"
    ],
    "ch": 2983
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/fff32d7e-40d3-49cb-a5c3-40764c845ef1/",
    "uuid": "fff32d7e-40d3-49cb-a5c3-40764c845ef1",
    "codigo": 245,
    "descricao": "Bacharelado em Engenharia de Computação - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "RESOLUÇÃO CS/IFPB nº 224, DE 16 DE NOVEMBRO DE 2015. Convalidada pela Resolução CS/IFPB nº 63-CS, 20 de março de 2017.",
    "coordenador": "Henrique do Nascimento Cunha",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d3be86c8-bfc5-4575-9521-b8468505f684/",
      "uuid": "d3be86c8-bfc5-4575-9521-b8468505f684"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/25b1aa8b-a94c-4d3b-9af2-f32143ff87f8/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d3be86c8-bfc5-4575-9521-b8468505f684/"
    ],
    "ch": 4242
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/25b5941a-eb1c-4e71-bed0-8d1d575b7a02/",
    "uuid": "25b5941a-eb1c-4e71-bed0-8d1d575b7a02",
    "codigo": 246,
    "descricao": "Técnico em Manutenção e Suporte em Informática Integrado - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "RESOLUÇÃO CS/ IFPB Nº 038, DE 10 DE SETEMBRO DE 2009.",
    "coordenador": "Bruno Jacome Cavalcanti",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/aa33c550-aec2-4c6b-80c8-8eb089e8d048/",
      "uuid": "aa33c550-aec2-4c6b-80c8-8eb089e8d048"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/aa33c550-aec2-4c6b-80c8-8eb089e8d048/"
    ],
    "ch": 3609
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b127bf24-15a3-433c-9aaf-592d274a304d/",
    "uuid": "b127bf24-15a3-433c-9aaf-592d274a304d",
    "codigo": 247,
    "descricao": "e-Tec Idiomas - Inglês - Módulo A1",
    "diretoria": "DIRETORIA DE EDUCAÇÃO A DISTÂNCIA - REITORIA",
    "natureza_participacao": "EaD",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "Resolução CS – IFPB Nº 111/2012 CS/IFPB",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9aab0e02-2954-442b-b53a-21e58d6e9463/",
      "uuid": "9aab0e02-2954-442b-b53a-21e58d6e9463"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9aab0e02-2954-442b-b53a-21e58d6e9463/"
    ],
    "ch": 200
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/c562084d-09f8-42ac-b91c-36c4cedfdbd4/",
    "uuid": "c562084d-09f8-42ac-b91c-36c4cedfdbd4",
    "codigo": 248,
    "descricao": "e-Tec Idiomas - Espanhol - Módulo A1",
    "diretoria": "DIRETORIA DE EDUCAÇÃO A DISTÂNCIA - REITORIA",
    "natureza_participacao": "EaD",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "Resolução CS – IFPB Nº 111/2012 CS/IFPB",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cad643e9-15d1-4782-89df-4507abdae3bc/",
      "uuid": "cad643e9-15d1-4782-89df-4507abdae3bc"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cad643e9-15d1-4782-89df-4507abdae3bc/"
    ],
    "ch": 200
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/710a938f-2453-4e31-88ab-76089a10413c/",
    "uuid": "710a938f-2453-4e31-88ab-76089a10413c",
    "codigo": 249,
    "descricao": "Modalidades de Educação Física I - Campus JP",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": "Geilson Lucas de Lucena Filho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f7730868-116a-466b-8f11-f45044479664/",
      "uuid": "f7730868-116a-466b-8f11-f45044479664"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f7730868-116a-466b-8f11-f45044479664/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e3c8c4bc-a28a-4320-ac42-c1a34da45551/"
    ],
    "ch": 1000
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/5a740fa3-0eec-49b3-aedf-c3d4d0f9e122/",
    "uuid": "5a740fa3-0eec-49b3-aedf-c3d4d0f9e122",
    "codigo": 250,
    "descricao": "Técnico em Administração Integrado ao Ensino Médio (PROEJA) - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado EJA",
    "resolucao_criacao": "Resolução CS/IFPB nº 153, de 10 de junho de 2014.",
    "coordenador": "Romulo Sousa Torres",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/52874e02-ceb6-49c2-a586-f9da9061c68c/",
      "uuid": "52874e02-ceb6-49c2-a586-f9da9061c68c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/52874e02-ceb6-49c2-a586-f9da9061c68c/"
    ],
    "ch": 2072
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/88662ede-03a1-495f-8ed2-1de7eebed545/",
    "uuid": "88662ede-03a1-495f-8ed2-1de7eebed545",
    "codigo": 264,
    "descricao": "PÓS GRADUAÇÃO EM HIGIENE OCUPACIONAL - Integral",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "RESOLUÇÃO N° 136, DE 02 DE OUTUBRO DE 2015.",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ff7cad3e-7c1b-4800-a163-226f23863a1f/",
      "uuid": "ff7cad3e-7c1b-4800-a163-226f23863a1f"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ff7cad3e-7c1b-4800-a163-226f23863a1f/"
    ],
    "ch": 360
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ef885266-e472-487f-be27-f6f8851964e0/",
    "uuid": "ef885266-e472-487f-be27-f6f8851964e0",
    "codigo": 266,
    "descricao": "Técnico em Serviços Jurídicos Subsequente - Cabedelo Centro",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO CABEDELO CENTRO - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 07, de 09 de junho de 2016, convalidada pela Resolução CS/IFPB nº 23, de 02 de agosto de 2018.",
    "coordenador": "Francisco Ferreira de Paulo",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bfec0ae9-331a-45de-8f55-0c4058cc554a/",
      "uuid": "bfec0ae9-331a-45de-8f55-0c4058cc554a"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bfec0ae9-331a-45de-8f55-0c4058cc554a/"
    ],
    "ch": 800
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/67c3e77d-a396-4758-849a-05e361319b87/",
    "uuid": "67c3e77d-a396-4758-849a-05e361319b87",
    "codigo": 267,
    "descricao": "FIC Jovem Profissional Cidadão – ENEM",
    "diretoria": "DIREÇÃO GERAL - CAMPUS SANTA RITA",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/591eae00-7cc3-44d6-9f30-4107f9884d66/",
      "uuid": "591eae00-7cc3-44d6-9f30-4107f9884d66"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/591eae00-7cc3-44d6-9f30-4107f9884d66/"
    ],
    "ch": 162
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ec2f868e-6585-47c9-81bf-354b182806c7/",
    "uuid": "ec2f868e-6585-47c9-81bf-354b182806c7",
    "codigo": 268,
    "descricao": "Formação Inicial e Continuada em Redes de Computadores – Módulos 1 e 2 – CCNA Routing & Switching",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bda80fb1-b0de-491e-809c-b09a40597d93/",
      "uuid": "bda80fb1-b0de-491e-809c-b09a40597d93"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bda80fb1-b0de-491e-809c-b09a40597d93/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/d206ebf9-a1b2-456d-8ecd-66060c3de5b7/",
    "uuid": "d206ebf9-a1b2-456d-8ecd-66060c3de5b7",
    "codigo": 269,
    "descricao": "Formação Inicial e Continuada em Redes de Computadores – Módulos 3 e 4 – CCNA Routing & Switching",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/194cd308-a499-4424-8d41-58afb9bff369/",
      "uuid": "194cd308-a499-4424-8d41-58afb9bff369"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/194cd308-a499-4424-8d41-58afb9bff369/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e1dfc5ec-1587-4817-b53b-6d54bdf14099/",
    "uuid": "e1dfc5ec-1587-4817-b53b-6d54bdf14099",
    "codigo": 270,
    "descricao": "Formação Inicial e Continuada em Gestão de Pequenos Negócios",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": "GESTÃO E NEGÓCIOS",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f41f0c3c-0855-40db-a4f7-8632ae77aa83/",
      "uuid": "f41f0c3c-0855-40db-a4f7-8632ae77aa83"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f41f0c3c-0855-40db-a4f7-8632ae77aa83/"
    ],
    "ch": 130
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/1d40fce2-9945-4c15-acb1-a6570dc40ab5/",
    "uuid": "1d40fce2-9945-4c15-acb1-a6570dc40ab5",
    "codigo": 271,
    "descricao": "Formação Inicial e Continuada (FIC) em Libras - Básico",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fadb1ce3-c80c-4c5c-96d2-b7478651dd8c/",
      "uuid": "fadb1ce3-c80c-4c5c-96d2-b7478651dd8c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fadb1ce3-c80c-4c5c-96d2-b7478651dd8c/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/3d2e1901-4ee7-40d4-ac2f-ee5e19976b34/",
    "uuid": "3d2e1901-4ee7-40d4-ac2f-ee5e19976b34",
    "codigo": 272,
    "descricao": "Tecnologia em Automação Industrial - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "AUTORIZAÇÃO: Resolução nº 15/2005 - Conselho Diretor de 06/06/2015.",
    "coordenador": "Anrafel Silva Meira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f4a613cf-8cb2-40f8-86b7-0900f1f8dcd0/",
      "uuid": "f4a613cf-8cb2-40f8-86b7-0900f1f8dcd0"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f4a613cf-8cb2-40f8-86b7-0900f1f8dcd0/"
    ],
    "ch": 2546
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/7ea354d2-1664-45c5-bc35-1f67cf3da40a/",
    "uuid": "7ea354d2-1664-45c5-bc35-1f67cf3da40a",
    "codigo": 273,
    "descricao": "Técnico em Química Subsequente - Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 21, de 10 de outubro de 2016, convalidada pela Resolução CS/IFPB nº 159, de 15 de dezembro de 2017.",
    "coordenador": "Ane Josana Dantas Fernandes",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/412d9e59-8f30-4d8f-9ea8-2731e9ee4818/",
      "uuid": "412d9e59-8f30-4d8f-9ea8-2731e9ee4818"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/412d9e59-8f30-4d8f-9ea8-2731e9ee4818/"
    ],
    "ch": 1265
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/3064af62-f585-4d3e-bc63-6e378313385b/",
    "uuid": "3064af62-f585-4d3e-bc63-6e378313385b",
    "codigo": 274,
    "descricao": "Técnico em Edificações Integrado - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": "Jose de Araujo Pereira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e711443a-59a3-49ba-b44e-98837a4f65e3/",
      "uuid": "e711443a-59a3-49ba-b44e-98837a4f65e3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e711443a-59a3-49ba-b44e-98837a4f65e3/"
    ],
    "ch": 3479
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ee3dd71d-e568-4eab-8a4a-b9e6321a52d1/",
    "uuid": "ee3dd71d-e568-4eab-8a4a-b9e6321a52d1",
    "codigo": 275,
    "descricao": "Técnico em Edificações Integrado ao Ensino Médio - Monteiro",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": "Gardenia Marinho Cordeiro",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6d4555e4-cd34-4aed-9684-9184761010a8/",
      "uuid": "6d4555e4-cd34-4aed-9684-9184761010a8"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6d4555e4-cd34-4aed-9684-9184761010a8/"
    ],
    "ch": 3610
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/3feb73d8-d8dc-487f-92ab-96e289c3307d/",
    "uuid": "3feb73d8-d8dc-487f-92ab-96e289c3307d",
    "codigo": 276,
    "descricao": "Técnico em Informática Integrado - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 20, de 10 de outubro de 2016.",
    "coordenador": "Paulo Marcelo Feitoza de Lima",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/44bd767a-7563-466f-9795-241af8661fc9/",
      "uuid": "44bd767a-7563-466f-9795-241af8661fc9"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/44bd767a-7563-466f-9795-241af8661fc9/"
    ],
    "ch": 3908
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/f9bea1eb-65d6-4d47-b009-5ca448d52ba0/",
    "uuid": "f9bea1eb-65d6-4d47-b009-5ca448d52ba0",
    "codigo": 277,
    "descricao": "Técnico em Química Integrado - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": "Iremar Alves Madureira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/707904c8-1846-432c-ba1e-6f00b52763c3/",
      "uuid": "707904c8-1846-432c-ba1e-6f00b52763c3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ec1fcb1c-5146-4eac-9aaf-0f9b202e4c6e/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/707904c8-1846-432c-ba1e-6f00b52763c3/"
    ],
    "ch": 3368
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e4143245-9ba3-47d5-ab31-1bd46737ebe9/",
    "uuid": "e4143245-9ba3-47d5-ab31-1bd46737ebe9",
    "codigo": 278,
    "descricao": "Técnico em Multimídia Integrado - Campus Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": "Angelica Lacerda Ferreira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7df11dd6-2fda-4e85-848b-ae2c98410bd3/",
      "uuid": "7df11dd6-2fda-4e85-848b-ae2c98410bd3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7df11dd6-2fda-4e85-848b-ae2c98410bd3/"
    ],
    "ch": 2973
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/c714be1c-ab27-48d2-85e2-9c440748c68b/",
    "uuid": "c714be1c-ab27-48d2-85e2-9c440748c68b",
    "codigo": 279,
    "descricao": "Modalidades de Educação Física - Campus MT",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e6f4213e-0a49-4930-9e5f-1f3393f34519/",
      "uuid": "e6f4213e-0a49-4930-9e5f-1f3393f34519"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e6f4213e-0a49-4930-9e5f-1f3393f34519/"
    ],
    "ch": 100
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/66068eea-8cfc-40dd-ae0f-70b2129f209f/",
    "uuid": "66068eea-8cfc-40dd-ae0f-70b2129f209f",
    "codigo": 280,
    "descricao": "Técnico em Guia de Turismo Subsequente ao Ensino Médio - Cabedelo Centro",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO CABEDELO CENTRO - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 23, de 10 de outubro de 2016, convalidada pela Resolução CS/IFPB nº149-CS, de 17 de novembro de 2017.",
    "coordenador": "Jailma Freire Marinho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f7c4ad4c-ff02-4667-b671-6711f025b84e/",
      "uuid": "f7c4ad4c-ff02-4667-b671-6711f025b84e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f7c4ad4c-ff02-4667-b671-6711f025b84e/"
    ],
    "ch": 810
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/bb0dd767-ceb6-43ab-b62c-d067b83ec9f4/",
    "uuid": "bb0dd767-ceb6-43ab-b62c-d067b83ec9f4",
    "codigo": 281,
    "descricao": "Modalidades de Educação Física - Campus CG",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/62d2353c-edbc-42b2-8168-f2cebcc5dfe0/",
      "uuid": "62d2353c-edbc-42b2-8168-f2cebcc5dfe0"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/62d2353c-edbc-42b2-8168-f2cebcc5dfe0/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2cebac9e-e3cd-4b6c-b16c-e24e1c85a5ed/"
    ],
    "ch": 100
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/5f55a64f-5522-4a1d-836f-6460f890bf95/",
    "uuid": "5f55a64f-5522-4a1d-836f-6460f890bf95",
    "codigo": 282,
    "descricao": "Curso de Formação Inicial e Continuada (FIC) em Gestão da Qualidade e Empreendimentos Turísticos ",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "TURISMO, HOSPITALIDADE E LAZER",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Maria Gracilene Marques Pereira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d8e9f799-3dc3-49e1-bf51-5d16241d40bd/",
      "uuid": "d8e9f799-3dc3-49e1-bf51-5d16241d40bd"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d8e9f799-3dc3-49e1-bf51-5d16241d40bd/"
    ],
    "ch": 230
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/0c334c19-3895-41a5-8264-dcfd863c4668/",
    "uuid": "0c334c19-3895-41a5-8264-dcfd863c4668",
    "codigo": 283,
    "descricao": "Técnico em Recursos Pesqueiros Integrado (PROEJA) - Cabedelo",
    "diretoria": "DIRETORIA GERAL  DO CAMPUS CABEDELO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado EJA",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c23d5f26-00c5-43e3-b6ea-d4d159c69933/",
      "uuid": "c23d5f26-00c5-43e3-b6ea-d4d159c69933"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c23d5f26-00c5-43e3-b6ea-d4d159c69933/"
    ],
    "ch": 2496
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/06f6346a-e96b-4a05-956e-cc8c75fa5d10/",
    "uuid": "06f6346a-e96b-4a05-956e-cc8c75fa5d10",
    "codigo": 285,
    "descricao": "Formação Inicial e Continuada em Redes de Computadores – Módulos 1 e 2 – CCNA Routing & Switching",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Leandro Cavalcanti de Almeida",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b8e525d5-f4b6-4f0c-a846-33a9cc153f47/",
      "uuid": "b8e525d5-f4b6-4f0c-a846-33a9cc153f47"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b8e525d5-f4b6-4f0c-a846-33a9cc153f47/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/77e3e7f0-5584-45d7-a2e7-72396227619e/",
    "uuid": "77e3e7f0-5584-45d7-a2e7-72396227619e",
    "codigo": 286,
    "descricao": "Formação Inicial e Continuada em Redes de Computadores – Módulos 3 e 4 – CCNA Routing & Switching",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Leandro Cavalcanti de Almeida",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c57d31ad-38da-4513-b79f-2dab7ffb66eb/",
      "uuid": "c57d31ad-38da-4513-b79f-2dab7ffb66eb"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c57d31ad-38da-4513-b79f-2dab7ffb66eb/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/812db775-4ba1-4da6-96d6-7220689f4307/",
    "uuid": "812db775-4ba1-4da6-96d6-7220689f4307",
    "codigo": 287,
    "descricao": "Técnico em Instrumento Musical Subsequente - Monteiro",
    "diretoria": "DIRETORIA GERAL - CAMPUS MONTEIRO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 25, de 10 de outubro de 2016, convalidada pela Resolução CS/IFPB nº 26, de 02 de agosto de 2018.",
    "coordenador": "Marlon Barros de Lima",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7825ac95-ed36-45d3-82dd-de1c8970ca86/",
      "uuid": "7825ac95-ed36-45d3-82dd-de1c8970ca86"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7825ac95-ed36-45d3-82dd-de1c8970ca86/"
    ],
    "ch": 794
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/059ca65f-75ab-4520-b709-72e0cec7caea/",
    "uuid": "059ca65f-75ab-4520-b709-72e0cec7caea",
    "codigo": 288,
    "descricao": "Técnico em Restaurante e Bar Subsequente ao Ensino Médio - Areia",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO CS \"AD REFERENDUM\" N° 25/2017",
    "coordenador": "Ana Paula Sousa Silva",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5d88d894-6a37-4425-afb9-7a9a71d59747/",
      "uuid": "5d88d894-6a37-4425-afb9-7a9a71d59747"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/94478c82-5d0c-48da-8c3c-4b16ffcc9a06/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5d88d894-6a37-4425-afb9-7a9a71d59747/"
    ],
    "ch": 848
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ea8af11a-e2cc-4654-8c10-56b90859827b/",
    "uuid": "ea8af11a-e2cc-4654-8c10-56b90859827b",
    "codigo": 289,
    "descricao": "Especialização em Gestão Ambiental de Municípios - Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "",
    "coordenador": "Alcemy Gabriel Vitor Severino",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/804125a9-a593-4b8d-9d08-22864f8d4146/",
      "uuid": "804125a9-a593-4b8d-9d08-22864f8d4146"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/804125a9-a593-4b8d-9d08-22864f8d4146/"
    ],
    "ch": 440
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/51f905ba-8a6a-471f-9b4f-32d635f46fab/",
    "uuid": "51f905ba-8a6a-471f-9b4f-32d635f46fab",
    "codigo": 290,
    "descricao": "Técnico em Informática Subsequente ao Ensino Médio - Campus Soledade",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO SOLEDADE - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "",
    "coordenador": "Katia Cristina de Oliveira Gurjao",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/26c2feb6-8890-413f-b62a-5d4df585fbf1/",
      "uuid": "26c2feb6-8890-413f-b62a-5d4df585fbf1"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/26c2feb6-8890-413f-b62a-5d4df585fbf1/"
    ],
    "ch": 1201
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/75872943-3d26-4aa6-9161-6b15007e3ae0/",
    "uuid": "75872943-3d26-4aa6-9161-6b15007e3ae0",
    "codigo": 291,
    "descricao": "Técnico Subsequente em Transações Imobiliárias - Cabedelo Centro",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO CABEDELO CENTRO - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "Resolução CS/IFPB nº 22, de 21 de junho de 2017, convalidada pela Resolução CS/IFPB nº 24, de 02 de agosto de 2018.",
    "coordenador": "Mario Limeira de Lyra",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d930fdbd-23fa-4991-a958-5c59d4d6be7c/",
      "uuid": "d930fdbd-23fa-4991-a958-5c59d4d6be7c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a83a8312-9d42-4f49-a99f-4129adf483a2/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d930fdbd-23fa-4991-a958-5c59d4d6be7c/"
    ],
    "ch": 835
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/038e9625-b408-400c-939e-5c9705fefa6c/",
    "uuid": "038e9625-b408-400c-939e-5c9705fefa6c",
    "codigo": 292,
    "descricao": "Técnico Subsequente em Informática - Santa Luzia",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS SANTA LUZIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/88d9f4a7-b9f7-4a92-b36a-39175b66a8e2/",
      "uuid": "88d9f4a7-b9f7-4a92-b36a-39175b66a8e2"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/88d9f4a7-b9f7-4a92-b36a-39175b66a8e2/"
    ],
    "ch": 1233
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/d06ce8d0-c1e7-4ce0-a01b-3cbecd689db2/",
    "uuid": "d06ce8d0-c1e7-4ce0-a01b-3cbecd689db2",
    "codigo": 293,
    "descricao": "Técnico em Informática para Internet",
    "diretoria": "COORDENAÇÃO DE EDUCAÇÃO À DISTANCIA  -  CAMPUS CABEDELO",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Concomitante",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/171d3967-f8ab-4f71-9836-4be5f3efdea8/",
      "uuid": "171d3967-f8ab-4f71-9836-4be5f3efdea8"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/171d3967-f8ab-4f71-9836-4be5f3efdea8/"
    ],
    "ch": 1070
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/72c3cce5-1aff-47b2-b509-863fddfd37cd/",
    "uuid": "72c3cce5-1aff-47b2-b509-863fddfd37cd",
    "codigo": 294,
    "descricao": "Técnico em Guia de Turismo",
    "diretoria": "Coordenação do Curso de Licenciatura em Letras EAD",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Concomitante",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/820e0aba-7801-4217-bcdb-e0ddab88f23e/",
      "uuid": "820e0aba-7801-4217-bcdb-e0ddab88f23e"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/820e0aba-7801-4217-bcdb-e0ddab88f23e/"
    ],
    "ch": 800
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ba15c0de-0fd5-4df2-adfd-ed75e60588b4/",
    "uuid": "ba15c0de-0fd5-4df2-adfd-ed75e60588b4",
    "codigo": 295,
    "descricao": "Técnico em Informática",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS GUARABIRA",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Concomitante",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fdafa2b2-30f8-48c8-829e-24e50e2ba023/",
      "uuid": "fdafa2b2-30f8-48c8-829e-24e50e2ba023"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fdafa2b2-30f8-48c8-829e-24e50e2ba023/"
    ],
    "ch": 1200
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/3e890849-b0ff-45f3-9516-83633500cd2a/",
    "uuid": "3e890849-b0ff-45f3-9516-83633500cd2a",
    "codigo": 296,
    "descricao": "Técnico em Redes de Computadores",
    "diretoria": "ENSINO A DISTANCIA - CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Concomitante",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9ab18d1a-6b38-4afb-8544-eff0e8db6dc6/",
      "uuid": "9ab18d1a-6b38-4afb-8544-eff0e8db6dc6"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9ab18d1a-6b38-4afb-8544-eff0e8db6dc6/"
    ],
    "ch": 1000
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/415befd1-318f-4732-a429-8cd47fffadec/",
    "uuid": "415befd1-318f-4732-a429-8cd47fffadec",
    "codigo": 297,
    "descricao": "Disciplinas Isoladas",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Tecnologia",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/357c19b7-54d9-44c1-8c98-3508e52f468c/",
      "uuid": "357c19b7-54d9-44c1-8c98-3508e52f468c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/357c19b7-54d9-44c1-8c98-3508e52f468c/"
    ],
    "ch": 0
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/24f736a8-2942-4d99-b6f6-d45a027e74fb/",
    "uuid": "24f736a8-2942-4d99-b6f6-d45a027e74fb",
    "codigo": 298,
    "descricao": "Formação Inicial e Continuada (FIC) em Inglês Básico",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Maria Gracilene Marques Pereira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/35767b5e-c742-4eca-b8f0-e63c47abe2cb/",
      "uuid": "35767b5e-c742-4eca-b8f0-e63c47abe2cb"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/35767b5e-c742-4eca-b8f0-e63c47abe2cb/"
    ],
    "ch": 180
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a67b5c51-f4ae-4f09-82ef-af796955dcbe/",
    "uuid": "a67b5c51-f4ae-4f09-82ef-af796955dcbe",
    "codigo": 299,
    "descricao": "Curso de Formação Inicial e Continuada de Extensão de Fotografia Artística - Módulo I",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": "PRODUÇÃO ARTÍSTICA E CULTURAL E DESIGN",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Idalia Beatriz Lins de Sousa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/4d51214d-2dfc-4091-b882-df2c4c6d7dd2/",
      "uuid": "4d51214d-2dfc-4091-b882-df2c4c6d7dd2"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/4d51214d-2dfc-4091-b882-df2c4c6d7dd2/"
    ],
    "ch": 70
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ff3fb8a0-0ab1-44c0-b52a-697667d6fe79/",
    "uuid": "ff3fb8a0-0ab1-44c0-b52a-697667d6fe79",
    "codigo": 300,
    "descricao": "Técnico em Informática Concomitante ao Ensino Médio - Pedras de Fogo",
    "diretoria": "POLO DE EDUCAÇÃO A DISTÂNCIA - PEDRAS DE FOGO",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Concomitante",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ea7f84a2-aaac-4ae2-8038-3b0f4aeb95af/",
      "uuid": "ea7f84a2-aaac-4ae2-8038-3b0f4aeb95af"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ea7f84a2-aaac-4ae2-8038-3b0f4aeb95af/"
    ],
    "ch": 1200
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/82041d58-e313-462b-885f-2509d3d90a7f/",
    "uuid": "82041d58-e313-462b-885f-2509d3d90a7f",
    "codigo": 301,
    "descricao": "Especialização em Matemática - Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N° 24, DE 03 DE JULHO DE 2017.",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f7fac128-3c0d-46d6-a62f-7de930adcfd7/",
      "uuid": "f7fac128-3c0d-46d6-a62f-7de930adcfd7"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/f7fac128-3c0d-46d6-a62f-7de930adcfd7/"
    ],
    "ch": 390
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a130c40b-9561-4988-a356-32e8f6c2f47e/",
    "uuid": "a130c40b-9561-4988-a356-32e8f6c2f47e",
    "codigo": 302,
    "descricao": "Disciplinas Isoladas",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/357c19b7-54d9-44c1-8c98-3508e52f468c/",
      "uuid": "357c19b7-54d9-44c1-8c98-3508e52f468c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/357c19b7-54d9-44c1-8c98-3508e52f468c/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/26552251-1947-4fe4-a9cb-9278653909c3/"
    ],
    "ch": 0
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/2d51f19b-e7c6-40e3-a732-bdbbdedddfb5/",
    "uuid": "2d51f19b-e7c6-40e3-a732-bdbbdedddfb5",
    "codigo": 335,
    "descricao": "Formação Inicial e Continuada Tecnologias Educativas - Soledade",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO SOLEDADE - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cb303490-b9da-4f16-b932-1bdb112bb6a8/",
      "uuid": "cb303490-b9da-4f16-b932-1bdb112bb6a8"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cb303490-b9da-4f16-b932-1bdb112bb6a8/"
    ],
    "ch": 180
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/003deb40-b064-4de9-8e1b-ef07dbbf65c3/",
    "uuid": "003deb40-b064-4de9-8e1b-ef07dbbf65c3",
    "codigo": 337,
    "descricao": "Formação Inicial e Continuada de Informática Básica para Terceira Idade  - Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "Resolução nº 02, de 23 de Outubro de 2017.",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/96006225-f7c4-45ef-891f-dab5fd93b3ca/",
      "uuid": "96006225-f7c4-45ef-891f-dab5fd93b3ca"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/96006225-f7c4-45ef-891f-dab5fd93b3ca/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/4f2d5e95-da4a-4c40-b727-fdb23b44bc36/",
    "uuid": "4f2d5e95-da4a-4c40-b727-fdb23b44bc36",
    "codigo": 338,
    "descricao": "Formação Inicial e Continuada de Operador de Computador - Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "RESOLUÇÃO Nº 01, DE 23 DE OUTUBRO DE 2017.",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6ea42fa3-0c06-41ff-98bc-cb7a123bba28/",
      "uuid": "6ea42fa3-0c06-41ff-98bc-cb7a123bba28"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6ea42fa3-0c06-41ff-98bc-cb7a123bba28/"
    ],
    "ch": 180
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ed3c9046-a57b-42f6-be4b-584861a8972d/",
    "uuid": "ed3c9046-a57b-42f6-be4b-584861a8972d",
    "codigo": 339,
    "descricao": "Formação Inicial e Continuada em Redes de Computadores – CCNA Routing & Switching: Módulos I e II - Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/65915f90-0746-4061-af6d-633ca81cd24f/",
      "uuid": "65915f90-0746-4061-af6d-633ca81cd24f"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/65915f90-0746-4061-af6d-633ca81cd24f/"
    ],
    "ch": 104
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/09c31a4b-0fa3-43f0-88ca-a45653c5c148/",
    "uuid": "09c31a4b-0fa3-43f0-88ca-a45653c5c148",
    "codigo": 340,
    "descricao": "Técnico em Serviços Jurídicos Integrado - Campus Cabedelo Centro",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO CABEDELO CENTRO - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": "Ynakam Luis de Vasconcelos Leal",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/622ab482-2b8c-4b55-a729-9c5d95a214b9/",
      "uuid": "622ab482-2b8c-4b55-a729-9c5d95a214b9"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/622ab482-2b8c-4b55-a729-9c5d95a214b9/"
    ],
    "ch": 3107
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/37df7e97-5f1d-4f50-a450-01d152f823df/",
    "uuid": "37df7e97-5f1d-4f50-a450-01d152f823df",
    "codigo": 341,
    "descricao": "Técnico em Informática Integrado - Campus João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": "Fabrizia Medeiros de Sousa Matos",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/22c5ecc4-edfd-4990-ba06-ae6aee0b6064/",
      "uuid": "22c5ecc4-edfd-4990-ba06-ae6aee0b6064"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/22c5ecc4-edfd-4990-ba06-ae6aee0b6064/"
    ],
    "ch": 4137
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e456b220-b36c-4eed-a5d9-57effd67e9cb/",
    "uuid": "e456b220-b36c-4eed-a5d9-57effd67e9cb",
    "codigo": 342,
    "descricao": "Técnico em Meio Ambiente Integrado - Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "Resolução CS/IFPB nº 163, de 15 de dezembro de 2017.",
    "coordenador": "Carlos Alberto Nobrega Sobrinho",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c4ef3407-fc8f-4cb6-a28f-1f0394b9ed24/",
      "uuid": "c4ef3407-fc8f-4cb6-a28f-1f0394b9ed24"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c4ef3407-fc8f-4cb6-a28f-1f0394b9ed24/"
    ],
    "ch": 3408
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/bed8fb21-2cc4-41cb-8366-31f4f81d8e8d/",
    "uuid": "bed8fb21-2cc4-41cb-8366-31f4f81d8e8d",
    "codigo": 343,
    "descricao": "Técnico em Informática Subsequente -  Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO N° 154-CS, DE 17 DE NOVEMBRO DE 2017.",
    "coordenador": "Yara Regina Pereira Silva Menezes de Sa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/55a2a523-ff7a-4219-845a-ad0476287346/",
      "uuid": "55a2a523-ff7a-4219-845a-ad0476287346"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/55a2a523-ff7a-4219-845a-ad0476287346/"
    ],
    "ch": 1335
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/1e73eb6c-6afc-4a2c-a279-faa530654d47/",
    "uuid": "1e73eb6c-6afc-4a2c-a279-faa530654d47",
    "codigo": 344,
    "descricao": "Formação Inicial e Continuada em configuração e desenvolvimento de soluções de VoIP e IoT com Asterisk - Módulo I - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Luciana Pereira Oliveira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7991f3d2-a670-41ca-8d7e-45c1c156edad/",
      "uuid": "7991f3d2-a670-41ca-8d7e-45c1c156edad"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/7991f3d2-a670-41ca-8d7e-45c1c156edad/"
    ],
    "ch": 80
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e0967b59-830a-4ea2-bdc0-90aec9aff345/",
    "uuid": "e0967b59-830a-4ea2-bdc0-90aec9aff345",
    "codigo": 345,
    "descricao": "Formação Inicial e Continuada em Desenvolvimento de Aplicativos para Dispositivos Móveis - Campus Soledade",
    "diretoria": "DIRETORIA DO CAMPUS AVANÇADO SOLEDADE - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/488f9268-3908-4747-957e-98ec503c26e4/",
      "uuid": "488f9268-3908-4747-957e-98ec503c26e4"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/488f9268-3908-4747-957e-98ec503c26e4/"
    ],
    "ch": 180
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a7d706d7-1ec0-4a86-9082-9ad9d269705d/",
    "uuid": "a7d706d7-1ec0-4a86-9082-9ad9d269705d",
    "codigo": 346,
    "descricao": "Formação Inicial e Continuada  de Competências básicas para o ENEM - Esperança",
    "diretoria": "DIREÇÃO GERAL - CAMPUS ESPERANÇA",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N˚ 03, DE 27 DE MARÇO DE 2018",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/97a06c4b-c4ba-4327-8321-9f62b452e0ef/",
      "uuid": "97a06c4b-c4ba-4327-8321-9f62b452e0ef"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/97a06c4b-c4ba-4327-8321-9f62b452e0ef/"
    ],
    "ch": 300
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/fee37a10-b97c-4de5-84d6-5ead72eed92a/",
    "uuid": "fee37a10-b97c-4de5-84d6-5ead72eed92a",
    "codigo": 347,
    "descricao": "Formação Inicial e Continuada de Organizador de Eventos - Areia",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "TURISMO, HOSPITALIDADE E LAZER",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0fb41e4b-f1a9-4cd9-99b8-ef5cecb3406b/",
      "uuid": "0fb41e4b-f1a9-4cd9-99b8-ef5cecb3406b"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0fb41e4b-f1a9-4cd9-99b8-ef5cecb3406b/"
    ],
    "ch": 200
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/6617fd05-dfd7-4636-90e8-9bd30136293a/",
    "uuid": "6617fd05-dfd7-4636-90e8-9bd30136293a",
    "codigo": 348,
    "descricao": "Pro ENEM em Matemática - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Helder Alves de Oliveira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fe448060-dbc2-4e9f-bd16-d32866959244/",
      "uuid": "fe448060-dbc2-4e9f-bd16-d32866959244"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fe448060-dbc2-4e9f-bd16-d32866959244/"
    ],
    "ch": 54
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/4b3aa3a6-38bd-41c0-936a-07f4dd50af9d/",
    "uuid": "4b3aa3a6-38bd-41c0-936a-07f4dd50af9d",
    "codigo": 349,
    "descricao": "Curso de Formação Inicial e Continuada de Extensão de Fotografia Artística - Módulo II",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": "PRODUÇÃO ARTÍSTICA E CULTURAL E DESIGN",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Idalia Beatriz Lins de Sousa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e1827ab7-5cb7-4cb0-8611-4972f438af93/",
      "uuid": "e1827ab7-5cb7-4cb0-8611-4972f438af93"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e1827ab7-5cb7-4cb0-8611-4972f438af93/"
    ],
    "ch": 70
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e3f18b9b-a905-4217-9cf8-aea94448a11d/",
    "uuid": "e3f18b9b-a905-4217-9cf8-aea94448a11d",
    "codigo": 350,
    "descricao": "Mestrado Profissional em Educação Profissional e Tecnológica - ProfEPT - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Mestrado",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N° 35, DE 09 DE OUTUBRO DE 2017.",
    "coordenador": "Rafael Jose Alves do Rego Barros",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1a66ab1b-7358-4059-a05e-209f890149d2/",
      "uuid": "1a66ab1b-7358-4059-a05e-209f890149d2"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/1a66ab1b-7358-4059-a05e-209f890149d2/",
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/421b3909-6bdb-4707-8351-0233f56e229a/"
    ],
    "ch": 480
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/9422e26b-e66b-4ea9-9d0c-80de14302e53/",
    "uuid": "9422e26b-e66b-4ea9-9d0c-80de14302e53",
    "codigo": 351,
    "descricao": "Formação Inicial e Continuada de Libras Básico - Campus Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "RESOLUÇÃO Nº 04, DE 19 DE JUNHO DE 2018.",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bbcbd2b3-0094-454b-9883-e02350bbca23/",
      "uuid": "bbcbd2b3-0094-454b-9883-e02350bbca23"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bbcbd2b3-0094-454b-9883-e02350bbca23/"
    ],
    "ch": 20
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b79e1c85-15c2-4c95-aa51-20e512027005/",
    "uuid": "b79e1c85-15c2-4c95-aa51-20e512027005",
    "codigo": 352,
    "descricao": "Mestrado Profissional em Propriedade Intelectual e Transferência de Tecnologia para Inovação - PROFNIT - Campus Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Mestrado",
    "resolucao_criacao": "PORTARIA Nº 559, DE 30 DE JUNHO DE 2016.",
    "coordenador": "Katyusco de Farias Santos",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/077fe234-ebdf-472a-aefc-c8097259c0d1/",
      "uuid": "077fe234-ebdf-472a-aefc-c8097259c0d1"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/077fe234-ebdf-472a-aefc-c8097259c0d1/"
    ],
    "ch": 525
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/2f6eae68-fe25-4ddf-948f-49eecb5e2b03/",
    "uuid": "2f6eae68-fe25-4ddf-948f-49eecb5e2b03",
    "codigo": 353,
    "descricao": "Formação Inicial e Continuada em Inglês Básico - Campus Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "RESOLUÇÃO Nº 05, DE 19 DE JUNHO DE 2018.",
    "coordenador": "Ricardo Batista Pereira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/726aead4-7980-421c-95fb-79c9d1c3278b/",
      "uuid": "726aead4-7980-421c-95fb-79c9d1c3278b"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/726aead4-7980-421c-95fb-79c9d1c3278b/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/bfb49b9f-1e77-4c3f-81e6-8ce1c5480435/",
    "uuid": "bfb49b9f-1e77-4c3f-81e6-8ce1c5480435",
    "codigo": 354,
    "descricao": "Formação Inicial e Continuada em configuração e desenvolvimento de soluções de VoIP e IoT com Asterisk (2018.1) - Módulo II - João Pessoa",
    "diretoria": "DEPARTAMENTO DE EDUCAÇÃO PROFISSIONAL ",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Luciana Pereira Oliveira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b6d833c9-c67f-41f6-ad50-4a5478473498/",
      "uuid": "b6d833c9-c67f-41f6-ad50-4a5478473498"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b6d833c9-c67f-41f6-ad50-4a5478473498/"
    ],
    "ch": 80
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/87c2d432-53e7-4503-97e2-bff79140fc48/",
    "uuid": "87c2d432-53e7-4503-97e2-bff79140fc48",
    "codigo": 355,
    "descricao": "Formação Inicial e Continuada em Tecnologias Educativas",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/3b597466-b6bb-4db0-a2d2-d3ed8f397219/",
      "uuid": "3b597466-b6bb-4db0-a2d2-d3ed8f397219"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/3b597466-b6bb-4db0-a2d2-d3ed8f397219/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/5290a598-f3d3-4aab-9be4-318e17224195/",
    "uuid": "5290a598-f3d3-4aab-9be4-318e17224195",
    "codigo": 356,
    "descricao": "Formação Inicial e Continuada em Arduino e suas Tecnologias",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/748c28ef-8b14-4774-91fb-aab2363fa263/",
      "uuid": "748c28ef-8b14-4774-91fb-aab2363fa263"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/748c28ef-8b14-4774-91fb-aab2363fa263/"
    ],
    "ch": 40
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/29ca9864-c0fa-4af7-83b6-0b1326d709ca/",
    "uuid": "29ca9864-c0fa-4af7-83b6-0b1326d709ca",
    "codigo": 357,
    "descricao": "Licenciatura em Ciências Biológicas - Campus Princesa Isabel",
    "diretoria": "DIRETORIA GERAL - CAMPUS PRINCESA ISABEL",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM-CS Nº 49, DE 12 DE NOVEMBRO DE 2018.",
    "coordenador": "Katia Daniella da Cruz Saraiva",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e8492a74-6565-4b47-bf17-59a8970dd1cf/",
      "uuid": "e8492a74-6565-4b47-bf17-59a8970dd1cf"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e8492a74-6565-4b47-bf17-59a8970dd1cf/"
    ],
    "ch": 3284
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/99ab983b-99c3-40fb-b473-fc8e961900e3/",
    "uuid": "99ab983b-99c3-40fb-b473-fc8e961900e3",
    "codigo": 358,
    "descricao": "Bacharelado em Engenharia Civil -  João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM Nº 44, DE 24 DE OUTUBRO DE 2018.",
    "coordenador": "Marcos Alyssandro Soares dos Anjos",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fd5996b8-95ce-44cb-ab15-e045f4ce00f3/",
      "uuid": "fd5996b8-95ce-44cb-ab15-e045f4ce00f3"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/fd5996b8-95ce-44cb-ab15-e045f4ce00f3/"
    ],
    "ch": 4001
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/c0bafd96-3688-47f7-9ccb-88df17d27879/",
    "uuid": "c0bafd96-3688-47f7-9ccb-88df17d27879",
    "codigo": 359,
    "descricao": "Licenciatura em Matemática - João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Licenciatura",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM Nº 46, DE 24 DE OUTUBRO DE 2018.",
    "coordenador": "Flavio Alves de Albuquerque",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0dfafdfa-df43-42e7-8561-d0e48179925c/",
      "uuid": "0dfafdfa-df43-42e7-8561-d0e48179925c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/0dfafdfa-df43-42e7-8561-d0e48179925c/"
    ],
    "ch": 3108
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/f995999f-4a10-47e8-b51d-9f8452806802/",
    "uuid": "f995999f-4a10-47e8-b51d-9f8452806802",
    "codigo": 360,
    "descricao": "Técnico em Informática Integrado - Campus Santa Luzia",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS SANTA LUZIA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ee92cb99-c5ed-408e-86b0-6aa5cce21e7c/",
      "uuid": "ee92cb99-c5ed-408e-86b0-6aa5cce21e7c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/ee92cb99-c5ed-408e-86b0-6aa5cce21e7c/"
    ],
    "ch": 3376
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/0ada3fe6-fa9b-4b54-858b-3a480d68cfbe/",
    "uuid": "0ada3fe6-fa9b-4b54-858b-3a480d68cfbe",
    "codigo": 361,
    "descricao": "Bacharelado em Engenharia de Controle e Automação - Campus Cajazeiras",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N° 43, DE 24 DE OUTUBRO DE 2018.",
    "coordenador": "Raphaell Maciel de Sousa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e690ad12-68bd-4af2-aa3e-75a4fd7b1fcf/",
      "uuid": "e690ad12-68bd-4af2-aa3e-75a4fd7b1fcf"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e690ad12-68bd-4af2-aa3e-75a4fd7b1fcf/"
    ],
    "ch": 3967
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a72a2349-6bc3-49db-89e7-bcdd668bf8b1/",
    "uuid": "a72a2349-6bc3-49db-89e7-bcdd668bf8b1",
    "codigo": 362,
    "descricao": "Curso Técnico em Eletrônica Subsequente - Campus Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "RESOLUÇÃO Nº 07, DE 11 DE ABRIL DE 2018.",
    "coordenador": "Antonio de Paula Dias Queiroz",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cb454a64-0355-4a11-bcc7-d3a3feb12415/",
      "uuid": "cb454a64-0355-4a11-bcc7-d3a3feb12415"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cb454a64-0355-4a11-bcc7-d3a3feb12415/"
    ],
    "ch": 1200
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/f6507490-dd4e-4011-8bb2-5c1d26b7bb7d/",
    "uuid": "f6507490-dd4e-4011-8bb2-5c1d26b7bb7d",
    "codigo": 363,
    "descricao": "Técnico em Sistemas de Energia Renovável Integrado - Campus Esperança",
    "diretoria": "DIREÇÃO GERAL - CAMPUS ESPERANÇA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Integrado",
    "resolucao_criacao": "RESOLUÇÃO CS N° 36, DE 19 DE DEZEMBRO DE 2018.",
    "coordenador": "Karina Soares Farias do Nascimento Cunha",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2b9758d8-d634-494f-9576-61cad0a20c26/",
      "uuid": "2b9758d8-d634-494f-9576-61cad0a20c26"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2b9758d8-d634-494f-9576-61cad0a20c26/"
    ],
    "ch": 3308
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/d2242373-8780-4c76-b804-77200820007e/",
    "uuid": "d2242373-8780-4c76-b804-77200820007e",
    "codigo": 364,
    "descricao": "Especialização em Ensino de Língua Portuguesa como Segunda Língua para Surdos - Campus João Pessoa",
    "diretoria": "Coordenação do Curso de Licenciatura em Letras EAD",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N° 53, DE 14 DE NOVEMBRO DE 2018.",
    "coordenador": "Marta Celia Feitosa Bezerra",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/89d1051b-1712-4c06-a0c3-301a52055370/",
      "uuid": "89d1051b-1712-4c06-a0c3-301a52055370"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/89d1051b-1712-4c06-a0c3-301a52055370/"
    ],
    "ch": 465
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/650c206c-0050-45b1-bee9-783cee20565c/",
    "uuid": "650c206c-0050-45b1-bee9-783cee20565c",
    "codigo": 365,
    "descricao": "Especialização em Libras - Campus Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N° 51, DE 14 DE NOVEMBRO DE 2018.",
    "coordenador": "Ana Maria Zulema Pinto Cabral da Nobrega",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cc70313a-0f1d-480b-871d-b4bba7d9904f/",
      "uuid": "cc70313a-0f1d-480b-871d-b4bba7d9904f"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/cc70313a-0f1d-480b-871d-b4bba7d9904f/"
    ],
    "ch": 420
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/fc5d006d-c44f-4f72-9e4e-45ce7067d751/",
    "uuid": "fc5d006d-c44f-4f72-9e4e-45ce7067d751",
    "codigo": 366,
    "descricao": "Especialização em Ensino de Ciências e Matemática - Campus Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N° 50, DE 14 DE NOVEMBRO DE 2018.",
    "coordenador": "Ledevande Martins da Silva",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c31cb941-ee3b-442f-9f8b-b1534efc98f6/",
      "uuid": "c31cb941-ee3b-442f-9f8b-b1534efc98f6"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c31cb941-ee3b-442f-9f8b-b1534efc98f6/"
    ],
    "ch": 420
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a5258a72-0768-4d86-b341-deb489c68f0e/",
    "uuid": "a5258a72-0768-4d86-b341-deb489c68f0e",
    "codigo": 367,
    "descricao": "Especialização em Línguas Estrangeiras Modernas - Campus Cabedelo",
    "diretoria": "COORDENAÇÃO DE EDUCAÇÃO À DISTANCIA  -  CAMPUS CABEDELO",
    "natureza_participacao": "EaD",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N° 52, DE 14 DE NOVEMBRO DE 2018.",
    "coordenador": "Tatiana Maranhao de Castedo",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d0173710-ac46-4c11-b4d5-525371f12857/",
      "uuid": "d0173710-ac46-4c11-b4d5-525371f12857"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d0173710-ac46-4c11-b4d5-525371f12857/"
    ],
    "ch": 360
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/17dcb898-f916-4f48-8857-c24427cd774a/",
    "uuid": "17dcb898-f916-4f48-8857-c24427cd774a",
    "codigo": 368,
    "descricao": "Formação Inicial e Continuada em Informática Básica - Campus Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM Nº03, DE 18 DE FEVEREIRO DE 2019.",
    "coordenador": "Franklin Medeiros Galvao",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/acb5f870-1b26-455b-a4f9-d8839db13aa4/",
      "uuid": "acb5f870-1b26-455b-a4f9-d8839db13aa4"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/acb5f870-1b26-455b-a4f9-d8839db13aa4/"
    ],
    "ch": 95
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/4d832562-e0bb-4d4d-ad7e-206711073e60/",
    "uuid": "4d832562-e0bb-4d4d-ad7e-206711073e60",
    "codigo": 369,
    "descricao": "Mestrado Profissional em Tecnologia da Informação",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Mestrado",
    "resolucao_criacao": "",
    "coordenador": "Francisco Petronio Alencar de Medeiros",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bd364cf9-c402-4476-ada8-a4ec03e36c38/",
      "uuid": "bd364cf9-c402-4476-ada8-a4ec03e36c38"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bd364cf9-c402-4476-ada8-a4ec03e36c38/"
    ],
    "ch": 360
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/1b2c56fa-0dad-47fe-8a28-b2dcc454c674/",
    "uuid": "1b2c56fa-0dad-47fe-8a28-b2dcc454c674",
    "codigo": 370,
    "descricao": "Formação Inicial e Continuada em Ciências da Natureza para o ENEM",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9eee810f-56d7-40d4-96d9-dfb07495164d/",
      "uuid": "9eee810f-56d7-40d4-96d9-dfb07495164d"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9eee810f-56d7-40d4-96d9-dfb07495164d/"
    ],
    "ch": 48
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/6d377789-94e3-44f3-a9d1-c30d516e2e2c/",
    "uuid": "6d377789-94e3-44f3-a9d1-c30d516e2e2c",
    "codigo": 371,
    "descricao": "Histórias Políticas do Brasil Contemporâneo - nossos passados presentes - Campus Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e6531230-0274-4b79-a8f7-a33d6d8e26ca/",
      "uuid": "e6531230-0274-4b79-a8f7-a33d6d8e26ca"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e6531230-0274-4b79-a8f7-a33d6d8e26ca/"
    ],
    "ch": 12
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/69f38bc8-6a05-44d6-88e4-c8dfc5e59646/",
    "uuid": "69f38bc8-6a05-44d6-88e4-c8dfc5e59646",
    "codigo": 372,
    "descricao": "Especialização em Medicina Veterinária - Campus Sousa",
    "diretoria": "DIRECAO GERAL DO CAMPUS SOUSA",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/936d9f9a-eddd-40ee-b970-d8a423cb0bac/",
      "uuid": "936d9f9a-eddd-40ee-b970-d8a423cb0bac"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/936d9f9a-eddd-40ee-b970-d8a423cb0bac/"
    ],
    "ch": 610
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/040b7ff4-3bc2-498a-848c-59ce618e55ea/",
    "uuid": "040b7ff4-3bc2-498a-848c-59ce618e55ea",
    "codigo": 373,
    "descricao": "Formação Inicial e Continuada em Tecnologias Digitais para 8º e 9º Ano - Areia",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Jose Leonardo dos Santos Gomes",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/761f4e10-9024-48b6-9e81-aad7fbd59076/",
      "uuid": "761f4e10-9024-48b6-9e81-aad7fbd59076"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/761f4e10-9024-48b6-9e81-aad7fbd59076/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/d6dae223-62e2-4e11-882f-5343d6d93e74/",
    "uuid": "d6dae223-62e2-4e11-882f-5343d6d93e74",
    "codigo": 374,
    "descricao": "Formação Inicial e Continuada em Inglês Básico para Turismo - Areia",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "TURISMO, HOSPITALIDADE E LAZER",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Siberia Maria Souto dos Santos Farias",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2bfec7f7-e76e-465e-a800-256e318df0be/",
      "uuid": "2bfec7f7-e76e-465e-a800-256e318df0be"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2bfec7f7-e76e-465e-a800-256e318df0be/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/60ff7872-33c4-4c6d-8ae3-53140ea79112/",
    "uuid": "60ff7872-33c4-4c6d-8ae3-53140ea79112",
    "codigo": 375,
    "descricao": "Formação inicial e continuada em Gestão de Pequenos Negócios - Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": "GESTÃO E NEGÓCIOS",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Alberto Gustavo Paashaus Junior",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bb443047-9d7a-4a31-bb30-c9bfe1a012a0/",
      "uuid": "bb443047-9d7a-4a31-bb30-c9bfe1a012a0"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/bb443047-9d7a-4a31-bb30-c9bfe1a012a0/"
    ],
    "ch": 130
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/7cfc8e9f-0048-433b-a007-4978064501d6/",
    "uuid": "7cfc8e9f-0048-433b-a007-4978064501d6",
    "codigo": 376,
    "descricao": "Formação Inicial e Continuada em Língua Estrangeira – Inglês",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Gustavo Ferreira Dias",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c50799c0-2308-42b6-91b6-8ac67dfcdb75/",
      "uuid": "c50799c0-2308-42b6-91b6-8ac67dfcdb75"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/c50799c0-2308-42b6-91b6-8ac67dfcdb75/"
    ],
    "ch": 240
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/4326b453-f196-47a8-8a9a-3ddacc74fdfb/",
    "uuid": "4326b453-f196-47a8-8a9a-3ddacc74fdfb",
    "codigo": 377,
    "descricao": "Formação Inicial e Continuada em Operador de Computadores - Pedras de Fogo",
    "diretoria": "POLO DE EDUCAÇÃO A DISTÂNCIA - PEDRAS DE FOGO",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Frederico Campos Pereira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9c92e687-0b12-401f-b3ee-fb809041782c/",
      "uuid": "9c92e687-0b12-401f-b3ee-fb809041782c"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9c92e687-0b12-401f-b3ee-fb809041782c/"
    ],
    "ch": 120
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/2e3559f2-4de9-4eea-9c01-d83ed0db9104/",
    "uuid": "2e3559f2-4de9-4eea-9c01-d83ed0db9104",
    "codigo": 378,
    "descricao": "Formação Inicial e Continuada em Introdução à Robótica - Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": "CONTROLE E PROCESSOS INDUSTRIAIS",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Jose Torres Coura Neto",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b230e40d-a408-4f39-be64-77fb64461b32/",
      "uuid": "b230e40d-a408-4f39-be64-77fb64461b32"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/b230e40d-a408-4f39-be64-77fb64461b32/"
    ],
    "ch": 40
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/10e1644c-89ae-41cf-8421-e0a9896ccb77/",
    "uuid": "10e1644c-89ae-41cf-8421-e0a9896ccb77",
    "codigo": 379,
    "descricao": "Formação Inicial e Continuada em Língua Brasileira de Sinais – LIBRAS Modalidade Básico  - Campus Picuí",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PICUÍ",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Catia Monteiro Barbosa Maciel",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/778e2533-549b-4bf9-af65-daf821db9815/",
      "uuid": "778e2533-549b-4bf9-af65-daf821db9815"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/778e2533-549b-4bf9-af65-daf821db9815/"
    ],
    "ch": 80
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/0720c53c-179f-4935-8ebb-491feaa54c99/",
    "uuid": "0720c53c-179f-4935-8ebb-491feaa54c99",
    "codigo": 380,
    "descricao": "Especialização em Ensino em Matemática - Campina Grande",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAMPINA GRANDE",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Especialização",
    "resolucao_criacao": "RESOLUÇÃO-CS N° 56, DE 19 DE DEZEMBRO DE 2018.",
    "coordenador": "Luis Havelange Soares",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/10fbb832-b282-4414-b71d-95222f039304/",
      "uuid": "10fbb832-b282-4414-b71d-95222f039304"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/10fbb832-b282-4414-b71d-95222f039304/"
    ],
    "ch": 392
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/c3e17b4a-6acb-40e9-8253-b96c90be3f1c/",
    "uuid": "c3e17b4a-6acb-40e9-8253-b96c90be3f1c",
    "codigo": 381,
    "descricao": "Formação Inicial e Continuada Condução Ambiental em Unidades de Conservação  -  Campus Areia",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "TURISMO, HOSPITALIDADE E LAZER",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Jose Leonardo dos Santos Gomes",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6458070c-813d-4df6-906c-1153cdfb5ef4/",
      "uuid": "6458070c-813d-4df6-906c-1153cdfb5ef4"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/6458070c-813d-4df6-906c-1153cdfb5ef4/"
    ],
    "ch": 180
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/e4bfddff-5f1b-4285-852d-46fbc2e5c5c3/",
    "uuid": "e4bfddff-5f1b-4285-852d-46fbc2e5c5c3",
    "codigo": 382,
    "descricao": "Formação Inicial e Continuada em História da Arte - Campus Areia",
    "diretoria": "DIRETORIA DO  CAMPUS IMPLANTAÇÃO AREIA - REITORIA",
    "natureza_participacao": "Presencial",
    "eixo": "PRODUÇÃO ARTÍSTICA E CULTURAL E DESIGN",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Emanuel Guedes Soares da Costa",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e5a92ca9-f0da-43b6-a945-bb5d3fc97adb/",
      "uuid": "e5a92ca9-f0da-43b6-a945-bb5d3fc97adb"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e5a92ca9-f0da-43b6-a945-bb5d3fc97adb/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ffa452c8-cba8-4f28-a4c0-17b47487927b/",
    "uuid": "ffa452c8-cba8-4f28-a4c0-17b47487927b",
    "codigo": 383,
    "descricao": "Curso Livre de Extensão de Costureiro - Pedras de Fogo",
    "diretoria": "POLO DE EDUCAÇÃO A DISTÂNCIA - PEDRAS DE FOGO",
    "natureza_participacao": "Presencial",
    "eixo": "PRODUÇÃO ARTÍSTICA E CULTURAL E DESIGN",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": "Frederico Campos Pereira",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e6f8df72-f31b-4177-b2a0-6df873ffad37/",
      "uuid": "e6f8df72-f31b-4177-b2a0-6df873ffad37"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e6f8df72-f31b-4177-b2a0-6df873ffad37/"
    ],
    "ch": 40
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/fca19bcc-835c-4140-b31c-0032feeb91b6/",
    "uuid": "fca19bcc-835c-4140-b31c-0032feeb91b6",
    "codigo": 384,
    "descricao": "Superior de Bacharelado em Engenharia Mecânica - Campus João Pessoa",
    "diretoria": "DES -JP\tDEPARTAMENTO DE ENSINO SUPERIOR \t",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "RESOLUÇÃO AD REFERENDUM N° 45, DE 24 DE OUTUBRO DE 2018.",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/be6a8d4c-9baf-4f25-b8a8-a34ca6ee0c0a/",
      "uuid": "be6a8d4c-9baf-4f25-b8a8-a34ca6ee0c0a"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/be6a8d4c-9baf-4f25-b8a8-a34ca6ee0c0a/"
    ],
    "ch": 3754
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/88d606ba-9b41-4e8a-87eb-fb7ffbf67b97/",
    "uuid": "88d606ba-9b41-4e8a-87eb-fb7ffbf67b97",
    "codigo": 385,
    "descricao": "Formação Inicial e Continuada em Língua Brasileira de Sinais – LIBRAS Modalidade Básico - Campus Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e2d29e65-b469-41b0-96d3-09c15d85a8f5/",
      "uuid": "e2d29e65-b469-41b0-96d3-09c15d85a8f5"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e2d29e65-b469-41b0-96d3-09c15d85a8f5/"
    ],
    "ch": 50
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a3680ac9-e458-4a39-9da3-6da22bc03a12/",
    "uuid": "a3680ac9-e458-4a39-9da3-6da22bc03a12",
    "codigo": 386,
    "descricao": "Formação Inicial e Continuada em Música - Campus Itaporanga",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "PRODUÇÃO ARTÍSTICA E CULTURAL E DESIGN",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/69cef390-84dc-46a9-a914-b21af17513d2/",
      "uuid": "69cef390-84dc-46a9-a914-b21af17513d2"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/69cef390-84dc-46a9-a914-b21af17513d2/"
    ],
    "ch": 160
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/8a513473-7704-4648-bcf7-35b3492248e9/",
    "uuid": "8a513473-7704-4648-bcf7-35b3492248e9",
    "codigo": 387,
    "descricao": "Formação Inicial e Continuada em Eletricista Instalador de Painéis Fotovoltaicos",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS CAJAZEIRAS",
    "natureza_participacao": "Presencial",
    "eixo": "PRODUÇÃO INDUSTRIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a6759e28-76d6-4a8a-b1b4-c5fbad248a39/",
      "uuid": "a6759e28-76d6-4a8a-b1b4-c5fbad248a39"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/a6759e28-76d6-4a8a-b1b4-c5fbad248a39/"
    ],
    "ch": 42
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/a27cd776-d452-4c09-90c4-203095a7e853/",
    "uuid": "a27cd776-d452-4c09-90c4-203095a7e853",
    "codigo": 388,
    "descricao": "Formação Inicial e Continuada em Educação para as Relações Étnico-Raciais - Campus Esperança",
    "diretoria": "DIREÇÃO GERAL - CAMPUS ESPERANÇA",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d1678d08-4c9b-48fe-aa37-95a7e58138fe/",
      "uuid": "d1678d08-4c9b-48fe-aa37-95a7e58138fe"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/d1678d08-4c9b-48fe-aa37-95a7e58138fe/"
    ],
    "ch": 180
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/ff64c273-6e01-4f4e-951e-d63a1d514bdc/",
    "uuid": "ff64c273-6e01-4f4e-951e-d63a1d514bdc",
    "codigo": 389,
    "descricao": "Técnico em Informática Subsequente - Campus Pedras de Fogo",
    "diretoria": "POLO DE EDUCAÇÃO A DISTÂNCIA - PEDRAS DE FOGO",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Subsequente",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/003d725f-3274-4bdf-a6b6-0742c27a50bf/",
      "uuid": "003d725f-3274-4bdf-a6b6-0742c27a50bf"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/003d725f-3274-4bdf-a6b6-0742c27a50bf/"
    ],
    "ch": 1217
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/9961e96b-20a6-435b-9631-602884da0e7e/",
    "uuid": "9961e96b-20a6-435b-9631-602884da0e7e",
    "codigo": 390,
    "descricao": "Formação Inicial e Continuada em ENEM em Ciências da Natureza",
    "diretoria": "DIREÇÃO GERAL DO CAMPUS SANTA LUZIA",
    "natureza_participacao": "Presencial",
    "eixo": "DESENVOLVIMENTO EDUCACIONAL E SOCIAL",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2d9b8d1a-d6d9-4e5c-97a2-b6acdfb87a64/",
      "uuid": "2d9b8d1a-d6d9-4e5c-97a2-b6acdfb87a64"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/2d9b8d1a-d6d9-4e5c-97a2-b6acdfb87a64/"
    ],
    "ch": 120
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/6966b1c3-b633-461d-92a0-2f9c1111542a/",
    "uuid": "6966b1c3-b633-461d-92a0-2f9c1111542a",
    "codigo": 391,
    "descricao": "Formação Inicial e Continuada em Inglês Básico 1",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITABAIANA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e266a603-f6b1-456d-a52c-679ea13d6506/",
      "uuid": "e266a603-f6b1-456d-a52c-679ea13d6506"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/e266a603-f6b1-456d-a52c-679ea13d6506/"
    ],
    "ch": 40
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/216f34ce-0df6-4cf6-ba8d-c8c157cf717e/",
    "uuid": "216f34ce-0df6-4cf6-ba8d-c8c157cf717e",
    "codigo": 392,
    "descricao": "Bacharelado em Engenharia Civil -  Patos",
    "diretoria": "DIREÇÃO GERAL - CAMPUS PATOS ",
    "natureza_participacao": "Presencial",
    "eixo": null,
    "modalidade": "Bacharelado",
    "resolucao_criacao": "",
    "coordenador": "Gracieli Louise Monteiro Brito Vasconcelos",
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/43638785-95cf-4f8c-a2c3-0cdf134933fe/",
      "uuid": "43638785-95cf-4f8c-a2c3-0cdf134933fe"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/43638785-95cf-4f8c-a2c3-0cdf134933fe/"
    ],
    "ch": 3828
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/433e892d-b81b-4e06-81c0-3df00d4783af/",
    "uuid": "433e892d-b81b-4e06-81c0-3df00d4783af",
    "codigo": 393,
    "descricao": "Formação Inicial e Continuada em Filosofia e Cinema",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "PRODUÇÃO ARTÍSTICA E CULTURAL E DESIGN",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9939663f-8637-4b48-91d6-9687b7102a4b/",
      "uuid": "9939663f-8637-4b48-91d6-9687b7102a4b"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/9939663f-8637-4b48-91d6-9687b7102a4b/"
    ],
    "ch": 36
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/4ec562d9-804d-44df-9e74-cdeff5eb4bae/",
    "uuid": "4ec562d9-804d-44df-9e74-cdeff5eb4bae",
    "codigo": 394,
    "descricao": "Formação Inicial e Continuada em Operador de Computadores III - Pedras de Fogo",
    "diretoria": "POLO DE EDUCAÇÃO A DISTÂNCIA - PEDRAS DE FOGO",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5615d622-6539-4a18-b4e8-3e8b1622bc90/",
      "uuid": "5615d622-6539-4a18-b4e8-3e8b1622bc90"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/5615d622-6539-4a18-b4e8-3e8b1622bc90/"
    ],
    "ch": 150
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/f3498d7c-d974-4196-9421-81ecf55554cb/",
    "uuid": "f3498d7c-d974-4196-9421-81ecf55554cb",
    "codigo": 395,
    "descricao": "Formação Inicial e Continuada em Produção Textual Interdisciplinar para a Formação Cidadã Integral",
    "diretoria": "DIREÇÃO GERAL - CAMPUS ESPERANÇA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/efd3a0f0-b931-406d-8fcf-4227ea8e6840/",
      "uuid": "efd3a0f0-b931-406d-8fcf-4227ea8e6840"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/efd3a0f0-b931-406d-8fcf-4227ea8e6840/"
    ],
    "ch": 260
  },
  {
    "url": "http://suap.ifpb.edu.br/api/ensino/cursos/v1/b6073bf5-9146-499f-ada0-2fb6ccc4e566/",
    "uuid": "b6073bf5-9146-499f-ada0-2fb6ccc4e566",
    "codigo": 396,
    "descricao": "Formação Inicial e Continuada em Inglês Intermediário",
    "diretoria": "DIRETORIA GERAL - CAMPUS ITAPORANGA",
    "natureza_participacao": "Presencial",
    "eixo": "INFORMAÇÃO E COMUNICAÇÃO ",
    "modalidade": "FIC",
    "resolucao_criacao": "",
    "coordenador": null,
    "matriz_vingente": {
      "url": "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/233d7dc9-4ab4-4233-9a48-1c8082b7379d/",
      "uuid": "233d7dc9-4ab4-4233-9a48-1c8082b7379d"
    },
    "matrizes": [
      "http://suap.ifpb.edu.br/api/ensino/matrizes/v1/233d7dc9-4ab4-4233-9a48-1c8082b7379d/"
    ],
    "ch": 60
  }
]