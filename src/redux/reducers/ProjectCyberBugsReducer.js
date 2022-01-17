

const stateDefault ={
    projectList: [
        {id:'1', projectName:'nhanh',description:'<p style="color:red;">abc</p>'}
    ],
}

export const ProjectCyberBugsReducer = (state = stateDefault,action)=>{
    
    switch(action.type){

        case 'GET_LIST_PROJECT':{
            state.projectList = action.projectList;
            return {...state};
        }
        default: return {...state}
    }
}