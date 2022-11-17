<template>
  <v-dialog v-model="dialog" persistent scrollable :fullscreen="display.smAndDown.value">

    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props" prepend-icon="mdi-plus" class="mr-2">
        Lote
      </v-btn>
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
        <span class="text-title-1">Cadastro de Visitante em lote</span>
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

            <v-col cols="12">
              <div class="text-body-1 font-weight-bold">Visitantes</div>
              <div class="text-caption font-weight-semibold" color="red">
                Escreva o nome do visitante, o sexo e o telefone com DDD separados por (;)
                ponto-e-vírgula
              </div>
              <div class="text-caption font-italic" color="red">
                Exemplo: João da Silva ; M ; 44 91234-1234
              </div>

              <v-textarea auto-grow variant="outlined" rows="10" row-height="25" shaped
                placeholder="Jõao da Silva ; M ; 44 91234-1234"></v-textarea>
            </v-col>
          </v-row>
        </v-container>

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
