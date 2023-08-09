import React from 'react';
import Utils from '../utils/utils';


const abreviateWord = (word: string) : string => {
    if(word == "special-attack") {
        return "SPA";
    }
    else if(word == "special-defense") {
        return "SPD";
    }
    else {
        return Utils.capitalizeFirstLetter(word);
    }
}

export default function PokemonStat(props: any) {
    return(
        <>
        <div className="col">
            <div>
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center">
                        <h6 className="display-6">{props.stat.base_stat}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center">
                            <h6 className="h2">{abreviateWord(props.stat.stat.name)}</h6>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
