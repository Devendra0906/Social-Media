import moment from 'moment';
const evebtBG = require("../../../../assets/images/event_BG.jpg");

const data = [
  {
    name: "Scrum Meeting",
    date: `${moment(new Date()).add(1, 'days').format('ll')}`,
    time: "6 PM",
    thumbnail: evebtBG,
    going: 1,
    maybe: 1,
    cantgo: 0
  },
  {
    name: "Knowledge Transfer",
    date: `${moment(new Date()).add(2, 'days').format('ll')}`,
    time: "11 AM",
    thumbnail: evebtBG,
    going: 1,
    maybe: 0,
    cantgo: 1
  }
];

module.exports = data;