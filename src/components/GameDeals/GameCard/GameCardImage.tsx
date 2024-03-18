import { Stack, Stat, StatNumber, Img } from "@chakra-ui/react";
import { GameDeals } from "../GameDeals";

function GameCardImage({ gameInfo }: { gameInfo: GameDeals }) {
  return (
    <Stack h="full">
      <Img
        borderRadius="lg"
        objectFit="fill"
        maxW={"150px"}
        src={gameInfo.thumb}
        alt={gameInfo.title + " thumbnail"}
        loading="lazy"
      />
      <Stat
        position={"absolute"}
        bgColor={"green"}
        borderRadius={"0 5px 0 0"}
        padding={1}
        right={0}
      >
        <StatNumber>
          {-Math.round(Number.parseFloat(gameInfo.savings))}%
        </StatNumber>
      </Stat>
    </Stack>
  );
}

export default GameCardImage;
