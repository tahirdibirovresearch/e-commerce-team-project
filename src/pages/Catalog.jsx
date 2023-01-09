import React, { useContext } from 'react'
import { Products } from '../components/Products/Products'
import { GlobalContext } from '../GlobalStateManagement'
import { Card } from '../components/Card/Card'
import { ClipLoader } from 'react-spinners'

export const Catalog = () => {

  const {products, loading} = useContext(GlobalContext)

  return (
    <div className="catalog">
      <Products>
      { !loading ?
            products.map(product =>(
               <Card key={product.id} product={product}></Card> 
            ) )
            : <div className="loader">
                <ClipLoader
            color="#1B5A7D"
            size={100}
          />
            </div>
        }
      </Products>
    </div>
  )
}
