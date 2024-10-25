
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();

  return (
    <>      
      <h1 className='text-6xl  '>Hot And Cold Coffee: {coffees.length}</h1>
      {
        coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
        ></CoffeeCard>)
      }

    </>
  )
}

export default App
