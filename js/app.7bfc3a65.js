(function(e){function a(a){for(var n,i,s=a[0],c=a[1],d=a[2],l=0,u=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(t.splice(a--,1),e=c(c.s=o[0]))}return e}var n={},i={app:0},r={app:0},t=[];function s(e){return c.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"93afbcd2","chunk-0206bfa0":"900a2297","chunk-0c047e41":"4fde840b","chunk-13a6037e":"5a6a0877","chunk-18f95272":"d3dd1ca7","chunk-25b302c8":"6d71df62","chunk-26fc7596":"31e6c466","chunk-2c06842c":"01ce47ea","chunk-2d0c5615":"51cf2fcf","chunk-2d0e96ec":"9c285e88","chunk-2d208d90":"9bb1dfe9","chunk-2d21d0e2":"0f763817","chunk-2d22c123":"d945fee8","chunk-2d2747e2":"88ff282b","chunk-2e80bb9a":"90e9e82e","chunk-319206de":"8b77f2d4","chunk-32334cb6":"00348b09","chunk-36769079":"ca73e294","chunk-3c57cd7b":"7b8deb45","chunk-4cdd78c0":"533f196c","chunk-4f2d402a":"c081fd92","chunk-515a8379":"38fdb8e4","chunk-53ccb27e":"cb2f01be","chunk-55d286b8":"576e1887","chunk-59974754":"e631ae2e","chunk-60cbc06b":"847f7e1f","chunk-659152b8":"fc3160bd","chunk-6e1e538a":"c8f0f169","chunk-766a929b":"d14f1c9a","chunk-c796899c":"560a8fe2","chunk-e8a7823a":"a2fddbba","chunk-f2df7d2c":"0393230e","chunk-fde47172":"4c8481f6",comple:"2b556b3b",creditos:"01a5899f",glosario:"f994aaaf",intro:"9a7f352b",referencias:"d1d7f2c4",sintesis:"2fbfdf43",tema1:"26183ada",tema2:"f835803a",tema3:"d71a306f"}[e]+".js"}function c(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var a=[],o={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema1:1,tema3:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"7687666b","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"c504ce8d","chunk-60cbc06b":"d3a83979","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"126808df","chunk-766a929b":"182eeb80","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"b5cebe76",creditos:"f4e80086",glosario:"8de5ac51",intro:"31d6cfe0",referencias:"1b4d89c6",sintesis:"31d6cfe0",tema1:"0064dcd9",tema2:"31d6cfe0",tema3:"e66805a8"}[e]+".css",r=c.p+n,t=document.getElementsByTagName("link"),s=0;s<t.length;s++){var d=t[s],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===r))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){d=u[s],l=d.getAttribute("data-href");if(l===n||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete i[e],m.parentNode.removeChild(m),o(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,o){n=r[e]=[a,o]}));a.push(n[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},c.m=e,c.c=n,c.d=function(e,a,o){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)c.d(o,n,function(a){return e[a]}.bind(null,n));return o},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"417a":function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.8caaac81.svg"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},s=t,c=o("2877"),d=Object(c["a"])(s,i,r,!1,null,null,null),l=d.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Monitoreo en la gestión integral de residuos",descripcionCurso:"En este componente formativo, partiendo de una base teórica-conceptual, se realizará la explicación de la gestión externa en la empresa con relación al plan de gestión integral de residuos y el monitoreo de la gestión integral de residuos, necesarios en los procesos de mejora continua de las organizaciones.",imagenBannerPrincipal:o("74b5"),fondoBannerPrincipal:o("417a")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Conceptos Generales ",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Gestión Externa de la gestión integral de los residuos sólidos ",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Transporte externo de residuos sólidos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Empresas gestoras de los residuos sólidos",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Monitoreo de la gestión integral de los residuos sólidos ",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Elaboración de un plan de seguimiento ",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Indicadores",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Hoja de vida del indicador",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Solicitud de certificados",hash:"t_3_4"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/222319_CF14_DU.zip"},{icono:"fas fa-download",titulo:"Descargar HTML",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"2.2 Empresas gestoras de los residuos sólidos",referencia:"Gómez, P. (2017). <em>Plan de negocio de empresa de reciclaje </em>",tipo:"Video",link:"https://www.youtube.com/watch?v=T1TZ2OpdC1w"},{tema:"2.2 Empresas gestoras de los residuos sólidos",referencia:"Lito S.A.S. (2014).  <em>Video Institucional Lito SAS</em>",tipo:"Video",link:"https://www.youtube.com/watch?v=wZv_ofWIRUQ"},{tema:"2.2 Empresas gestoras de los residuos sólidos",referencia:"Transporte residuos peligrosos soluciones de saneamiento ambiental. (2013). <em>Transporte residuos peligrosos</em>",tipo:"Video",link:"https://www.youtube.com/watch?v=PjUOEpTLbBg"}],glosario:[{termino:"Aprovechamiento y/o valorización",significado:"“es el proceso de recuperar el valor remanente o el poder calorífico de los materiales que componen los residuos o desechos peligrosos, por medio de la recuperación, el reciclado o la regeneración”. (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2015). "},{termino:"Disposición final",significado:"“es el proceso de aislar y confinar los residuos o desechos peligrosos, en especial los no aprovechables, en lugares especialmente seleccionados, diseñados y debidamente autorizados, para evitar la contaminación y los daños o riesgos a la salud humana y al ambiente.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2015). "},{termino:"Gestión Interna de residuos",significado:"“son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización. <br> 1) Dotación de contenedores donde depositar los residuos. 2) Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje.  <br> 3) Transporte de los residuos al almacén central de residuos sanitarios del centro.”  (Área de salud de Cáceres, 2015). "},{termino:"Gestión Externa de residuos",significado:"“son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación. 4) Recogida y transporte a Plantas de Transferencia o Tratamiento. 5) Tratamiento y eliminación. Desde un punto de vista general, los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.”  (Área de salud de Cáceres, 2015). "},{termino:"Indicador",significado:"“un indicador es una comparación entre dos o más tipos de datos que sirve para elaborar una medida cuantitativa o una observación cualitativa. Esta comparación arroja un valor, una magnitud o un criterio, que tiene significado para quien lo analiza.” (OIT, 2011). "},{termino:"Manejo integral de residuos",significado:"“es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos.” (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002). "},{termino:"Residuo sólido o desecho",significado:"“es cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final. Los residuos sólidos se dividen en aprovechables y no aprovechables. Igualmente, se consideran como residuos sólidos aquellos provenientes del barrido de áreas públicas.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002). "},{termino:"Residuo peligroso",significado:"“es aquel que por sus características infecciosas, tóxicas, explosivas, corrosivas, inflamables, volátiles, combustibles, radiactivas o reactivas puedan causar riesgo a la salud humana o deteriorar la calidad ambiental hasta niveles que causen riesgo a la salud humana. También son residuos peligrosos aquellos que sin serlo en su forma original, se transforman por procesos naturales en residuos peligrosos. Así mismo, se consideran residuos peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002). "},{termino:"Residuos Especiales",significado:"“son aquellos residuos que por su naturaleza, composición, tamaño, volumen y peso no puedan ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluye los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas, y los residuos provenientes de actividades de construcción y demás obras civiles.” (Área metropolitana del Valle de Aburrá, 2016). "},{termino:"Reciclaje",significado:"“es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002). "},{termino:"Reutilización",significado:"“es la prolongación y adecuación de la vida útil de los residuos sólidos recuperados y que mediante procesos, operaciones o técnicas devuelven a los materiales su posibilidad de utilización en su función original o en alguna relacionada, sin que para ello requieran procesos adicionales de transformación.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002). "}],referencias:[{referencia:"Área de Salud de Cáceres. (2015). <em>Manual de gestión interna y externa de residuos.</em>  ",link:"https://www.areasaludcaceres.es/docs/files/1195img.pdf "},{referencia:"Área metropolitana del Valle de Aburrá (2016). <em>Manual para el manejo integral de residuos sólidos en el Valle de Aburrá.</em> ",link:""},{referencia:"Área Metropolitana Valle de Aburrá. (2013). <em>Plan de gestión integral de desechos o residuos peligrosos.</em>  ",link:"https://www.metropol.gov.co/ambiental/residuos-solidos/GestionRespel/FORMATOS%20GUIA%20RESPEL.pdf  "},{referencia:"Creos Ltda (2016) <em>Indicadores tablas unificadas de mando.</em>",link:"https://www.creosltda.com/creos2/index.php/sogc/indicadores.html"},{referencia:'Decreto 1713 de 2002. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos". Agosto 6 de 2002. ',link:"https://corponarino.gov.co/expedientes/juridica/2002decreto1713.pdf "},{referencia:"Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se expide el Decreto Único Reglamentario del sector Ambiente y Desarrollo Sostenible. Mayo 26 de 2015.",link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153"},{referencia:"Ministerio de Minas y Energía. (2010). <em>Indicadores de gestión.</em>",link:"https://es.slideshare.net/albacora_48/indicadores-de-gestion-mme"},{referencia:"OIT. (2011) ¿Qué son y cómo se construyen los indicadores en la evaluación de impacto?",link:"https://guia.oitcinterfor.org/como-evaluar/como-se-construyen-indicadores"},{referencia:"Universidad Pontificia Bolivariana. (2011). <em>Guía para la gestión de residuos peligrosos.</em> ",link:"https://www.metropol.gov.co/ambiental/residuos-solidos/GestionRespel/GUIA_RESPEL.pdf  "},{referencia:"Universidad Pontificia Bolivariana y Área Metropolitana del Valle de Aburrá. (2008). <em>Guía para el manejo integral de residuos.</em>  ",link:"https://www.sabaneta.gov.co/files/doc_varios/Gu%C3%ADa%20para%20el%20Manejo%20Integral%20de%20Residuos-%20Subsector%20instituciones%20educativas.pdf "}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Líder del equipo",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes ",cargo:"Responsable de línea de producción",centro:"Regional Santander Centro Industrial del Diseño y la Manufactura"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Diana Carolina Triana Guarnizo",cargo:"Instructor",centro:"Centro de Gestión Industrial - Distrito Capital"},{nombre:"Juan Carlos Cárdenas Sánchez",cargo:"Instructor",centro:"Centro de Gestión Industrial - Distrito Capital"},{nombre:"Fabián Leonardo Correa Díaz",cargo:"Diseñador Instruccional",centro:"Centro agropecuario La Granja - Regional Tolima"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Evaluadora Instruccional",centro:"Centro de Gestión Industrial"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carlos Julian Ramirez",cargo:"Diseñador web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollador Fullstack Junior",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta ",cargo:"Actividad didáctica  ",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander "},{nombre:"Zuleidy María Ruíz Torres ",cargo:"Validación audiovisual ",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander "},{nombre:"Camilo Andrés Bolaño Rey ",cargo:"Locución ",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander "},{nombre:"Carlos Eduardo Garavito Parada ",cargo:"Producción audiovisual ",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander "}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Luis Gabriel Urueta ",cargo:"Validación Contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniel Mutis",cargo:"Validación de contenidos accesibles",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=v;var k=o("9224");n["a"].prototype.$package=k,new n["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"74b5":function(e,a,o){e.exports=o.p+"img/banner-princiapal.bfcdbfe0.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){}});
//# sourceMappingURL=app.7bfc3a65.js.map