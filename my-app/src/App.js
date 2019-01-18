import React ,{ useState,useEffect  } from 'react';

function Example() {

  const [ count, setCount] = useState(0)


  //componentDidMount or componentDidUpdate
  useEffect(()=>{
    console.log('callme')
    document.title = `You clicked ${count} times`;
    return ()=>{
      console.log('every call setfunction')
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example