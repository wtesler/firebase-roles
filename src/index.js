const toAuthorizedHandler = require('./handlers/toAuthorizedHandler');
const authorizedRest = require('./handlers/authorizedRest');
const updateUserRoles = require('./roles/update/updateUserRoles');
const readUserRoles = require('./roles/read/readUserRoles');
const {getEndpoints} = require("cranny");

const endpoints = getEndpoints(__dirname);

const theModule = {
  toAuthorizedHandler: toAuthorizedHandler,
  authorizedRest: authorizedRest,
  updateUserRoles: updateUserRoles,
  readUserRoles: readUserRoles,
  endpoints: endpoints,
}

module.exports = theModule;