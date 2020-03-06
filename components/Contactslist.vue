<template>
    <v-navigation-drawer 
        permanent
        right
        style="height: 100%"
      >
        <v-list>
          <v-list-item
            v-for="people in people"
            :key="people.id"
            link
            two-line
          >
          <v-list-item-avatar size="50"><v-img :src="people.avatar" ></v-img> </v-list-item-avatar>
           <v-list-item-content class="">
             <div class="d-inline-flex">
              <v-list-item-title class="mb-1 title">{{people.name}}</v-list-item-title>
              <v-list-item-title class="mb-1 font-weight-light grey--text">{{people.time}}</v-list-item-title>
              </div>
              <v-list-item-title class="grey--text">{{people.message}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>

  export default {
    components: {},
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
          name: 'The Last Meowsker',
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


</style>