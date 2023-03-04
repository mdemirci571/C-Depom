import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Dugme from "../components/Button";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import axios from "axios";



const Home = () => {
  const BASE_URL = "https://63fa2bf8beec322c57eeb667.mockapi.io/tasks";
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  const showClose = () => {
    setShowAddTask(!showAddTask);
  };

  const getTasks = async () => {
    try {
      const { data } = await axios(BASE_URL);
      console.log(data);
      setTasks(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="home bg-warning text-center d-flex justify-content-center">
      <div className="p-5 border border-primary bg-light d-flex flex-column m-4 w-50">
        <Header />
        <Dugme visible={showAddTask} onShow={showClose} />
        {showAddTask && <AddTask />}
        <Tasks toDo={tasks} getTasks={getTasks} />
      </div>
    </div>
  );
};

export default Home;
