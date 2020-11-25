import Lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import mkdirp from 'mkdirp';
import { resolve } from 'path';

mkdirp(resolve(__dirname, '../../live'));

export const db = new Lowdb(
  new FileSync(resolve(__dirname, '../../live/db.json')),
);

db.defaults({
  customers: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@abc.com',
      mobile: '123456',
      address: {
        addressLine1: '1 abc street',
        state: 'NSW',
        country: 'AU',
        postcode: '123',
      },
    },
    {
      id: 2,
      firstName: 'Sarah',
      lastName: 'Smith',
      email: 'sarah.smith@bbc.com',
      mobile: '123456',
      address: {
        addressLine1: '1 abc street',
        state: 'NSW',
        country: 'AU',
        postcode: '123',
      },
    },
    {
      id: 3,
      firstName: 'Peter',
      lastName: 'Parker',
      email: 'perter.parker@something.com',
      mobile: '123456',
      address: {
        addressLine1: '1 abc street',
        state: 'NSW',
        country: 'AU',
        postcode: '123',
      },
    },
  ],
}).write();
