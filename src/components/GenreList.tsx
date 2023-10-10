import useGenres, { Genre } from '../hooks/useGenre'


const GenreList = () => {

    const { Data} =useGenres();
  return (
    <ul>
        {Data.map(genre => <li key={genre.id }> {genre.name}</li>)}
    </ul>
  )
}

export default GenreList
