import axios from "axios";
import { GameDeals } from "../components/GameDeals/GameDeals";
const baseUrl =
  "https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=32&pageNumber=";

const getAll = (page: number = 0): Promise<[GameDeals[], boolean, number]> => {
  return axios.get(`${baseUrl}${page}`).then((res) => {
    const data = res.data;
    const pageLimit = res.headers["x-total-page-count"];
    const hasMore = page < pageLimit;
    return [data, hasMore, pageLimit];
  });
};

export default { getAll };
