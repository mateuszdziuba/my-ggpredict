import logo from '../../assets/logo.svg';

interface PlayersHeaderProps {
  handleChange: (query: string) => void;
}

const PlayersHeader = ({ handleChange }: PlayersHeaderProps) => (
  <>
    <div className="w-full flex flex-col items-center my-10 gap-5">
      <img src={logo} alt="" className="w-1/6 h-auto" />
      <div className="relative w-full md:w-1/3">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          placeholder="Search for teams, players, matches..."
          className="bg-white/10 p-1 rounded-md w-full pl-10 text-white/50"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
    </div>
    <div className="uppercase text-white text-left p-4 bg-gradient-to-b from-white/5 to-white/10">
      Players
    </div>
  </>
);

export default PlayersHeader;
