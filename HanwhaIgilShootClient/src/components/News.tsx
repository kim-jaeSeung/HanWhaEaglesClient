import { useState } from "react";
import GlassContainer from "./GlassContainer";
import news from "../constants/NewsObj";
function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 한 페이지당 뉴스 개수
  const totalPages = Math.ceil(news.length / itemsPerPage);

  // 현재 페이지에 표시할 뉴스 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <GlassContainer title="뉴스">
      <div className="w-full flex-1 min-w-0">
        <div className="space-y-3 min-w-0">
          {currentNews.map((newsItems) => (
            <p key={newsItems.id} className="text-white truncate">
              {newsItems.title}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[50%] flex justify-between items-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
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
          );
        })}
      </div>
    </GlassContainer>
  );
}

export default News;
