import { useState } from "react";
import { Center, Heading, Flex, Spinner, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import deals from "./service/deals";
import GameDealsContainer from "./components/GameDeals/GameDealsContainer";
import GameFilter from "./components/GameFilter/GameFilter";

function App() {
  const [gameNameFilter, setGameNameFilter] = useState(String);

  const { isLoading, data } = useQuery({
    queryKey: ["gameDeals"],
    queryFn: () => deals.getAll(),
  });

  console.log(data);

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Stack spacing={8}>
        <Center>
          <Heading as="h1" size="4xl">
            Current Deals
          </Heading>
        </Center>
        <GameFilter gameName={gameNameFilter} setGameName={setGameNameFilter} />
        {isLoading ? (
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        ) : (
          <GameDealsContainer
            dealsArray={
              gameNameFilter
                ? data?.filter((game) =>
                    game.title.toLowerCase().match(gameNameFilter.toLowerCase())
                  )
                : data
            }
          />
        )}
      </Stack>
    </Flex>
  );
}

export default App;
