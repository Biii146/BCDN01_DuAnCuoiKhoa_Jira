import { Axios } from "axios"
import { DOMAIN } from "../../util/constants/settingSystem"

export const jiraService = {
    signinJira: (userLogin) => {
        return Axios({
            url:`${DOMAIN}/api/Users/signin`,
            method: 'POST',
            data: userLogin
        })
    }
}