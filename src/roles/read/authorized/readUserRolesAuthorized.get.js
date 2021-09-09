const authorizedGet = require('../../../handlers/authorizedGet');
const {readUserRoles} = require('../readUserRoles');

module.exports = authorizedGet(async (req, res, user) => {
  const pageToken = req.query.pageToken;

  return await readUserRoles(pageToken);
}, ['admin']);
