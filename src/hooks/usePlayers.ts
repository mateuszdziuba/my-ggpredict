import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiData } from '../types';

const fetchPlayers = async (size: number, page: number, searchBy: string) => {
  try {
    const response = await axios.get(
      'https://api.ggpredict.dev:8080/restapi/players',
      {
        params: {
          size,
          page,
          ...(searchBy && { searchBy }),
        },
      }
    );
    return response.data as ApiData;
  } catch (error) {
    console.error(error);
  }
};

interface UsePlayerProps {
  size: number;
  page: number;
  searchBy: string;
}

const usePlayers = ({ size, page, searchBy }: UsePlayerProps) => {
  //keepPreviousData - opcja dla api z paginacją
  const { data, isLoading } = useQuery(
    ['players', { size, page, searchBy }],
    () => fetchPlayers(size, page, searchBy),
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
