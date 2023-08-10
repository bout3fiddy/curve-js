import { lowerCasePoolDataAddresses } from "../utils.js";
import { IPoolData, IDict } from "../../interfaces.js";

export const POOLS_DATA_ZKSYNC: IDict<IPoolData> = lowerCasePoolDataAddresses({});
