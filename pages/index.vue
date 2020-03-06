<template>
<v-layout column justify-center align-center>
  <v-flex xs12 sm8 md6 >
    <v-row>
      <v-col lg="4" md="4" sm="12" v-for="cards in cards" :key="cards.id">
        <v-card class="d-inline-flex" min-width="100%">
          <v-img max-width="100px" :src="cards.img"></v-img>
          <div>
            <v-card-title>cheese</v-card-title>
            <v-card-title>cheese</v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-flex>
</v-layout>
</template>

<script>

export default {
  components: {
  
  },
  data() {
    return {
      bear: 'brown',
      cards: [ 
      {
        title: 'wolf',
        button: 'clicky',
        img: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
        id: 1,
      },
      {
        title: 'wolf',
        id: 2,
      },
      {
        title: 'wolf',
        id: 3,
      },
      {
        title: 'wolf',
        id: 4,
      },
      {
        title: 'wolf',
        id: 5,
      },
      {
        title: 'deer',
        id: 6,
      },
      ]
    }
  }
}
</script>
