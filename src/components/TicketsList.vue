<template>
  <div
    v-if="tickets.length > 0"
    class="tickets-list"
  >
    <h3>Список обращений</h3>
    <div class="tickets-card">
      <TicketCard
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        class="ticket-card"
        @detailed-click="handleDetailedClick"
      />
    </div>
    <DetailedTicketModal
      v-if="showDetailedModal && detailedTicket"
      :ticket="detailedTicket"
      @close-modal="handleCloseModal"
    />
  </div>
  <div v-else>
    <SpinnerLoading />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getTicketsByUserId } from '@api/user';
import SpinnerLoading from '@ui/SpinnerLoading.vue';
import TicketCard from '@components/TicketCard.vue';
import DetailedTicketModal from '@components/DetailedTicketModal.vue';

const tickets = ref([]);
const showDetailedModal = ref(false);
const detailedTicket = ref({});

onMounted(async () => {
  tickets.value = await getTicketsByUserId();
});

const handleDetailedClick = (ticket) => {
  detailedTicket.value = ticket;
  showDetailedModal.value = true;
};

const handleCloseModal = () => {
  showDetailedModal.value = false;
};
</script>

<style lang="scss" scoped>
.tickets-card {
  max-width: 550px;
  margin-top: 20px;
  .ticket-card {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>