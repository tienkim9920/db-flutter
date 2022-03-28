class PatternOrderDetail {
    constructor(count, size, productId, orderId){
        this.count = count;
        this.size = size;
        this.productId = productId;
        this.orderId = orderId;
    }

    toJson(){
        const data = {
            'count': this.count,
            'size': this.size,
            'productId': this.productId,
            'orderId': this.orderId,
        }
        return data
    }
}

module.exports = PatternOrderDetail;