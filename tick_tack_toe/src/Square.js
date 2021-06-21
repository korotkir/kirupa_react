import React from 'react'

// Заменим класс функциональным компонентом
// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }

// Функциональный компонент
// Возвращает 3 свойства, className - класс для css,
// onClick - событие при клике на квадрат, value - значение внутри кнопки ('X' или 'O')
// Пропсы описаны в Game
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square
