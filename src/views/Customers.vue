<template>
  <b-container>
    <ApolloQuery :query="require('../graphql/Customers.gql')">
      <template v-slot="{ isLoading, result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading || isLoading">
          <b-spinner variant="primary"></b-spinner>
        </div>

        <!-- Error -->
        <div v-else-if="error">An error occured: {{ error }}</div>

        <!-- Result -->
        <template v-else-if="data">
          <b-card-group deck>
            <Customer
              v-for="customer in data.customers"
              :key="customer.id"
              :customer="customer"
            />
          </b-card-group>
        </template>

        <!-- No result -->
        <div v-else>
          <b-alert variant="warning" show>No result :(</b-alert>
        </div>
      </template>
    </ApolloQuery>
  </b-container>
</template>

<script>
import Customer from '@/components/Customer.vue';

export default {
  name: 'Customers',
  components: {
    Customer,
  },
};
</script>
