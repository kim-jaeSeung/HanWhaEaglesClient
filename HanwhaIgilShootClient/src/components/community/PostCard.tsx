import type { Post } from "../../types/community";
import EyeIcon from "./EyeIcon";
import MessageIcon from "./MessageIcon";
import HeartIcon from "./HeartIcon";

interface PostCardProps {
  post: Post;
}

function StarButton() {
  return (
    <button
      type="button"
      aria-label="즐겨찾기"
      className="ml-auto text-gray-400 hover:text-yellow-500 transition-colors"
      onClick={(e) => e.preventDefault()}
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeWidth="2"
          d="m12 2 2.9 6.2 6.8.9-5 4.8 1.2 6.9L12 17l-5.9 3.8 1.2-6.9-5-4.8 6.8-.9L12 2Z"
        />
      </svg>
    </button>
  );
}

function timeAgo(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  const m = Math.floor(ms / 60000);
  if (m < 60) return `${m}분전`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}시간전`;
  const d = Math.floor(h / 24);
  return `${d}일전`;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="w-full md:w-1/2 lg:w-1/3 px-2 pb-4">
      <div className="h-full rounded-xl border border-gray-200 bg-white transition-shadow shadow-sm hover:shadow-md">
        <div className="p-5">
          <header className="flex items-start gap-2">
            <h3 className="text-[17px] font-semibold text-gray-900">
              {post.title}
            </h3>
            <StarButton />
          </header>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.desc}</p>
          <p className="mt-3 text-xs text-gray-400">{post.author}</p>

          <footer className="mt-4 flex items-center justify-between text-[13px] text-gray-500">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1">
                <EyeIcon /> {post.views}
              </span>
              <span className="inline-flex items-center gap-1">
                <MessageIcon /> {post.comments}
              </span>
              <span className="inline-flex items-center gap-1">
                <HeartIcon /> {post.likes}
              </span>
            </div>
            <span>{timeAgo(post.createdAt)}</span>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
