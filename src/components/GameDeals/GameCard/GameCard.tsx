import { Card, CardBody } from "@chakra-ui/react";
import { GameDeals } from "../GameDeals";
import GameCardImage from "./GameCardImage";
import GameCardBody from "./GameCardBody";

function GameCard({ gameInfo }: { gameInfo: GameDeals }) {
  return (
    <Card maxW="sm" w="full" h="full">
      <GameCardImage gameInfo={gameInfo} />
      <CardBody>
        <GameCardBody gameInfo={gameInfo} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
