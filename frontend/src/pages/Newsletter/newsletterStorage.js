const STORAGE_KEY = "wwc_custom_news_v1";

/**
 * Custom newsletter cards saved in this browser (localStorage).
 * Shape matches newsletter entries: { id, title, subtitle, date, image, summary, content, downloadUrl }.
 */
export function getCustomNewsItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendCustomNewsItem(item) {
  const existing = getCustomNewsItems();
  existing.unshift({ ...item, isCustom: true });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function getCustomNewsById(id) {
  return getCustomNewsItems().find((n) => Number(n.id) === Number(id)) ?? null;
}

export function updateCustomNews(id, updates) {
  const list = getCustomNewsItems();
  const idx = list.findIndex((n) => Number(n.id) === Number(id));
  if (idx === -1) return false;
  list[idx] = { ...list[idx], ...updates, isCustom: true };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return true;
}

export function deleteCustomNews(id) {
  const next = getCustomNewsItems().filter((n) => Number(n.id) !== Number(id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function isCustomNewsItem(nl) {
  if (!nl?.id) return false;
  if (nl.isCustom === true) return true;
  return getCustomNewsItems().some((c) => Number(c.id) === Number(nl.id));
}
