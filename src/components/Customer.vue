<template>
  <div>
    <b-card :title="name">
      <b-card-text>
        {{ customer.email }}
      </b-card-text>

      <b-link :to="`/customers/${customer.id}`" variant="primary"
        >Details</b-link
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  props: {
    customer: {
      type: Object,
      required: true,
    },
  },
  computed: {
    name() {
      const { firstName, lastName } = this.customer;
      return `${firstName} ${lastName}`;
    },
  },
};
</script>
