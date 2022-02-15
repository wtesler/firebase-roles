const toAuthorizedHandler = require('./handlers/toAuthorizedHandler');
const authorizedRest = require('./handlers/authorizedRest');
const updateUserRoles = require('./roles/update/updateUserRoles');
const deleteUserRoles = require('./roles/delete/deleteUserRoles');
const readUserRoles = require('./roles/read/readUserRoles');
const {discoverEndpoints} = require("cranny");

const endpoints = discoverEndpoints(__dirname);

const theModule = {
  toAuthorizedHandler: toAuthorizedHandler,
  authorizedRest: authorizedRest,
  updateUserRoles: updateUserRoles,
  deleteUserRoles: deleteUserRoles,
  readUserRoles: readUserRoles,
  endpoints: endpoints,
}

module.exports = theModule;