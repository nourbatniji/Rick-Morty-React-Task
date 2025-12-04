import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function CharacterDetailsPage() {
    const { id } = useParams()

    const {data: character, isLoading} = useQuery({
        queryKey: ['character', id],
        queryFn: async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json()
            return data;
        }
    })
    
    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} width={200} />

            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>

            <h2>Episodes</h2>
            <ul>
                {character.episode.map((episode: string) => (
                    <li key={episode}>{episode}</li>
                ))}
            </ul>
        </div>
    )
}

