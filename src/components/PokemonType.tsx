import React from 'react';
import Utils from '../utils/utils';


export default function PokemonType(props: any) {
    return(
        <>
            {props.types.map((_type: any) => <PokemonTypeDetail type={_type.type} key={_type.type.name}></PokemonTypeDetail> )}
        </>
    )
}

function PokemonTypeDetail(props: any) {
    return(
        <div className="col" >
            <div style={styles} className="d-inline-flex p-1">
                <h6 className="display-6">{Utils.capitalizeFirstLetter(props.type.name)}</h6>
            </div>
        </div>
    )
}


const styles = {
    backgroundColor: "#393E46",
    borderRadius: "10px",
    color: "#F7F7F7"
}