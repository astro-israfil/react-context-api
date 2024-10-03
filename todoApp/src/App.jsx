import {TodoInputForm, Todos} from "./components";
import { TodoContextProvider } from "./context";

function App() {
  return (
    <TodoContextProvider>
      <h1 className='text-center lg:text-5xl md:text4xl sm:text-3xl font-bold text-purple-700 lg:mt-10 md:mt-7 sm:mt-4 transition-all'>TODO APP</h1>
      <div className="flex justify-center p-4">
        <TodoInputForm />
      </div>
      <div className="w-full h-4/5 overflow-y-scroll flex justify-center">
        <Todos />
      </div>
    </TodoContextProvider>
  )
}

export default App
