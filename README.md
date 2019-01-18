# hook
React hook

App1.js
//0 is default value
const [count,setCount] = useState(0);
{count}
()=>setCount(count+1)

Using array
App2.js
const [ todos, setTodos] = useState([{text:'Learn Hooks'}]);
()=>{
    setTodos([
        ...todos,
        {text:'Learn Hook0'}
    ])}

ComponentDidMount or ComponentDidUpdate
App3.js
useEffect(()=>{
    document.title = `You clicked ${count} times`;
})

Hooks and Function Components
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
function Example(props) {
  // You can use Hooks here!
  return <div />;
}

var fruitStateVariable = useState('banana'); // Returns a pair
var fruit = fruitStateVariable[0]; // First item in a pair
var setFruit = fruitStateVariable[1]; // Second item in a pair


Effect change count change
App4.js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes