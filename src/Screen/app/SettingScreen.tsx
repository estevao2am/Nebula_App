
import React from 'react';
import { Text } from '../../components/Text';
import { Screen } from '../Screen';
import { AppScreenProps } from '../../routes/navigationType';

 
export function SettingScreen({}:AppScreenProps<'SettingScreen'>){
    return (
        <Screen canGoBack title='Configurações'>
            <Text>Settings</Text>
        </Screen>
    );
}
