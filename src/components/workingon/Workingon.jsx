import React, { useState, useEffect } from "react";
import "./workingon.css";
import { useLanguage } from "../../context/LanguageContext";
import { fetchPosts } from "../../services/workingonService";
import school from "../../assets/aboutme/school.jpeg";

const FALLBACK_IMAGE = school;

const Workingon = () => {
  const { getTranslation } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="workingon">
      <h5>{getTranslation("what")}</h5>
      <h2>{getTranslation("lately")}</h2>
      <div className="container workingon__container">
        {loading ? (
          <p className="workingon__loading text-light">...</p>
        ) : posts.length === 0 ? (
          <p className="workingon__empty text-light">—</p>
        ) : (
          <div className="timeline">
            {posts.map((post) => (
              <article key={post.id} className="timeline-item">
                <time className="timeline-item__date">{post.date}</time>
                <h3>{post.title}</h3>
                {post.subtitle && <p className="timeline-item__subtitle">{post.subtitle}</p>}
                {post.description && (
                  <p className="timeline-item__description">{post.description}</p>
                )}
                {post.image && (
                  <img
                    className="timeline-item__image"
                    src={post.image}
                    alt={post.title}
                    onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                  />
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Workingon;
