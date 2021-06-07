const cat1 = require("../../../assets/images/category/category_1.jpg");
const cat2 = require("../../../assets/images/category/category_2.jpg");
const cat3 = require("../../../assets/images/category/category_3.jpg");
const cat4 = require("../../../assets/images/category/category_4.jpg");
const cat5 = require("../../../assets/images/category/category_5.jpg");

const data = [
  {
    title: "Open",
    desctiption: "Anyone on Predapp GmBH can see the group, its members and thair posts.",
    image: cat1
  },
  {
    title: "Closed",
    desctiption: "Anyone on Predapp GmBH can find the group add see who's in it. Only members can see posts.",
    image: cat2
  },
  {
    title: "Secret",
    desctiption: "Only members can find the group, see who's init and what they post.",
    image: cat3
  }
];

module.exports = data;
