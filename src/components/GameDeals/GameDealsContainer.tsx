import { Link, SimpleGrid } from "@chakra-ui/react";
import { lazy } from "react";
import GameCard from "./GameCard";
import { GameDeals } from "./GameDeals";
import { AnimatePresence, motion } from "framer-motion";

const BASE_STEAM_URL = "https://store.steampowered.com/app/";

type Props = {
  dealsArray: Array<GameDeals> | undefined;
};

function GameDealsContainer({ dealsArray }: Props) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="16px">
      <AnimatePresence>
        {dealsArray?.map((item: GameDeals) => (
          <motion.div
            key={item.dealID}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={BASE_STEAM_URL + item.steamAppID}
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              <GameCard gameInfo={item} />
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </SimpleGrid>
  );
}

export default GameDealsContainer;
