module.exports = async (pageToken) => {
  const admin = require('firebase-admin');

  const auth = admin.auth();

  const listUsersResult = await auth.listUsers(1000, pageToken);

  const users = listUsersResult.users.map((userRecord) => {
    const data = userRecord.toJSON();
    return {
      uid: data.uid,
      displayName: data.displayName,
      photoURL: data.photoURL,
      email: data.email,
      customClaims: data.customClaims,
    };
  });

  return users;
};
