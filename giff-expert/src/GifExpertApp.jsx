import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifFrid } from './components/GifFrid';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);
// para añadier una nueva categoria hacemos una funcion y metemos el setCategories.
//usamos el operador spred (...categories)para mantener las categories que ya teniamos y añadimos la que queramos
    const onAddCategory = ( newCategory) => {
// si la categoria que metemos exite, no hace nada. si no exite la incorpora.
        if ( categories.includes(newCategory)) return;

        setCategories([ ...categories, newCategory]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory  
        onNewCategory={ onAddCategory }
        />
        
        {/*usamos .map (para renderizar un listado basado en las categorias) para recorrer cada uno de los elementos del arreglos y devolver algo nuevo */}
            { categories.map( category => (
                <GifFrid 
                    key={ category } 
                    category={category} />
                ))
            }
            


    </>
    
  )
}
