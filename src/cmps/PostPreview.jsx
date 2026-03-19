import { Link } from 'react-router-dom'

/**
 * PostPreview Component
 * Renders a preview card for a blog post
 * Used in BlogIndex listing
 */
export function PostPreview({ post }) {
  if (!post) return null;

  return (
    <article className="post-preview-card">
      {post.coverImage && (
        <div className="post-preview-image">
          <img 
            src={post.coverImage} 
            alt={`Cover image for ${post.title}`}
            loading="lazy"
          />
        </div>
      )}
      
      <div className="post-preview-content">
        <nav className="post-tags" role="list" aria-label={`Tags for ${post.title}`}>
          {post.tags && post.tags.slice(0, 3).map((tag, idx) => (
            <Link 
              key={idx} 
              to={`/blog/tag/${tag}`} 
              className="tag"
              role="listitem"
            >
              {tag}
            </Link>
          ))}
        </nav>

        <h2 className="post-preview-title">
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h2>

        <p className="post-preview-summary">
          {post.summary}
        </p>

        <div className="post-preview-meta">
          <span className="post-author">
            By <strong>{post.author}</strong>
          </span>
          <time dateTime={post.date} className="post-date">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
          <span className="post-reading-time">
            {post.readingTime} min read
          </span>
        </div>

        <Link to={`/blog/${post.id}`} className="read-more">
          Read Article →
        </Link>
      </div>
    </article>
  );
}
