//Criar uma tabela que exibe cada produto importado de data/products.js 
//apresentando uma coluna para cada atributo de um produto.
//E exibir em um Card dentro de App.jsx

import React from 'react'

import productsList from '../../data/products'
import './productsTable.css'

export default props => {

  return (
    <div>
      <h3>Tabela de Produtos</h3>
      <table>
        <thead>
          <tr>
            <th>Identificador</th> 
            <th>Modelo</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            productsList.map((product, i) => {
              return(
                <tr key={product.id} className={i % 2 === 0 ? 'even' : 'odd'}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>R$ {product.price.toFixed(2)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
