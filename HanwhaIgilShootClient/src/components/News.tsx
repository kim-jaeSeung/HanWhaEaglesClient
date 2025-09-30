import { useState } from "react";
import GlassContainer from "./GlassContainer";
import news from "../constants/NewsObj";

function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 한 페이지당 뉴스 개수
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const maxVisiblePages = 5; // 최대 표시할 페이지 버튼 수

  // 현재 페이지에 표시할 뉴스 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  // 페이지 버튼 범위 계산
  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      // 전체 페이지가 5개 이하면 모두 표시
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisiblePages / 2); // 2
    let start = Math.max(currentPage - half, 1);
    const end = Math.min(start + maxVisiblePages - 1, totalPages);

    // 끝에서 5개가 안되면 start 조정
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const visiblePages = getVisiblePages();

  return (
    <GlassContainer title="뉴스">
      <div className="w-full flex-1 min-w-0">
        <div className="space-y-5 min-w-0">
          {currentNews.map((newsItems) => (
            <p key={newsItems.id} className="text-white truncate text-xl">
              {newsItems.title}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[80%] flex justify-center items-center mt-4">
        <div className="flex space-x-2">
          {/* 페이지 번호 버튼들만 */}
          {visiblePages.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`
                rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm transition-colors
                ${
                  currentPage === pageNumber
                    ? "bg-main-orange"
                    : "mini-glass-card hover:bg-main-orange/50"
                }
              `}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </GlassContainer>
  );
}

export default News;
