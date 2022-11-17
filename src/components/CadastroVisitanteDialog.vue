<template>
  <v-dialog v-model="dialog" persistent scrollable :fullscreen="display.smAndDown.value" max-width="600">

    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props" prepend-icon="mdi-plus" class="mr-2">
        Visitante
      </v-btn>

      <!-- <v-btn v-bind="props" icon="mdi-plus" color="primary"></v-btn> -->
    </template>

    <v-card>
      <v-toolbar color="grey-800">
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Cadastro de Visitante em Lote</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn variant="text" @click="dialog = false">
            Cadastrar
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- <v-card-title>
        <span class="text-title1 font-weight-bold">Cadastro de Visitante</span>
      </v-card-title> -->
      <v-card-text>
        <v-container>
          <v-row>

            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Data*" required type="date"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">

              <v-combobox label="Celebração" hint="Exemplo: Culto da Família, Conferência Avivamento, etc"
                persistent-hint :items="celebracoes"></v-combobox>
            </v-col>


            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Nome*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Sobrenome*" hint="example of persistent helper text" persistent-hint required>
              </v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Celular*" type="tel" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests" multiple></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>

      <!-- <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="text" @click="dialog = false">
          Cancelar
        </v-btn>

        <v-btn color="primary" variant="outlined" @click="dialog = false">
          Cadastrar
        </v-btn>
      </v-card-actions> -->

    </v-card>

  </v-dialog>
</template>


<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify';

const display = useDisplay();

const dialog = ref(false)
const celebracoes = ref(['Culto da Família 19h', 'Culto da Família 17h', 'Culto Quinta', 'Culto de Jovens', 'Culto de Adolescentes', 'Culto de Casais', 'Culto de Homens', 'Mulheres que Inspiram', 'Conferência de Avivamento', 'Prosperar', 'Evento especial'])


</script>
