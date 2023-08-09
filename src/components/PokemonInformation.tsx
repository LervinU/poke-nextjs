import React from 'react';
import Utils from '../utils/utils';
import PokemonType from './PokemonType';
import PokemonAbilities from './PokemonAbilities';
import PokemonStat from './PokemonStat';

export default function PokemonInformation(props: any) {
    return (
        <div className="container" style={{marginTop: "5rem"}}>

            <div className="row mt-5">
                <div className="col">
                    <h2 className="display-2">{Utils.capitalizeFirstLetter(props.data.name)}</h2>
                </div>
            </div>

            <div className="row mt-1">
                <PokemonType types={props.data.types}></PokemonType>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h4 className="display-4">Height</h4>
                </div>
                <div className="col">
                    <h4 className="display-4">Weight</h4>
                </div>
            </div>

            <div className="row mt-1">
                <div className="col">
                    <h6 className="display-6">{props.data.height} m</h6>
                </div>
                <div className="col">
                    <h6 className="display-6">{props.data.weight} kg</h6>
                </div>
            </div>

            
            <div className="row mt-4">
                <div className="col">
                    <h4 className="display-4">Abilities</h4>
                </div>
            </div>
            <div className="row mt-1">
                <PokemonAbilities abilities={props.data.abilities}></PokemonAbilities>
            </div>


            <div className="row mt-4">
                <div className="col">
                    <h4 className="display-4">Stats</h4>
                </div>
            </div>

            <div className="row mt-1">

                {props.data.stats.slice(0, 3).map((_stat: any) => {
                    return (
                        <PokemonStat stat={_stat} key={`${_stat.base_stat} ${_stat.stat.name}`}></PokemonStat>
                    )
                })}

            <div className="row mt-1">
                
                {props.data.stats.slice(3, 6).map((_stat: any) => {
                    return (
                        <PokemonStat stat={_stat} key={`${_stat.base_stat} ${_stat.stat.name}`}></PokemonStat>
                    )
                    })}
            </div>
            </div>
        </div>
    )
}