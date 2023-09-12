import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import Main from './components/Main'
import { generateId, getHero } from './components/api'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const id = generateId();
      const newData = await getHero(id);
      setData(newData);
    } catch (error) {
      console.error("Error in fetchData:", error);
    }
  }

  return (
    <div className='app'>
    <Header fetchData={fetchData}/>
    {data ? <Main data={data}/> : <h1>Loading...</h1>}
    </div>
  )
}

export default App
