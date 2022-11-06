class Records {

    constructor(
        table,
        records
    ) {
        this.table = table;
        this.records = records;
    }

    toJson() {
        return JSON.stringify({
            "table": this.table,
            "items": this.records.map((o) =>  o)
        });
    }
}

export default Records;