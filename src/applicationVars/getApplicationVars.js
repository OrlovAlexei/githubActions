import Config from "./applicationVars.json";

export function getApplicationVars(){
  return {
    env:Config.ENV,
    baseUrl:Config.BASE_URL
  }
}