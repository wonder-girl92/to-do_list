import './App.css';
import {useState} from 'react'

function App() {
    const [todo, setTodo] = useState("");
    const [check, setCheck] = useState(false);
    const [pastTodo, setPastTodo] = useState([
        {
            target: 'Освоить React',
            done: true,
        },
        {
            target: 'Закончить Intocode успешно',
            done: false,
        },
        {
            target: 'Устроиться на работу с з/п не ниже 45K',
            done: false,
        },
    ]);

    const handleTodo = (e) => {
        setTodo(e.target.value)
    }
    const handleCheck = () => {
        return (
            setCheck(!check)
        )
    }
    const handleAdd = () => {
        setPastTodo([
            {
                target: todo,
                done: check,
            },
            ...pastTodo,
        ])
        setTodo("")
    }

    const handleDiff = (i) => {
        const newDiff = pastTodo.map((item, index) => {
            if (i === index) {
                return {
                    ...item,
                    done: !item.done
                }
            }
            return item;
        })
        setPastTodo(newDiff)
    }

    return (
        <div className="App">
            <div className="header">
                <h1> СПИСОК ДЕЛ </h1>
            </div>

            <div className="forms">
                <input className="enter" type="text" placeholder="Введите название дела..." value={todo}
                       onChange={handleTodo}/>

                <button onClick={handleAdd}>
                    Добавить
                </button>

                <input type="checkbox" checked={check} onChange={handleCheck}/>
            </div>

            <ul>
                {pastTodo.map((item, index) => {
                        return (
                            <li><input type="checkbox" checked={item.done} onChange={() => handleDiff(index)}/>
                                {item.target}
                            </li>
                        )
                    }
                )}
            </ul>

        </div>

    );
}

export default App;
