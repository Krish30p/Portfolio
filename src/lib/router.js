/**
 * Simple client-side router helper.
 * Triggers a navigation by updating history state and dispatching a popstate event,
 * which React components can listen to.
 */
export const navigate = (to) => {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
