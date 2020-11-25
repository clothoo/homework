export default {
  Query: {
    customers: (root, args, { db }) => db.get('customers').value(),
    customerDetails: (root, { id }, { db }) =>
      db
        .get('customers')
        .value()
        .find(c => c.id === id),
  },
};
