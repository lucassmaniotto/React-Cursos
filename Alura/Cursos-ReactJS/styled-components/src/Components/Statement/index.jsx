import React from 'react'
import { Box, Button } from '../UI'
import { statementList } from '../../info'
import Items from '../Items';

export default function Statement() {
  return (
    <Box>
        <h2>Extrato</h2>
        {statementList.updates.map(({id, type, from, value, date}) =>{
            return (
                <Items 
                    key={id} 
                    type={type} 
                    from={from} 
                    value={value} 
                    date={date} 
                /> 
            );
        })}
        <Button>Ver mais</Button>
    </Box>
  )
}
