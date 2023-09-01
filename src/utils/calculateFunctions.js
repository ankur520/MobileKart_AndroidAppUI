

export const calculatePrice = ( mrp, discountPercent ) => {
    let amount =  mrp * discountPercent / 100;
    return Math.ceil( mrp - amount )
    
}

export const calculateDelivery = (shippingStatus, shippingAmount) => {
    if (shippingStatus === "flatShipping") {
        return `+ ${shippingAmount} `
    } else if (shippingStatus === "locationWise") {
        return 0
    } else {
        return "Free Delivery"
    }
}

export const formatProductName = (name) => {
    return name.substring(0, 30) + "..."
    // return name
}