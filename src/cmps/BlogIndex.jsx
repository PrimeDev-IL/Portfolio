import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { PostPreview } from './PostPreview'
import { getAllPosts, getPostsByTag, getAllTags, searchPosts } from '../data/posts'

/**
 * BlogIndex Component
 * Displays all blog posts with filtering and search capabilities
 * Implements semantic HTML for SEO
 */
export function BlogIndex() {
  const { tag } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState(tag || '')

  const filterPosts = useMemo(() => {
    let filtered = getAllPosts();

    // Filter by selected tag
    if (selectedTag) {
      filtered = getPostsByTag(selectedTag);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedTag, searchQuery]);

  const allTags = getAllTags();
  const postCount = filterPosts.length;

  return (
    <main className="blog-index-container">
      <header className="blog-header">
        <h1>Knowledge Hub</h1>
        <p className="blog-subtitle">
          Technical articles, guides, and insights on Full-Stack Development, DevOps, and Security Automation
        </p>
      </header>

      <div className="blog-controls">
        {/* Search Bar */}
        <div className="search-section">
          <input
            type="search"
            className="search-input"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search blog posts"
          />
        </div>

        {/* Tag Filter */}
        <nav className="tags-filter" role="navigation" aria-label="Filter posts by topic">
          <button 
            className={`tag-button ${!selectedTag ? 'active' : ''}`}
            onClick={() => setSelectedTag('')}
            aria-pressed={!selectedTag}
          >
            All Posts ({getAllPosts().length})
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
              aria-pressed={selectedTag === tag}
            >
              {tag} ({getPostsByTag(tag).length})
            </button>
          ))}
        </nav>
      </div>

      {/* Results Info */}
      <div className="blog-results-info">
        <p>
          {postCount} {postCount === 1 ? 'article' : 'articles'} 
          {selectedTag && ` tagged with "${selectedTag}"`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </div>

      {/* Posts List */}
      {filterPosts.length > 0 ? (
        <div className="blog-posts-grid" role="feed" aria-label="Blog posts">
          {filterPosts.map(post => (
            <PostPreview key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="no-posts-message">
          <p>No articles found. </p>
          <button 
            onClick={() => { setSelectedTag(''); setSearchQuery(''); }}
            className="reset-filters-btn"
          >
            Clear filters and browse all posts
          </button>
        </div>
      )}
    </main>
  );
}
