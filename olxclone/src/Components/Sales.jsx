import React ,{useState,useEffect} from 'react'
import axios from "axios"
import "../Stylesheet/Sales.css"

const Sales = () => {
    const[mounted, setMounted]=useState(true)
    const[product, setProducts]=useState([])

    useEffect ( ()=>{
        async function getData(){
            const {data}= await axios.get("http://localhost:7878/api/products")

            if (mounted) {
                setProducts(data)
                localStorage.setItem("data",JSON.stringify(data))
            }
        return ()=>{
            setMounted(false)
        }}
        getData()
    }, [mounted]
    )
    console.log(product);
  return  <div className='prodCon'>
    {
        product && <div className="Products">
            {
                product.map(item=>{
                    return <div className="Item">
                        <img src={item.image} alt="" srcset="" />
                        <h4>{item.name}</h4>
                        <h3>{`Owner: ${item.owner}` }</h3>
                    </div>
                })
            }
        </div>
    }
  </div>
}

export default Sales