<template>
  <div
    v-if="infoLoaded"
    class="user-profile"
  >
    <div class="user-profile__info">
      <div class="info__item">
        <span>Имя: {{ store.state.user.firstName }}</span>
      </div>
      <div class="info__item">
        <span>Фамилия: {{ store.state.user.lastName }}</span>
      </div>
      <div class="info__item">
        <span>Дата рождения: <input
          v-model="store.state.user.dob"
          class="date-input"
          type="date"
          @change="updateUser"
        ></span>
      </div>
      <div class="info__item">
        <span>Город: </span>
        <select
          v-model="store.state.user.city"
          class="select"
          @change="updateUser"
        >
          <option
            value="Москва"
            class="option"
          >
            Москва
          </option>
          <option value="Санкт-Петербург">
            Санкт-Петербург
          </option>
          <option value="Новосибирск">
            Новосибирск
          </option>
          <option value="Екатеринбург">
            Екатеринбург
          </option>
        </select>
      </div>
    </div>
    <button
      class="button pointer button-save"
      :disabled="!infoChanged"
      @click="asyncUpdateUserInfo"
    >
      Сохранить
    </button>
  </div>
  <div v-else>
    <SpinnerLoading />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserInfoById, changeUserInfoById } from '@api/user';
import store from '@store';
import SpinnerLoading from '@ui/SpinnerLoading.vue';

const infoLoaded = ref(false);
const infoChanged = ref(false);

onMounted(async () => {
  const res = await getUserInfoById();
  store.dispatch('saveUserInfo', res);
  infoLoaded.value = true;
});

const updateUser = () => {
  infoChanged.value = true;
};

const asyncUpdateUserInfo = async () => {
  const user = {
    dob: store.state.user.dob,
    city: store.state.user.city
  };
  try {
    await changeUserInfoById(user);
    infoChanged.value = false;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};
</script>

<style lang="scss" scoped>
.user-profile {
  border: 1px solid $black;
  padding: 10px;
  border-radius: 15px;

  .user-profile__info {

    .info__item {
      select, input {
        border-radius: 15px;
        border: 1px solid $black;
        padding: 2px;
      }
    }

    .info__item:not(:first-child) {
      margin-top: 15px;
    }
  }

  .button-save {
    margin-top: 10px;
  }
}
</style>