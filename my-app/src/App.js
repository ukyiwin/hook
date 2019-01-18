
// import React, { useReducer } from 'react';

// const initialState = {
//   loading: false,
//   count: 0,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment': {
//       return { ...state, count: state.count + 1, loading: false };
//     }
//     case 'decrement': {
//       return { ...state, count: state.count - 1, loading: false };
//     }
//     case 'loading': {
//       return { ...state, loading: true };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// const delay = (time = 1500) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };

// function PokemonInfo() {
//   const [{ count, loading }, dispatch] = useReducer(reducer, initialState);
//   const onHandleIncrement = async () => {
//     dispatch({ type: 'loading' });
//     await delay(500);
//     dispatch({ type: 'increment' });
//   };
//   const onHandleDecrement = async () => {
//     dispatch({ type: 'loading' });
//     await delay(500);
//     dispatch({ type: 'decrement' });
//   };
//   return (
//     <div>
//       <p>Count {loading ? 'loading..' : count}</p>
//       <button type="button" onClick={onHandleIncrement}>
//         +
//       </button>
//       <button type="button" onClick={onHandleDecrement}>
//         -
//       </button>
//     </div>
//   );
// }

// export default PokemonInfo;


import React from 'react'
import immer from 'immer'

const cacheState = localStorage.getItem("AppState")
const initialState = cacheState 
    ? JSON.parse(cacheState)  
    :{
        users : [''],
        canEdit : true,
    };

const storeContext = React.createContext();

function StoreProvider ({children}) {
    const [state,setState] = React.useState(initialState);

    //Wrapping our actions in setState and immer
    const immerActions = {}
    Object.keys(actions).forEach(key => {
        immerActions[key] = (...args) => 
            setState(old => {
                const newState = immer(old,draft => actions[key](draft, ...args))
                localStorage.setItem("AppState",JSON.stringify(newState))
                return newState;
            })
    })

    const contextValue = React.useMemo(()=> [ state, immerActions], [state]) 
    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    ) 
}

const actions = {
    addUser: state => {
        state.users.push("")
    },

    toggleCanEdit : state => {
        state.canEdit = !state.canEdit
    },

    updateUserName : (state ,index, value)  =>  {
        state.users[index] = value;
    }
}


function Debug () {
    const [state,setState] = React.useContext(storeContext);
    return (
        <pre>
            <code>
                {JSON.stringify(state,null,2)}
            </code>
        </pre>
    )

}

function UserCounter(){
    const [ {users}, {addUser}] = React.useContext(storeContext)

    const count = users.length


    return(
        <div>
            <div>Count: {count}</div>
            <div>
                <button onClick={()=> addUser()}>increment</button>
            </div>
        </div>
    )
}

function CanEdit(){
    const [ { canEdit }, {toggleCanEdit}] = React.useContext(storeContext)


    return(
        <div>
            <div>Can Edit: {canEdit.toString()}</div>
            <div>
                <button onClick={()=>toggleCanEdit()}>Toggle</button>
            </div>
        </div>
    )
}

function Users(){
    const [ { users ,canEdit }, {updateUserName}] = React.useContext(storeContext)

    return(
        <div>
            <div>
            Users: 
            {users.length? (
                <div>
                    {users.map((user,i)=>
                        <div>
                            <input key={i} value={user} onChange={e => {
                                updateUserName(i, e.target.value)
                            }}
                            disabled={!canEdit}
                            />
                        </div>)}
                </div>
            ):(
                <div>No users have been add yet!</div>
            )}

            
            </div>
        </div>
    )
}

function App(){
    return (
        <StoreProvider>
            <div>                
                <UserCounter/>
                <br/>
                <CanEdit/>
                <br/>
                <Users/>
                <Debug/>
            </div>
        </StoreProvider>

    )
}

export default App