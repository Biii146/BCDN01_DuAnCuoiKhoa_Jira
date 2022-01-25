import Axios from "axios";
import { DOMAIN_CYBERBUG, TOKEN } from "../util/constants/settingSystem";

export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NjU0NzIwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjU2Njk0ODAwfQ.6o2C_IS8e7HlB9dUZ9eFRYOb2ST9LjIIbn4fO_SS1Qc`,
      }, //JWT
    }); 
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/${url}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NjU0NzIwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjU2Njk0ODAwfQ.6o2C_IS8e7HlB9dUZ9eFRYOb2ST9LjIIbn4fO_SS1Qc`, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
      },
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN),
      TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NjU0NzIwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjU2Njk0ODAwfQ.6o2C_IS8e7HlB9dUZ9eFRYOb2ST9LjIIbn4fO_SS1Qc`, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
      }
    });
  };
}