import React from 'react'
import {Link} from "react-router-dom"
function Cards({products}) {
    
  return (
    <>
    
    <div className="container">
    <div className="d-flex justify-content-evenly">
    {
        products.map((item)=>{
            return(
<div class="card w-25">
  <img src={item.image} class="card-img-top" style={{width:"200px",height:"200px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <Link to={`/${item.id}`} class="btn btn-primary">Check Details</Link>
  </div>
</div>
            )
        })

      }
      </div>
      </div>
      </>
  )

}


export default Cards