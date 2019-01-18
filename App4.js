import React ,{ useState,useEffect  } from 'react';

function Example() {

  const [ count, setCount] = useState(0)
  const [ count2, setCount2] = useState(0)


  //componentDidMount or componentDidUpdate
  useEffect(()=>{
    console.log('callme')
    document.title = `You clicked ${count} times`;
    return function cleanup() {
      console.log('every call setfunction')
    }
  }, [count]);

  useEffect(()=>{
    console.log('2')
    return function cleanup() {
      console.log('2')
    }
  }, [count2]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example