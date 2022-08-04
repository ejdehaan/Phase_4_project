function CategoryItem({title, image, link, category}) {
  
    
    return (
    <div>
        <div className="category-item">
            <h2>{title}</h2>
            <h4>Category : {category}</h4>
            <a href={link}>View {category} here!</a>
            <br/>
            <br/>
            <img src={image} width="450" height="400" />
        </div>
    </div>
    )
}

export default CategoryItem