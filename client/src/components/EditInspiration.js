import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function EditInspiration({ currentinspo, handleUpdateInspo }) {


    const {title, image, link, category, id} = currentinspo

    const [formData, setFormData] = useState({
        title: title,
        image: image,
        link: link,
        category: category
    })

    const history = useHistory()

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}))
    }

    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/posts/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }) 
        .then(resp => resp.json())
        .then(newInspo => handleUpdateInspo(newInspo));
        history.push("/add-inspiration")
    }

 
    return (
        <div>
            <div>
                <form className='form' autoComplete="off" onSubmit={handleSubmit}>
                    <h3 className='form-header'>Edit Inspiration!</h3>
                    <label>Title  </label>
                    <input 
                        name="title"
                        onChange={handleChange}
                        value={formData.title}
                        />
                        

                        <br></br>
                        <br></br>

                    <label>Image  </label>
                    <input 
                        name="image"
                        onChange={handleChange}
                        value={formData.image}
                        >
                        </input>

                        <br></br>
                        <br></br>

                    <label>Link  </label>
                    <input 
                    name="link"
                    onChange={handleChange}
                    value={formData.link}
                    >
                    </input>

                        <br></br>
                        <br></br>
                    {/*<select onChange={handleChange}>
                        <option value="1">Decorations</option>
                        <option value="2">Dress</option>
                        <option value="3">Hair</option>
                        <option value="4">Accessories</option>
                        <option value="5">Flowers</option>
                        <option value="6">Venue</option> 
                    </select>*/}

                    <label>Category  </label>
                    <input 
                        name="category"
                        onChange={handleChange}
                        value={formData.category}
                        >
                        </input>

                        <br></br>
                        <br></br>
                    <button className='box' type="submit">Edit Inspiration!</button>
                </form>
                <br/>
            </div>
        </div>
    )
}

export default EditInspiration