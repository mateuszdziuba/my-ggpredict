import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiData } from '../types';

const fetchPlayers = async (page: number, searchBy: string) => {
  try {
    const response = await axios.get(
      'https://api.ggpredict.dev:8080/restapi/players',
      {
        params: {
          page,
          searchBy,
          size: 10,
        },
      }
    );
    return response.data as ApiData;
  } catch (error) {
    console.error(error);
  }
};

interface UsePlayerProps {
  page: number;
  searchBy: string;
}

const usePlayers = ({ page, searchBy }: UsePlayerProps) => {
  //keepPreviousData - opcja dla api z paginacją
  const { data, isLoading } = useQuery(
    ['players', { page, searchBy }],
    () => fetchPlayers(page, searchBy),
    { keepPreviousData: true }
  );

  return {
    players: data?.content,
    totalPages: data?.totalPages,
    totalPlayers: data?.totalElements,
    isLoading,
    isFirst: data?.first,
    isLast: data?.last,
  };
};

export default usePlayers;
