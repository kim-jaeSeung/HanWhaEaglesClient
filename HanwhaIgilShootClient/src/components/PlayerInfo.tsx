import players from "../constants/player";

interface players {
  id: number;
  number: number;
  name: string;
}
function PlayerInfo() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-start items-center gap-4 min-w-max px-4 py-4">
          {players.map((player: players, index: number) => {
            return (
              <div
                key={player.id}
                className={`
                  flex-shrink-0 
                  w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28
                  rounded-full 
                  flex flex-col justify-center items-center 
                  p-2 sm:p-3
                  shadow-md 
                  ${index % 2 === 0 ? "bg-main-orange" : "bg-main-gray"}
                `}
              >
                <span
                  className={`
                    text-sm sm:text-base md:text-lg font-bold
                    ${index % 2 === 0 ? "text-white" : "text-black"}
                  `}
                >
                  {player.number}
                </span>
                <p
                  className={`
                    text-xs sm:text-sm text-center font-medium
                    ${index % 2 === 0 ? "text-white" : "text-black"}
                  `}
                >
                  {player.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayerInfo;
