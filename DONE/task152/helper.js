export const checkAccess = (user, password) => {
  if (user.role === "admin" && user.password === password) {
    return true;
  }
  return false;
};

export const grantAccess = (name) => {
  console.log(`Congratulations, ${name}. Access granted.`);
};

export const denyAccess = (name) => {
  console.log(`Sorry, ${name}. Access denied.`);
};
