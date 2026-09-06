const RECENTLY_VIEWED_KEY = 'torqva_recently_viewed';
const MAX_RECENT_ITEMS = 8;

export const getRecentlyViewedIds = () => {
  try {
    const raw = localStorage.getItem(RECENTLY_VIEWED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const addRecentlyViewedId = (productId) => {
  try {
    if (!productId) return;
    let list = getRecentlyViewedIds();
    // Remove if existing to push to front
    list = list.filter((id) => id !== productId);
    list.unshift(productId);
    if (list.length > MAX_RECENT_ITEMS) {
      list = list.slice(0, MAX_RECENT_ITEMS);
    }
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(list));
  } catch (e) {
    // Fail silently
  }
};
