'use strict';

var utils = require('../utils/writer.js');
var Dongle = require('../service/DongleService');

module.exports.addDongle = function addDongle (req, res, next) {
  var body = req.swagger.params['body'].value;
  Dongle.addDongle(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDongle = function deleteDongle (req, res, next) {
  var dongleId = req.swagger.params['dongleId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Dongle.deleteDongle(dongleId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findDonglesByTags = function findDonglesByTags (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  Dongle.findDonglesByTags(tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPetsByStatus = function findPetsByStatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  Dongle.findPetsByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDongleById = function getDongleById (req, res, next) {
  var dongleId = req.swagger.params['dongleId'].value;
  Dongle.getDongleById(dongleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadFile = function uploadFile (req, res, next) {
  var dongleId = req.swagger.params['dongleId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Dongle.uploadFile(dongleId,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
