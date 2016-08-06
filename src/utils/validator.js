export function validateEmail(email) {
  const emailRegExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
  if (email == null) {
    return false;
  }
  return !!(email.match(emailRegExp) && email.length > 0);
}
