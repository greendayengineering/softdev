'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.addCustomer = function addCustomer (req, res, next) {
  var body = req.swagger.params['body'].value;
  Customer.addCustomer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomer = function updateCustomer (req, res, next) {
  var body = req.swagger.params['body'].value;
  Customer.updateCustomer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
