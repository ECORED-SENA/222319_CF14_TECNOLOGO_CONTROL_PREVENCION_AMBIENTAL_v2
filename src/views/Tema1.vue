<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos Generales
    p.mb-5(data-aos='fade-right') Es importante reconocer algunos de los elementos conceptuales que favorecerán un mejor estudio y comprensión de este componente y todo lo relacionado con la gestión y manejo de los residuos en la organización. Es así como es recomendable tomar nota de cada concepto para favorecer su comprensión y asimilación.
    .row.justify-content-center.mb-3
      .col-lg-8.mb-lg-0.mb-3
        div(style="background-color: #ecf7f4").p-5.h-100
          .d-flex.justify-content-center.align-items-.row.justify-content-center
            p.mb-0 #[b Manejo integral de residuos:] como se observa en la figura 1, “es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos.”
      .col-lg-4.col-7: img(src='@/assets/curso/temas/1/1.png', alt='')
    figcaption.d-inline-block.mb-5 (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.4)
    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Figura 1
      br
      span.fst-italic Manejo integral de residuos
    .row.justify-content-center.mb-3
      .col-lg-10 
        img(src='@/assets/curso/temas/1/2.svg', alt='')
    figcaption.d-inline-block.mb-5 Nota. Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008).
    br
    .d-inline-block.rounded-pill.tarjeta.color-primario.p-3.mb-4
      h4.text-white.mb-0.mx-3 Gestión Integral de residuos
    .bloque-derecha.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/1/3.jpg')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 De manera diferenciada, aunque en el mismo sentido y enfoque, gestión integral de residuos sólidos #[b “es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental], de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final.” (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.3)
    .d-inline-block.rounded-pill.tarjeta.color-primario.p-3.mb-4
      h4.text-white.mb-0.mx-3 El Manejo Integral
    p.mb-5(data-aos='fade-right') El manejo integral de Residuos implica la planeación y cobertura de las actividades relacionadas con los residuos, desde la generación hasta la disposición final, incluyendo los aspectos de segregación, movimiento interno, almacenamiento, desactivación, recolección, transporte y tratamiento, con lo cual se pretende evitar y minimizar la generación de residuos e incrementar el aprovechamiento de éstos, de tal suerte que cada vez sea menor la cantidad de residuos a disponer, como se puede observar en el esquema de jerarquización en la figura 2 de la gestión de los residuos. (Universidad Pontificia Bolivariana y Área metropolitana del valle de aburra, 2008)
    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Figura 2 
      br
      span.fst-italic Jerarquía en la gestión de residuos
    .row.justify-content-center.mb-5
      .col-lg-8
        img(src='@/assets/curso/temas/1/4.svg', alt='').mb-3
        figcaption Nota. Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008).
    .d-inline-block.rounded-pill.tarjeta.color-primario.p-3.mb-4
      h4.text-white.mb-0.mx-3  Gestión     
    .bg-tema1.p-5
      p.mb-5(data-aos='fade-right') Se trata del conjunto de actividades orientadas a dar a los residuos sanitarios el destino final adecuado de acuerdo con las características de cada residuo.” (Área de salud de Cáceres, 2015, p.2).
      .row.justify-content-center.mb-4
        .col-lg-5.mb-lg-0.mb-3
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="height: 470px; background-color: #d3ede5 ")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .d-flex.justify-content-center.mb-3
                  .d-inline-block.rounded-pill.tarjeta.color-primario.p-3
                    h4.text-white.mb-0.mx-3 Gestión Interna de residuos:
                p Son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organizació
                  br
                  br
                  | 1) Dotación de contenedores donde depositar los residuos.
                  br
                  | 2) Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje.
                  br
                  | 3) Transporte de los residuos al almacén central de residuos sanitarios del centro.” (Área de salud de Cáceres, 2015, p.2).
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/1/5.png')})`}")
        .col-lg-5
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="height: 470px; background-color: #d3ede5 ")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .d-flex.justify-content-center.mb-3
                  .d-inline-block.rounded-pill.tarjeta.color-primario.p-3
                    h4.text-white.mb-0.mx-3 Gestión Externa de residuos:
                p Son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación.
                  br
                  br
                  | 1) Recogida y transporte a Plantas de Transferencia o Tratamiento.
                  br
                  | 2) Tratamiento y eliminación.” (Área de salud de Cáceres, 2015, p.2).
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/1/6.png')})`}")
      .row.justify-content-center.mb-5
        .col-lg-10
          div(style="background-color: #faedc0").d-inline-flex.align-items-start
            img(src='@/assets/curso/temas/1/icon.svg', alt='' style="width: 110px").me-5
            .textos(style="width: 80%").p-4
              p Desde un punto de vista general los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.” (Área de salud de Cáceres, 2015, p.2).
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.bg-tema1
  background-image: url(../assets/curso/temas/1/bg-tema1.svg)
  background-position: start
  background-repeat: no-repeat
  background-size: cover
</style>
