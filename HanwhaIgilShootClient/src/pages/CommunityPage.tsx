import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { Category } from "../types/community";
import { CATEGORIES } from "../types/community";
import { SAMPLE_POSTS } from "../constants/communitySample";
import CategoryTabs from "../components/community/CategoryTabs";
import PostCard from "../components/community/PostCard";
import EmptyState from "../components/community/EmptyState";

function CommunityPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>("전체");

  const filteredPosts = useMemo(
    () =>
      activeCategory === "전체"
        ? SAMPLE_POSTS
        : SAMPLE_POSTS.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="px-4 w-[70%] m-auto">
      {/* 헤더 with 글쓰기 버튼 */}
      <div className="flex items-center justify-between mb-4">
        <CategoryTabs
          categories={CATEGORIES}
          active={activeCategory}
          onSelect={setActiveCategory}
        />
        <button
          onClick={() => navigate("/community/write")}
          className="flex-shrink-0 ml-4 px-4 py-2 bg-main-orange text-white rounded-lg hover:bg-main-orange/90 transition-colors font-medium text-sm"
        >
          글쓰기
        </button>
      </div>

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
