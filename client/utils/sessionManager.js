/* eslint-disable class-methods-use-this */

import Cookies from 'js-cookie';

class SessionManager {
  constructor(uuid) {
    this.uuid = uuid;

    this.getter = Cookies.get;
    this.setter = Cookies.set;

    this.init();
  }

  init() {
    if (!this.getter('sessions')) {
      this.setter('sessions', JSON.stringify([]));
    }
  }

  getAll() {
    const sessions = JSON.parse(this.getter('sessions'));

    return sessions;
  }

  create(session) {
    const sessions = this.getAll();

    this.setter('sessions', sessions.push(session));
  }
}

export default new SessionManager(global.uuid);
