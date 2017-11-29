
import has from 'lodash/has';

import { isEmail, isPhone } from '@utils/validators';

const FIELD_MISSING = 'Fehlt!';

export default {
  '/': (f) => {
    const err = {};

    if (!has(f, 'serviceType') || !f.serviceType) { err.serviceType = FIELD_MISSING; }
    if (!has(f, 'serviceTitle') || !f.serviceTitle) { err.serviceTitle = FIELD_MISSING; }

    return err;
  },
  '/ihre-informationen': (f) => {
    const err = {};

    if (!has(f, 'firstName') || !f.firstName) { err.firstName = FIELD_MISSING; }
    if (!has(f, 'lastName') || !f.lastName) { err.lastName = FIELD_MISSING; }
    if (!has(f, 'description') || !f.description) { err.description = FIELD_MISSING; }
    if (!has(f, 'company') || !f.company) { err.company = FIELD_MISSING; }

    if (!has(f, 'email') || !f.email) {
      err.email = FIELD_MISSING;
    } else if (!isEmail(f.email)) {
      err.email = 'Bitte eine echte E-Mail Adresse eingeben';
    }

    if (!has(f, 'phone') || !f.phone) {
      err.phone = FIELD_MISSING;
    // } else if (!isPhone(f.phone)) {
    //   err.phone = 'Bitte einen Ländercode angeben';
    }

    return err;
  },
};
