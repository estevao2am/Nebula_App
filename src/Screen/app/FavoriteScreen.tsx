import React from 'react'
import { Screen } from '../Screen'
import { Text } from '../../components/Text'
import { Box } from '../../components/Box/Box'

export  function FavoriteScreen() {
  return (
     <Screen>
            <Box flexDirection="row" 
            justifyContent="space-between"
            alignItems="center">

        <Text preset="headingMedium"> Favorite Screen</Text>
         

            </Box>
        </Screen>
  )
}
