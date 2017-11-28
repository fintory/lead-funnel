/* eslint-disable */

let RedBox = () => null;

if (process.env.NODE_ENV === 'development') {
  RedBox = require('redbox-react').default;
}

export default RedBox;
