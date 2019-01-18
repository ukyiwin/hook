import React ,{ useState } from 'react';

function Example() {

  const [ age, setAge] = useState(26);
  const [ fruit, setFruit] = useState('banana')
  const [ todos, setTodos] = useState([{text:'Learn Hooks'}]);


  return (
    <div>
      <div>
        <p>You age is {age} year old</p>
        <button onClick={() => setAge(age + 1)}>
          add Year
        </button>
      </div>
      <div>
        <p>You fruit is {fruit}</p>
        <button onClick={() => setFruit('mango')}>
          change fruit
        </button>
      </div>
      <div>
        <p>You todos is</p>
        <ul>
          {todos.map((todo) =>
            <li>{todo.text}</li>
          )}
        </ul>

        <button onClick={() => 
          setTodos([
            ...todos,
            {
              text:'Learn Hook0'
            }
          ])}>
          setTodos
        </button>
      </div>
    </div>
  );
}

export default Example