import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { Link } from "react-router-dom"
import type { Character } from '../types/types'



export default function CharactersPage() {
    const [search, setSearch] = useState('')

    const { data, isLoading } = useQuery({
        queryKey: ['characters'],
        queryFn: async () => {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json()
            return data.results;
        },
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    const characters: Character[] = data || [];

    const filteredCharacters = characters.filter((char)=>
        char.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <h1>Characters Page</h1>
            <input type="text"
            style={{ padding:'10px', margin:'10px'}}
            placeholder="Search by name"
            value={search}
            onChange={(e)=> setSearch(e.target.value) }
            />
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap' }}>
                {filteredCharacters.map((char)=>(
                    <div key={char.id}  style={{ border: '2px solid black', marginBottom: '10px', width:'19%' }}>
                        <img src={char.image} alt={char.name} width='full' />
                        <br />
                        <Link to={`/character/${char.id}`}>{char.name}</Link>
                        <p>Status: {char.status}</p>
                        <p>Species: {char.species}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


