import { View, Modal, Text, TextInput, TouchableOpacity } from "react-native"
import CloseImage from "../CloseImageSvg/CloseImage";


export default function ModalAddTask({ isModalSee, isModalToggle }) {
    return (
        <Modal animationType="slide" visible={isModalSee} transparent={true}>
            <View className=" bg-black/80 h-screen w-full flex flex-col relative  items-center">
                <TouchableOpacity onPress={isModalToggle} className="absolute z-10 bg-white rounded right-4 top-4">
                    <CloseImage/>
                </TouchableOpacity>
                <Text className="text-white font-bold w-[95%] text-2xl mt-[150px]">Создание задачи</Text>
                <View className="flex justify-center  bg-white w-[95%] h-auto mt-4 px-6 py-2 rounded-xl">
                    <TextInput placeholder="Добавить задачу..."/>
                </View>
                <View className="flex justify-center  bg-white w-[95%] h-auto  mt-2 px-6 py-2 rounded-xl">
                    <TextInput multiline={true} placeholder="Описание вашей задачи..."/>
                </View>
                <TouchableOpacity className="flex  bg-blue-400 w-[95%] h-[55px] mt-[30px] px-6 py-2 rounded-xl justify-center items-center">
                    <Text className="text-white font-bold">Создать</Text>
                </TouchableOpacity>
            </View> 
        </Modal>  
    )
}