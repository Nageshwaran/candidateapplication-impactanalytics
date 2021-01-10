import {
  SHORTLIST,
  REJECTED,
  REMOVEFROMREJECTED,
  REMOVEFROMSHORTLIST
} from "./Constant";

const initialState = {
  shortList: [],
  rejected: []
};

function rootReducer(state = initialState, action) {
  if (action.type == SHORTLIST) {
    return Object.assign({}, state, {
      shortList: state.shortList.concat(action.payload.candidateinfo)
    });
  } else if (action.type == REJECTED) {
    return Object.assign({}, state, {
      rejected: state.rejected.concat(action.payload.candidateinfo)
    });
  } else if (action.type == REMOVEFROMREJECTED) {
    const Filtereddata = state.rejected.filter(
      data =>
        JSON.parse(JSON.parse(data)).id !==
        JSON.parse(JSON.parse(action.payload.candidateinfo)).id
    );

    return Object.assign({}, state, {
      rejected: Filtereddata
    });
  } else if (action.type == REMOVEFROMSHORTLIST) {
    const Filtereddata = state.shortList.filter(
      data =>
        JSON.parse(JSON.parse(data)).id !==
        JSON.parse(JSON.parse(action.payload.candidateinfo)).id
    );
    return Object.assign({}, state, {
      shortList: Filtereddata
    });
  }

  return state;
}

export default rootReducer;
