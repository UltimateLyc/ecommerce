import React from 'react'
import useGetData from '../hooks/useGetData'
import getUrlItems from '../utils/itemsApi'

const Items = () => {
  const { data, loading } = useGetData(getUrlItems())
  console.log('🚀 ~ loading', loading)
  console.log('🚀 ~ data', data)

  return (
    <section className='container py-4'>
      <div className='row gy-4'>
        {
          loading
            ? <p className='loading text-center'>Cargando ...</p>
            : data.map((items, index) => (
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
