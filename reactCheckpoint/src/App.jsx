import './App.css'
import Description from './components/Description'
import Image from './components/Image'
import Name from './components/Name'
import Price from './components/Price'

function App() {

  return (
    <>
    <div className='border w-1/3 bg-red-500'>
      <Name/>
      <Price/>
      <Image/>
      <Description/>
    </div>
      
    </>
  )
}

export default App
