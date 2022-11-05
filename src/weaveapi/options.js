const DEFAULT_CREATE_TIMEOUT_SEC = 300;

export class CreateOptions {

    constructor(
        failIfExists,
        replicate,
        layout,
        createTimeoutSec
    ) {
        this.failIfExists = failIfExists != null ? failIfExists : true;
        this.replicate = replicate != null ? replicate : true;
        this.layout = layout;
        this.createTimeoutSec = createTimeoutSec || DEFAULT_CREATE_TIMEOUT_SEC;
    }

    toJson() {
        return JSON.stringify({
            "failIfExists": this.failIfExists,
            "replicate": this.replicate,
            "layout": this.layout,
            "createTimeoutSec": this.createTimeoutSec
        });
    }
}

const CREATE_DEFAULT = new CreateOptions(true, true, null, DEFAULT_CREATE_TIMEOUT_SEC);
const CREATE_FAILSAFE = new CreateOptions(false, true, null, DEFAULT_CREATE_TIMEOUT_SEC);

export class DropOptions {

    constructor(
        failIfNotExists,
        replicate,
        dropTimeoutSec
    ) {
        this.failIfNotExists = failIfNotExists != null ? failIfNotExists : true;
        this.replicate = replicate != null ? replicate : null;
        this.dropTimeoutSec = dropTimeoutSec || DEFAULT_CREATE_TIMEOUT_SEC;
    }

    toJson() {
        return JSON.stringify({
            "failIfNotExists": this.failIfNotExists,
            "replicate": this.replicate,
            "dropTimeoutSec": this.dropTimeoutSec
        });
    }
}

const DROP_DEFAULT = new DropOptions(true, true, DEFAULT_CREATE_TIMEOUT_SEC);
const DROP_FAILSAFE = new DropOptions(false, true, DEFAULT_CREATE_TIMEOUT_SEC);

export class ReadOptions {

    constructor(
        verifyHash,
        readTimeoutSec,
        peersConsensus,
        enableMux
    ) {
        this.verifyHash = verifyHash != null ? verifyHash : null;
        this.readTimeoutSec = readTimeoutSec || DEFAULT_READ_TIMEOUT_SEC;
        this.peersConsensus = peersConsensus != null ? peersConsensus : 0;
        this.enableMux = enableMux != null ? enableMux : false;
    }

    toJson() {
        return JSON.stringify({
            "verifyHash": this.verifyHash,
            "readTimeoutSec": this.readTimeoutSec,
            "peersConsensus": this.peersConsensus,
            "enableMux": this.enableMux
        });
    }
}

const DEFAULT_READ_TIMEOUT_SEC = 300

const READ_DEFAULT = new ReadOptions(true, DEFAULT_READ_TIMEOUT_SEC, 0, false)
const READ_DEFAULT_NO_CHAIN = new ReadOptions(false, DEFAULT_READ_TIMEOUT_SEC, 0, false)

export class WriteOptions {

    constructor(
        guaranteed,
        minAcks,
        inMemoryAcks,
        minHashAcks,
        writeTimeoutSec,
        allowDistribute,
        signOnChain,
        syncSigning
    ) {
        this.guaranteed = guaranteed || DEFAULT_GUARANTEED_DELIVERY;
        this.minAcks = minAcks || DEFAULT_MIN_ACKS;
        this.inMemoryAcks = inMemoryAcks || DEFAULT_MEMORY_ACKS;
        this.minHashAcks = minHashAcks || DEFAULT_HASH_ACKS;
        this.writeTimeoutSec = writeTimeoutSec || DEFAULT_WRITE_TIMEOUT_SEC;
        this.allowDistribute = allowDistribute != null ? allowDistribute : true;
        this.signOnChain = signOnChain != null ? signOnChain : true;
        this.syncSigning = syncSigning != null ? syncSigning : false;
    }

    toJson() {
        return JSON.stringify({
            "guaranteed": this.guaranteed,
            "minAcks": this.minAcks,
            "inMemoryAcks": this.inMemoryAcks,
            "minHashAcks": this.minHashAcks,
            "writeTimeoutSec": this.writeTimeoutSec,
            "allowDistribute": this.allowDistribute,
            "signOnChain": this.signOnChain,
            "syncSigning": this.syncSigning
        });
    }
}

const DEFAULT_GUARANTEED_DELIVERY = true
const DEFAULT_MIN_ACKS = 1
const DEFAULT_MEMORY_ACKS = false
const DEFAULT_HASH_ACKS = 1
const DEFAULT_WRITE_TIMEOUT_SEC = 300

const WRITE_DEFAULT = new WriteOptions(
        DEFAULT_GUARANTEED_DELIVERY,
        DEFAULT_MIN_ACKS,
        DEFAULT_MEMORY_ACKS,
        DEFAULT_HASH_ACKS,
        DEFAULT_WRITE_TIMEOUT_SEC,
        true,
        true,
        false
)

