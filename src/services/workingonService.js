export const POSTS_STORAGE_KEY = "workingon_posts";
export const ADMIN_SESSION_KEY = "workingon_admin_session";

export const ADMIN_PASSWORD =
  process.env.REACT_APP_ADMIN_PASSWORD || "victor2026";

export async function fetchPosts() {
  const stored = localStorage.getItem(POSTS_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fall through to JSON file
    }
  }

  try {
    const response = await fetch("/data/workingon.json");
    if (response.ok) {
      return await response.json();
    }
  } catch {
    // Return empty array on failure
  }

  return [];
}

export function savePosts(posts) {
  localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(posts));
}

export function exportPostsJson(posts) {
  const blob = new Blob([JSON.stringify(posts, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "workingon.json";
  link.click();
  URL.revokeObjectURL(url);
}

export function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

export function authenticateAdmin(password) {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    return true;
  }
  return false;
}

export function logoutAdmin() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

export function createEmptyPost() {
  return {
    id: Date.now().toString(),
    title: "",
    subtitle: "",
    description: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
  };
}
