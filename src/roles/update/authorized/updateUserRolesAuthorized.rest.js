const authorizedRest = require('../../../handlers/authorizedRest');

module.exports = [
  'post',
  authorizedRest(async (req, res, user) => {
    const {parameterError} = require('cranny');

    const uid = req.body.uid;
    const roles = req.body.roles;
    if (!uid || !roles) {
      parameterError(req);
      return null;
    }

    if (!Array.isArray(roles)) {
      throw new Error("roles parameter should be array of strings.");
    }

    const updateUserRoles = require('../updateUserRoles');
    await updateUserRoles(uid, roles);
  }, ['admin'])
];
