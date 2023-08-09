import React from 'react'

export default function PokemonImage(props: any) {
    return (

        <div className="container mt-5 d-flex align-items-center justify-content-center">
            <img className="img-fluid "  src={props.url} alt="Pokemon Sprite"/>
        </div>

    )
}
