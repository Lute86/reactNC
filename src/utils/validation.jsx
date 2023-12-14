function validateInput(content, type) {
  switch (type) {
    case 'email':
      return validateEmail(content);
    case 'text':
      return validateAlpha(content);
    case 'boolean':
      return validateBoolean(content);
    case 'number':
      return validateNumber(content);
    case 'password':
      return validatePassword(content);
    default:
      return false;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateAlpha(input) {
  const alphaRegex = /^[A-Za-z]+$/;
  return alphaRegex.test(input);
}

function validateBoolean(input) {
  const lowercaseInput = input.toLowerCase();
  return lowercaseInput === 'true' || lowercaseInput === 'false';
}

function validateNumber(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
}

export default validateInput