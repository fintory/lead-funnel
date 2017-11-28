
export { validate as isEmail } from 'isemail';

export function isPhone(phone) {
  if (phone[0] === '+') {
    return true;
  } else if (phone[0] === '0' && phone[1] === '0') {
    return true;
  } else {
    return false;
  }
}
