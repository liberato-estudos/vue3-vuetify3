<template>
  <component :is="route.meta.layout || 'div'">
    <RouterView @changeLayout="onChangeLayout"/>
  </component>
</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  import { useRoute } from 'vue-router';
  const route = useRoute()


  const layout = ref('div')
  const onChangeLayout = (layoutRef) => {

    layout.value = layoutRef

  }
  const onClick = () => {
    console.log(route.meta.layout)
  }
</script>
