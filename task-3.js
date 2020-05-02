// Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [{
        title: 'prod1',
        price: 5.2
    }, {
        title: 'prod2',
        price: 0.18
    },
    {
        title: 'prod3',
        price: 15
    }, {
        title: 'prod4',
        price: 25
    },
    {
        title: 'prod5',
        price: 18.9
    }, {
        title: 'prod6',
        price: 8
    },
    {
        title: 'prod7',
        price: 19
    }, {
        title: 'prod8',
        price: 63
    }
];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]


let filterCollection = (products, price1, price2) => products.filter(product => {
    if (price1 > price2) {
        return product.price < price1 && product.price > price2
    } else {
        return product.price > price1 && product.price < price2
    }
}).sort((productA, productB) => productA.price - productB.price)




console.log(filterCollection(products, 15, 30))