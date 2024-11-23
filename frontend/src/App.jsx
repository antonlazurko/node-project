import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({})

  const onFetch = () => {
    try {
      fetch('http://localhost:8000')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => {
          throw new Error(error)
        });
    } catch (error) {
      console.error(error);
    }
  }

  console.log(data);

  return (
    <div>
        <p>{data?.name}</p>
        <p>{data?.id}</p>
        <p>{data?.age}</p>
        <p>{data?.address?.street}</p>
        <p>{data?.address?.city}</p>
        <p>{data?.address?.zip}</p>

        <button onClick={onFetch}>Fetch</button>
    </div>
  )
}

export default App
