import {
    ADD_LIST,
    REMOVE_LIST,
    SELECT_CONTACT
  } from "../Constant/types";
  
  // add actions
  export const addItem = (listItem) => ({
    type: ADD_LIST,
    payload: listItem,
  });

  // delete a contact
  export const removeItem = (data) => ({
    type: REMOVE_LIST,
    payload: data
  });
