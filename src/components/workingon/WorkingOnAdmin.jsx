import React, { useState, useEffect } from "react";
import "./admin.css";
import { useLanguage } from "../../context/LanguageContext";
import {
    fetchPosts,
    exportPostsJson,
    isAdminAuthenticated,
    authenticateAdmin,
    logoutAdmin,
    createEmptyPost,
} from "../../services/workingonService";

const WorkingOnAdmin = () => {
    const { getTranslation } = useLanguage();
    const [authenticated, setAuthenticated] = useState(isAdminAuthenticated());
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [posts, setPosts] = useState([]);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (authenticated) {
            fetchPosts().then(setPosts);
        }
    }, [authenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (authenticateAdmin(password)) {
            setAuthenticated(true);
            setError("");
        } else {
            setError(getTranslation("admin_wrong_password"));
        }
    };

    const handleSave = async () => {
        const res = await fetch('/api/update-projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                projects: posts
            }),
        });

        if (res.ok) {
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } else {
            setError('Something went wrong.');
            return;
        }
    };

    const handleExport = () => {
        exportPostsJson(posts);
    };

    const updatePost = (id, field, value) => {
        setPosts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
        );
    };

    const addPost = () => {
        setPosts((prev) => [createEmptyPost(), ...prev]);
    };

    const deletePost = (id) => {
        setPosts((prev) => prev.filter((p) => p.id !== id));
    };

    if (!authenticated) {
        return (
            <div className="admin-page">
                <form className="admin-login" onSubmit={handleLogin}>
                    <h2>{getTranslation("admin_login")}</h2>
                    <input
                        type="password"
                        placeholder={getTranslation("admin_password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="admin-error">{error}</p>}
                    <button type="submit" className="btn btn-primary">
                        {getTranslation("admin_enter")}
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-page">
            <div className="admin-header">
                <h2>{getTranslation("admin_title")}</h2>
                <div className="admin-header__actions">
                    <button className="btn" onClick={() => { logoutAdmin(); setAuthenticated(false); }}>
                        {getTranslation("admin_logout")}
                    </button>
                </div>
            </div>

            {saved && <p className="admin-success">{getTranslation("admin_saved")}</p>}

            <div className="admin-toolbar">
                <button className="btn btn-primary" onClick={addPost}>
                    + {getTranslation("admin_add_post")}
                </button>
                <button className="btn" onClick={handleSave}>
                    {getTranslation("admin_save")}
                </button>
                <button className="btn" onClick={handleExport}>
                    {getTranslation("admin_export")}
                </button>
            </div>

            <div className="admin-posts">
                {posts.map((post) => (
                    <div key={post.id} className="admin-post-card">
                        <div className="admin-post-card__fields">
                            <label>
                                {getTranslation("admin_post_title")}
                                <input
                                    value={post.title}
                                    onChange={(e) => updatePost(post.id, "title", e.target.value)}
                                />
                            </label>
                            <label>
                                {getTranslation("admin_post_subtitle")}
                                <input
                                    value={post.subtitle}
                                    onChange={(e) => updatePost(post.id, "subtitle", e.target.value)}
                                />
                            </label>
                            <label>
                                Date
                                <input
                                    type="date"
                                    value={post.date || ""}
                                    onChange={(e) => updatePost(post.id, "date", e.target.value)}
                                />
                            </label>
                            <label>
                                {getTranslation("admin_post_description")}
                                <textarea
                                    rows={4}
                                    value={post.description}
                                    onChange={(e) => updatePost(post.id, "description", e.target.value)}
                                />
                            </label>
                            <label>
                                {getTranslation("admin_post_image")}
                                <input
                                    value={post.image?.startsWith("data:") ? "" : post.image || ""}
                                    placeholder="https://..."
                                    onChange={(e) => updatePost(post.id, "image", e.target.value)}
                                />
                                {/* <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(post.id, e.target.files[0])}
                                /> */}
                            </label>
                        </div>
                        {post.image && (
                            <img className="admin-post-card__preview" src={post.image} alt="" />
                        )}
                        <button
                            className="btn admin-post-card__delete"
                            onClick={() => deletePost(post.id)}
                        >
                            {getTranslation("admin_delete")}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingOnAdmin;
