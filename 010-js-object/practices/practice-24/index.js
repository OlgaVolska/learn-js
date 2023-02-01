let seller = {
    name: 'Steven Baker',
    rating: 4.5
};

let customer = {...seller};
// let customer = Object.assign({}, seller);
customer.name = 'Dave Boyle';
customer.rating = 5.0;

let order = {
    description: 'Camera',
    price: 120
};

let receipt = {
    status: 'Pending',
    seller: Object.assign({}, seller),
    customer: Object.assign({}, customer),
    order: Object.assign({}, order)
};

receiptCopy = JSON.parse(JSON.stringify(receipt));

delete receiptCopy.seller.rating;
receiptCopy.status = 'Completed';


  


console.log(receipt);
console.log(receiptCopy);

