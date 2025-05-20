import { Image, View, Text } from "react-native"
export default function NoneTodos() {
    return (
        <View>
            <Image source={require("../../../assets/images/noneTodos.png")}/>
            <Text>У вас нет активных задач</Text>
        </View>
    )
}