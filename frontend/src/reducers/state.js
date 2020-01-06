const initialState = {
  data: null,
  error: null,
  isFetching: false,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STATE/START_FETCHING': {
      return {
        ...state,
        isFetching: true,
      };
    }
    case 'STATE/END_FETCHING': {
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    }
    case 'STATE/FAILED_FETCHING': {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default stateReducer;