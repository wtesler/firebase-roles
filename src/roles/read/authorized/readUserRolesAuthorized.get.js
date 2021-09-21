const authorizedRest = require('../../../handlers/authorizedRest');

module.exports = authorizedRest(async (req, res, user) => {
  const pageToken = req.query.pageToken;
  const claim = req.query.claim;
  const email = req.query.email;
  const count = req.query.count;

  const readUserRoles = require('../readUserRoles');
  const response = await readUserRoles(pageToken, claim, email, count);
  return response;
}, ['admin']);
