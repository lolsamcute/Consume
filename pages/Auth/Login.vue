<template>
  <q-page class="bg-primary window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Consume Login</h5>
      </div>
      <div class="row">

        <q-card square bordered class="q-pa-lg shadow-1">
          <form @submit.prevent.stop="handleLogin" class="q-gutter-md">
          <q-card-section>
              <q-input
              square filled clearable
              v-model="email"
              label="Email"
              ref="email"
              :rules="[
                val => !!val || 'Email is required',
                val => isValidEmail(val) || 'Invalid email'
              ]"
              />

              <q-input
              square filled clearable
              v-model="password"
              label="Password"
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
            label="Sign in"
            no-caps
            type="submit"
            />
          </q-card-actions>
         </form>
          <q-card-section class="text-center q-pa-none">
            <router-link class="text-grey-6" :to="{ name: 'signup'}">Not registered? Created an Account</router-link>
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
      password: '',
      isPwd: true,
      email: '',
    };
  },
  computed: {
    refs() {
      return [
        'email',
        'password',
      ];
    },
  },
  methods: {
    goToDashboard() {
      this.$router.push({ name: 'dashboard' });
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
    async handleLogin() {
      try {
        this.validateEachField(this.refs);
        if (this.thereIsAtLeastOneError(this.refs)) {
          return;
        }
        this.$q.loading.show();
        const response = await this.$axios.post('admin/login', {
          email: this.email,
          password: this.password,
        });
        const { token } = response.data.data;
        localStorage.setItem('token', JSON.stringify(token));
        this.$router.push({ name: 'dashboard' });

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
