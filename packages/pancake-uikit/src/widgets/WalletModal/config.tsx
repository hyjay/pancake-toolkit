import Metamask from "../../components/Svg/Icons/Metamask";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Kaikas",
    icon: Metamask,
    connectorId: ConnectorNames.Kaikas,
    priority: 1,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";
