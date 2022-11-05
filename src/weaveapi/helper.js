import WeaveAPI from "./weaveapi";
import Records from "./records";
import Record from "./record";
import Options from "./options";
import { Filter, FilterOp } from "./filter";
import ApiContext from "./apicontext";
import keys from "./keys";

const generateKeys = () => {
    return ApiContext.generateKeys();
}

const toHex = (arg) => {
    return keys.toHex(arg);
}

const getConfig = (sideChain, pub, pvk) => {
    if (sideChain == null) return null;

    //TODO: handle default ports if not specified
    const idx = sideChain.indexOf("://");
    if (idx < 0) return null;
    const lidx = sideChain.lastIndexOf("/");

    const protocol = sideChain.substring(0, idx);
    const idxp = sideChain.lastIndexOf(":");
    const host = sideChain.substring(idx + 3, idxp);
    const port = sideChain.substring(idxp + 1, lidx);
    const seed = sideChain.substring(lidx + 1);

    const cfg = {
        apiVersion: 1,

        seed: seed,
        privateKey: pvk,
        publicKey: pub, //generate pub from pvk
    };

    if (protocol === "http" || protocol === "https") {
        cfg["http"] = {
            host: host,
            port: port,
            useHttps: protocol === "https",
        };
    } else if (protocol === "ws" || protocol === "wss") {
        cfg["websocket"] = {
            host: host,
            port: port,
            useWss: protocol === "wss",
        };
    }

    //console.log(cfg)
    return cfg;
};

const WeaveHelper = {
    getConfig,
    generateKeys,
    toHex,
    WeaveAPI,
    Records,
    Record,
    Options,
    Filter,
    FilterOp
};

export default WeaveHelper;