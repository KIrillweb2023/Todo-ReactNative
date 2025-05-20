import { ScrollView, View, Text } from "react-native"

export default function ListScroll() {
    return (
       <View className="h-12 mt-4">
         <ScrollView alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 5 }} horizontal={true} className="flex flex-row h-max">
            <View className="bg-orange-200 mr-2 h-12 px-6 rounded-3xl flex flex-row items-center">
                <Text className="font-medium text-orange-600">Второстепенные</Text>
            </View>
            <View className="bg-red-200 mr-2 h-12 px-6 rounded-3xl flex flex-row items-center">
                <Text className="font-medium text-red-600">Важные</Text>
            </View>
            <View className="bg-lime-200 mr-2 h-12 px-6 rounded-3xl flex flex-row items-center">
                <Text className="font-medium text-lime-600">Работа</Text>
            </View>
            <View className="bg-blue-200 mr-2 h-12 px-6 rounded-3xl flex flex-row items-center">
                <Text className="font-medium text-blue-600">Обычные</Text>
            </View>
            <View className="mr-2 h-12 px-6 rounded-3xl flex flex-row items-center border">
                <Text className="font-medium text-neutral-700">Добавить группу</Text>
            </View>
           
        </ScrollView>
       </View>
    )
}