import { Link, useHistory } from "react-router-dom"


function CategoryItem({title, id, image, link, category, onDeleteInspo, handleGrabInspoId}) {
  
    const history = useHistory()

    const handleDelete= () => {
        fetch(`/posts/${id}`, {
          method: "DELETE",
        });
        onDeleteInspo(id)
      }
    
    return (
        <div className="category-item">
            <h2>
                {title}
                <br></br>
                <button className="button" onClick={handleDelete}>X</button>
                <Link to={`/inspirations/${id}/edit`}>
                    <button className="button" onClick={() => handleGrabInspoId(id)}>✎</button>
                </Link>
            </h2>
            <h4>Category : {category}</h4>
            <a href={link}>View {category} here!</a>
            <br/>
            <br/>
            <img className="cat-item-img" src={image} alt="stuff"/>
        </div>
    )
}

export default CategoryItem