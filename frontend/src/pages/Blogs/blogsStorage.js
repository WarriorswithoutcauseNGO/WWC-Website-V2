const STORAGE_KEY = "wwc_custom_blogs_v1";

/**
 * Custom posts saved in this browser (localStorage).
 * Shape matches blog entries: { id, title, summary, content, img, category, tags, readTime, gradient }.
 */
export function getCustomBlogs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendCustomBlog(blog) {
  const existing = getCustomBlogs();
  existing.unshift({ ...blog, isCustom: true });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function getCustomBlogById(id) {
  return getCustomBlogs().find((b) => b.id === id) ?? null;
}

export function updateCustomBlog(id, updates) {
  const list = getCustomBlogs();
  const idx = list.findIndex((b) => b.id === id);
  if (idx === -1) return false;
  list[idx] = { ...list[idx], ...updates, isCustom: true };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return true;
}

export function deleteCustomBlog(id) {
  const next = getCustomBlogs().filter((b) => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

/** True if this post is stored in localStorage (editable in this browser). */
export function isCustomBlogPost(blog) {
  if (!blog?.id) return false;
  if (blog.isCustom === true) return true;
  const bid = Number(blog.id);
  return getCustomBlogs().some((c) => Number(c.id) === bid);
}
