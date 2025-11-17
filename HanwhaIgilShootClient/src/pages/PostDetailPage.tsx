import { useParams, useNavigate } from "react-router-dom";
import { SAMPLE_POSTS } from "../constants/communitySample";
import EyeIcon from "../components/community/EyeIcon";
import MessageIcon from "../components/community/MessageIcon";
import HeartIcon from "../components/community/HeartIcon";
import Input from "../components/Input";

function timeAgo(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  const m = Math.floor(ms / 60000);
  if (m < 60) return `${m}분전`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}시간전`;
  const d = Math.floor(h / 24);
  return `${d}일전`;
}

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = SAMPLE_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            게시글을 찾을 수 없습니다
          </h1>
          <button
            onClick={() => navigate("/community")}
            className="px-4 py-2 bg-main-orange text-white rounded-lg hover:bg-main-orange/90 transition-colors"
          >
            커뮤니티로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 뒤로가기 버튼 */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/community")}
          className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
          >
            <path strokeWidth="2" d="m15 18-6-6 6-6" />
          </svg>
          목록
        </button>
      </div>

      {/* 메인 콘텐츠 */}
      <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {/* 헤더 */}
        <header className="px-6 py-6 border-b border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full mb-3">
                {post.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
            </div>
            <button
              type="button"
              aria-label="즐겨찾기"
              className="ml-4 text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d="m12 2 2.9 6.2 6.8.9-5 4.8 1.2 6.9L12 17l-5.9 3.8 1.2-6.9-5-4.8 6.8-.9L12 2Z"
                />
              </svg>
            </button>
          </div>

          {/* 작성자 정보 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {post.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {post.author}
                </p>
                <p className="text-xs text-gray-500">
                  {timeAgo(post.createdAt)}
                </p>
              </div>
            </div>

            {/* 통계 */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
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
          </div>
        </header>

        {/* 본문 */}
        <div className="px-6 py-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
              {post.desc}
              {"\n\n"}
              이것은 샘플 콘텐츠입니다. 실제 프로젝트에서는 post 모델에 content
              필드를 추가하여 더 풍부한 내용을 표시할 수 있습니다.
              {"\n\n"}
              마크다운이나 리치 텍스트 에디터를 통해 작성된 내용이 여기에
              표시됩니다.
            </p>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <HeartIcon />
              좋아요 {post.likes}
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              공유하기
            </button>
          </div>
        </div>
      </article>

      {/* 댓글 섹션 */}
      <div className="mt-8">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              댓글 {post.comments}개
            </h2>
          </div>

          {/* 댓글 작성 */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <Input
                  type="text"
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-orange focus:border-transparent"
                  placeholder="댓글을 작성해보세요."
                />
                <div className="mt-2 flex justify-end">
                  <button className="px-4 py-1.5 text-sm font-medium bg-main-orange text-white rounded-lg hover:bg-main-orange/90 transition-colors">
                    댓글 작성
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 댓글 목록 */}
          <div className="px-6 py-4">
            <div className="space-y-4">
              {Array.from({ length: post.comments }, (_, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        사용자{i + 1}
                      </span>
                      <span className="text-xs text-gray-500">
                        {Math.floor(Math.random() * 60) + 1}분전
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">
                      이것은 샘플 댓글입니다. 실제로는 데이터베이스에서 댓글
                      데이터를 가져와서 표시합니다.
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <button className="text-xs text-gray-500 hover:text-gray-700">
                        답글
                      </button>
                      <button className="text-xs text-gray-500 hover:text-gray-700">
                        좋아요
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetailPage;
