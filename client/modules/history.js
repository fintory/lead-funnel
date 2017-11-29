
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

/**
 * Let the page jump to the top again after a history change
 */
history.listen(() => {
  setTimeout(() => window.scroll({ top: 0, left: 0, behavior: 'smooth' }), 500);

  analytics.page();
});

export default history;
