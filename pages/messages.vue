<template>
<v-container fill-height style="max-height: 100vh; width: 100%; margin: 0px!important;" class="pa-0">
  <v-layout>
    <Contactslist />
    <div>
       <div style="height: 91%; width: 100%!important;">test</div>
       <v-text-field dense append-icon="mdi-send" clearable filled label="Enter Message" class="px-8">cheese</v-text-field>
    </div>
  </v-layout>
</v-container>
</template>

<script>
import Contactslist from '~/components/Contactslist.vue'

  export default {
    components: {
      Contactslist
    },
    data: () => ({
      people: [
        {
          avatar: 'https://i.ibb.co/h2TJnKY/Budd.png',
          name: 'Budd',
          message: 'Hi, I was wondering if you every printed out those papers I needed?',
          time: '12:14pm',
          to: '/',
          id: '1'
        },
        {
          avatar: 'https://i.ibb.co/drrcbFG/Mark.png',
          name: 'Mark',
          message: 'That is the most lovely thing Ive heard all year... Im about to cry out of happiness.',
          time: '12:14pm',
          to: '/',
          id: '3'
        },
        {
          avatar: 'https://i.ibb.co/HT9pxMY/Sarah.png',
          name: 'Sarah',
          message: 'I said this to my friend randomly and she was like what! So funny!',
          time: '12:14pm',
          to: '/',
          id: '4'
        },
        {
          avatar: 'https://i.ibb.co/8gwZNxp/Blad.png',
          name: 'Vlad',
          message: 'hahahahah thats so super funny! :D made me laugh so hard! I love this',
          time: '12:14pm',
          to: '/',
          id: '5'
        },
         {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
        {
          avatar: 'https://i.ibb.co/hCWcwMT/Meowsker.png',
          name: 'Meowsker',
          message: 'Meow?',
          time: '12:14pm',
          to: '/',
          id: '6'
        },
      ],
      search: '',
    }),

    computed: {
      keywords () {
        if (!this.search) return []

        const keywords = []

        for (const search of this.searching) {
          keywords.push(search.keyword)
        }

        return keywords
      },
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
  }
</script>

<style>
.nodeco{
    text-decoration: none !important;
}
.norad {
    border-radius: 3px !important;
}
</style>

<!-- <template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 >
     <v-row dense v-for="people in people">
       <v-col class="ma-0" cols="12" sm="12" >
        <v-hover v-slot:default="{ hover }">
         <nuxt-link class="nodeco" :to="/chats/ + people.id">
          <v-card raised class=" ma-2 d-inline-flex" min-width="600px" max-width="600px" :elevation="hover ? 12 : 2">
           <v-list-item-avatar class="ma-4 norad" tile size="130"><v-img :src="people.avatar"></v-img></v-list-item-avatar>
            <v-list-item-content class="pa-1">
             <div class="overline mb-1 d-inline-flex">{{people.time}}</div>
             <v-list-item-title class="headline mb-2">{{people.name}}</v-list-item-title>
             <v-list-item-subtitle> <span class="green--text">MSG:</span> {{people.message}}</v-list-item-subtitle>
             <v-btn class="ma-2 ml-0 green" max-width="120px">Open Chat</v-btn>
           </v-list-item-content>
          </v-card>
         </nuxt-link>
        </v-hover>
       </v-col>
     </v-row>
    </v-flex>
  </v-layout>
</template>
-->