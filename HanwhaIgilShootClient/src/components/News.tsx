import GlassContainer from "./GlassContainer";

function News() {
  return (
    <GlassContainer title="뉴스">
      <div className="w-full flex-1 min-w-0">
        <div className="space-y-3 min-w-0">
          <p className="text-white truncate">
            '황당 부상' 안우진, 닷새 만에 수술 진행'황당 부상' 안우진, 닷새 만에
            수술 진행'황당 부상' 안우진, 닷새 만에 수술 진행
          </p>
          <p className="text-white truncate">
            한화 이글스 김태균 감독 "올시즌 목표는 플레이오프 진출" 포부 밝혀
          </p>
          <p className="text-white truncate">
            류현진 시즌 첫 승 기록, 7이닝 무실점 완벽투구로 팀 승리 이끌어
          </p>
          <p className="text-white truncate">
            신인 선수 이도윤, 데뷔전에서 멀티히트 기록하며 주목받아
          </p>
          <p className="text-white truncate">
            한화 이글스 홈경기 관중 수 급증, 팬들의 뜨거운 성원 이어져
          </p>
          <p className="text-white truncate">
            올시즌 신규 유니폼 디자인 공개, 팬들 사이에서 호평 받아
          </p>
        </div>
      </div>
      <div className="w-[50%] flex justify-between items-center mt-4">
        <button className="bg-main-orange rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
          1
        </button>
        <button className="mini-glass-card rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
          2
        </button>
        <button className="mini-glass-card rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
          3
        </button>
        <button className="mini-glass-card rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
          4
        </button>
        <button className="mini-glass-card rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
          5
        </button>
      </div>
    </GlassContainer>
  );
}

export default News;
