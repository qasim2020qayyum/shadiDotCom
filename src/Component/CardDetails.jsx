import React from 'react'
import { useParams } from 'react-router-dom'
function CardDetails({products}) {

    const params=useParams();

const {title,id,price,description}=products
const filtered=products.filter(obj=>{
  return obj.id == params.id
})

const fArray = 0;
  return (
    <>
<h1>{filtered[fArray].title}</h1>
<img src={filtered[fArray].image} className=""/>
<p>{filtered[fArray].price}</p>
  </>
  )
}


export default CardDetails