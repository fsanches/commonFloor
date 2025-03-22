import { ValidNetwork, VIEM_CHAINS } from "@daohaus/keychain-utils";

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: string;
    SAFE_ADDRESS: string;
    CHAIN_ID: ValidNetwork;
  };
} = {
  "0x0a17997f3fd8bffa661ed6efa71e04bb29202853": {
    ADDRESS: "0x0a17997f3fd8bffa661ed6efa71e04bb29202853",
    SAFE_ADDRESS: "0xf6a2fe3ed61cfeb06e82a3848fc3f4b1667f5423",
    CHAIN_ID: "0xaa36a7",
  }
};
