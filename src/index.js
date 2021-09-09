const toAuthorizedHandler = require('./handlers/toAuthorizedHandler');
const authorizedGet = require('./handlers/authorizedGet');
const authorizedPost = require('./handlers/authorizedPost');
const updateUserRoles = require('./roles/update/updateUserRoles');
const readUserRoles = require('./roles/read/readUserRoles');
const {getEndpoints} = require("cranny");

const endpoints = getEndpoints(__dirname);

const theModule = {
  toAuthorizedHandler: toAuthorizedHandler,
  authorizedGet: authorizedGet,
  authorizedPost: authorizedPost,
  updateUserRoles: updateUserRoles,
  readUserRoles: readUserRoles,
  endpoints: endpoints,
}

module.exports = theModule;