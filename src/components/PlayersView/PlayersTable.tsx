import logoWhite from '../../assets/logo-white.svg';
import { Player } from '../../types';
import Loader from '../Common/Loader';

interface PlayersTablesProps {
  players?: Player[];
  isFetching: boolean;
}

interface IResults {
  W: number;
  L: number;
  D: number;
}

const PlayersTable = ({ players, isFetching }: PlayersTablesProps) => {
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
    <div className="max-h-[618px] w-full overflow-auto relative">
      <table className="table table-fixed w-full">
        <thead className="sticky top-0 z-10 text-gray-500 border-b bg-inherit border-white/10">
          <tr className="[&>*]:bg-[#181c2c] ">
            <th className="w-[2%] rounded-none"> </th>
            <th className="w-1/4">Name</th>
            <th className="w-1/6">Nick</th>
            <th className="w-1/6 text-center">Age</th>
            <th className="w-1/6 text-center">Country</th>
            <th className="w-[4%] text-green-500 text-center">Won</th>
            <th className="w-[4%] text-center">Drawn</th>
            <th className="w-[4%] text-red-600 text-center">Lost</th>
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
                  <td className="relative z-0 p-0 pl-1 after:absolute after:right-0 after:top-1/2 after:w-[1px] after:h-2/3 after:translate-y-[-50%] after:bg-white/10">
                    <img src={logoWhite} className="w-5 h-5" />
                  </td>
                  <td>{player.name}</td>
                  <td>{player.nick}</td>
                  <td className="text-center">{yearNow - player.birthYear}</td>
                  <td className="text-center">
                    <span
                      className={`z-0 fi fi-${player.country.toLowerCase()}`}
                    ></span>
                  </td>
                  <td className="text-center">{playerResults?.W || 0}</td>
                  <td className="text-center">{playerResults?.D || 0}</td>
                  <td className="text-center">{playerResults?.L || 0}</td>
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
      {isFetching && (
        <div className="sticky h-[618px] inset-0 grid content-center bg-white/5">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default PlayersTable;
