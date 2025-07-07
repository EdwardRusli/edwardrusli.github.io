import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'



function App() {

  const [count, setCount] = useState(1)

function increaseCount(amount:number): void{
  setCount(count+amount)
}

    return (
      <>
          <div className='flex flex-col items-center w-1/3 bg-amber-950 mx-auto mt-5'>
            <p className='text-white text-center'>hello world</p>
            <button onClick={()=>increaseCount(count)} className='bg-amber-300 w-32'>abc</button>
            <p className='text-white'>Count = {count}</p>
            <img className='w-full p-4' src={reactLogo} alt="reactlogo" />
            <img className='w-full p-4' src={viteLogo} alt="reactlogo" />
          </div>
      </>    
  )
}

export default App
