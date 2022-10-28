// Global Context
import { ItemsProvider } from '../context/ItemsContext'

// Componentes
import Items from '../components/Items'

const App = () => {
  return (
    <ItemsProvider>
      <div>Soy el App</div>
      <Items />
    </ItemsProvider>
  )
}

export default App
