import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xa9BE408589b1cb8B98100d3DA31e0754bF0d19F7";

export const DAPP_CONFIG = {
	readOnlyChainId: Goerli.chainId,
	readOnlyUrls: {
		[Goerli.chainId]:
			"https://eth-goerli.g.alchemy.com/v2/B2JwP_99diieKIwqPZewIL_FxFE6lE7Q",
	},
};
