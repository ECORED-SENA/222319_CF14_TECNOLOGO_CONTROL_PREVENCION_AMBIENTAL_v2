<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión Externa de la gestión integral de los residuos sólidos
    p.mb-5(data-aos='fade-right') La organización deberá verificar que este manejo se realice adecuadamente y en cumplimiento de la normatividad ambiental vigente aplicable para cada caso. Adicionalmente, debe solicitar a la empresa externa, encargada de gestionar los residuos peligrosos, una copia de las autorizaciones (permisos y licencias) otorgadas por la autoridad ambiental competente para el desarrollo de estas actividades.
    .row.justify-content-center.mb-3
      .col-lg-8.mb-lg-0.mb-3
        div(style="background-color: #ecf7f4").p-5.h-100
          .d-flex.justify-content-center.align-items-.row.justify-content-center
            p.mb-0 #[b La gestión externa] tiene que ver con la recolección y transporte externo del gestor de residuos y del establecimiento de reciclaje, reutilización. Compostaje, tratamiento y/o disposición final de los residuos por parte del gestor ambiental. El manejo externo de los residuos sólidos incluye todas las actividades que se realizan cuando éstos salen de la organización.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/2/1.png', alt='')
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/2/2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 #[b Se debe identificar] y describir en el Manejo Integral de Residuos la información de la empresa contratada y el tipo de manejo que reciben los residuos al exterior de la organización, en qué tipo de vehículo se recolectan, con qué frecuencia se hace, entre otra información asociada a esta actividad. Todos los generadores de residuos peligrosos deben conservar, hasta por un tiempo de cinco (5) años, las certificaciones de almacenamiento, aprovechamiento, valorización, tratamiento o disposición final de sus residuos, emitidos por los respectivos receptores.
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #faedc0").d-inline-flex.align-items-start
          img(src='@/assets/curso/temas/1/icon.svg', alt='' style="width: 110px").me-5
          .textos(style="width: 80%").p-4
            p Hay que recordar que esta actividad se debe hacer para todos los residuos que se generen, incluyendo los peligrosos. Un ejemplo de esta actividad se presenta en la siguiente tabla 1:
    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Tabla 1 
      | #[em Modelo de registro para el manejo externo de los residuos]\
    .tabla-a.color-acento-botones.mb-5
      table
        caption Nota. Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008).
        thead
          tr(style="background-color: #BADC61")
            th Número
            th Residuo
            th Recolección #[br] Transporte
            th Cant #[br] Kg/mes
            th Tratamiento
            th Cant #[br] Kg/mes
            th Aprovechamiento
            th Cant #[br] Kg/mes
            th Disposición #[br] final
            th Cant #[br] Kg/mes
            th Certificados
            th Obs
        tbody
          tr
            td 1
            td Ordinario
            td Empresas varias de Medellín ESP
            td 
            td No
            td 
            td No
            td 1230
            td Relleno sanitario La Pradera
            td 
            td Si
            td 
          tr
            td 2
            td Papel y cartón
            td Papeles nacionales
            td 
            td No
            td 
            td Papeles nacionales
            td 325
            td No
            td 
            td Si
            td 
          tr
            td 3
            td Plástico 
            td Plástico Berpa
            td 
            td No
            td 
            td Plástico Berpa
            td 250
            td No
            td 
            td Si
            td 
          tr
            td 4
            td Residuos infecciosos
            td ASEI Ltda
            td 
            td ASEI Ltda
            td 
            td 
            td 10
            td Relleno sanitario La Pradera
            td 
            td Si
            td 
          tr
            td 5
            td Estopas impregnadas con solventes
            td ASEI Ltda
            td 
            td ASEI Ltda
            td 
            td No
            td 352
            td Relleno sanitario La Pradera
            td 
            td Si
            td 
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Transporte externo de residuos sólidos
    p.mb-5(data-aos='fade-right') Los vehículos que recolecten o transporten residuos infecciosos y químicos deben contar, como mínimo, con las características que, a continuación, se muestran.
    .d-inline-block.rounded-pill.tarjeta.color-primario.p-3.mb-4
      h4.text-white.mb-0.mx-3 Equipamiento y dotación de los vehículos
    .bg-slyde.p-5.mb-5
      SlyderA(tipo='b')
        .row.mb-4
          .col-md-5.mb-4.mb-md-0
            .tarjeta.rounded-circle.color-primario.d-inline-block.p-3.mb-4
              h4.text-white.mb-0.mx-1 1
            p #[b Identificación del vehículo:] en los vehículos se utiliza señalización visible, indicando el tipo de residuos que transportan, especificando el nombre del municipio(s), el nombre de la empresa con dirección y teléfono. Acondicionamiento del vehículo: el transporte se realiza en vehículos cerrados, con adecuaciones necesarias para evitar el derrame o esparcimiento de residuos en vías y estacionamientos.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/2/3.png', alt='Texto que describa la imagen')
        .row.mb-4
          .col-md-5.mb-4.mb-md-0
            .tarjeta.rounded-circle.color-primario.d-inline-block.p-3.mb-4
              h4.text-white.mb-0.mx-1 2
            p El vehículo recolector de residuos debe tener superficies internas lisas de bordes redondeados de forma que se facilite el aseo y estar provisto de ventilación adecuada. Dotado de un sistema de carga y descarga que no permita que se rompan los recipientes. Si es de carga manual, la altura desde el piso al punto de carga en el vehículo debe ser inferior a 1.20 m.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/2/4.png', alt='Texto que describa la imagen')
        .row.mb-4
          .col-md-5.mb-4.mb-md-0
            .tarjeta.rounded-circle.color-primario.d-inline-block.p-3.mb-4
              h4.text-white.mb-0.mx-1 3
            p El vehículo estará dotado de canastillas retornables donde se depositan las bolsas con residuos, estos recipientes serán de material rígido e impermeable, evitando la compresión de los residuos al sobreponer bolsas. Los vehículos de recolección se lavarán y desinfectarán de manera apropiada únicamente en los lugares designados para tal fin dentro de las instalaciones del prestador del servicio especial de aseo, y el efluente proveniente del lavado y desinfección del vehículo debe ser objeto de tratamiento cumpliendo con lo establecido en el Decreto 1594 de 1984 o la norma que lo sustituya o modifique.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/2/5.png', alt='Texto que describa la imagen')
        .row.mb-4
          .col-md-5.mb-4.mb-md-0
            .tarjeta.rounded-circle.color-primario.d-inline-block.p-3.mb-4
              h4.text-white.mb-0.mx-1 4
            p Los horarios y frecuencias de recolección los establece el generador de acuerdo con su capacidad de almacenamiento y el volumen de generación de residuos. La frecuencia de recolección de los residuos infecciosos no podrá ser inferior a una vez semanal (7 días), debido a sus características y posible descomposición. No obstante, lo anterior, los pequeños generadores (farmacias, centros de pigmentación y/o tatuajes) podrán ampliar el tiempo de almacenamiento (en ningún caso superior a un mes), siempre y cuando no sean residuos anatomopatológicos o de animales.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/2/6.png', alt='Texto que describa la imagen')
        .row.mb-4
          .col-md-5.mb-4.mb-md-0
            .tarjeta.rounded-circle.color-primario.d-inline-block.p-3.mb-4
              h4.text-white.mb-0.mx-1 5
            p Los vehículos dispondrán de sistemas de comunicación a fin de informar accidentes, daños en el vehículo que impidan su marcha y sea posible su desvare inmediato y deben estar provistos de drenaje con tapa hermética, la cual solo debe abrirse para el respectivo lavado interior del carro. 

          .col-md-7
            figure
              img(src='@/assets/curso/temas/2/7.png', alt='Texto que describa la imagen')
        .row.mb-4
          .col-md-5.mb-4.mb-md-0
            .tarjeta.rounded-circle.color-primario.d-inline-block.p-3.mb-4
              h4.text-white.mb-0.mx-1 6
            p El manifiesto de transporte de residuos peligrosos es un documento donde se relacionan: tipo y cantidad de residuos transportados, nombre del generador, destino, fecha del transporte, firma de quien entrega, nombre del conductor, placa del vehículo, etc. Una copia del documento queda en poder del generador y el original en poder del prestador del servicio. Los manifiestos de residuos peligrosos serán implementados por las empresas prestadoras del servicio público especial de aseo. ¡Se prohíbe mezclar residuos peligrosos con no peligrosos; sólo se recogerán los residuos debidamente empacados, identificados y relacionados en el manifiesto de Transporte.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/2/8.png', alt='Texto que describa la imagen')
        .row.mb-4
          .col-md-5.mb-4.mb-md-0
            .tarjeta.rounded-circle.color-primario.d-inline-block.p-3.mb-4
              h4.text-white.mb-0.mx-1 7
            p Los vehículos destinados a la recolección de residuos hospitalarios y similares, además de las anteriores características, cumplirán con lo establecido en la Resolución 2309 de 1986 y las normas vigentes. Siempre que los residuos lleguen a la instalación del prestador del servicio especial de aseo, deben pesarse y verificarse las condiciones de empaque en las cuales fueron entregadas por cada uno de los generadores, consignando estos datos, como también fecha, hora, y razón social del generador en el formulario RHPS si recoge residuos hospitalarios y similares. Las operaciones diarias serán consolidadas de manera mensual y cada seis meses el prestador del servicio público especial de aseo debe enviar el reporte consolidado mensual a la autoridad ambiental, conjuntamente con el informe de implementación del Plan de Gestión Integral de Residuos.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/2/9.png', alt='Texto que describa la imagen')
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Empresas gestoras de los residuos sólidos 
    p.mb-5(data-aos='fade-right') Se debe realizar seguimiento a las empresas gestoras para verificar su cumplimiento ambiental. Analizar la siguiente tabla 2 para que se identifiquen los elementos de tal seguimiento.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2
      | #[em Inspección de gestores externos]
    //- .row.justify-content-center.mb-5
    //-   .col-lg-10
    //-     div(style="background-color: #f6f6f6 ")
    //-       .tabla-b.mb-5
    //-         .tabla-b__header(style="background-color: #80cab6 ")
    //-           h5.mb-0(style="color: #12263F") Niveles del lenguaje
    //-         table
    //-           tr
    //-             td Get back to work. Learn from criticism.
        img(src='@/assets/curso/temas/2/10.svg', alt='')
    figcaption.d-inline-block.mb-4 Nota. Área metropolitana Valle de Aburra (2013).
    p.mb-5 #[b En este proceso de seguimiento a las empresas gestoras de los residuos es muy IMPORTANTE:]
    div(style="background-color: #F3F9FF").p-4.mb-5
      PasosB.color-acento-contenido(text-small)
        .tarjeta(titulo="" style="background-color: #DEEFFF").p-4
          .row.justify-content-center.align-items-center
            .col-md-1: img(src='@/assets/curso/temas/2/11.svg', alt='')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Es indispensable tener los documentos de: licencia ambiental, permisos, cámara de comercio o documentos que garanticen que son los encargados de manejar ese tipo de residuo. 
                
        .tarjeta(titulo="" style="background-color: #DEEFFF").p-4
          .row.justify-content-center.align-items-center
            .col-md-1: img(src='@/assets/curso/temas/2/11.svg', alt='')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Identificar que estos documentos estén al día y vigentes.
        .tarjeta(titulo="" style="background-color: #DEEFFF").p-4
          .row.justify-content-center.align-items-center
            .col-md-1: img(src='@/assets/curso/temas/2/12.svg', alt='')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Qué el gestor ambiental garantice la trazabilidad de los residuos en los certificados entregados, si el gestor ambiental es diferente al transportista de los residuos se debe garantizar en los documentos los nombres de las organizaciones involucradas y las cantidades entregadas para que pueda tener una trazabilidad de la empresa generadora, el transportista y los gestores ambientales hasta su reciclaje, tratamiento y/o disposición final.
        .tarjeta(titulo="" style="background-color: #DEEFFF").p-4
          .row.justify-content-center.align-items-center
            .col-md-1: img(src='@/assets/curso/temas/2/13.svg', alt='')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Velar que estén los registros con los datos que son cantidades exactas a las entregadas, fechas, garantizar la trazabilidad.
        .tarjeta(titulo="" style="background-color: #DEEFFF").p-4
          .row.justify-content-center.align-items-center
            .col-md-1: img(src='@/assets/curso/temas/2/14.svg', alt='')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Si el algún caso de los certificados entregados cuando tenemos varios gestores las cantidades disminuye porque hubo pérdidas del residuo por ser no aprovechables como pasa en el despiece de RAEES, garantizar que la sumatoria de los certificados entregados del gestor ambiental sean exactas a las entregadas así algunos materiales se pesen para reciclar y otros para disposición final debo garantizar las cantidades entregadas a las cantidades de salida por el gestor ambiental.
        .tarjeta(titulo="" style="background-color: #DEEFFF").p-4
          .row.justify-content-center.align-items-center
            .col-md-1: img(src='@/assets/curso/temas/2/15.svg', alt='')
            .col-md-10.mb-4.mb-md-0
              p.mb-0 Sin el certificado del gestor no le es posible entregar la cantidad exacta de lo que le entregó porque maneja residuos de varios generadores y entrega un certificado de cantidades grandes por ser el total de lo recogido de varias empresas; se debe solicitar que entregue el detallado, no sirve uno general porque no se identifica la trazabilidad o que apodere un documento adicional que garantice lo que se le entregó y sea válido para la autoridad ambiental.
    .row.justify-content-center.mb-5
      .col-lg-10 
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/2/icon.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-9.mb-3.mb-sm-0
                  p Se debe desarrollar la siguiente actividad, en la cual se podrá poner a prueba la aprehensión de los contenidos y conceptos trabajados hasta este punto, dentro del componente formativo. #[b ¡Adelante!] 
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
                    span Ir a la actividad











</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
