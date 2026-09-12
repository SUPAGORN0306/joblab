// src/utils/apiUrl.js

/**
 * Backend base URL (ไม่มี /api)
 * อ่านจาก VITE_API_URL → ถ้าไม่มี ใช้ localhost
 */
export const API_ORIGIN =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * API base URL (มี /api)
 */
export const API_BASE = `${API_ORIGIN}/api`;

/**
 * แปลง path → full URL
 * - http/https/data → คืนเดิม (Cloudinary URL)
 * - relative (/uploads/...) → prepend API_ORIGIN
 */
export function resolveFileUrl(pathOrUrl) {
  if (!pathOrUrl) return null;
  if (
    pathOrUrl.startsWith('http://') ||
    pathOrUrl.startsWith('https://') ||
    pathOrUrl.startsWith('data:')
  ) {
    return pathOrUrl;
  }
  return `${API_ORIGIN}${pathOrUrl}`;
}