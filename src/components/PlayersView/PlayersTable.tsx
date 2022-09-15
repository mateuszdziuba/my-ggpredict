import logoWhite from '../../assets/logo-white.svg';
import { Player } from '../../types';

interface PlayersTablesProps {
  players?: Player[];
}

interface IResults {
  W: number;
  L: number;
  D: number;
}

const PlayersTable = ({ players }: PlayersTablesProps) => {
  const result = (player: Player): IResults => {
    return player?.team?.lastResults?.reduce(
      (a, o) => {
        return (a[o] = ++a[o] || 1), a;
      },
      { W: 0, L: 0, D: 0 }
    );
  };

  const yearNow = new Date().getFullYear();

  return (
    <div className="max-h-[618px] w-full overflow-auto">
      <table className="table table-auto w-full">
        <thead className="sticky top-0 z-10 text-gray-500 border-b bg-inherit border-white/10">
          <tr className="[&>*]:bg-[#181c2c] ">
            <th className="rounded-none"> </th>
            <th className="w-[400px]">Name</th>
            <th>Nick</th>
            <th>Age</th>
            <th>Country</th>
            <th className="w-[1px] text-green-500">Won</th>
            <th className="w-[1px]">Drawn</th>
            <th className="w-1[px] text-red-600">Lost</th>
          </tr>
        </thead>
        <tbody className="bg-transparent align-baseline">
          {players && players.length > 0 ? (
            players.map((player) => {
              const playerResults = result(player);
              return (
                <tr
                  key={player.id}
                  className="text-white [&>*]:bg-transparent [&>*]:border-white/10"
                >
                  <td className="relative z-0 w-5 p-0 after:absolute after:right-0 after:top-1/2 after:w-[1px] after:h-2/3 after:translate-y-[-50%] after:bg-white/10">
                    <img src={logoWhite} className="w-5 h-5" />
                  </td>
                  <td>{player.name}</td>
                  <td>{player.nick}</td>
                  <td>{yearNow - player.birthYear}</td>
                  <td>
                    <span
                      className={`z-0 fi fi-${player.country.toLowerCase()}`}
                    ></span>
                  </td>
                  <td className="w-[1px] text-center">
                    {playerResults?.W || 0}
                  </td>
                  <td className="w-[1px] text-center">
                    {playerResults?.D || 0}
                  </td>
                  <td className="w-[1px] text-center">
                    {playerResults?.L || 0}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={8} className="py-3 text-center bg-transparent">
                Nothing found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
