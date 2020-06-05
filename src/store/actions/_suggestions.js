import { db } from 'services';
import {
  ADD_SUGGESTION,
  UPDATE_SUGGESTION,
  REMOVE_SUGGESTION,
  GET_SUGGESTIONS,
  ERROR,
} from '../action-types';

function actionError(message) {
  return {
    type: ERROR,
    payload: message,
  };
}

export const addSuggestion = (uid, data) => (dispatch) => {
  if (uid) {
    db.addItem(uid, data, 'suggestion-list')
      .then(() => dispatch({ type: ADD_SUGGESTION, payload: data }))
      .catch((error) => dispatch(actionError(error.message)));
  } else {
    dispatch({ type: ADD_SUGGESTION, payload: data });
  }
};

export const updateSuggestion = (uid, data) => (dispatch) => {
  if (uid) {
    db.updateItem(uid, data, 'suggestion-list')
      .then(() => dispatch({ type: UPDATE_SUGGESTION, payload: data }))
      .catch((error) => dispatch(actionError(error.message)));
  } else {
    dispatch({ type: UPDATE_SUGGESTION, payload: data });
  }
};

export const removeSuggestion = (uid, id) => (dispatch) => {
  if (uid) {
    db.removeItem(uid, id, 'suggestion-list')
      .then(() => dispatch({ type: REMOVE_SUGGESTION, payload: id }))
      .catch((error) => dispatch(actionError(error.message)));
  } else {
    dispatch({ type: REMOVE_SUGGESTION, payload: id });
  }
};

export const getSuggestions = (uid) => (dispatch) => {
  const data = [];
  db.getItems(uid, 'suggestion-list')
    .then((response) => {
      response.forEach((item) => data.push(item.data()));
      dispatch({ type: GET_SUGGESTIONS, payload: data });
    })
    .catch((error) => dispatch(actionError(error.message)));
};
