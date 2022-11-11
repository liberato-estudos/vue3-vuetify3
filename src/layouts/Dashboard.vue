<template>
  <v-layout class="layout-wrapper layout-nav-type-vertical">

    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="../assets/acolher-branco.svg" alt="logo" id="logo">
      <v-toolbar-title>
        Acolher
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon="mdi-filter"></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
      <v-btn icon>

        <v-avatar color="white">
          <span class="text-h6">RL</span>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :permanent="!display.smAndDown.value" floating elevation="3">
      <v-list density="compact" nav>

        <v-list-item to="/" prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item to="/about" prepend-icon="mdi-account-group" title="Integradores" value="integradores">
        </v-list-item>
        <v-list-item to="/login" prepend-icon="mdi-account" title="Login" value="login"></v-list-item>


      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid style="height: 100vh;">
        <slot></slot>
        <!-- <p>{{ user.name ? user.name : 'Loading...' }}</p> -->
      </v-container>

    </v-main>
  </v-layout>

</template>

<style scoped>
#logo {
  width: 70px;
  /* opacity: 0.3; */
}
</style>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDisplay } from 'vuetify';

const drawer = ref(true)
const display = useDisplay()


const user = ref({})
onMounted(() => {
  setTimeout(() => {
    user.value.name = 'joao'
    // console.log('timer')
  }, 2000);
})

</script>


