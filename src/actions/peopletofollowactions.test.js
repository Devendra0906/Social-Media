
import {loadCoworkersAction} from './peopletofollowactions';
import moxios from 'moxios';
import {testStore} from '../Utils';




describe('loadCoworkersAction' ,() => {

    beforeEach(() => {
       moxios.install();
    });

    afterEach(() => {
       moxios.uninstall();
    });

    test('store is updated successfully' , () => {

      const expectedState = [
        {
          "_id": "60263c56fe615b45578b026b",
          "profileImg": "imageurl",
          "firstName": "Chetan",
          "lastName": "Godhani",
          "following": [],
          "follow": false
        },
        {
          "_id": "602666bd0205032fc47ea80e",
          "profileImg": "imageurl",
          "firstName": "Avery",
          "lastName": "Walters",
          "following": [
            {
              "id": "string",
              "firstName": "string",
              "lastName": "string"
            },
            {
              "id": "602666bd0205032fc47ea80e",
              "firstName": "Avery",
              "lastName": "Walters"
            },
            {
              "id": "602666bd0205032fc47ea80e",
              "firstName": "Avery",
              "lastName": "Walters"
            }
          ],
          "follow": false
        },
        {
          "_id": "602666f40205032fc47ea80f",
          "profileImg": "imageurl",
          "firstName": "Tamara",
          "lastName": "Mitchelle",
          "following": [
            {
              "id": "602666f40205032fc47ea80f",
              "firstName": "Tamara",
              "lastName": "Mitchelle"
            }
          ],
          "follow": false
        },
        {
          "_id": "602667180205032fc47ea810",
          "profileImg": "imageurl",
          "firstName": "Loretta",
          "lastName": "Jacobs",
          "following": [],
          "follow": false
        },
        {
          "_id": "6026673d0205032fc47ea811",
          "profileImg": "imageurl",
          "firstName": "Bonnie",
          "lastName": "Price",
          "following": [],
          "follow": false
        },
        {
          "_id": "6026676a0205032fc47ea812",
          "profileImg": "imageurl",
          "firstName": "Megan",
          "lastName": "Ramos",
          "following": [],
          "follow": false
        },
        {
          "_id": "6026678a0205032fc47ea813",
          "profileImg": "imageurl",
          "firstName": "Cameron",
          "lastName": "Clark",
          "following": [],
          "follow": false
        },
        {
          "_id": "602667ac0205032fc47ea814",
          "profileImg": "imageurl",
          "firstName": "Virgil",
          "lastName": "Carpenter",
          "following": [
            {
              "id": "602667ac0205032fc47ea814",
              "firstName": "Virgil",
              "lastName": "Carpenter"
            }
          ],
          "follow": false
        },
        {
          "_id": "602667c80205032fc47ea815",
          "profileImg": "imageurl",
          "firstName": "Howard",
          "lastName": "Bailey",
          "following": [],
          "follow": false
        },
        {
          "_id": "602667e40205032fc47ea816",
          "profileImg": "imageurl",
          "firstName": "Robin",
          "lastName": "Gregory",
          "following": [],
          "follow": false
        }
    
      ];
      
      const store = testStore();

      moxios.wait(() => {
        
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: expectedState,
          });
          console.log(request);
          
      });

      return store.dispatch(loadCoworkersAction())
      .then(() => {
         const newState = store.getState();
         console.log(newState);
         expect(newState.peopletofollowReducer.coworkers).toBe(undefined)
      })

    });

});
  