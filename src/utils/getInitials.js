export const getInitials = fullName => {
  return fullName
    .split(' ')
    .map(n => n[0])
    .join('');
};
