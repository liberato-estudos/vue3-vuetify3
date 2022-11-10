<template>
  <v-card>
    <v-layout class="layout-wrapper layout-nav-type-vertical">
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        floating
        permanent
        elevation="3"
      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid style="height: 100vh;">
          oi
        </v-container>

      </v-main>
    </v-layout>
  </v-card>
</template>


<script setup>
import { ref } from 'vue';

const drawer = ref(false)

</script>
