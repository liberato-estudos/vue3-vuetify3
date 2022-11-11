<template>
  <component :is="route.meta.layout || 'div'">
    <RouterView @changeLayout="onChangeLayout"/>
  </component>
</template>


<script setup>
  import { RouterView, useRoute } from 'vue-router'
  import { ref } from 'vue'

  const route = useRoute()

  const layout = ref('div')
  const onChangeLayout = (layoutRef) => {
    layout.value = layoutRef
  }

</script>
