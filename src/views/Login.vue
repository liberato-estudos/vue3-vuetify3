<template>
  <!-- <div class="auth-wrapper d-flex align-center justify-center pa-4"> -->



    <v-container fluid class="container">


    <v-card class="pa-4 pt-7" max-width="448" width="448">
      <v-card-item class="justify-center">

        <v-card-title class="font-weight-semibold text-2xl text-uppercase">
          <img src="../assets/logo_acolher.jpg" alt="logo" id="logo">
        </v-card-title>
      </v-card-item>


      <v-card-text class="mt-3">
        <v-form>
          <v-row>
            <!-- email -->
            <v-col cols="12">
              <v-text-field label="Email" type="email" />
            </v-col>

            <!-- password -->
            <v-col cols="12">
              <v-text-field label="Password" :type="isPasswordVisible ? 'text' : 'password'" append-inner-icon="mdi-eye-outline"  @click:append-inner="isPasswordVisible = !isPasswordVisible" />


              <!-- login button -->
              <v-btn block type="submit" to="/" color="primary" size="large" >
                Login
              </v-btn>



            </v-col>




          </v-row>
        </v-form>
      </v-card-text>

    </v-card>
  </v-container>



  <!-- </div> -->
</template>

<style scoped>
#logo {
  width: 150px;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script setup>
import { ref } from 'vue';



const isPasswordVisible = ref(false)



</script>
