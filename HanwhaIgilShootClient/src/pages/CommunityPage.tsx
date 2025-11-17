import { useState, useMemo } from "react";
import type { Category } from "../types/community";
import { CATEGORIES } from "../types/community";
import { SAMPLE_POSTS } from "../constants/communitySample";
import CategoryTabs from "../components/community/CategoryTabs";
import PostCard from "../components/community/PostCard";
import EmptyState from "../components/community/EmptyState";

function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("전체");

  const filteredPosts = useMemo(
    () =>
      activeCategory === "전체"
        ? SAMPLE_POSTS
        : SAMPLE_POSTS.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="px-4">
      <CategoryTabs
        categories={CATEGORIES}
        active={activeCategory}
        onSelect={setActiveCategory}
      />

      <section className="-mx-2 flex flex-wrap">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <EmptyState />
        )}
      </section>
    </div>
  );
}

export default CommunityPage;
