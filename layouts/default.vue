<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          :href="item.href"
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
        <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Bear\'s Developer Portfolio  ||  Email: cnroach99@gmail.com',
      clipped: true,
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-folder-multiple',
          title: 'Portfolio',
          to: '/portfolio'
        },
        {
          icon: 'mdi-github-circle',
          title: 'View Github',
          href: 'https://github.com/cnroach'
        },
        {
          icon: 'mdi-download',
          title: 'Download Resume',
          href: 'https://google.com'
        },
      ],
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
  background: #212121;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 1px 1px 0 rgba(0,0,0,0.10),inset 0 -1px 0 rgba(0,0,0,0.07);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,0.10),inset 0 -1px 0 rgba(0,0,0,0.07);
  background: white;
}


</style>