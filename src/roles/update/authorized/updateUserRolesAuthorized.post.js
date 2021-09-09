const authorizedPost = require('../../../handlers/authorizedPost');
const {parameterError} = require('cranny');
const {updateUserRoles} = require('../updateUserRoles');

module.exports = authorizedPost(async (req, res, user) => {
  const uid = req.body.uid;
  const roles = req.body.roles;
  if (!uid || !roles) {
    parameterError(req);
    return null;
  }

  await updateUserRoles(uid, roles);
}, ['admin']);
