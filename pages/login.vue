<template> 
 <v-container style="height: 100vh; overflow: hidden;">
  <v-row>
   <v-col cols="12">
    <v-row align="center" justify="center" style="height: 100vh;">
        <v-card class="pa-10" min-width="500px">
            <v-img class="mb-4" max-width="200px" src="https://i.ibb.co/3kqm30Z/placeh.png"></v-img>
            <v-form>
                <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            filled
          ></v-text-field>
            <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Password"
            required
            filled
          >
          </v-text-field>
           <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Organization Password"
            required
            filled
          ></v-text-field>
          <v-btn class="green" to="/">Sign in</v-btn>
           
            </v-form>
        </v-card>
    </v-row>
   </v-col>
  </v-row>   
 </v-container>
</template>

<script>
export default {
    layout: 'loginlayout'
}
</script>

<style>
.backgroundimage {
    background: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
}
html,body{
margin:0;
}

</style>