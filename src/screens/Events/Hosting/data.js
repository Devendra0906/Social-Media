import moment from 'moment';
const evebtBG = require("../../../../assets/images/event_BG.jpg");

const data = [
  {
    title: "Events You Are Hosting",
    data: [
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
    ]
  },
  {
    title: "Past Events You Hosted",
    data: [
      {
        name: "Meeting",
        date: `${moment(new Date()).subtract(1, 'days').format('ll')}`,
        time: "6 PM",
        thumbnail: evebtBG,
        went: 1
      },
      {
        name: "Project Discussing",
        date: `${moment(new Date()).subtract(2, 'days').format('ll')}`,
        time: "11 AM",
        thumbnail: evebtBG,
        went: 2
      },
      {
        name: "Requirement Geather",
        date: `${moment(new Date()).subtract(2, 'days').format('ll')}`,
        time: "5 PM",
        thumbnail: evebtBG,
        went: 1
      },
      {
        name: "Planning",
        date: `${moment(new Date()).subtract(3, 'days').format('ll')}`,
        time: "11 AM",
        thumbnail: evebtBG,
        went: 3
      },
      {
        name: "Marketing",
        date: `${moment(new Date()).subtract(3, 'days').format('ll')}`,
        time: "6 PM",
        thumbnail: evebtBG,
        went: 2
      },
      {
        name: "Team Discussion",
        date: `${moment(new Date()).subtract(4, 'days').format('ll')}`,
        time: "11 AM",
        thumbnail: evebtBG,
        went: 1
      },
      {
        name: "Report Gathering",
        date: `${moment(new Date()).subtract(4, 'days').format('ll')}`,
        time: "3 PM",
        thumbnail: evebtBG,
        went: 1
      }
    ]
  }
];

module.exports = data;