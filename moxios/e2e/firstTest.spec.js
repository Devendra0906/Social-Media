import {beforeEach} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: false});
  });
  it('should have Login screen', async () => {
    await expect(element(by.id('touchme'))).toBeVisible();
  });

  // it('Home page should be show', async () => {
  //   await element(by.id('loginButton')).tap();
  //   await expect(element(by.id('homeTab'))).toBeVisible();
  //   await expect(element(by.id('feed'))).toBeVisible();
  // });
  //   it('Tabbar should work', async () => {
  //     await element(by.id('groupsTab')).tap();
  //     await expect(element(by.id('groupList'))).toBeVisible();
  //     await element(by.id('notificationTab')).tap();
  //     await expect(element(by.id('notificationScreen'))).toBeVisible();
  //     await element(by.id('settingsTab')).tap();
  //     await expect(element(by.id('SettingScreen'))).toBeVisible();
  //     await element(by.id('home')).tap();
  //     await expect(element(by.id('feed'))).toBeVisible();
  //   });
  //   // it('Scroll down the list', async () => {
  //   //   await element(by.id('feedListItems')).scroll(100, 'down', NaN, 0.85);
  //   //   await element(by.id('feedListItems')).scroll(100, 'up', NaN, 0.85);
  //   // });
  //   it('Should show Select group screen', async () => {
  //     await element(by.id('btnAddPost')).tap();
  //     await expect(element(by.id('postToGroupSreen'))).toBeVisible();
  //   });
  //   it('Should show Add Post screen', async () => {
  //     await element(by.id('group2')).tap();
  //     await expect(element(by.id('updatePost'))).toExist();
  //   });
  //   it('should post and open home screen', async () => {
  //     await element(by.id('btnPost')).tap();
  //     await expect(element(by.id('feed'))).toExist();
  //   });
  //   it('should show grous list screen', async () => {
  //     await element(by.id('groupsTab')).tap();
  //     await expect(element(by.id('groupList'))).toExist();
  //   });
  //   it('should show add group screen', async () => {
  //     await element(by.id('btnAddGroup')).tap();
  //     await expect(element(by.id('addGroupScreen'))).toExist();
  //   });
  //   it('Should select list items', async () => {
  //     await element(by.text('Fouad Omri')).tap();
  //     await element(by.text('Safa Omri')).tap();
  //     await element(by.text('Darshit Patel')).tap();
  //   });
  //   it('Should show selected users list', async () => {
  //     await expect(element(by.id('selectedUsersList'))).toExist();
  //   });
  //   it('should show create group screen', async () => {
  //     await element(by.id('btnReviewGroup')).tap();
  //     await expect(element(by.id('createGroupScreen'))).toExist();
  //   });
  //   it('should create group and show group List screen', async () => {
  //     await element(by.id('btnCreateGroup')).tap();
  //     await expect(element(by.id('groupList'))).toBeVisible();
  //   });
  //   it('should shown events page', async () => {
  //     await element(by.id('settingsTab')).tap();
  //     await expect(element(by.id('SettingScreen'))).toExist();
  //     await element(by.text('Events')).tap();
  //   });
  //   it('should show event screen and swipe event tabs', async () => {
  //     await expect(element(by.id('eventsTabScreen'))).toExist();
  //     await expect(element(by.id('today'))).toExist();
  //     await element(by.id('today')).swipe('left', 'fast', 0.8);
  //     await element(by.id('week')).swipe('left', 'fast', 0.8);
  //     await element(by.id('month')).swipe('left', 'fast', 0.8);
  //     await element(by.id('previous')).swipe('right', 'fast', 0.8);
  //     await element(by.id('month')).swipe('right', 'fast', 0.8);
  //     await element(by.id('week')).swipe('right', 'fast', 0.8);
  //   });
  //   it('should show create event screen', async () => {
  //     await element(by.id('addEventButton')).tap();
  //     await expect(element(by.id('createEventScreen'))).toExist();
  //   });
});
