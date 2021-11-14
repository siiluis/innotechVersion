module.exports = class Response {
  status;
  msg;
  data;
  constructor(status = "FAILED", msg = null, data = null) {
    this.status = status;
    this.msg = msg;
    this.data = data;
  }
};
