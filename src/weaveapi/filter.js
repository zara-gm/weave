const DEFAULT_CREATE_TIMEOUT_SEC = 300;

export class Filter {

    constructor(
        op,
        order,
        limit,
        collapsing
    ) {
        this.op = op;
        this.order = order;
        this.limit = limit;
        this.collapsing = collapsing;
    }

    toJson() {
        return JSON.stringify({
            "op": this.failIfExists,
            "order": this.order,
            "limit": this.limit,
            "collapsing": this.collapsing
        });
    }

    static fromJson(json) {
        return new Filter(
            json.op,
            json.order,
            json.limit,
            json.collapsing
        );
    }
}

export class FilterOp {

    constructor(
        operation,
        left,
        right,
        value
    ) {
        this.operation = operation;
        this.left = left;
        this.right = right;
        this.value = value;
    }

    static field(field) {
        return new FilterOp("field", null, null, field);
    }

    static value(value) {
        return new FilterOp("value", null, null, value);
    }

    static eq(field, value) {
        return new FilterOp("eq", FilterOp.field(field), FilterOp.value(value), null);
    }

    static neq(field, value) {
        return new FilterOp("neq", FilterOp.field(field), FilterOp.value(value), null);
    }

    static in(field, values) {
        return new FilterOp("in", FilterOp.field(field), FilterOp.value(values), null);
    }

    static notin(field, values) {
        return new FilterOp("notin", FilterOp.field(field), FilterOp.value(values), null);
    }

    static gt(field, value) {
        return new FilterOp("gt", FilterOp.field(field), FilterOp.value(value), null);
    }

    static gte(field, value) {
        return new FilterOp("gte", FilterOp.field(field), FilterOp.value(value), null);
    }

    static lt(field, value) {
        return new FilterOp("lt", FilterOp.field(field), FilterOp.value(value), null);
    }

    static lte(field, value) {
        return new FilterOp("lte", FilterOp.field(field), FilterOp.value(value), null);
    }

    static and(expr1, expr2) {
        return new FilterOp("and", expr1, expr2, null);
    }

    static or(expr1, expr2) {
        return new FilterOp("or", expr1, expr2, null);
    }

    static contains(expr1, expr2) {
        return new FilterOp("contains", expr1, expr2, null);
    }
}
