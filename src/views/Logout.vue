<template>
  <v-row>
    <v-col cols="12">
      <v-card max-width="500" class="mx-auto">
        <v-list>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
            </v-list-item-icon>

<v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

<v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    items: [
      {
        icon: true,
        title: "Jason Smith",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      },
      {
        title: "Travis Jones",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      },
      {
        title: "Ali Simpson",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      },
    ],
  }),
};
</script>
