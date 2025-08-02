import React from 'react'
import { Screen } from '../Screen'
import { Text } from '../../components/Text'
import { Box } from '../../components/Box/Box'
import { Button } from '../../components/Button/Button'

export  function HomeScreen() {
  return (
     <Screen>
            <Box flexDirection="row" 
            justifyContent="space-between"
            alignItems="center">
              

        <Text preset="headingMedium"> Home Screen</Text>

            </Box>
                      <Button  title='Concluir' />

        </Screen>
  )
}
