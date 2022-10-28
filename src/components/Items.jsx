// Context
import { useItemsContext } from '../context/ItemsContext'

// Custom Hook
import useGetData from '../hooks/useGetData'

// Utils
import getUrlItems from '../utils/itemsApi'

const Items = () => {
  const context = useItemsContext()
  useGetData(getUrlItems())
  // console.log('🚀 ~ context loading', context.loading)
  // console.log('🚀 ~ context data', context.data)

  return (
    <section className='container py-4'>
      <div className='row gy-4'>
        {
          context.loading
            ? <p className='loading text-center'>Cargando ...</p>
            : context.data.map((items, index) => (
              <aside key={index} className='col-12 col-md-6 col-lg-3'>
                {/* Aqui van cargadas las cards <Card {...items} />  */}
              </aside>
            ))
        }
      </div>
    </section>
  )
}

export default Items
