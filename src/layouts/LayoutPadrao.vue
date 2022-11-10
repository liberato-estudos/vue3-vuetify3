<script setup>
import { onMounted } from 'vue'

 import { ref } from 'vue'


const user = ref({})

onMounted(() => {

  setTimeout(() => {
      user.value.name = 'joao'
      // console.log('timer')
    }, 2000);
})

</script>

<template>
    <div class="container">
      <!-- <p>
        {{ user ? user.name : `Loading...` }}

      </p> -->
      <p>{{user.name ? user.name : 'Loading...'}}</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/logout">Logout</router-link>


      <main>
        <slot></slot>
      </main>

      <footer class="footer">

        Footer
      </footer>
    </div>
  </template>

  <style scoped>




    main {
      min-height: 87vh;
    }

    footer {
      width: 100vw;
      min-height: 10vh;
      background-color: black;
      color: white;
    }

    .container {
      width: 100vw;
      /* min-height: 100vh; */
      background-color: antiquewhite;
    }

  </style>
