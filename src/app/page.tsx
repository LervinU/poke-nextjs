'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import useSWR from 'swr'

import PokemonSpriteRow from '@/components/PokemonSpriteRow';
import PokemonInformation from '@/components/PokemonInformation';
import PokemonImage from '@/components/PokemonImage';
import SearchBar from '@/components/SearchBar';
import LoadingSpinner from '@/components/LoaginSpinner';
import colours from '@/utils/typeColors';

export default function Home() {
  const [search, setSearch] = useState('torterra');
  const { data, error, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${search}`, fetcher)

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (error) return <div>failed to load</div>
  if (isLoading) return (
    <LoadingSpinner></LoadingSpinner>
  )
  
  const onSearch = (ref: any) => {
    const pokemonSeach = ref.current.value.toLowerCase();
    setSearch(pokemonSeach);
}

 const getColours = () => {
  const coloursArr = data.types.map((_type: any) => {
      const typeName = _type.type.name
      return colours[typeName as keyof typeof colours]
  })

  if(coloursArr.length === 1) {
    coloursArr.push("#F7F7F7");
  }
  return coloursArr;
}

  return (
    
    <main className="" style={{ background: `linear-gradient(110deg, ${getColours()[0]} 50%, ${getColours()[1]} 50%)`, width:"100vw", height:"100vh"}}>
      
      <div>
        <div className="container text-center">
          <Image src="/pokemonlogo.png" width={400} height={200} alt="Pokemon Logo"/>
        </div>
        <div className="container mt-5 ">
          <SearchBar onSearch={onSearch}></SearchBar>
          <div className="row">
            <div className="col">
              <PokemonImage url={data.sprites.other.dream_world.front_default}></PokemonImage>
            </div>
            <div className="col">
              <PokemonInformation data={data}></PokemonInformation>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
