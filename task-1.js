// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):

let arrOfArr = [
    [14, 45],
    [1],
    ['a', 'c', 'd']
]



arrOfArr.sort(function (a, b) {
    return a.length - b.length
})

console.log(arrOfArr); //[ [ 1 ], [ 14, 45 ], [ 'a', 'c', 'd' ] ]