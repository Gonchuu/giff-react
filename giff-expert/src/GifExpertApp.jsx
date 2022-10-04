import { useState } from 'react';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

    console.log(categories);

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

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
