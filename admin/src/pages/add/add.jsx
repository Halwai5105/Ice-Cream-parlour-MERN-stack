import React, { useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const add = ({url}) => {
  
  const [image, setImage] = useState(false);
  const [data,setData] = useState({
    name: "",
    description: "",
    price:"",
    category:"Ice-Cream"    
  })
  const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData)

    if(response.data.success){
      setData({
        name: "",
        description: "",
        price:"",
        category:"Ice-Cream"    
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
      }
  }

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-image-upload flex-col">
              <p>Upload image</p>
              <label htmlFor="image" className="">
                <img src={assets.upload_area} alt="" />
              </label>
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" required />
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Enter product name" />
            </div>
            <div className="add-product-description flex-col">
              <p>Product Description</p>
              <textarea onChange={onChangeHandler} value={data.description} name="description" rows="4" placeholder="Enter Product Description" required/>
            </div>
            <div className="add-category-price">
              <div className="add-category flex-col">
                <p>Product Category</p>
                <select onChange={onChangeHandler} name="category" >
                  <option value="Ice-Cream">Ice-Cream</option>
                  <option value="Waffle">Waffle</option>
                  <option value="Milkshake">Milkshake</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Hot Beverages">Hot Beverages</option>
                  <option value="Mocktail">Mocktail</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>
                </select>
              </div>
              <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder="Rupee" required/>
              </div>
            </div>
            <button type="submit" className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default add;