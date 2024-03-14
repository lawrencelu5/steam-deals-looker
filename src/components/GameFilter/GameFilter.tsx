import { HStack, Input, Stack } from "@chakra-ui/react";

type Props = {
  setGameName: React.Dispatch<React.SetStateAction<string>>;
  gameName: string;
};

function GameFilter({ gameName, setGameName }: Props) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setGameName(newValue);
  };

  return (
    <Stack spacing={3}>
      <HStack>
        <Input
          placeholder="Search for a game..."
          value={gameName}
          onChange={handleChange}
          size="lg"
        />
      </HStack>
    </Stack>
  );
}

export default GameFilter;
