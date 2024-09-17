import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
    const router = useRouter();
    const [productInfo, setProductInfo] = useState();
    const {id} = router.query;
    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get('/api/products?id='+id).then(response => {
        setProductInfo(response.data);
      });
    }, [id]);
  
    function goBack() {
      router.push('/products');
    }

    async function deleteProduct() {
        await axios.delete('/api/products?id='+id);
        goBack();

    }
  
    return (
      <Layout>
        <h1 className="text-center">Estas seguro de borrar  
          &nbsp;"{productInfo?.title}"?
        </h1>

        <div className="flex gap-2 justify-center">
        <button 
        onClick={deleteProduct}
        className="btn-red">SI</button>
        <button 
        onClick={goBack}
        className="btn-default">NO</button>

        </div>
      </Layout>
    );
  }