import { View } from 'react-native';

export default function Tile({children}) {
 return (
    <View className="p-6 bg-white rounded-xl shadow-md">
        {children}
    </View>
 );
}