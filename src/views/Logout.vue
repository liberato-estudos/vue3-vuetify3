<template>
  <v-container>
    <h1>Logout</h1>
    <v-row justify="center">
      <v-btn color="primary" @click="dialog = true">
        Open Dialog
      </v-btn>

      <!-- DIALOG -->
      <v-dialog v-model="dialog" persistent scrollable>
        <!-- <v-container> -->
          <v-card>
            <v-card-title>
              <span class="text-h6 font-weight-bold">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Data*" required type="date"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <!-- <v-text-field label="Celebração*" hint="Exemplo: culto da família, Conferência Avivamento, etc"
                    persistent-hint required></v-text-field> -->
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
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        <!-- </v-container> -->
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const celebracoes = ref(['Culto da Família 19h', 'Culto da Família 17h', 'Culto Quinta', 'Culto de Jovens', 'Culto de Adolescentes', 'Culto de Casais', 'Culto de Homens', 'Mulheres que Inspiram', 'Conferência de Avivamento', 'Prosperar', 'Evento especial'])

</script>
