import axios from "axios"
import { useEffect, useState } from "react"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

  const getTutorials = async () => {
    const { data } = await axios(BASE_URL)
    setTutorials(data)
  }
  console.log(tutorials)
  //? componentDidMount
  useEffect(() => {
    getTutorials()
  }, [])

  return (
    <>
      <AddTutorial />
      <TutorialList tutorials={tutorials} />
    </>
  )
}

export default Home
