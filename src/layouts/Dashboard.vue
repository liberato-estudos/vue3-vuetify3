<template>

  <v-app>

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
        <v-list-item to="/integradores" prepend-icon="mdi-account-group" title="Integradores" value="integradores">
        </v-list-item>
        <v-list-item to="/visitantes" prepend-icon="mdi-card-account-details" title="Visitantes" value="visitantes">
        </v-list-item>
        <v-list-item to="/login" prepend-icon="mdi-account" title="Login" value="login"></v-list-item>
        <v-list-item to="/logout" prepend-icon="mdi-account" title="Logout" value="logout"></v-list-item>


      </v-list>
    </v-navigation-drawer>

    <v-main>
        <slot></slot>
    </v-main>

  </v-app>

</template>

<style scoped>
#logo {
  width: 70px;
  /* opacity: 0.3; */
}

</style>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';


const drawer = ref(true)
const display = useDisplay();

</script>


