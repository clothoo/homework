import { shallowMount } from '@vue/test-utils';
import Customer from '@/components/Customer.vue';

describe('Customer.vue', () => {
  it('renders props.customer when passed', () => {
    const customer = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@abc.com',
    };
    const wrapper = shallowMount(Customer, {
      propsData: { customer },
    });
    expect(wrapper.text()).toContain(customer.email);
  });
});
