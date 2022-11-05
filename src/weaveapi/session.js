class Session {

    constructor(
        data,
        decryptedSecret
    ) {
        this.organization = data["organization"];
        this.account = data["account"];
        this.scopes = data["scopes"];
        this.apiKey = data["apiKey"];

        this.secret = decryptedSecret;
        this.secretExpireUTC = data["secretExpireUTC"];
        this.nonce = 0.0;
    }

    toJson() {
        return [
            this.id,
            this.data
        ];
    }

    getNonce() {
        this.nonce += 1.0;
        return this.nonce;
    }
}

export default Session;