import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/Image-url";

const GenreList = () => {
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
            <Text fontSize='lg' >{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
