/**
 * Ensure the request is authorized and return the authorized user if it is.
 * The user has fields such as: uid, name, email, email_verified, picture.
 *
 * @param req The request
 * @param forceAuth True if the endpoint should throw an error when unauthorized.
 */
module.exports = async function (req, forceAuth=true) {
  const {getApp} = require('firebase-admin/app');
  const {getAuth} = require('firebase-admin/auth');

  const auth = getAuth(getApp());

  const TOKEN_PREFIX = "Bearer ";

  const headers = req.headers;
  const cookies = req.cookies;

  const handleUnauthorized = () => {
    if (forceAuth) {
      const e = new Error('Access Denied.');
      e.code = 403;
      throw e;
    } else {
      return null;
    }
  };

  if (
    (!headers.authorization || !headers.authorization.startsWith(TOKEN_PREFIX)) &&
    !(cookies && cookies.__session)
  ) {
    return handleUnauthorized();
  }

  let idToken;
  if (headers.authorization && headers.authorization.startsWith(TOKEN_PREFIX)) {
    idToken = headers.authorization.split(TOKEN_PREFIX)[1];
  } else if (cookies) {
    idToken = cookies.__session;
  } else {
    return handleUnauthorized();
  }

  try {
    return await auth.verifyIdToken(idToken);
  } catch (e) {
    return handleUnauthorized();
  }
};
