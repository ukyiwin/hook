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