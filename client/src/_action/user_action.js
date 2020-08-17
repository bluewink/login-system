import axios from "axios";
import { LOGIN_USER } from "./types";
export function loginUser(dataToSubmit) {
  //서버에 리퀘스트를 날림.
  const request = axios.post("/api/users/login", dataToSubmit).then(
    (response) => response.data
    //서버에서 받은 데이터를 request에 저장.
  );
  return {
    //requset를 reducer로 보내기.
    type: "LOGIN_USER",
    payload: request,
  };
}