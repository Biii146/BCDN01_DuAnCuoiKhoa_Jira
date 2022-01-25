import { baseService } from "./baseServices";

export class UserServices extends baseService {
  constructor() {
    super();
  }

  getUser = (keyWord) => {
    return this.get(`/Users/getUser?keyword=${keyWord}`);
  };
  assignUserProject = (userProject) =>{
    return this.post(`/Project/assignUserProject`, userProject);
  }
}
 

export const userService = new UserServices();
