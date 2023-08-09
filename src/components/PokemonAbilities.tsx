import React from 'react';
import Utils from '../utils/utils';


export default function PokemonAbilities(props: any) {
    return(
        <>
            {props.abilities.map((_ability: any) => <PokemonAbilitiesDetail ability={_ability.ability} key={_ability.ability.name}></PokemonAbilitiesDetail> )}
        </>
    )
}

function PokemonAbilitiesDetail(props: any) {

    return(
        <div className="col" >
            <div className="d-inline-flex p-1" style={styles}>
                <h6 className="display-6">{Utils.capitalizeFirstLetter(props.ability.name)}</h6>
            </div>
            
        </div>
    )
}

const styles = {
    backgroundColor: "#393E46",
    borderRadius: "10px",
    color: "#F7F7F7"
}