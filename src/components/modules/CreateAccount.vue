<template>
  <div id="Create">
    <div class="modal-dialog modal-login">
      <div class="modal-content">
        <div class="modal-header">
          <div class="avatar">
            <img
              src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-8.jpg"
              alt="Avatar"
            >
          </div>
          <h4 class="modal-title">Create account</h4>
        </div>
        <div class="modal-body">
          <v-text-field
            outlined
            autocomplete="current-email"
            :value="email"
            label="Enter Email"
            :append-icon="'mdi-email'"
            :rules="emailRules"
            @input="_ => (email = _)"
          ></v-text-field>
          <div class="form-group">
            <v-text-field
              outlined
              autocomplete="current-password"
              :value="password"
              label="Enter password"
              hint="Your password passed! Password rules are not meant to be broken!"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
              :rules="[rules.rulePassword]"
              @input="_ => (password = _)"
            ></v-text-field>
            <div class="form-group">
              <button
                type="submit"
                id="submit_user"
                class="btn btn-primary btn-lg btn-block login-btn"
                @click="submit"
              >Create</button>
            </div>
            <center>
              <p>Already have an account?</p>
              <router-link to="/login">Login</router-link>
            </center>
          </div>
        </div>
      </div>
      <!-- <v-overlay :value="overlay">
 <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/colors.scss";
.modal-login {
  color: $modal-login !important;
  width: $width350 !important;
}
.modal-login .modal-content {
  margin-top: 30% !important;
  border-radius: $border-radius !important;
  border: 1px solid gray !important;
}
.modal-login .modal-header {
  border-bottom: $none !important;
  position: $relative !important;
  justify-content: $center !important;
}
.modal-login h4 {
  text-align: $center !important;
  font-size: $font26 !important;
  margin: $margin-login !important;
}
.modal-login .form-control:focus {
  border-color: $border-color !important;
}
.modal-login .form-control,
.modal-login .btn {
  min-height: $height40px !important;
  border-radius: $border-radius3 !important;
}
.modal-login .close {
  position: $absolute !important;
  top: $negative5 !important;
  right: $negative5 !important;
}
.modal-login .modal-footer {
  background: $ecf0f1 !important;
  border-color: $dee4e7 !important;
  text-align: $center !important;
  justify-content: $center !important;
  margin: $margin0-20px-20px !important;
  border-radius: $border-radius !important;
  font-size: $font13 !important;
}
.modal-login .modal-footer a {
  color: $color999 !important;
}
.modal-login .avatar {
  position: $absolute !important;
  margin: $zeroAuto !important;
  left: $zero !important;
  right: $zero !important;
  top: $top-70px !important;
  width: $wh !important;
  height: $wh !important;
  border-radius: $fiftyPercent !important;
  z-index: 9;
  background: $backgroundBtn !important;
  margin-top: $zero !important;
  box-shadow: $box-shadow !important;
}
.modal-login .avatar img {
  width: $max !important;
  height: $max !important;
}
.modal-login.modal-dialog {
  margin-top: $mtop !important;
}
.modal-login .btn {
  color: $fff !important;
  border-radius: $border-radius !important;
  background: $backgroundBtn !important;
  text-decoration: $none !important;
  transition: $transition !important;
  line-height: $normal !important;
  border: $none !important;
}
.modal-login .btn:hover,
.modal-login .btn:focus {
  background: black !important;
  outline: $none !important;
}
</style>

<script>
// import AUTH from "services/auth";
import axios from 'axios';

export default {
  // data() {
  // return {
  // auth: AUTH,
  // email: null,
  // password: null,
  // emailRules: [
  // v => !!v || "E-mail is required",
  // v => /.+@.+/.test(v) || "E-mail must be valid"
  // ],
  // passwordRules: [
  // v => !!v || "Password is Required",
  // v => v.length >= 8 || "Password must be atleast 8 characters"
  // ]
  // };
  // },
  data: () => ({
    list_reg: [],
    // auth: AUTH,
    email: null,
    password: "",
    valid: true,
    value: true,
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    rules: {
      required: value => !!value || "Required.",
      rulePassword: value => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/;
        return (
          pattern.test(value) ||
          "Min. 8 characters with at least one capital letter, a number and a special character."
        );
      }
    }
  }),
  methods: {
    submit(e) {
      e.preventDefault();
      // let user = AUTH.register(this.email, this.password);
      // sessionStorage.setItem("Email", this.email);
      // sessionStorage.setItem("Password", this.password);
      // AUTH.setUser(user);
      // this.$swal.fire("Welcome, You are now Logged in", "success");
      axios.post("http://localhost:3000/register",  {email : this.email , password : this.password }).then(res => {
        if(res.data.register){
          this.list_reg.push(res.data);
          console.log(this.list_reg);
          this.$route.push('/dashboard');
        }else{
          this.$swal.fire("Try Again")
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>