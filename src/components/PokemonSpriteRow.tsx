import React from 'react'
import PokemonSprite from './PokemonSprite'

export default function PokemonSpriteRow(props: any) {
    const spritesArr = [
        props.sprite.back_default,
        props.sprite.front_default,
        props.sprite.back_shiny,
        props.sprite.front_shiny
    ]
    return (
        <div className="container text-center mt-5">
            <div className="row">
           {spritesArr.map(sprite => {
            return (
                <div className="col">
                <PokemonSprite sprite={sprite}></PokemonSprite>
                </div>
            )
            
           })}
           </div>
        </div>

    )
}
