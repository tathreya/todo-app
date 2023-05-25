<template>

    <body>

      <v-app>
       <v-app-bar id="navBar" class="flex-grow-0" app dark>
        <v-app-bar-title class="text-no-wrap"> 
          <div>Todo List</div>
        </v-app-bar-title>
       </v-app-bar>
      <v-navigation-drawer app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Dashboard  </v-list-item-title>
            <v-list-item-subtitle> </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="(item,index) in navBarItems" :key="index" link @click="menuActionClick(item.action)">
  
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
  
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  
    </body> 
  
  </template>
  
  <script>
  
  export default {
    name: 'App',
  
    data: () => ({
      
      navBarItems: [
        { title: 'Signup/Login', icon: 'mdi-account-box', action: "signup/login"},
        { title: 'Settings', icon: 'mdi-cog', action: "settings" }],
    }),
    methods: {

        menuActionClick(action) {
            if (action === "signup/login") {
                console.log("signup/login pressed")
                this.$router.push('/signup_login')
            }
            else {
                console.log("setting pressed")
                this.$router.push('/settings')
            }
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  
    #navBar {
      background-color:rgb(54, 54, 189);
    }
  
  </style>
  