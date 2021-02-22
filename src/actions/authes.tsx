import { Auth,UserAuth } from "../types/Auth/Auth";
import swal from "sweetalert";

import {
    AUTH_LOGIN,
  AppActions

} from "../types/Auth/action";
import axios from "axios";

export const startAuthLogin = (user:UserAuth,history:any) => {

    axios.post(`https://twp-api.herokuapp.com/api/auth/login`,user)
    .then((res) => {
    history.push("/dashboard");
    })
    .catch(err=>{
        setTimeout(() => {
            swal({
              title: "Lỗi đăng nhập",
              icon: "error",
              timer: 1500
            });
          }, 150);
    });
};


