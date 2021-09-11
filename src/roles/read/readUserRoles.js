module.exports = async (pageToken, claim = null, email = null, count=50) => {
  const admin = require('firebase-admin');
  const auth = admin.auth();

  let users = [];
  let newPageToken = undefined;

  if (!count) {
    count = 50;
  }

  if (email) {
    const result = await auth.getUsers([{ email: email }]);
    users = result.users;
  } else if (claim) {
    do {
      const result = await auth.listUsers(1000, newPageToken);
      result.users = result.users.filter(userRecord => {
        const customClaims = userRecord.customClaims;
        return customClaims && customClaims[claim];
      });
      users.push(...result.users);
      newPageToken = result.pageToken;
    } while (newPageToken);
  } else {
    console.log(count, pageToken);
    const result = await auth.listUsers(count, pageToken);
    users = result.users;
    newPageToken = result.pageToken;
  }

  if (!newPageToken) {
    newPageToken = undefined; // firebase accepts undefined but not null.
  }

  users = users.map((data) => {
    return {
      uid: data.uid,
      displayName: data.displayName,
      photoURL: data.photoURL,
      email: data.email,
      customClaims: data.customClaims ? data.customClaims : {}
    };
  });

  return {
    users: users,
    pageToken: newPageToken
  };
};
