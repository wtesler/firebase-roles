const getAuthorizedUser = require("./getAuthorizedUser");

module.exports = function(handler, roles=[], forceAuth=true) {
  return async (req, res) => {
    const user = await getAuthorizedUser(req, forceAuth);

    if (roles) {
      // Will be thrown if conditions below are not met.
      const e = new Error('Access Denied.');
      e.code = 403;

      if (!user) {
        throw e;
      }

      if (!Array.isArray(roles)) {
        roles = [roles];
      }

      let hasRole = roles.length === 0;
      for (const role of roles) {
        if (user && user[role]) {
          hasRole = true;
          break;
        }
      }
      if (!hasRole) {
        throw e;
      }
    }

    return await handler(req, res, user);
  };
};
