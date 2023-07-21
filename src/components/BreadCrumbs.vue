<template>
  <div class="breadcrumbs">
    <ul class="ul-breadcrumbs">
      <li>
        <router-link
          to="/"
          class="link breadcrumb-link"
        >
          Главная
        </router-link>
      </li>
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
      >
        <span>> </span>
        <router-link
          :to="breadcrumb.to"
          class="link breadcrumb-link"
        >
          {{ breadcrumb.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const breadcrumbs = computed(() => {
   const matchedRoutes = route.matched;
   const breadcrumbs =[];

   matchedRoutes.forEach((route) => {
    if (route.meta.breadcrumb) {
      breadcrumbs.push({
        to: route.path,
        label: route.meta.breadcrumb
      });
    }
   });

   return breadcrumbs;
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  .ul-breadcrumbs {
    display: flex;
    gap: 5px;

    .breadcrumb-link {
      color: rgb(93, 93, 194);

      &:hover {
        color: rgb(38, 163, 201);
      }
    }
  }

  margin-bottom: 10px;
}
</style>