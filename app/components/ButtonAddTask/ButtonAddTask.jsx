import { Image, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

export default function ButtonAddTask({isClick}) {
    return (
        <TouchableOpacity onPress={isClick} className="w-14 h-14 rounded-full bg-blue-500 absolute right-4 z-10 bottom-[120px] flex flex-row items-center justify-center">
            <Image className="w-8 h-8" source={require("../../../assets/images/add.png")}/>
        </TouchableOpacity>
    )
}