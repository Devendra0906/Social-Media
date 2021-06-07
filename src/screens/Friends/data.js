const cat1 = require("../../../assets/images/category/category_1.jpg");
const cat2 = require("../../../assets/images/category/category_2.jpg");
const cat3 = require("../../../assets/images/category/category_3.jpg");
const cat4 = require("../../../assets/images/category/category_4.jpg");
const cat5 = require("../../../assets/images/category/category_5.jpg");

import localizedStrings from '../../Helper/LocalisedString'

const data = [
  {
    name: `${localizedStrings.postToGroup.commonDiscussion}`,
    thumbnail: cat1
  },
  {
    name: `${localizedStrings.postToGroup.socialDiscussion}`,
    thumbnail: cat2
  },
  {
    name: `${localizedStrings.postToGroup.general}`,
    thumbnail: cat3
  },
  {
    name: `${localizedStrings.postToGroup.flowDiscussion}`,
    thumbnail: cat4
  },
  {
    name: `${localizedStrings.postToGroup.uiUx}`,
    thumbnail: cat5
  }
];

module.exports = data;
