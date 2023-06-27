import { Stock } from "interfaces/Tickers";
import { User } from "../interfaces";

/** Dummy user data. */
export const dataArray: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

export const stockMockArray: Stock[] = [
  {
    id: 1,
    symbol: "RWOD",
    mic: "XNAS",
    figi: "BBG015Z249H2",
    description: "REDWOODS ACQUISITION CORP",
    currency: "USD",
  },
  {
    id: 2,
    symbol: "OPY",
    mic: "XNYS",
    figi: "BBG000F006R9",
    description: "OPPENHEIMER HOLDINGS-CL A",
    currency: "USD",
  },
  {
    id: 3,
    symbol: "NAUT",
    mic: "XNAS",
    figi: "BBG00W7G4M12",
    description: "NAUTILUS BIOTECHNOLOGY INC",
    currency: "USD",
  },
  {
    id: 4,
    symbol: "PXHI",
    mic: "OOTC",
    figi: "BBG000QV66N7",
    description: "PHONEX HOLDINGS INC",
    currency: "USD",
  },
  {
    id: 5,
    symbol: "TPZEF",
    mic: "OOTC",
    figi: "BBG00ZCMGXY3",
    description: "TOPAZ ENERGY CORP",
    currency: "USD",
  },
  {
    id: 6,
    symbol: "DLB",
    mic: "XNYS",
    figi: "BBG000DGLTG5",
    description: "DOLBY LABORATORIES INC-CL A",
    currency: "USD",
  },
  {
    id: 7,
    symbol: "MGTX",
    mic: "XNAS",
    figi: "BBG00KXH44F2",
    description: "MEIRAGTX HOLDINGS PLC",
    currency: "USD",
  },
  {
    id: 8,
    symbol: "HKXCF",
    mic: "OOTC",
    figi: "BBG000CTC1L3",
    description: "HONG KONG EXCHANGES & CLEAR",
    currency: "USD",
  },
  {
    id: 9,
    symbol: "QNICF",
    mic: "OOTC",
    figi: "BBG013GNBPY9",
    description: "QUEBEC NICKEL CORP",
    currency: "USD",
  },
  {
    id: 10,
    symbol: "MD",
    mic: "XNYS",
    figi: "BBG000H8LGK2",
    description: "PEDIATRIX MEDICAL GROUP INC",
    currency: "USD",
  },
  {
    id: 11,
    symbol: "RVCB",
    mic: "OOTC",
    figi: "BBG00H4FYB66",
    description: "RIVER VALLEY COMMUNITY BANCO",
    currency: "USD",
  },
  {
    id: 12,
    symbol: "NICH",
    mic: "OOTC",
    figi: "BBG000DJ1WB9",
    description: "NITCHES INC",
    currency: "USD",
  },
];

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(id: number | string) {
  const selected = dataArray.find((data) => data.id === Number(id));

  if (!selected) {
    throw new Error("Cannot find user");
  }

  return selected;
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
  // Throw an error, just for example.
  if (!Array.isArray(dataArray)) {
    throw new Error("Cannot find users");
  }

  return dataArray;
}
