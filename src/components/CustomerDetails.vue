<template>
  <b-container>
    <b-spinner v-if="$apollo.loading" variant="primary"></b-spinner>
    <b-card
      v-else
      :title="name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ customerDetails.email }}
      </b-card-text>
      <b-card-text>
        {{ customerDetails.mobile }}
      </b-card-text>
      <b-card-text>
        <address>
          {{ customerDetails.address.addressLine1 }}
          <br />
          {{ customerDetails.address.addressLine2 }}
          <br />
          {{ customerDetails.address.state }}
          <br />
          {{ customerDetails.address.country }}
          <br />
          {{ customerDetails.address.postcode }}
        </address>
      </b-card-text>

      <b-button to="/" variant="primary">Go back</b-button>
    </b-card>
  </b-container>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'CustomerDetails',
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      toParams => {
        this.$apollo.queries.customerDetails.refetch({ id: toParams.id });
      },
    );
  },
  computed: {
    name() {
      const { firstName, lastName } = this.customerDetails;
      return `${firstName} ${lastName}`;
    },
  },
  apollo: {
    customerDetails: {
      query: gql`
        query customerDetails($id: Int!) {
          customerDetails(id: $id) {
            id
            firstName
            lastName
            email
            mobile
            address {
              addressLine1
              addressLine2
              state
              country
              postcode
            }
          }
        }
      `,
      update: data => data.customerDetails,
      variables() {
        return {
          id: Number(this.id),
        };
      },
    },
  },
};
</script>
