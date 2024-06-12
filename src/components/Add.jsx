import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {

const [data,changedata]=useState(
    {
        "firstname":"",
        "lastname":"",
        "email":"",
        "mobile":"",
        "price":""
    }
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    axios.post("http://localhost:8081/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success") {

                alert("add successfully")
                
            } else {
                alert("error")
                
            }
        }
    )
    console.log(data)

}

  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row">
    
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">First Name</label>
    <input type="text" className="form-control" name="firstname" value={data.firstname} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Last Name</label>
    <input type="text" className="form-control" name="lastname" value={data.lastname} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Email</label>
    <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Mobile</label>
    <input type="text" className="form-control" name="mobile" value={data.mobile} onChange={inputHandler}/>


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Price</label>
    <input type="text" className="form-control" name="price" value={data.price} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <button className="btn btn-success" onClick={readValue}>Submit</button>
    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Add