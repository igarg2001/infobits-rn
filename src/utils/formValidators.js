export const formValidators = (value, rules) => {
  let isValid = true,
    errorMsg = '';
  if (!rules) {
    return [isValid, errorMsg];
  }
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
    if (!isValid) errorMsg = 'is required.';
  }
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
    if (!isValid) errorMsg = 'is invalid';
  }
  if (rules.isMobile) {
    const pattern = /^[6-9]\d{9}$/;
    isValid = pattern.test(value) && isValid;
    if (!isValid) errorMsg = 'is invalid';
  }
  if (rules.isPincode) {
    const pattern = /^[1-9][0-9]{5}$/;
    isValid = pattern.test(value) && isValid;
    if (!isValid) errorMsg = 'is invalid';
  }
  return [isValid, errorMsg];
};
