<template>
  <q-page class="bg-primary window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Consume SignUp</h5>
      </div>
      <div class="row">

        <q-card square bordered class="q-pa-lg shadow-1">
           <form @submit.prevent.stop="handleSignup" class="q-gutter-md">
          <q-card-section>

              <q-input
              square filled clearable
              v-model="first_name"
              type="text"
              label="First Name"
              ref="first_name"
              :rules="[
                val => !!val || 'First Name is required',
              ]"
              />

              <q-input
              square filled clearable
              v-model="last_name"
              type="text"
              label="Last Name"
              ref="last_name"
              :rules="[
                val => !!val || 'Last Name is required',
              ]"
              />

              <q-input
              square filled clearable
              v-model="email"
              type="email"
              label="Email Address"
              ref="email"
              :rules="[
                val => !!val || 'Email is required',
              ]"
              />

              <q-input
              square filled clearable
              v-model="phone_number"
              type="tel"
              ref="phone_number"
              label="Phone Number"
              :placeholder="phonePlaceholder"
             :rules="
              [
                 val => !!val || 'Please enter your phone number',
              ]"
              />

            <q-input
              square filled clearable
              v-model="password"
              label="password"
              hint="Password"
              ref="password"
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                val => !!val || 'Password is required',
              ]"
              >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
           </q-input>

          </q-card-section>

          <q-card-actions class="q-px-md">
            <q-btn
            unelevated color="light-green-7"
            size="lg"
            class="full-width"
            label="Sign Up"
            no-caps
            type="submit"
            />
          </q-card-actions>
          </form>
          <q-card-section class="text-center q-pa-none">
            <router-link class="text-grey-6" :to="{ name: 'login'}">Have an account? Login</router-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Notify from 'src/helpers/notify.js';
import errorHandler from 'src/helpers/errorHandler.js';

export default {
  data() {
    return {
      first_name: '',
      isPwd: true,
      last_name: '',
      phone_number: '',
      email: '',
      password: '',
      phonePlaceholder: '080 *** ** ***',
    };
  },
  computed: {
    refs() {
      return [
        'first_name',
        'last_name',
        'phone_number',
        'email',
        'password',
      ];
    },
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    validateEachField(refs) {
      refs.forEach((ref) => {
        this.$refs[ref].validate();
      });
    },
    thereIsAtLeastOneError(refs) {
      const thereIsAtLeastOneError = refs.some((ref) => this.$refs[ref].hasError);
      return thereIsAtLeastOneError;
    },
    isAnObject(obj) {
      return obj != null && obj.constructor.name === 'Object';
    },
    isValidEmail(email) {
      const emailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailValidationRegex.test(email.toLowerCase());
    },
    async handleSignup() {
      try {
        this.validateEachField(this.refs);
        if (this.thereIsAtLeastOneError(this.refs)) {
          return;
        }
        this.$q.loading.show();
        const response = await this.$axios.post('admin/register', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          phone_number: this.phone_number,
        });
        const { token } = response.data.data;
        localStorage.setItem('token', JSON.stringify(token));
        this.$router.push({ name: 'login' });

        this.$q.loading.hide();
      } catch (err) {
        this.$q.loading.hide();
        const error = errorHandler(err);
        if (error.status === 400) {
          Notify.error('Invalid credentials');
        }
        // eslint-disable-next-line consistent-return
        return Notify.error(error);
      }
    },
  },
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>
