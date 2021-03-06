/**
 * Turns the provided handler function into an authorized HTTPS REST function.
 * The function passes in the authorized user to the handler.
 * If `forceAuth`, The function throws before calling the handler if the user is not authorized.
 * Otherwise, the user is passed to the handler as null.
 *
 * @param handler A function which takes (req, res, user).
 * @param roles Required roles or empty.
 * @param forceAuth True if the endpoint should throw an error when unauthorized.
 */
module.exports = function(handler, roles = [], forceAuth = true) {
  const { rest } = require("cranny");
  const authorized = require("./authorized");

  return rest(authorized(handler, roles, forceAuth));
};
