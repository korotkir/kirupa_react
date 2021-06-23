// Утилита вычисляющая победителя
export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export function stepListener(penultArr, lastArr) {
    // Сравнивает два массива
    let index = 0
    let compare = [];
    while(penultArr.length > index){
        compare.push(penultArr[index] === lastArr[index]);
        index++
    }

    // Получает элемент, который присутствует только в новом массиве
    let result = compare.map(el => el === true ? el : 'this').indexOf('this')

    // Возвращает элемент и его позицию подставляя значение из stepNow
    let stepNow = [
        'Row: 1; Col: 1;', 'Row: 1; Col: 2;', 'Row: 1; Col: 3;',
        'Row: 2; Col: 1;', 'Row: 2; Col: 2;', 'Row: 2; Col: 3;',
        'Row: 3; Col: 1;', 'Row: 3; Col: 2;', 'Row: 3; Col: 3;',
    ]

    const error = 'stepListener error!'

    return stepNow[result] || error
}

// Example
// history.length >= 2
//     ? stepListener(Object.values(history[history.length - 2])[0], Object.values(history[history.length - 1])[0])
//     : 'test'
