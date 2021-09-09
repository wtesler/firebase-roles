const getAuthorizedUser = require("./getAuthorizedUser");

module.exports = function(handler, roles=[], forceAuth=true) {
  return async (req, res) => {
    const user = await getAuthorizedUser(req, forceAuth);

    if (roles) {
      if (!Array.isArray(roles)) {
        roles = [roles];
      }

      for (const role of roles) {
        if (!user || !user[role]) {
          const e = new Error('Access Denied.');
          e.code = 403;
          throw e;
        }
      }
    }

    return await handler(req, res, user);
  };
};
