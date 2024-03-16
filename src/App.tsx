import { useState, useEffect } from "react";
import {
  Center,
  Heading,
  Flex,
  Spinner,
  Stack,
  Button,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  useQuery,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";
import deals from "./service/deals";
import GameDealsContainer from "./components/GameDeals/GameDealsContainer";
import GameFilter from "./components/GameFilter/GameFilter";

function App() {
  const queryClient = useQueryClient();
  const [gameNameFilter, setGameNameFilter] = useState(String);
  const [page, setPage] = useState(0);

  const { isLoading, data, isPlaceholderData } = useQuery({
    queryKey: ["gameDeals", page],
    queryFn: () => deals.getAll(page),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  useEffect(() => {
    if (!isPlaceholderData && data && data[1]) {
      queryClient.prefetchQuery({
        queryKey: ["gameDeals", page + 1],
        queryFn: () => deals.getAll(page + 1),
      });
    }
  }, [data, isPlaceholderData, page, queryClient]);

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
        <HStack justify={"center"}>
          <ButtonGroup gap="4">
            <Button
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 0}
            >
              Previous Page
            </Button>
            <Button isDisabled={true}>{page}</Button>
            <Button
              onClick={() => {
                setPage((old) => (data && data[1] ? old + 1 : old));
              }}
              isDisabled={isPlaceholderData || !(data && data[1])}
            >
              Next Page
            </Button>
          </ButtonGroup>
        </HStack>
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
                ? data &&
                  data[0]?.filter((game) =>
                    game.title.toLowerCase().match(gameNameFilter.toLowerCase())
                  )
                : data && data[0]
            }
          />
        )}
      </Stack>
    </Flex>
  );
}

export default App;
