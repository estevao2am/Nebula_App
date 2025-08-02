import React from 'react'
import { Screen } from '../Screen'
import { Text } from '../../components/Text'
import { Box } from '../../components/Box/Box'

export  function LoginScreen() {
  return (
     <Screen>
            <Box flexDirection="row" 
            justifyContent="space-between"
            alignItems="center">

        <Text preset="headingMedium"> Olá</Text>
         

            </Box>
        </Screen>
  )
}
