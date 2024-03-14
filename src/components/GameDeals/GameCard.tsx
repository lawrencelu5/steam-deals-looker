import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
  Badge,
  Center,
  Stat,
  StatNumber,
  HStack,
  StatLabel,
  Img,
} from "@chakra-ui/react";
import { css } from "@emotion/css";
import SteamIcon from "../../assets/steam.svg";
import { GameDeals } from "./GameDeals";

function GameCard({ gameInfo }: { gameInfo: GameDeals }) {
  return (
    <Card maxW="sm" w="full" h="full">
      <Stack h="full">
        <Img
          borderRadius="lg"
          objectFit="fill"
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
      <CardBody>
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
      </CardBody>
    </Card>
  );
}

export default GameCard;
