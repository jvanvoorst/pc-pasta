import { View } from 'react-native';

export default function ThemedView({children}) {
 return (
    <View className="p-6 my-2 bg-white rounded-xl shadow-md">
        {children}
    </View>
 );
}