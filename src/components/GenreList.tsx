import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/Image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre : Genre | null ;
}

const GenreList = ({ selectedGenre, onSelectGenre} : Props) => {
  const { Data ,isLoading , error  } = useGenres();

  if (error) return null;

  if (isLoading) return<Spinner/>

  return (
    <List>
      {Data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          {" "}
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl (genre.image_background) } />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}  onClick={() => onSelectGenre(genre) } fontSize='lg' variant='link' >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
