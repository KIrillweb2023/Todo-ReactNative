import {  View, Text, FlatList, Image } from "react-native"
import axios from 'axios';
import ListScroll from "../../components/ListScroll/ListScroll";
import TaskItem from "../../components/TaskItem/TaskItem";
import ButtonAddTask from "../../components/ButtonAddTask/ButtonAddTask";
import { useEffect, useState } from "react";


import ModalAddTask from "../../components/ModalAddTask/ModalAddTask";
import NoneTodos from "../../components/NoneTodos/NoneTodos";


import { useTodoService } from "../../service/TodoService";
const { getTodos } = useTodoService()

export default function HomeScreen({navigation}) {
    const [todos, setTodos] = useState([]);
    const [isModalSee, setIsModalSee] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    const isModalToggle = () => {
        setIsModalSee(!isModalSee)
    }

    const fetchTodos = async () => {
        try {
            getTodos().then(res => setTodos(res.data))
        } catch(err) {
            setIsLoading(false)
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchTodos();
    }, [])


    const contentTask = todos ? 
    <FlatList 
        className="px-2 mt-6 flex flex-col" 
        data={todos} 
        renderItem={({item}) => <TaskItem textTask={item.textTask}/>}
        keyExtractor={item => item.id}
    /> 
    : null
    return (
      <View className="h-screen w-full relative">
            <ListScroll/>
        
            <ModalAddTask isModalSee={isModalSee} isModalToggle={() => isModalToggle()}/>
            <Text className="px-2 mt-10 text-3xl font-medium">Мои задачи</Text>

            { contentTask }

           
            <ButtonAddTask isClick={() => isModalToggle()}/>

          {/* <Button title='Settings' onPress={() => navigation.navigate('Settings')}/> */}
      </View>
    )
}