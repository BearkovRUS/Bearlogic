<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
      permanent
      src="https://images.unsplash.com/photo-1493470850224-0383bc6e091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Contactslist />
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <Nuxt-link to="/"><v-img src="https://i.ibb.co/3kqm30Z/placeh.png" height="30px" max-width="150px"></v-img></Nuxt-link>
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <v-form>
      <v-text-field
          v-model="Search"
          label="Search"
          filled
          prepend-icon="mdi-magnify"
          dense
          outlined
          class="mt-7"
        ></v-text-field>
        </v-form>
      <v-spacer />
      <v-divider vertical></v-divider>
      <Messagesbar />
    <v-divider vertical></v-divider>
    <nuxt-link to="notifications">
       <v-list-item-avatar class="ma-2 avatarborder" size="40" to="/notifications"><v-img src="https://images.unsplash.com/photo-1579236389867-26388c47be13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></v-img> </v-list-item-avatar>
      </nuxt-link>      
    </v-app-bar>
    <v-content style="max-height: 100vh;!important">
     <nuxt />
    </v-content>
    <v-footer
      fixed
      app
    >
      <span>&copy; Bearlogic 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Messagesbar from '~/components/Messagesbar.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Messagesbar,
    Navigation,
  },
  data () {
    return {
      Search: '',
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-alert-circle',
          title: 'Notifications',
          to: '/notifications'
        },
        {
          icon: 'mdi-android-messages',
          title: 'Messages',
          to: '/messages'
        },
        {
          icon: 'mdi-calendar-check',
          title: 'Calendar',
          to: '/calendar'
        },
        {
          icon: 'mdi-account-badge-horizontal',
          title: 'My Patients',
          to: '/patients'
        },
      ],
      messages: [
        {
          img:'https://i.ibb.co/drrcbFG/Mark.png'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Bearlogic',
    }
  }
}
</script>

<style>

.a {
  text-decoration: none;
}
.link {
  text-decoration: none;
}
.avatarborder {
  border: 2px solid;
}
</style>