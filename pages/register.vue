<template>
  <v-app>
    <v-card
      class="mx-auto"
      max-width="700"
      outlined
      style="margin-top: 70px; width: 500px"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">REGISTER</div>
          <v-form v-model="valid">
            <v-container>
              <v-text-field
                v-model="surname"
                :rules="nameRules"
                label="Surname"
                placeholder="Surname"
                required
                clearable
              ></v-text-field>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                placeholder="Firstname"
                label="Firstname"
                required
                clearable
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                clearable
              ></v-text-field>
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordRules"
                id="password"
                autocomplete="new-password"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                hint="At least 8 characters"
                v-model="password"
                class="input-group--focused"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="confirmPasswordRules"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-2"
                label="Confirm Password"
                hint="Must be equal to password"
                v-model="confirmPassword"
                class="input-group--focused"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-container>
          </v-form>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
          style="margin-left: 30px"
          depressed
          color="success"
          :disabled="!valid"
          @click="register"
          >REGISTER</v-btn
        >
      </v-card-actions>
      <small>
        Already Registered, Click here to
        <nuxt-link to="login">Log IN</nuxt-link>
      </small>
    </v-card>
  </v-app>
</template>
<script>
export default {
  auth: "guest",
  data: () => ({
    valid: false,
    passwordRules: [(v) => !!v || "Password is required"],
    confirmPasswordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        v ==
          (document.getElementById("password")
            ? document.getElementById("password").value
            : undefined) || "Passwords do not match",
    ],
    nameRules: [(v) => !!v || "This Field is required"],
    showPassword: false,
    email: "",
    password: "",
    firstname: "",
    surname: "",
    confirmPassword: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    register() {
      this.$axios
        .$post("/api/users/register", {
          surname: this.surname,
          firstname: this.firstname,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {},
};
</script>