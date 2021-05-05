import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    const robo = robots.map((user, i) => {
        return <Card key = {i} robot = {user} />
    });
    return (
        <div>
            {robo}
        </div>
    )
}

export default CardList
