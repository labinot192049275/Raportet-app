var products = [
    {
        image: 'images/products/pr-1.jpg',
        name: 'Product 1',
        price: '$100',
    },
    {
        image: 'images/products/pr-2.jpg',
        name: 'Product 2',
        price: '$100',
    },
    {
        image: 'images/products/pr-3.jpg',
        name: 'Product 3',
        price: '$100',
    },
    {
        image: 'images/products/pr-4.jpg',
        name: 'Product 4',
        price: '$100',
    },
    {
        image: 'images/products/pr-5.jpg',
        name: 'Product 5',
        price: '$100',
    },
    {
        image: 'images/products/pr-6.jpg',
        name: 'Product 6',
        price: '$100',
    },
    {
        image: 'images/products/pr-7.jpg',
        name: 'Product 7',
        price: '$100',
    },
    {
        image: 'images/products/pr-8.jpg',
        name: 'Product 8',
        price: '$100',
    },
];

let product_list = document.querySelector('#products');

products.forEach(product => {
    let prod = `
        <div class="col-md-3 pb-4">
            <div class="card">
                <img class="card-img-top" src="${product.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>
                    <a href="#" class="btn btn-secondary fw-bold">Add to Cart</a>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod);
})








