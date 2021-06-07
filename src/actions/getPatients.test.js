import {storeFactory} from '../../tests/testUtils';
// import {render, wait, cleanup} from '@testing-library/react';
import {getPatients, postPatients} from './getPatients';

import moxios from 'moxios';

describe('testing function of axios of GET DATA', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adding data to axios request GET DATA', () => {
    const data = {
      data: [
        {
          data: [
            {
              id: '602d0d3d64835729773eb6b4',
              firstname: 'Shraddha',
              lastname: 'Patil',
              email: 'snnalawade@mitaoe.ac.in',
              mobilePrefix: 91,
              mobile: 9373072048,
              gender: 'Female',
              birthDate: '25/10/1999',
              patientId: 1,
            },
          ],
          code: 200,
          message: 'Patient data retrieved successfully',
        },
      ],
    };
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data,
      });
    });
    return store.dispatch(getPatients()).then(() => {
      const newState = store.getState();
      expect(newState.data).toBe(data.data[0].data);
    });
  });
});

describe('testing function of axios of POST DATA', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adding data to axios request', () => {
    const data = {
      data: [
        {
          data: [
            {
              id: '602d0d3d64835729773eb6b4',
              firstname: 'Shraddha',
              lastname: 'Patil',
              email: 'snnalawade@mitaoe.ac.in',
              mobilePrefix: 91,
              mobile: 9373072048,
              gender: 'Female',
              birthDate: '25/10/1999',
              patientId: 1,
            },
          ],
          code: 200,
          message: 'Patient data retrieved successfully',
        },
      ],
    };
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data,
      });
    });
    return store.dispatch(postPatients(data)).then(() => {
      const newState = store.getState();
      expect(newState.data).toBe(data);
    });
  });
});
