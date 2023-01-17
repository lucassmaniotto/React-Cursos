import React from 'react'
import styled from 'styled-components'

import Item from '../Item'
import IconFilter from '../IconFilter.js'

const Items = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px;
    padding: 10px;
    font-size: 12px;
    display: grid;
    grid-template-columns: 35px 1fr 50px;
    grid-gap: 10px;
    align-items: center;

    @media (max-width: 336px) {
        grid-template-columns: 35px 1fr;
        grid-template-rows: 1fr 1fr;
    }
`

export default (props) => {
    return (
        <Items>
            {IconFilter(props.type)}
            <Item {...props} />
            <span>{props.date}</span>
        </Items>
    );
}
