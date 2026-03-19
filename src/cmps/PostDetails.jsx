import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPostById, getPostsByTag } from '../data/posts'

/**
 * PostDetails Component
 * Displays full blog post with SEO optimization
 * - Dynamic meta tags for search engines and social sharing
 * - Semantic HTML5 for accessibility and indexing
 * - JSON-LD structured data for rich snippets
 */
export function PostDetails() {
  const { postId } = useParams()
  const navigate = useNavigate()
  const post = getPostById(postId)

  // Get related posts by matching tags
  const relatedPosts = post 
    ? post.tags
        .flatMap(tag => getPostsByTag(tag))
        .filter(p => p.id !== post.id)
        .slice(0, 3)
    : [];

  // Update document title and meta tags on mount or post change
  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    // Update document title
    document.title = `${post.title} | PrimeDev Knowledge Hub`;

    // Update meta description
    updateMetaTag('description', post.meta.description);
    updateMetaTag('keywords', post.meta.keywords);

    // Open Graph (Social Sharing) Meta Tags
    updateMetaTag('og:title', post.meta.og_title, 'property');
    updateMetaTag('og:description', post.meta.og_description, 'property');
    updateMetaTag('og:type', 'article', 'property');
    updateMetaTag('og:url', `https://primedev.co.il/blog/${post.id}`, 'property');
    if (post.coverImage) {
      updateMetaTag('og:image', post.coverImage, 'property');
      updateMetaTag('og:image:width', '1200', 'property');
      updateMetaTag('og:image:height', '630', 'property');
    }

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', post.title);
    updateMetaTag('twitter:description', post.summary);

    // Article-specific meta tags
    updateMetaTag('article:published_time', post.date, 'property');
    updateMetaTag('article:author', post.author, 'property');
    post.tags.forEach(tag => {
      updateMetaTag('article:tag', tag, 'property');
    });

    // Canonical URL
    updateCanonicalURL(`https://primedev.co.il/blog/${post.id}`);

  }, [post, navigate]);

  if (!post) {
    return (
      <main className="post-details-container">
        <div className="post-not-found">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-link">← Back to Knowledge Hub</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="post-details-container">
      {/* Back Link */}
      <Link to="/blog" className="back-link" title="Back to Knowledge Hub">
        ← Back to Knowledge Hub
      </Link>

      {/* Article Container */}
      <article className="post-article" itemScope itemType="https://schema.org/BlogPosting">
        {/* Article Header */}
        <header className="post-header">
          <div className="post-meta-top">
            <nav className="post-tags-list" role="list" aria-label="Article topics">
              {post.tags.map((tag, idx) => (
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
          </div>

          <h1 itemProp="headline">{post.title}</h1>

          <div className="post-meta-details">
            <div className="post-author-info">
              <span className="label">Author</span>
              <span itemProp="author" className="author-name">
                {post.author}
              </span>
            </div>
            <div className="post-date-info">
              <span className="label">Published</span>
              <time 
                itemProp="datePublished" 
                dateTime={post.date}
                className="publish-date"
              >
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            <div className="post-reading-info">
              <span className="label">Reading Time</span>
              <span className="reading-time">{post.readingTime} min</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.coverImage && (
          <figure className="post-featured-image">
            <img
              src={post.coverImage}
              alt={post.title}
              itemProp="image"
            />
            <figcaption>Article cover image</figcaption>
          </figure>
        )}

        {/* Article Summary (Schema.org description) */}
        <div className="post-summary">
          <p itemProp="description">{post.summary}</p>
        </div>

        {/* Main Content */}
        <div 
          className="post-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <footer className="post-footer">
          <div className="post-footer-meta">
            <div className="last-updated">
              <span className="label">Published:</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
              </time>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="related-posts-section" aria-labelledby="related-posts-heading">
          <h2 id="related-posts-heading">Related Articles</h2>
          <div className="related-posts-grid">
            {relatedPosts.map(relatedPost => (
              <div key={relatedPost.id} className="related-post-card">
                <h3>
                  <Link to={`/blog/${relatedPost.id}`}>
                    {relatedPost.title}
                  </Link>
                </h3>
                <p>{relatedPost.summary}</p>
                <Link to={`/blog/${relatedPost.id}`} className="read-more">
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

/**
 * Helper function to update or create meta tags
 */
function updateMetaTag(name, content, type = 'name') {
  let meta = document.querySelector(`meta[${type}="${name}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(type, name);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}

/**
 * Helper function to update canonical URL
 */
function updateCanonicalURL(url) {
  let link = document.querySelector('link[rel="canonical"]');
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', url);
}
