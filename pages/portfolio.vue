<template>
<v-layout class="layout-background-image" fill-height column justify-center align-center>
  <v-container>
      <v-row justify="center">
        <v-col lg="2" md="4" sm="4" xs="1">
          <v-card class="pa-1">
            <v-card-title>Portfolio</v-card-title>
            <v-card-text>All of my past projects</v-card-text>
            <v-card-actions><v-btn class="green" block><v-icon class="mr-2">mdi-code-tags</v-icon>View Projects</v-btn></v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="2" md="4" sm="4" xs="1">
          <v-card class="pa-1">
            <v-card-title>PORTFOLIO</v-card-title>
            <v-card-text>Code for all of my projects</v-card-text>
            <v-card-actions><v-btn class="green" block href="https://github.com/cnroach"><v-icon class="mr-2">mdi-github-circle</v-icon>View Github</v-btn></v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="2" md="4" sm="4" xs="1">
          <v-card class="pa-1">
            <v-card-title>Download Resume</v-card-title>
            <v-card-text>A PDF copy of my resume</v-card-text>
            <v-card-actions><v-btn class="green" block><v-icon class="mr-2">mdi-download</v-icon>Download</v-btn></v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</v-layout>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style>
.layout-background-image {
  background: url(https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
}
</style>