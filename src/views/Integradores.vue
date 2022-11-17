<template>
  <v-container>
    <div class="text-h5 text-sm-h4 text-md-h4 text-lg-h4 mb-3 pl-1 font-weight-bold">Integrador</div>


    <v-row>
      <v-col cols="12">
        <v-card class="pa-5">
          <v-card-title class="border-bottom d-block">
            Preencha os dados do Integrador
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Nome"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Sobrenome"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Usuário"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Celular"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary">Cadastrar</v-btn>
                <v-btn flat class="mx-2" @click="dialog = true">Add Project</v-btn>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- DIALOG -->

    <v-dialog max-width="600px" v-model="dialog">
      <v-card>
        <v-card-title>
          <h2>Add a New Project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" prepend-icon="folder"></v-text-field>
            <v-textarea label="Information" prepend-icon="edit"></v-textarea>
            <v-btn flat class="success mx-0 mt-3" @click="dialog = false">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>

</style>


<script setup>
import { ref } from 'vue'
const dialog = ref(false)

</script>
