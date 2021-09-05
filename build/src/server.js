"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
var hostname = 'localhost';
var port = 8017;
app.get('/', function (req, res) {
  res.send('hello world');
});
app.listen(port, hostname, function () {
  console.log("hello trungquandev, iam ".concat(hostname, ":").concat(port));
});