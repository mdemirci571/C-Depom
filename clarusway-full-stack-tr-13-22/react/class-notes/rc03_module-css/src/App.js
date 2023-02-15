import Card from "./components/card/Card"
import data from "./utils/data"

function App() {
  console.log(data)
  return (
    <>
      {data.map((item) => (
        <Card />
      ))}
    </>
  )
}

export default App
