<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Monitoreo de la gestión integral de los residuos sólidos
    p.mb-5(data-aos='fade-right') El seguimiento permite la verificación del cumplimiento de las medidas propuestas para el Manejo Integral de Residuos. De su correcta estructuración depende el control y la identificación de aspectos que afecten su adecuada implementación. Se deben generar estrategias que faciliten el proceso de control a las diferentes etapas del Manejo Integral de los Residuos.
    .row.justify-content-center.mb-3
      .col-lg-8.mb-lg-0.mb-3
        div(style="background-color: #F6FFE0").p-5.h-100
          .d-flex.justify-content-center.align-items-.row.justify-content-center
            p.mb-0 Para el caso de los residuos o desechos peligrosos, el seguimiento debe considerar además las medidas tendientes a la recopilación de la información que se debe presentar a las autoridades ambientales, por medio del Sistema de Información diseñado para tal fin, en los términos dispuestos en la Resolución 1362 de 2007 expedida por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial sobre el registro de generadores y sus reportes mensuales y presentación de informes de acuerdo a políticas de la autoridad competente puede ser cada 6 meses o anual.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/3/1.png', alt='')
    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Elaboración de un plan de seguimiento 
    .row.justify-content-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3/2.svg', alt='')
      .col-lg-10
        p.mb-0(data-aos='fade-right') #[span.sb1 El Plan de Seguimiento, permite la verificación del cumplimiento de las medidas propuestas en el Manejo Integral de Residuos.] Se pueden utilizar herramientas como formatos de verificación, que pueden ser diligenciados por el Grupo de Gestión Ambiental o Gestor Ambiental, en visitas de seguimiento al interior de la organización, o por personal que se encuentre directamente relacionado con el manejo de los residuos, como el de aseo o de oficios generales.
    .tarjeta.bg-slyde.p-lg-5.p-3.mb-4
      .row.justify-content-center.mb-5
        .col-lg-5.mb-lg-0.mb-3
          .tarjeta.bg-white.p-4
            .titulo-sexto.color-acento-botones(data-aos='fade-right')
              h5.mb-4 Personal de aseo o servicios generales
              p Este talento humano, es un integrante de vital importancia para el seguimiento de la implementación del Manejo Integral de Residuos, debe ser el primer actor que se capacite; incluso, puede servir de multiplicador de la información al interior de la organización e independiente de su formación educativa, debe estar en capacidad de diligenciar formatos donde se indiquen en qué lugar de la organización, piso, zona, sector, oficina o planta, se perciben problemas relacionados con el mal manejo de residuos.
        .col-lg-5
          .tarjeta.bg-white.p-4
            .titulo-sexto.color-acento-botones(data-aos='fade-right')
              h5.mb-4 Los formatos
              .row.justify-content-center
                .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3/3.svg', alt='')
                .col-lg-10
                  p Las observaciones referenciadas en los formatos deben ser entregadas periódicamente al Grupo de Gestión Ambiental o al Gestor Ambiental, para realizar los análisis respectivos y acometer los ajustes necesarios al proceso.
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 3
        | #[em Actividades de seguimiento de la gestión ambiental en residuos.]
      .tabla-a.color-acento-botones.mb-5
        table
          thead
            tr(style="background-color: #BADC61")
              th Componente
              th Actividades de Seguimiento
              th Responsable
          tbody.bg-white
            tr
              td.fw-bold.text-center Capacitación
              td 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Verificar el cumplimiento de las capacitaciones programadas
              td Coordinador general
                br
                |Grupo de Gestión
                br
                |Ambiental
            tr
              td.fw-bold.text-center Separación en la fuente
              td 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Identificar y verificar si se están separando adecuadamente los residuos generados en cada sector de la organización
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Visitas a cada sector
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Entrevista al personal de servicios generales
              td Grupo de Gestión
                br
                |Ambiental
            tr
              td.fw-bold.text-center Almacenamiento
              td 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Revisar si los sitios de almacenamiento cumplen con los requerimientos establecidos, mediante visitas programadas en compañía del personal de oficios varios
              td Grupo de Gestión Ambiental
            tr
              td.fw-bold.text-center Tratamiento
              td 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Verificar la entrega oportuna de los residuos a los entes externos encargados de su tratamiento
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Determinar pesos de material entregado, así como los cambios que puedan generarse
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Verificar los certificados de las empresas encargadas del tratamiento a los residuos de la organización
              td Grupo de Gestión Ambiental
            tr
              td.fw-bold.text-center Disposición final
              td 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Verificar entrega oportuna de residuos que se disponen en relleno
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Determinar pesos de material entregado a la empresa de aseo encargada del transporte de los residuos
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Verificar los certificados de las empresas encargadas del tratamiento a los residuos de la organización
              td Grupo de Gestión Ambiental
            tr
              td.fw-bold.text-center Análisis de indicadores, elaboración de declaratoria
              td 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Verificar rutas resolución interna y de horarios establecidos
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Cantidad de residuos separados por tipo
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Cantidad de residuos tratados
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Cantidad de residuos dispuestos en relleno sanitarios
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Cantidad de residuos reciclados y/o reutilizados
              
              
              td Grupo de Gestión Ambiental
      .row.justify-content-center
        .col-lg-10
          .tarjeta.bg-white.p-4
            .titulo-sexto.color-acento-botones(data-aos='fade-right')
              h5.mb-4 Listas de chequeo
              .row.justify-content-center.mb-5
                .col-lg-1.col-2: img(src='@/assets/curso/temas/3/4.svg', alt='')
                .col-lg-10
                  p Se requiere usar para el seguimiento, listas de chequeo, que pueden hacerse a manera de inspecciones planificadas cada cierto tiempo y mínimo una auditoría interna anual. 
            .row.justify-content-center.mb-5
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('downloads/auditoria_interna.pdf')" target="_blank")
                  .row.justify-content-around.align-items-center
                    .col-2
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg" style="width: 80px")
                    .anexo__texto
                      p.mb-0 Anexo. Formato de auditoría interna
    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Indicadores
    .bloque-derecha.mb-5 
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/3/5.jpg')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 #[b Los indicadores de gestión son un conjunto de expresiones numéricas que representan los aspectos que son susceptibles de variar en el tiempo, permiten analizar la evolución y el cumplimiento de las metas propuestas para el Manejo Integral de Residuos.] Para ello es necesario definir con antelación, aspectos tales como: qué es lo que se va a medir, quién va a realizar la medición, cuáles son los mecanismos de medición que se van a utilizar y para qué sirven los resultados. Los indicadores de gestión que debe calcular la organización como mínimo son los siguientes para la gestión integral de los residuos sólidos
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA.mb-5.acordion-i(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Reducción en la cantidad de residuos producidos:")
            p.px-5 Este indicador muestra la disminución en la cantidad total residuos generados por la organización incluyendo el material aprovechable y no aprovechable, peligroso o no peligroso, en otras palabras, es la sumatoria de todos los residuos generados, durante un periodo de tiempo determinado, el nivel de referencia se establece con el dato de generación de residuos aportado en el diagnóstico o con los datos del primer año de registros, comparado mes a mes:
            img(src='@/assets/curso/temas/3/6.svg', alt='Fórmula que expresa el porcentaje de reducción de producción de residuos de una organización, el cual es igual a la cantidad de residuos producidos al año menos la cantidad de residuos producidos en al momento de la medición, dividido por entre los residuos producidos en el primer año, todo ello multiplicado por cien.').px-5
          div(titulo="Indicadores de destinación:")
            p Es el cálculo de la cantidad de residuos sometidos a desactivación de alta eficiencia, incineración, reciclaje, disposición en rellenos sanitarios, u otros sistemas de tratamiento dividido entre la cantidad total de residuos que fueron generados.
            img(src='@/assets/curso/temas/3/7.svg', alt='Fórmulas para hallar el porcentaje de destinación de relleno sanitario, de destinación para reciclaje, de destinación para incineración y destinación para otros sistemas.').px-5
            p Para este último se debe especificar a qué otro tipo de sistemas se hace referencia, en caso de presentarse más de uno se debe realizar el cálculo para cada uno de estos.
          div(titulo="Reducción en la cantidad de residuos producidos:")
            p Porcentaje de avance del programa de formación y educación.
              br
              br
              |Este indicador muestra el total de talleres que se han hecho efectivos, con relación al total programadas.
            img(src='@/assets/curso/temas/3/8.svg', alt='Fórmula que expresa cómo hallar el porcentaje de avance en los programas de formación y educación, el cual es igual al número de talleres realizados dividido entre el número de talleres planteados, multiplicado por cien.').px-5
    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Hoja de vida del indicador
    .cajon-editado
      .cajon-b.color-acento-botones.p-3.mb-5
        p.mb-0 En consecuencia, con los indicadores de gestión, es recomendable que los mismos se manejen mediante un formato donde se observe claramente, como en la figura 3, el nombre del indicador, la fórmula de cálculo, la unidad de medida y la frecuencia con la que se debe medir para agilizar el trabajo y su posterior análisis.
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.mb-5
          .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3/9.svg', alt='')
          .col-lg-10
            div(style="background-color: #DEE9F0").p-4
              p.mb-0 La organización, de acuerdo con sus metas planteadas, debe formular otro tipo de indicadores que le permitan medir su desempeño en términos cuantitativos. Es el caso del indicador de producción, que varía de acuerdo con cada organización y que es de vital importancia para medir la efectividad de sus procesos planteados.
    .row.justify-content-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3
          span.fst-italic Hoja de vida del indicador
        img(src='@/assets/curso/temas/3/hv.png', alt='Formato en el que se diligencia la información necesaria para agilizar los procesos de cálculos y análisis de los indicadores de gestión.')
    //- .row.justify-content-center.mb-5
    //-   .col-lg-6
    //-     a.anexo.mb-4(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
    //-       .row.justify-content-around.align-items-center
    //-         .col-2
    //-           .anexo__icono
    //-             img(src="@/assets/template/icono-pdf.svg" style="width: 80px")
    //-         .anexo__texto
    //-           p.mb-0 Descargar Hoja de vida del Indicador
    .tarjeta.p-5.mb-5(style="background-color: #ECF7F4")
      p.mb-3 Para cumplir con este propósito de seguimiento, los indicadores deben contar, metodológicamente, con una hoja de vida que los defina y sustente, la cual contenga:
      .row.justify-content-center.mb-5
        .col-lg-7
          ul.lista-ul--color.fw-bold
            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Nombre del indicador
            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold  Objetivo del indicador

            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold  Tipo de indicador
            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Nivel del indicador
            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Fórmula

            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Periodicidad

            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Fuente de datos

            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Responsable de generar los datos
            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Quién lo mide
            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold  Responsable de análisis del indicador

            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Interpretación

            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold  Límites de interpretación o rangos o criterio de análisis (condición crítica, normal y satisfactoria)

            li.mb-0.d-flex
              i.fas.fa-check(style="color: #FEB12E")
              p.mb-0.fw-bold Meta establecida Creos Ltda. (2016)
        .col-lg-4: img(src='@/assets/curso/temas/3/19.png', alt='')
    Separador 
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Solicitud de certificados
    .card-tema.p-4.mb-5(style="background-color: #FAEDC0")
      img.d-xl-block.d-none.card-1(src='@/assets/curso/temas/3/10.png', alt='' style="width: 320px; left: 5%").px-5
      .row.justify-content-center.align-items-center
        .col-lg-4
          img.d-xl-none.d-block.m-auto(src='@/assets/curso/temas/3/10.png', alt='' style="width: 320px; left: 5%").px-5
        .col-lg-8
          p.mb-0.p-2 La organización en cabeza del Grupo de Gestión Ambiental o el Gestor Ambiental debe asegurarse que las empresas prestadoras del servicio de aprovechamiento, almacenamiento, acopio, tratamiento y/o disposición final de residuos sólidos peligrosos y no peligrosos, cuenten con las respectivas licencias o permisos expedidos por la autoridad ambiental para realizar estas labores; así mismo, de solicitar a terceros, los documentos donde se verifique esta situación, junto con los certificados sobre la disposición adecuada de los residuos que la organización entrega.
            br
            br
            |En el certificado que se solicite a la organización que preste el servicio debe quedar claramente establecida la cantidad de residuos entregados para su respectivo manejo.


              


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
span.sb1
  background-color: #BADC61
  font-weight: bold
.acordion-i
  i
    color: $color-acento-botones
.acordion__activo
  background-color: #DCE7C1
.cajon-editado
  .cajon-b:before
    background-color: rgba($color-acento-botones, .4 )
    height: 100%
    width: 20%
</style>
