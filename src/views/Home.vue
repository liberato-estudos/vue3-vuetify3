<template>
  <v-container>

    <div class="text-h5 text-sm-h4 text-md-h4 text-lg-h4 mb-3 pl-1 font-weight-bold">Home</div>

    <v-card>

      <v-container fluid>
        <v-row>
          <v-col cols="3" v-for="i in 50">
            <v-card title="Card title" subtitle="Subtitle" text="..." variant="tonal">
            </v-card>
          </v-col>


        </v-row>
      </v-container>
    </v-card>
  </v-container>


</template>

<style scoped>

</style>


<script setup>


</script>
