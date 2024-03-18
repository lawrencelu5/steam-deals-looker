import { Button, ButtonGroup, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  isPlaceholderData: boolean;
  hasMore: boolean;
  maxPage: number;
};

function GamePagination({
  page,
  setPage,
  isPlaceholderData,
  hasMore,
  maxPage,
}: Props) {
  const [tempPage, setTempPage] = useState(Number);

  const onPageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    setTempPage(value ? value : 0);
  };

  const onPageSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault;
    if (tempPage) setPage(tempPage >= maxPage ? maxPage : tempPage);
  };

  return (
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
            setPage((old) => (hasMore ? old + 1 : old));
          }}
          isDisabled={isPlaceholderData || !hasMore}
        >
          Next Page
        </Button>
        <Input
          placeholder="page"
          type="number"
          name="pageValue"
          onChange={onPageChange}
          htmlSize={1}
          width={20}
        />
        <Button onClick={(e) => onPageSubmit(e)}>Go</Button>
      </ButtonGroup>
    </HStack>
  );
}

export default GamePagination;
