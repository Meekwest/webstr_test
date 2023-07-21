<template>
  <div class="default-header">
    <nav class="default-header__nav">
      <ul class="nav__ul">
        <li
          v-if="$store.state.user.auth"
          class="nav__li"
        >
          <router-link
            to="/"
            class="link pointer transition"
          >
            Главная
          </router-link>
        </li>
        <li
          v-if="!$store.state.user.auth"
          class="nav__li"
        >
          <router-link
            to="/login"
            class="link pointer transition"
          >
            Авторизация
          </router-link>
        </li>
        <li
          v-if="$store.state.user.auth"
          class="nav__li"
        >
          <router-link
            to="/profile"
            class="link pointer transition"
          >
            Личный кабинет
          </router-link>
        </li>
        <li
          v-if="$store.state.user.auth"
          class="nav__li"
        >
          <router-link
            to="/ticket"
            class="link pointer transition"
          >
            Мои тикеты
          </router-link>
        </li>
        <li
          v-if="$store.state.user.auth"
          class="nav__li"
        >
          <a
            class="link pointer transition"
            href="/login"
            @click="logout"
          >
            Выход
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="breadcrumbs container">
    <BreadCrumbs />
  </div>
  <router-view />
</template>

<script setup>
import { logout } from '@helpers/logout';
import BreadCrumbs from '@components/BreadCrumbs.vue';

</script>

<style lang="scss" scoped>
.default-header {
  padding: 10px;

  .default-header__nav {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav__ul {
      display: flex;
      gap: 10px;

      .nav__li {
        padding: 10px;
          .link {
            &:hover {
              color: $gray;
            }
          }
      }
    }
  }

  .router-link-active {
    padding: 5px;
    border-radius: 15px;
    border: 1px solid $black;
    font-weight: bold;
  }
}
</style>