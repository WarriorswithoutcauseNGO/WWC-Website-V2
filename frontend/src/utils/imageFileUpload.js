/** Max size for cover images saved in localStorage (base64 grows ~33%). */
export const MAX_IMAGE_BYTES = 2.5 * 1024 * 1024;

function isHttpUrl(s) {
  try {
    const u = new URL(s);
    return ["http:", "https:"].includes(u.protocol);
  } catch {
    return false;
  }
}

export function isDataImageUrl(s) {
  return typeof s === "string" && s.startsWith("data:image/");
}

/** Valid cover: https URL or data:image base64 from file upload. */
export function isUsableCoverImage(s) {
  return typeof s === "string" && (isHttpUrl(s) || isDataImageUrl(s));
}

/**
 * Read an image file as a data URL for storage in localStorage.
 * @returns {Promise<string>}
 */
export function readImageFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("Please choose an image file (PNG, JPEG, WebP, etc.)."));
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      reject(
        new Error(
          `Image must be ${Math.round(MAX_IMAGE_BYTES / 1024 / 1024)} MB or smaller.`
        )
      );
      return;
    }
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(new Error("Could not read that file."));
    r.readAsDataURL(file);
  });
}
