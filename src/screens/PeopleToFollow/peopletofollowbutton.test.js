import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { testStore , findByTestAtrr } from '../../Utils';
import { loadCoworkersAction } from '../../actions/peopletofollowactions';
import moxios from 'moxios';
import PeopleToFollow from './index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// const store = testStore();

const setup = (initialState) => {
  const store = testStore(initialState);
  const wrapper = shallow(<PeopleToFollow store={store}/>).dive().dive();
  return wrapper;
}


describe('Buttons in people to follow', () =>{
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('Let me render', () => {
    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
    });

    return store.dispatch(loadCoworkersAction())
      .then(() => {
        const newState = store.getState()
        const wrapper = setup(newState);
        const appComponent = findByTestAtrr(wrapper, 'test-button');
        expect(appComponent.length).toBe(10);
      })
  });
});