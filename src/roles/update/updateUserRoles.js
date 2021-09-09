module.exports = async (uid, roles) => {
  const admin = require('firebase-admin');

  const auth = admin.auth();

  const rolesObj = {};
  for (const role of roles) {
    rolesObj[role] = true;
  }

  await auth.setCustomUserClaims(uid, rolesObj);
  await auth.revokeRefreshTokens(uid); // Try to get the user to logout so the claims can be refreshed on their token.
};
