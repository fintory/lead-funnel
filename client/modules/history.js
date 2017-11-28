
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

/**
 * Let the page jump to the top again after a history change
 */
history.listen(() => {
  window.scrollTo(0, 0);

  analytics.page();
});

export default history;
