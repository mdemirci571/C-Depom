import React, { useState } from 'react'
import { HomeContainer, HomeImg, MainContainer } from './Home.style'
import Header from '../../components/header/Header'
import homeImg from "../../assets/books.jpg";
import axios from 'axios';

const Home = () => {
  // const printType = ["all","books","magazines"]
  const [query,setQuery] = useState("")
  const [selectType,setSelectType] = useState("all")
  const [myData,setMyData] = useState([])
  const APP_KEY = process.env.REACT_APP_apiKey;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;

  const getData = async () => {

    try {
        const {data} = await axios.get(url)
        console.log(data)
    } catch (error) {
      
    }

  }


  return (
    <HomeContainer>
      <Header setQuery={setQuery} setSelectType={setSelectType} getData={getData} />

      <HomeImg>
        <img src={homeImg} alt="home image" />
      </HomeImg>

      <MainContainer>



      </MainContainer>

    </HomeContainer>
  )
}

export default Home