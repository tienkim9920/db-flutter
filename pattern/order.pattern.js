class PatternOrder {
    constructor(address, phone, total, delivery, pay, 
        note, userId, paymentId, couponId){
        this.address = address;
        this.phone = phone;
        this.total = total;
        this.delivery = delivery;
        this.pay = pay;
        this.note = note;
        this.userId = userId;
        this.paymentId = paymentId;
        this.couponId = couponId;
    }

    toJson(){
        const data = {
            'address': this.address,
            'phone': this.phone,
            'total': this.total,
            'delivery': this.delivery,
            'pay': this.pay,
            'note': this.note,
            'userId': this.userId,
            'paymentId': this.paymentId,
            'couponId': this.couponId
        }
        return data
    }
}

module.exports = PatternOrder;