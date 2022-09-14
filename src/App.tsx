import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PlayerViews from './components/PlayersView';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PlayerViews />
    </QueryClientProvider>
  );
};

export default App;
