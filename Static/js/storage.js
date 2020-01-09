var storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
  
  setSession(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  getSession(key) {
    let value = window.sessionStorage.getItem(key);
    return JSON.parse(value);
  },
  clearOneSession(key) {
    window.sessionStorage.removeItem(key);
  },
  clearAllSession() {
    window.sessionStorage.clear();
  },
  //获取当前时间戳
  gettime() {
    var time = Date.parse(new Date()).toString();
    return time.substr(0, 10);
  },
  
  
};
export default storage;

