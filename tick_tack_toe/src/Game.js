import React from 'react'
import Board from './Board'
import {calculateWinner, stepListener} from './utils'

class Game extends React.Component {
    constructor(props) {
        super(props)

        // Задаем состояние.
        // В history хранится массив объектов с состояниями каждого шага игры (9 квадратов заполненных null)
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0, // Шаг игры
            xIsNext: true, // Для определения 'X' или 'O'
        }
    }

    // Обработчик клика
    handleClick(i) {
        // Берет полный массив с последним состоянием
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        // Выбор шага на который нужно вернутся
        const current = history[history.length - 1]
        // Актуальное состояние игры
        const squares = current.squares.slice()
        // если победа - окончить выполнение кода
        if (calculateWinner(squares) || squares[i]) {

            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            // При нажатии на кнопку чередует X и O ()
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]

        const winner = calculateWinner(current.squares)


        const moves = history.map((step, move, arr) => {

            let turn = move % 2 ? 'X' : 'O'
            git
            console.log('arr', arr)
            console.log('step', Object.values(step)[0])
            console.log('move', move)
            console.log('history', history)

            const desc = move ?
                `Ход №${move}. ${turn}. ${move
                    ? stepListener(Object.values(arr[arr.length - 2])[0], Object.values(step)[0])
                    : ''} ` :
                'Начало игры. Первый ход.'

            // let desc = `Ход №${move}. ${turn}. ${move
            //         ? stepListener(Object.values(arr[arr.length - 2])[0], Object.values(step)[0])
            //         : ''} `

            return (
                <li key={move}>
                    <button className="jumpTo" onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        //console.log(Object.values(history.forEach(() => )))

        let status
        if (winner) {
            status = `Выиграл ${winner}!`;
            document.querySelector('.status').style.color = 'red'
        } else {
            status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="main">
                <div className="left">
                </div>
                <div className="center">
                    <div className="game">
                        <div className="game-board">
                            <div className="clear">Очистить поле!</div>
                            <Board
                                squares={current.squares}
                                onClick={(i) => this.handleClick(i)}
                            />
                            <div className="status">{status}</div>
                        </div>
                    </div>
                </div>
                    <div className="game-info">
                        <ol>{moves}</ol>
                    </div>
            </div>



        );
    }
}

export default Game
