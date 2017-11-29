
export default {
  '/': fields => new Promise(yes =>
    analytics.track(`Submitted with ${fields.serviceType}`, {
      to: fields.serviceTitle,
    }, {}, yes),
  ),

  '/unsere-projekt-phasen': () => new Promise(yes => yes()),

  '/ihre-informationen': fields => new Promise((yes) => {
    analytics.identify({
      email: fields.email,
      phone: fields.phone,
      name: `${fields.firstName} ${fields.lastName}`,
    }, {}, () =>
      analytics.track('Submit new information', fields, {}, yes),
    );
  }),
};
