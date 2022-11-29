import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start from '../pages/Start';

const Stack = createNativeStackNavigator();

export default function AllPages() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOption= {{
                    headerShown:false,
                }}
            >

                <Stack.Screen name='Start' component={Start} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}