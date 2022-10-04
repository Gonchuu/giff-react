import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);
// para añadier una nueva categoria hacemos una funcion y metemos el setCategories.
//usamos el operador spred (...categories)para mantener las categories que ya teniamos y añadimos la que queramos
    const onAddCategory = ( newCategory) => {
        setCategories([ ...categories, newCategory]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
       <AddCategory  
       
        onNewCategory={ onAddCategory }

       />

        {/* Listado Giff */}
        
        <ol>
        {/*usamos .map (para renderizar un listado basado en las categorias) para recorrer cada uno de los elementos del arreglos y devolver algo nuevo */}
            { categories.map( category => {
                return <li key= { category }>{ category }</li>
            }) }
            
        </ol>
            {/* Giff Item */}
    </>
    
  )
}
