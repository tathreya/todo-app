<template>

  <body>
    <home-page v-if="whichPage() ==='todo'">

    </home-page>

    <signup-page v-if="whichPage() === 'signup'">

    </signup-page>

    <settings-page v-if="whichPage() === 'settings'">

    </settings-page>

    <error-page v-if="whichPage() === 'not_found'">

    </error-page>



  </body>
  

</template>

<script>

import HomePage from '@/components/HomePage.vue'
import SignupPage from '@/components/SignupLogin.vue'
import SettingsPage from '@/components/Settings.vue'
import ErrorPage from '@/components/NotFound.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    SignupPage,
    SettingsPage,
    ErrorPage
  },

  data: () => ({

  }),
  methods: {

    whichPage() {

      if (this.$route.path === "/todo") {
          return "todo"
      } 
      else if (this.$route.path === "/settings") {
        return "settings"
      } 
      else if (this.$route.path === "/signup_login") {
        return "signup"
      } 
      else {
        return "not_found"
      }

   },
   }

   
}
</script>

<style lang="scss" scoped>

</style>
