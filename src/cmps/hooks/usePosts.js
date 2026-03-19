import { useMemo } from 'react'
import { getAllPosts, getPostById, getPostsByTag, getAllTags, searchPosts } from '../data/posts'

/**
 * Custom Hook: usePosts
 * Provides posts data management and filtering
 */
export function usePosts() {
  // Get all posts (memoized for performance)
  const allPosts = useMemo(() => getAllPosts(), []);

  // Get all unique tags
  const allTags = useMemo(() => getAllTags(), []);

  // Get recent posts (last 5)
  const recentPosts = useMemo(() => {
    return [...allPosts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  }, [allPosts]);

  // Get posts by reading time (estimated)
  const postsByReadingTime = useMemo(() => {
    return [...allPosts].sort((a, b) => a.readingTime - b.readingTime);
  }, [allPosts]);

  return {
    allPosts,
    allTags,
    recentPosts,
    postsByReadingTime,
  };
}

/**
 * Custom Hook: usePost
 * Fetch a single post by ID with caching
 */
export function usePost(postId) {
  return useMemo(() => getPostById(postId), [postId]);
}

/**
 * Custom Hook: usePostsByTag
 * Get posts filtered by a specific tag
 */
export function usePostsByTag(tag) {
  return useMemo(() => getPostsByTag(tag), [tag]);
}

/**
 * Custom Hook: usePostSearch
 * Search posts by query string
 */
export function usePostSearch(query) {
  return useMemo(() => searchPosts(query), [query]);
}

/**
 * Custom Hook: usePostMetadata
 * Generates metadata object for a post for SEO purposes
 */
export function usePostMetadata(post) {
  return useMemo(() => {
    if (!post) return null;

    return {
      title: `${post.title} | PrimeDev Knowledge Hub`,
      description: post.meta.description,
      keywords: post.meta.keywords,
      author: post.author,
      published: post.date,
      image: post.coverImage,
      url: `https://primedev.co.il/blog/${post.id}`,
      readingTime: post.readingTime,
      tags: post.tags,
    };
  }, [post]);
}

/**
 * Custom Hook: useRelatedPosts
 * Get related posts based on shared tags
 */
export function useRelatedPosts(post, limit = 3) {
  return useMemo(() => {
    if (!post) return [];

    const related = new Set();

    // Add posts with matching tags
    post.tags.forEach(tag => {
      getPostsByTag(tag).forEach(p => {
        if (p.id !== post.id) {
          related.add(p);
        }
      });
    });

    return Array.from(related).slice(0, limit);
  }, [post, limit]);
}

/**
 * Custom Hook: usePostStats
 * Get statistics about posts
 */
export function usePostStats() {
  const { allPosts, allTags } = usePosts();

  return useMemo(() => {
    return {
      totalPosts: allPosts.length,
      totalTags: allTags.length,
      totalReadingTime: allPosts.reduce((sum, post) => sum + post.readingTime, 0),
      averageReadingTime: Math.round(
        allPosts.reduce((sum, post) => sum + post.readingTime, 0) / allPosts.length
      ),
      oldestPost: allPosts.length > 0 
        ? new Date(allPosts[allPosts.length - 1].date).getFullYear()
        : null,
      newestPost: allPosts.length > 0
        ? new Date(allPosts[0].date).getFullYear()
        : null,
      authors: [...new Set(allPosts.map(p => p.author))],
    };
  }, [allPosts, allTags]);
}
