var products = [
    {
        image1: 'images/products/pr-1.jpg',
        image2: 'images/products/pr-1.1.jpg',
        name: 'Product 1',
        price: '$100',
    },
    {
        image1: 'images/products/pr-2.jpg',
        image2: 'images/products/pr-2.2.jpg',
        name: 'Product 2',
        price: '$100',
    },
    {
        image1: 'images/products/pr-3.jpg',
        image2: 'images/products/pr-3.3.jpg',
        name: 'Product 3',
        price: '$100',
    },
    {
        image1: 'images/products/pr-4.jpg',
        image2: 'images/products/pr-4.4.jpg',
        name: 'Product 4',
        price: '$100',
    },
    {
        image1: 'images/products/pr-5.jpg',
        image2: 'images/products/pr-5.5.jpg',
        name: 'Product 5',
        price: '$100',
    },
    {
        image1: 'images/products/pr-6.jpg',
        image2: 'images/products/pr-6.6.jpg',
        name: 'Product 6',
        price: '$100',
    },
    {
        image1: 'images/products/pr-7.jpg',
        image2: 'images/products/pr-7.7.jpg',
        name: 'Product 7',
        price: '$100',
    },
    {
        image1: 'images/products/pr-8.jpg',
        image2: 'images/products/pr-8.8.jpg',
        name: 'Product 8',
        price: '$100',
    },
];

let product_list = document.querySelector('#products');

let index = 0;
products.forEach(product => {
    let prod = `
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 pb-4">
            <div class="card">
                <img class="card-img-top imgHover" src="${product.image1}" data-set="${index++}" alt="Card image cap">
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

let imgsHover = document.querySelectorAll('.imgHover');

imgsHover.forEach(imgHover => {
    imgHover.addEventListener('mouseenter', e => {
        console.log(imgHover.getAttribute('data-set'))
        for (i = 0; i < products.length; i++) {
            imgHover.src = products[parseInt(imgHover.getAttribute('data-set'))].image2;
        }
        console.log(e);
    })
})

imgsHover.forEach(imgHover => {
    imgHover.addEventListener('mouseleave', e => {
        console.log(imgHover.getAttribute('data-set'))
        for (i = 0; i < products.length; i++) {
            imgHover.src = products[parseInt(imgHover.getAttribute('data-set'))].image1;
        }
        console.log(e);
    })
})







