<template>
  <div class="ticket-card">
    <!-- <div class="tickets-card__item">
      <span>Номер обращения: </span>{{ ticket.id }}
    </div>
    <div class="tickets-card__item">
      <span>Отправитель: </span>{{ ticket.email }}
    </div> -->
    <div class="tickets-card__item">
      <span>Тема: </span>{{ ticket.title }}
    </div>
    <div class="tickets-card__item">
      <span>Текст обращения: </span>{{ `${ticket.description.substring(0, 40).trim()}...` }}
    </div>
    <button
      class="detailed-button button pointer transition"
      @click="emits('detailed-click', ticket)"
    >
      Подробнее...
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  ticket: {
    type: Object,
    required: true,
    default: null
  }
});

const emits = defineEmits(['detailed-click']);
</script>

<style lang="scss" scoped>
.ticket-card {
  background-color: $gray;
  border: 1px solid $black;
  border-radius: 15px;
  padding: 10px;

  .tickets-card__item {
    span {
      font-weight: 600;
    }
  }

  .detailed-button {
    margin-top: 15px;

    &:hover {
      background-color: $light-gray;
    }
  }
}

</style>