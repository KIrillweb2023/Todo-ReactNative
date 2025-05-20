import { View, Text } from "react-native";

export default function TaskItem({textTask}) {
    return (
        <View className="w-full py-4 border-b border-neutral-300 flex flex-row items-center px-1.5">
            <View className="w-6 h-6 rounded-full border bg-none border-neutral-500"></View>
            <Text className="pl-3">{textTask}</Text>
        </View>
    )
}