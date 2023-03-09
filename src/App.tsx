import { CardNumberProvider } from './contexts/CardNumberProvider';
import CardEnrollment from './pages/CardEnrollment';

function App() {
  return (
    <CardNumberProvider>  
      <CardEnrollment />
    </CardNumberProvider>
  );
}

export default App;
