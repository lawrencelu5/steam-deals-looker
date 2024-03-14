import axios from "axios";
import { GameDeals } from "../components/GameDeals/GameDeals";
const baseUrl = "https://www.cheapshark.com/api/1.0/deals";

const getAll = (id: number = 1): Promise<GameDeals[]> =>
  axios.get(`${baseUrl}?storeID=${id}`).then((res) => res.data);

export default { getAll };
