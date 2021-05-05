import React from 'react'

const Card = ({robot}) => {
    return (
        <div className = 'tc pa3 ma2 grow shadow-5 dib bw2 br3 bg-light-blue'>
            <img alt = 'poza-robot' src = {`https://robohash.org/${robot.username}?200x200`}></img>
            <div>
                <h1>{robot.name}</h1>
                <h2>{robot.email}</h2>
            </div>
        </div>
    )
}

export default Card
