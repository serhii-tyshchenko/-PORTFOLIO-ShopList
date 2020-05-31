import {
  ADD_SUGGESTION,
  REMOVE_SUGGESTION,
  GET_SUGGESTIONS,
  UPDATE_SUGGESTION,
  SIGN_OUT,
} from '../action-types';

const initialState = [];

export const suggestions = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SUGGESTION:
      return [...state, payload].sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

    case UPDATE_SUGGESTION:
      return state.map((item) => (item.id === payload.id ? { ...item, ...payload } : item));

    case REMOVE_SUGGESTION:
      return state.filter((item) => item.id !== payload);

    case GET_SUGGESTIONS:
      return [...payload];

    case SIGN_OUT:
      return [];

    default:
      return state;
  }
};
