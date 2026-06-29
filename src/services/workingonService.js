export const ADMIN_SESSION_KEY = "workingon_admin_session";
export const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PANEL_PASSWORD;

export async function fetchPosts() {
    try {
        const response = await fetch("/data/workingon.json", {
            cache: "no-store",
        });
        if (response.ok) {
            return await response.json();
        }
    } catch {
        // Return empty array on failure
    }

    return [];
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
    console.log(ADMIN_PASSWORD);
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
