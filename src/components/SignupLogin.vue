<template>
    <v-app>

        <v-sheet class="bg-deep-purple pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="400">

          <div id="backButtonDiv" v-if="createAccountPressed">
           <!-- back button-->
           <v-btn id="backButton" @click="backButtonPressed()">
                  Back
           </v-btn>

          </div>
         
            <div>
            
            <div id="topOfForm">
              <h1 id="Login" v-if="!createAccountPressed">
                Login
               </h1>
              <h1 id="CreateAccount" v-else> Enter your Information</h1>
            </div>
           

            <!-- CREATE ACCOUNT FORM-->
            <v-form v-model="signUpForm" @submit.prevent="createAccountFinalPressed" v-if="createAccountPressed" ref="signUpFormRef">

                <!-- first name field-->
                <v-text-field
                    v-model="signUpFirstName"
                    :readonly="loadingCreateAccount"
                    :rules="[firstNameRequirement]"
                    class="mb-2"
                    clearable
                    label="First Name"
                    placeholder="Enter your First Name"
                ></v-text-field>

                <!-- last name field-->
                <v-text-field
                    v-model="signUpLastName"
                    :readonly="loadingCreateAccount"
                    :rules="[lastNameRequirement]"
                    class="mb-2"
                    clearable
                    label="Last Name"
                    placeholder="Enter your Last Name"
                ></v-text-field>
  
                <!-- email field-->
                <v-text-field
                    v-model="signUpEmail"
                    :rules="emailRequirement"
                    clearable
                    label="Email"
                    placeholder="Enter your email"
                ></v-text-field>

                <!-- first password field-->
                <v-text-field
                    v-model="signUpPassword"
                    :readonly="loadingCreateAccount"
                    :rules="[passwordRequirement]"
                    clearable
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                ></v-text-field>

                <!-- confirm password field-->

                <v-text-field
                    v-model="signUpRetypedPassword"
                    :readonly="loadingCreateAccount"
                    :rules="[retypePasswordRequirement]"
                    clearable
                    label="Reenter Password"
                    placeholder="Reenter your password"
                    type="password"
                ></v-text-field>


                <br>

                 <!-- create account submit button-->
                <v-btn 
                    :disabled="!signUpForm"
                    :loading="loadingCreateAccount"
                    block
                    size="large"
                    type="submit"
                    variant="elevated"
                    id="createAccountFinal"
                    data-inline="true"
                >
                Create Account
                </v-btn>
  
               
            </v-form>

        <!-- CREATE ACCOUNT FORM END-->

        </div>

        <!-- LOGIN FORM-->
        <v-form
          v-model="loginForm"
          @submit.prevent="signInPressed" v-if="!createAccountPressed" ref="loginFormRef"

        >
  
          <!-- email field -->
          <v-text-field
            v-model="loginEmail"
            :readonly="loadingLogin"
            :rules="emailRequirement"
            class="mb-2"
            clearable
            label="Email"
            placeholder="Enter your email"
          ></v-text-field>
  
          <!-- password field -->
          <v-text-field
            v-model="loginPassword"
            :readonly="loadingLogin"
            :rules="[passwordRequirement]"
            clearable
            label="Password"
            placeholder="Enter your password"
            type="password"
          ></v-text-field>
  
          <br>
  
          <!-- login submit button -->
          <v-btn id="loginButton"
            :disabled="!loginForm"
            :loading="loadingLogin"
            block
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
    <!-- LOGIN FORM END -->
        
      </v-card>
    </v-sheet>

    <!-- Divider for OR -->
    <div v-if="!createAccountPressed">
        <v-divider>

        </v-divider>

        <h1 id="divider">
            OR
        </h1>
    </div>

    <!-- Initial CREATE account button -->
    <div id="createAccount" v-if="!createAccountPressed">
        <v-btn id="createAccountButton"  @click="createAccountButtonPressed()">
            Create an Account
        </v-btn>
    </div>
  </v-app>
</template>


<script>

export default {
  name: 'SignupLogin',
  components: {
  },

  data: () => ({

    // login vars
    loginForm: false,
    loginEmail: null,
    loginPassword: null,
    loadingLogin: false,

    // sign up vars
    signUpForm: false,
    signUpFirstName: null,
    signUpLastName: null,
    signUpEmail: null,
    signUpPassword: null,
    signUpRetypedPassword: null,
    loadingCreateAccount:false,

    // toggler variable
    createAccountPressed: false,

    // email requirement with regex
    emailRequirement: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid'
    ]

  }),
  methods: {

    // log in button pressed
    signInPressed () {

     console.log("sign in pressed")
      if (!this.loginForm) return

      this.loadingLogin = true

      setTimeout(() => (this.loadingLogin = false), 2000)
      console.log(this.loginEmail)
      console.log(this.loginPassword)

      this.$router.push('/todo')
    },
    // create account button pressed
    createAccountFinalPressed() {
      console.log("create account final pressed")
      if (!this.signUpForm) return

      this.loadingCreateAccount = true

      setTimeout(() => (this.loadingCreateAccount = false), 2000)

      console.log(this.signUpFirstName)
      console.log(this.signUpLastName)

      this.$router.push('/todo')
    },
    // password requirement
    passwordRequirement (v) {
      return !!v || 'Password is required'
    },
    // retype password requirement, checks if they match
    retypePasswordRequirement (v) {

      if (!v) {

        return 'Retyped password is required'
      }
      if (v != this.signUpPassword) {
        return 'Passwords must match'
      }
    },
    // first name for create account requirement
    firstNameRequirement (v) {
       return !!v || 'First Name is required'
    },
    // last name for create account requirement
    lastNameRequirement (v) {
      return !!v || 'Last Name is required'
    },
    // toggle function to display correct things
    createAccountButtonPressed () {
        this.$refs.loginFormRef.reset();
        this.createAccountPressed = !this.createAccountPressed

    },
    backButtonPressed () {
      this.createAccountPressed = !this.createAccountPressed
      this.$refs.signUpFormRef.reset();
    }
   }
}

</script>

<style lang="scss" scoped>

    // style for OR text
    #divider {
        text-align:center;
        color:rgba(17, 2, 13, 0.664);
        font-size: 15px;
        font-family: 'Lucida Sans','Arial Narrow', Arial, sans-serif;
        margin-top: 35px;
        margin-bottom: 35px;
    }

    // style for Login text at top
    #Login {
        text-align:center;
        color:rgba(17, 2, 13, 0.664);
        font-size: 22px;
        font-family: 'Lucida Sans','Arial Narrow', Arial, sans-serif
    }

    // style for create account text at top of form
    #CreateAccount {
        text-align:center;
        color:rgba(17, 2, 13, 0.664);
        font-size: 22px;
        font-family: 'Lucida Sans','Arial Narrow', Arial, sans-serif
    }

    // style for create account div to center it 
    #createAccount {
        text-align: center;

    }

    // style for the create account button itself
    #createAccountButton {
        background-color: rgba(0, 0, 255, 0.568);
    }

    // style for log in button
    #loginButton {

        background-color: rgba(15, 131, 15, 0.678);
    }

    // style for padding between back button and rest of form
    #backButtonDiv {

      padding-bottom: 30px;
      
    }

    // style for back button itself
    #backButton {

      width: 10px;
    }

    // style for create account button
    #createAccountFinal {
      background-color: rgba(15, 131, 15, 0.678);
    }

    // style for top of form
    #topOfForm {
      padding-bottom: 15px;
    }

</style>