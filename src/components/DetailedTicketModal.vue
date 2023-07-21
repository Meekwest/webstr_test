<template>
  <div class="modal ticket-modal">
    <div class="ticket-modal__header">
      <h3>Детальная информация об обращении</h3>
      <span
        class="pointer"
        @click="emits('close-modal')"
      >X</span>
    </div>
    <div class="ticket-modal__item">
      <span>[Номер обращения]: </span>{{ ticket.id }}
    </div>
    <div class="ticket-modal__item">
      <span>[Отправитель]: </span>{{ ticket.email }}
    </div>
    <div class="ticket-modal__item">
      <span>[Телефон для связи]: </span>{{ ticket.mobilePhone }}
    </div>
    <div class="ticket-modal__item">
      <span>[Тема]: </span>{{ ticket.title }}
    </div>
    <div class="ticket-modal__item description">
      <span>[Текст обращения]:</span>
      <p class="item__description">
        {{ ticket.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ticket: {
    type: Object,
    required: true,
    default: null,
  }
});

const emits = defineEmits('close-modal');
</script>

<style lang="scss" scoped>
.ticket-modal {
  .ticket-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;

    span {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .ticket-modal__item {
    span {
      font-weight: bold;
    }

    p {
      line-height: 150%;
    }

    &:not(:first-child) {
      margin-top: 15px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      max-height: 300px;
      overflow-y: auto;
    }
  }
}

::-webkit-scrollbar {
  width: 11px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 15px;
}

::-webkit-scrollbar-thumb {
  border-radius: 15px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
</style>