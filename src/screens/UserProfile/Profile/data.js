import localizedStrings from '../../../Helper/LocalisedString'

const experienceData = [
  {
    image: require('./../../../../assets/images/company_logo.jpeg'),
    designation: 'Team Lead Mobile Developer',
    companyName: 'Devstree IT Services Private Limited',
    start: 'Jul 2018',
    end: 'Present',
    location: 'Ahmedabad Area India',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    image: require('./../../../../assets/images/google_logo.png'),
    designation: 'Senior iOS Developer',
    companyName: 'Devstree IT Services Private Limited',
    start: 'Mar 2017',
    end: 'Jul 2018',
    location: 'Ahmedabad Area India',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    image: require('./../../../../assets/images/apple_logo.png'),
    designation: 'iOS Developer',
    companyName: 'Devstree IT Services Private Limited',
    start: 'May 2015',
    end: 'Mar 2017',
    location: 'Ahmedabad Area India',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  }
]

const accomplishmentsData = [
  {
    "title": localizedStrings.userProfile.course,
    "count": "1",
    "link": "AddCource"
  },
  {
    "title": localizedStrings.userProfile.language,
    "count": "3",
    "link": "AddLanguage"
  },
  {
    "title": localizedStrings.userProfile.projects,
    "count": "5",
    "link": "AddProject"
  },
]

module.exports = { experienceData, accomplishmentsData };
