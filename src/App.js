import './App.css';
import Navigation from './component/Navigation/Navigation';
import PageLayout from './Pages/PageLayout';

function App() {
  return (
    <div className='pb-3 mx-0' style={{ backgroundColor: '#F8E8E8' }}>
      <Navigation />
      <PageLayout />
    </div>
  );
}

export default App;
