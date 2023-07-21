<template>
  <div class="login-form__wrapper">
    <h2>Авторизация</h2>
    <form
      class="form login-form"
      @submit.prevent="handleSubmitForm"
    >
      <div class="form__input">
        <label for="login">Логин: </label>
        <input
          v-model="login"
          class="input"
          type="text"
          required
          autocomplete
        >
      </div>
      <div class="form__input">
        <label for="login">Пароль: </label>
        <div class="form__input-password">
          <input
            v-model="password"
            class="input"
            :type="showPassword ? 'text' : 'password'"
            required
            autocomplete
          >
          <div class="password-icon">
            <ShowPassIcon
              v-if="!showPassword"
              class="pointer"
              @click="handleShowPassClick"
            />
            <HidePassIcon
              v-else
              class="pointer"
              @click="handleShowPassClick"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="form__button button pointer"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@api/user';
import store from '@store';

import ShowPassIcon from '@icons/showPass.svg';
import HidePassIcon from '@icons/hidePass.svg';

const router = useRouter();

const showPassword = ref(false);
const login = ref(null);
const password = ref(null);

const handleShowPassClick = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmitForm = async () => {
  if (login.value && password) {
    const res = await auth(login.value, password.value);

    if (res.length > 0) {
      const user = res[0];
      store.dispatch('saveUserInfo', user);
      router.push('/');
    } else {
      alert('Неверный логин или пароль');
    }
  }
};

onBeforeMount(() => {
  if (store.state.user.auth) router.push('/');
});
</script>

<style lang="scss" scoped>
.login-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .login-form {
    margin-top: 20px;
    min-width: 600px;
    max-width: 600px;

    .form__input-password {
      position: relative;
    }

    .form__input {
      input {
        margin-top: 5px;
      }
    }

    .form__input:not(:first-child) {
      margin-top: 10px;
    }

    .form__button {
      margin-top: 20px;
    }
  }
}

</style>