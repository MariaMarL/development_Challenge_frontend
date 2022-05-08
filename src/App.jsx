import './App.css'
import CategoryForm from './components/CategoryForm'
import CategoryList from './components/CategoryList'
import ContextProvider from './state/ContextProvider'

function App() {
  return (
    <div className='App' id="app">
      <ContextProvider>
        <CategoryForm />
        <CategoryList />
      </ContextProvider>
    </div>
  )
}

export default App
