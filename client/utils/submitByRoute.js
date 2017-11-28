
export default {
  '/': fields => new Promise(yes =>
    analytics.track(`Submitted with ${fields.serviceType}`, {
      to: fields.serviceTitle,
    }, {}, yes),
  ),

  '/information': fields => new Promise((yes) => {
    analytics.identify({
      email: fields.email,
      phone: fields.phone,
      name: `${fields.firstName} ${fields.lastName}`,
    }, {}, () =>
      analytics.track('Submit new information', fields, {}, yes),
    );
  }),

  '/confirmation': () => new Promise(yes => yes()),
};
