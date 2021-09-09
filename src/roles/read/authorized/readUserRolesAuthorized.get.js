const authorizedGet = require('../../../handlers/authorizedGet');

module.exports = authorizedGet(async (req, res, user) => {
  const pageToken = req.query.pageToken;

  const readUserRoles = require('../readUserRoles');
  const users = await readUserRoles(pageToken);
  return {
    users: users
  }
}, ['admin']);
