import { createContext, useContext, useState } from 'react'

// Creacion del contexto vacio
const ItemsContext = createContext()

// Creacion del componente proveedor
function ItemsProvider (props) {
  const [data, setData] = useState([] || {})
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState({})
  const [search, setSearch] = useState('')

  const value = {
    setData,
    data,
    setLoading,
    loading,
    setSelectedItem,
    selectedItem,
    setSearch,
    search
  }

  return (
    // Siempre se llama value el prop del Provider con la data
    // Value es un obj que indica que datos son globales
    <ItemsContext.Provider value={value}>
      {props.children}
    </ItemsContext.Provider>
  )
}

// Consumidor del contexto
// Esto va a brindar acceso a la data de los componentes
const useItemsContext = () => {
  const context = useContext(ItemsContext)
  return context
}

// Exportar las funciones del Provider y el Consumer
// Para que puedan ser invocados en nuestros componentes
export {
  useItemsContext,
  ItemsProvider
}

// Uso de context
// Vamos a ir a nuestro componente superior (por exm Home)
// Envolver a los componentes que necesitaran  la informacion del contexto
