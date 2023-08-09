import React from 'react'

export default function PokemonSprite(props: any) {
    return (

        <div className="">
            <img className="img-fluid" style={{width: '150px', height: '150px'}} src={props.sprite} alt="Pokemon Sprite"/>
        </div>

    )
}
