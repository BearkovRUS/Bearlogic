<template>
    <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 >
  <v-row>
    <v-col  align="center" lg="12" md="4" sm="12" v-for="people in people" :key="people.id">
     <v-hover v-slot:default="{ hover }">
          <v-card raised class=" ma-2 d-inline-flex" min-width="600px" max-width="600px" :elevation="hover ? 12 : 2">
           <v-list-item-avatar class="ma-4 norad" tile size="130"><v-img :src="people.avatar"></v-img></v-list-item-avatar>
            <v-list-item-content class="pa-1">
             <div class="overline mb-1 d-inline-flex">{{people.time}}</div>
             <v-list-item-title class="headline mb-2" style="text-align: left;">{{people.name}}</v-list-item-title>
             <v-list-item-subtitle> <span class="green--text">MSG:</span> {{people.message}}</v-list-item-subtitle>
             <v-btn class="ma-2 ml-0 green" :to="/chats/ + people.id" max-width="120px">View</v-btn>
           </v-list-item-content>
           <v-chip class="ma-4" close color="red">Close</v-chip>
          </v-card>
        </v-hover>
    </v-col>
  </v-row>
    </v-flex>
  </v-layout>
</template>
<script>

  export default {
    components: {
      
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
          name: 'LAST MEOWSKIE',
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
