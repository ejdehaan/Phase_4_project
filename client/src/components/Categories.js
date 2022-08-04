import CategoryItem from './CategoryItem'

function Categories({inspo}) {


  
  function renderInspo() {
    return inspo.map((inspo) => 
    <CategoryItem key={inspo.id} {...inspo} />)
  }

  return (
    <div>
        <div className='category'>
          <h4>Categories</h4>
          <button className='button'>All</button>
          <div/>
          <button className='button'>Venue</button>
          <div/>
          <button className='button'>Dresses</button>
          <div/>
          <button className='button'>Decorations</button>
          <div/>
          <button className='button'>Hair/Makeup</button>
          <div/>
          <button className='button'>Party Favors</button>
        </div>
        <br/>
        <ul>
          {inspo && <div>{renderInspo()}</div>}
        </ul>
    </div>
  )
}

export default Categories