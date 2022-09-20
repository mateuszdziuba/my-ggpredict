import { useState } from 'react';
import usePlayers from '../../hooks/usePlayers';
import PlayersTable from './PlayersTable';
import PlayersFooter from './PlayersFooter';
import debounce from 'lodash.debounce';
import Loader from '../Common/Loader';
import PlayersHeader from './PlayersHeader';

const PlayersView = () => {
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [searchBy, setSearchBy] = useState<string>('');
  const {
    players,
    totalPages,
    totalPlayers,
    isLoading,
    isFetching,
    isFirst,
    isLast,
  } = usePlayers({
    size,
    page,
    searchBy,
  });

  const handleChange = debounce((query: string) => {
    if (!query) return setSearchBy('');
    setPage(0);
    setSearchBy(query);
  }, 500);

  return (
    <div className="container mx-auto p-10">
      <PlayersHeader handleChange={handleChange} />
      {isLoading ? (
        <Loader />
      ) : (
        <PlayersTable players={players} isFetching={isFetching} />
      )}
      <PlayersFooter
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
        pages={totalPages}
        players={totalPlayers}
        isFirst={isFirst}
        isLast={isLast}
      />
    </div>
  );
};

export default PlayersView;
