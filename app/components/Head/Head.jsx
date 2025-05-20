import { Text, Image, View, TouchableOpacity } from "react-native"

export default function Head() {
    return (
        <View className="pt-4 pb-4  w-full flex flex-row items-center justify-between">
            <View className="flex gap-x-2 flex-row items-center">
                <Image className="w-10 h-10 rounded-full" source={require("../../../assets/images/bg-acc.png")}/>
                <Text className="text-xl font-medium">Kirill</Text>
            </View>

            <TouchableOpacity className="flex flex-col gap-y-1.5">
                <View className="w-8 h-1 bg-neutral-600 rounded"></View>
                <View className="w-8 h-1 bg-neutral-600 rounded"></View>
                <View className="w-8 h-1 bg-neutral-600 rounded"></View>
            </TouchableOpacity>
        </View>
    )
}