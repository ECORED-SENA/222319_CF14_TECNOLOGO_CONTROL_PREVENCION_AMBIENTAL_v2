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
        p.mb-0 #[b Se debe identificar] y describir en el Manejo Integral de Residuos la información de la empresa contratada y el tipo de manejo que reciben los residuos al exterior de la organización, en qué tipo de vehículo se recolectan, con qué frecuencia se hace, entre otra información asociada a esta actividad. Todos los generadores de residuos peligrosos deben conservar, hasta por un tiempo de cinco (5) años, las certificaciones de almacenamiento, aprovechamiento, valorización, tratamiento o disposición final de sus residuos, emitidos por los respectivos receptores
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #faedc0").d-inline-flex.align-items-start
          img(src='@/assets/curso/temas/1/icon.svg', alt='' style="width: 110px").me-5
          .textos(style="width: 80%").p-4
            p Hay que recordar que esta actividad se debe hacer para todos los residuos que se generen, incluyendo los peligrosos. Un ejemplo de esta actividad se presenta en la siguiente tabla 1:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5
      span
    













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
