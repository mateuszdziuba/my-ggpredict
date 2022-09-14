import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PlayersView from './components/PlayersView';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PlayersView />
    </QueryClientProvider>
  );
};

export default App;
