const initialState = {
  proiectEdit: {
    id: 0,
    projectName: "string",
    creator: 0,
    description: "string",
    'categoryId': 1,
  },
};

export const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_PROJECT':{
            state.proiectEdit = action.projectEditModel;
            return {...state}
        }
    
    default:
        return state
    }
}