const WRITE_DEFAULT_ASYNC = new WriteOptions(
        false,
        DEFAULT_MIN_ACKS,
        true,
        0,
        DEFAULT_WRITE_TIMEOUT_SEC,
        true,
        true,
        false
)
const WRITE_DEFAULT_NO_CHAIN = new WriteOptions(
        DEFAULT_GUARANTEED_DELIVERY,
        DEFAULT_MIN_ACKS,
        DEFAULT_MEMORY_ACKS,
        0,
        DEFAULT_WRITE_TIMEOUT_SEC,
        true,
        false,
        false
)

export class MPCOptions {

    constructor(
        verifyHash,
        readTimeoutSec,
        sources
    ) {
        this.verifyHash = verifyHash != null ? verifyHash : true;
        this.readTimeoutSec = readTimeoutSec || DEFAULT_READ_TIMEOUT_SEC;
        this.sources = sources;
    }

    toJson() {
        return JSON.stringify({
            "verifyHash": this.verifyHash,
            "readTimeoutSec": this.readTimeoutSec,
            "sources": this.sources
        });
    }
}

export class ZKOptions {

    constructor(
        verifyHash,
        readTimeoutSec,
        sources,
        generators,
        commitment
    ) {
        this.verifyHash = verifyHash != null ? verifyHash : true;
        this.readTimeoutSec = readTimeoutSec || DEFAULT_READ_TIMEOUT_SEC;
        this.sources = sources;
        this.generators = generators || DEFAULT_GENERATORS;
        this.commitment = commitment || DEFAULT_COMMITMENT;
    }

    toJson() {
        return JSON.stringify({
            "verifyHash": this.verifyHash,
            "readTimeoutSec": this.readTimeoutSec,
            "sources": this.sources,
            "generators": this.generators,
            "commitment": this.commitment
        });
    }
}

const ALL_ACTIVE_NODES = [ "*" ]
const MPC_DEFAULT = new MPCOptions(true, DEFAULT_READ_TIMEOUT_SEC, ALL_ACTIVE_NODES);
const MPC_DEFAULT_NO_CHAIN = new MPCOptions(false, DEFAULT_READ_TIMEOUT_SEC, ALL_ACTIVE_NODES);

const DEFAULT_GENERATORS = 128;
const DEFAULT_COMMITMENT = "GGumV86X6FZzHRo8bLvbW2LJ3PZ45EqRPWeogP8ufcm3";

const ZK_DEFAULT = new ZKOptions(true, DEFAULT_READ_TIMEOUT_SEC, ALL_ACTIVE_NODES, DEFAULT_GENERATORS, DEFAULT_COMMITMENT);
const ZK_DEFAULT_NO_CHAIN = new ZKOptions(false, DEFAULT_READ_TIMEOUT_SEC, ALL_ACTIVE_NODES, DEFAULT_GENERATORS, DEFAULT_COMMITMENT);

export class PublishOptions {

    constructor(
        type,
        rollingUnit,
        rollingCount,
        verifyHash,
        readTimeoutSec,
        peersConsensus,
        enableMux
    ) {
        this.type = type || "snapshot";
        this.rollingUnit = rollingUnit;
        this.rollingCount = rollingCount;
        this.verifyHash = verifyHash != null ? verifyHash : true;
        this.readTimeoutSec = readTimeoutSec != null ? readTimeoutSec : DEFAULT_READ_TIMEOUT_SEC;
        this.peersConsensus = peersConsensus != null ? peersConsensus : 0;
        this.enableMux = enableMux != null ? enableMux : false;
    }

    toJson() {
        return JSON.stringify({
            "type": this.type,
            "rollingUnit": this.rollingUnit,
            "rollingCount": this.rollingCount,
            "verifyHash": this.verifyHash,
            "readTimeoutSec": this.readTimeoutSec,
            "peersConsensus": this.peersConsensus,
            "enableMux": this.enableMux
        });
    }
}

const PUBLISH_DEFAULT = new PublishOptions("snapshot", null, null, true, DEFAULT_READ_TIMEOUT_SEC, 0, false);


const options = {
    CreateOptions,
    ReadOptions,
    WriteOptions,
    PublishOptions,

    CREATE_DEFAULT,
    CREATE_FAILSAFE,

    DROP_DEFAULT,
    DROP_FAILSAFE,

    DEFAULT_READ_TIMEOUT_SEC,

    READ_DEFAULT,
    READ_DEFAULT_NO_CHAIN,

    DEFAULT_GUARANTEED_DELIVERY,
    DEFAULT_MIN_ACKS,
    DEFAULT_MEMORY_ACKS,
    DEFAULT_HASH_ACKS,
    DEFAULT_WRITE_TIMEOUT_SEC,

    WRITE_DEFAULT,
    WRITE_DEFAULT_ASYNC,
    WRITE_DEFAULT_NO_CHAIN,

    MPC_DEFAULT,
    MPC_DEFAULT_NO_CHAIN,

    ZK_DEFAULT,
    ZK_DEFAULT_NO_CHAIN,

    PUBLISH_DEFAULT,

    DEFAULT_GENERATORS,
    DEFAULT_COMMITMENT,

    ALL_ACTIVE_NODES
};

export default options;