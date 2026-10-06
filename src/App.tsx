import './App.css'
import { ANIMALS } from "./data/Animals.tsx";

function App() {
  const animals = () => ANIMALS.map((item) => <div>
      <p>{item.name}</p>
      <p>{item.continent}</p>
      <p>{item.averageSpeed}</p>
      <p>{item.weight}</p>
    </div>)

  return (
    <>
      <p>animals</p>
      <div id="animals">
        {animals()}
      </div>
    </>
  )
}

export default App
