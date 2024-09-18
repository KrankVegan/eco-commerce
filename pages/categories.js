import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from 'react-sweetalert2';


export default withSwal(({swal}, ref) => (
    <Categories swal={swal}/>
));


function Categories({swal}) {

    const [name,setName] = useState('');
    const [categories, setCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState();
    const [EditingCategory, setEditiginCategory] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []); 

    function fetchCategories() {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        });
    }


    function deleteCategory (category){
        swal.fire({
            title: 'Estas seguro?',
            text: `Quieres eliminar ${category.name} ?`,
            showCancelButton: true,
            cancelButton: 'Cancelar',
            confirmButton: 'Si',
            confirmButtonColor: '#008000' 
        }).then(async result => {
            if(result.isConfirmed){
                const {_id} = category;
                await axios.delete('/api/categories?_id='+_id)
            }
            fetchCategories();
        });
    }


    async function saveCategory(ev) {
        ev.preventDefault();
        const data = {name, parentCategory}
        if(EditingCategory){
            data._id = EditingCategory._id
            await axios.put('api/categories', data);
            setEditiginCategory(null);
        } else {
        await axios.post('api/categories', data);
        }
        setName('');
        fetchCategories();
    }

    function editCategory(category) {
        setEditiginCategory(category);
        setName(category.name);
        setParentCategory(category.parent?._id);
        
    }

    return(
        <Layout>
            <h1>Categorias</h1>
            <label>
                {EditingCategory ? `Editar Categoria ${EditingCategory.name}`
                :'Crear Categoria'}
            </label>
            
            <form onSubmit={saveCategory} className="flex gap-1">
                <input 
                className="mb-0" 
                type="text" 
                placeholder={'Nombre de la Categoria'}
                value={name}
                onChange={ev => setName(ev.target.value)}/>

                <select className="mb-0" 
                    onChange={ev => setParentCategory(ev.target.value)}
                    value={parentCategory}> 

                    <option value=""> No Categoría superior </option>
                    {categories.length > 0 && categories.map (category => (
                        <option key={category._id} value={category._id}> {category.name} </option>
                    ))}

                </select>

                <button type="submit" className="btn-primary">Guardar</button>
            </form>

            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>Nombre de la Categoria</td>  
                        <td>Categoría superior</td>  
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map (category => (
                        <tr key={category._id}>

                            <td>{category.name}</td>
                            <td>{category?.parent?.name}</td>
                            <td>
                                <button 
                                onClick={() => editCategory(category)} 
                                className="btn-primary mr-1"
                                >
                                     Editar 
                                </button>
                                <button 
                                onClick={() => deleteCategory(category)}
                                className="btn-primary"> Eliminar </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}