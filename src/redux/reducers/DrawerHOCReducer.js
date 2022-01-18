import React from "react";

const initialState = {
  visible: false,
  ComponentContentDrawer: <p>default content</p>,
  callBackSubmit : (propsValue) => {alert('click submit')},
};

export const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return { ...state, visible: true };
    case "CLOSE_DRAWER":
      return { ...state, visible: false };
    case "OPEN_FORM_EDIT_PROJECT":{
        return { ...state, visible: true, ComponentContentDrawer: action.Component };
    }
    default:
      return state;
  }
};
