const initialState = {
  items: {},
  accomplishments: {
    courses: [],
    publications: [],
    patents: [],
    projects: [],
    honorAndAwards: [],
    testScore: [],
    languages: [],
    organizations: [],
  },

  experience: {},
  publications: {},
  loading: false,
  error: null,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROFILE_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'FETCH_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case 'FETCH_PROFILE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //   -----------------------------------------------------------
    case 'FETCH_EXPERIENCE_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'FETCH_EXPERIENCE_SUCCESS':
      return {
        ...state,
        loading: false,
        experience: action.payload,
      };

    case 'FETCH_EXPERIENCE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //   ------------------------------------------------------------
    case 'FETCH_PUBLICATION_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'FETCH_PUBLICATION_SUCCESS':
      return {
        ...state,
        loading: false,
        publications: action.payload,
      };

    case 'FETCH_PUBLICATION_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //   -------------------------------------------------------
    case 'FETCH_PATENTS_SUCCESS':
      //   console.log(action.payload);
      return {
        ...state,
        loading: false,
        patent: action.payload,
      };
    //   --------------------------------------------------------
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: {
          ...state.experience,
          workExperience: [...state.experience.workExperience, action.payload],
        },
      };
    case 'ADD_PUBLICATION':
      // console.log('payload', action.data[0].accomplishments.publications);
      return {
        ...state,
        items: {
          ...state.items,
          accomplishments: {
            ...state.items.accomplishments,
            publications: [
              ...state.items.accomplishments.publications,
              action.data[0].accomplishments.publications,
            ],
          },
        },
      };

    case 'ADD_PATENT':
      return {
        ...state,
        items: {
          ...state.items,
          accomplishments: {
            ...state.items.accomplishments,
            patents: [
              ...state.items.accomplishments.patents,
              action.data[0].accomplishments.patents,
            ],
          },
        },
      };

    case 'ADD_PROJECT':
      return {
        ...state,
        items: {
          ...state.items,
          accomplishments: {
            ...state.items.accomplishments,
            projects: [
              ...state.items.accomplishments.projects,
              action.data[0].accomplishments.projects,
            ],
          },
        },
      };
    case 'ADD_AWARDS':
      return {
        ...state,
        items: {
          ...state.items,
          accomplishments: {
            ...state.items.accomplishments,
            honorAndAwards: [
              ...state.items.accomplishments.honorAndAwards,
              action.data[0].accomplishments.honorAndAwards,
            ],
          },
        },
      };
    case 'ADD_LANGUAGE':
      return {
        ...state,
        items: {
          ...state.items,
          accomplishments: {
            ...state.items.accomplishments,
            languages: [
              ...state.items.accomplishments.languages,
              action.data[0].accomplishments.languages,
            ],
          },
        },
      };
    case 'ADD_ORGANISATION':
      return {
        ...state,
        items: {
          ...state.items,
          accomplishments: {
            ...state.items.accomplishments,
            organizations: [
              ...state.items.accomplishments.organizations,
              action.data[0].accomplishments.organizations,
            ],
          },
        },
      };
    default:
      return state;
  }
}
