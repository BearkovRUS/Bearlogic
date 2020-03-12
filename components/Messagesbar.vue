<template>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
         <v-btn 
      text icon  color="white"
          dark
          v-on="on">
              <v-icon>mdi-android-messages</v-icon>
            </v-btn>
      </template>
       <v-card min-width="300px" min-height="50px" class="d-inline-flex">
         <v-list-item-avatar tile size="60" class="ml-2"><v-img src="https://i.ibb.co/drrcbFG/Mark.png"></v-img></v-list-item-avatar> 
         <div>
           <v-card-title>hello</v-card-title>
         </div>
       </v-card>
    </v-menu>
</template>