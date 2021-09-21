const {rest} = require('cranny');
const toAuthorizedHandler = require('./toAuthorizedHandler');

/**
 * Turns the provided handler function into an authorized HTTPS POST function.
 * The function passes in the authorized user to the handler.
 *
 * @param handler A function which takes (req, res, user).
 * @param roles Required roles.
 * @param forceAuth True if the endpoint should throw an error when unauthorized.
 */
module.exports = function (handler, roles = [], forceAuth = true) {
  return rest(toAuthorizedHandler(handler, roles, forceAuth));
};
