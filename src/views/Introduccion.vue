<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    div(style="background-color: #faffeb ").p-4.mb-5
      p.mb-0 El plan de gestión integral de residuos se divide en dos procesos fundamentales: gestión interna y gestión externa. Este componente está enfocado en esta última. El siguiente video presenta de manera genérica en qué consiste la gestión externa y, por ende, las temáticas a estudiar.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PzqFIcZ-D-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Gestión externa
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
