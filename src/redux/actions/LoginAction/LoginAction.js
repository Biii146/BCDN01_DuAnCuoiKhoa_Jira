import { USER_SIGNIN_API } from "../../constants/JiraTask";

export const signinAction = (email, password) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email: email,
            password: password
        }
    }
}