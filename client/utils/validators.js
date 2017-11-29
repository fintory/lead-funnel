
export { validate as isEmail } from 'isemail';

export function isPhone(phone) {
  if (phone[0] === '+' || phone[0] === '0') {
    return true;
  } else {
    return false;
  }
}
