module.exports = async (uid, rolesToDelete) => {
  const {getAuth} = require('firebase-admin/auth');

  const auth = getAuth();

  if (rolesToDelete && !Array.isArray(rolesToDelete)) {
    rolesToDelete = [rolesToDelete];
  }

  if (!rolesToDelete) {
    rolesToDelete = [];
  }

  const user = await auth.getUser(uid);

  if (!user) {
    throw new Error("No User found with that id.");
  }

  let claims = user.customClaims;
  if (!claims) {
    claims = {};
  }

  const roles = [];
  for (const role of Object.keys(claims)) {
    if (!rolesToDelete.includes(role)) {
      roles.push(role);
    }
  }

  const rolesObj = {};
  for (const role of roles) {
    rolesObj[role] = true;
  }

  await auth.setCustomUserClaims(uid, rolesObj);
  await auth.revokeRefreshTokens(uid); // Try to get the user to logout so the claims can be refreshed on their token.
};
