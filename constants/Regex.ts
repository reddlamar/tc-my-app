const fullNameRegEx = /^[A-Za-z]+ [A-Za-z]+$/i;
const emailRegEx =
  /^[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?$/i;

export { fullNameRegEx, emailRegEx };
