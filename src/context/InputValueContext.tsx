import { createContext, useReducer } from "react"

type AppState = typeof initialState
type Action = {
    type:'set-input-value',
    payload: number
} |
{
    type:'set-input-value-to-100',
}

interface InputProviderProps {
    children: React.ReactNode
}

const initialState = {
    inputValue:0
}
const reducer = (state: AppState, action: Action) => {

    switch (action.type) {
        case 'set-input-value':
            return {
                ...state, 
                inputValue:action.payload,
            }
        case 'set-input-value-to-100':
            return {
                ...state,
                inputValue: 100,
            }
        default:
            return state
    }
}

const InputValueContext = createContext<{
    state: AppState
    dispatch: React.Dispatch<Action>
}>({state: initialState, dispatch: () => {}})

function InputValueProvider({children}: InputProviderProps) {
    const[state, dispatch] = useReducer(reducer, initialState)

    return(
        <InputValueContext.Provider value= {{state, dispatch}}>
            {children}
        </InputValueContext.Provider>
    )
}
export {InputValueContext, InputValueProvider}