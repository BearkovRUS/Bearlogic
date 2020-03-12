<template>
<v-layout column justify-center align-center>
    <v-row class="row-full-width pa-10">
      <v-col lg="4" md="4" sm="12" v-for="cards in cards" :key="cards.id">
        <v-card class="d-inline-flex" min-width="100%" outlined>
          <v-icon class="pa-6" size="60">{{cards.icon}}</v-icon>
          <div>
            <v-card-title>{{cards.title}}</v-card-title>
            <v-card-title class="blue--text display-2">{{cards.id}}</v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="row-full-width pa-10">
      <v-col lg="6">
        <v-card width="100%">
          
        </v-card>
      </v-col>
      <v-col lg="6">
      </v-col>
    </v-row>
</v-layout>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import firestore from '@firebase/firestore'

export default {
  components: {},
  methods: {},
  middleware: 'auth',
  data() {
    return {
      // profile: null,
      value: [9, -9 ],
      bear: 'brown',
      cards: [ 
      {
        title: 'Appointments Today',
        button: 'clicky',
        img: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
        id: 7,
        icon: 'mdi-calendar'
      },
      {
        title: 'New Messages',
        id: 12,
        icon: 'mdi-message'
      },
      {
        title: 'Notifications',
        id: 56,
        icon: 'mdi-alert-circle'
      },
      ]
    }
  },
  
}
</script>

<style>
.row-full-width{
  width: 100%;
}
</style>