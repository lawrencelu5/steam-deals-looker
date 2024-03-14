import { Stat, StatNumber, Heading, HStack } from "@chakra-ui/react";
import { GameDeals } from "../GameDeals";

function GameCardBody({ gameInfo }: { gameInfo: Partial<GameDeals> }) {
  return (
    <>
      <Heading size="md" noOfLines={1}>
        {gameInfo.title}
      </Heading>
      <Stat>
        <HStack>
          <StatNumber as="del" color={"darkgray"}>
            USD ${gameInfo.normalPrice}
          </StatNumber>
          <StatNumber>USD ${gameInfo.salePrice}</StatNumber>
        </HStack>
      </Stat>
    </>
  );
}

export default GameCardBody;
