'use strict';


/**
 * add a new dongle
 *
 * body Dongle dongle to be added
 * no response value expected for this operation
 **/
exports.addDongle = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a dongle
 *
 * dongleId Long Dongle id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteDongle = function(dongleId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds Dongles by tags
 * Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findDonglesByTags = function(tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "Three Dongle",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
}, {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "Three Dongle",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Dongles by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findPetsByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "Three Dongle",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
}, {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "Three Dongle",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find dongle by ID
 * Returns a single dongle
 *
 * dongleId Long ID of dongle to return
 * returns Dongle
 **/
exports.getDongleById = function(dongleId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "Three Dongle",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * uploads an image
 *
 * dongleId Long ID of dongle to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * returns ApiResponse
 **/
exports.uploadFile = function(dongleId,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

