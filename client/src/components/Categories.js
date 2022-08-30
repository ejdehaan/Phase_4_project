import CategoryItem from './CategoryItem'

function Categories({inspo, onDeleteInspo, handleGrabInspoId}) {


  
  function renderInspo() {
    return inspo.map((inspo) => 
    <CategoryItem onDeleteInspo={onDeleteInspo} key={inspo.id} {...inspo} handleGrabInspoId={handleGrabInspoId}/>)
  }

  return (
    <div>
        <div className='category'>
          <h4>Select Category</h4>
          {/* <button key="All" className='button'>All</button>
          <br></br>
          <button key="Venue" className='button'>Venue</button>

          <button key="Dresses" className='button'>Dresses</button>

          <button key="Decorations" className='button'>Decorations</button>

          <button key="Hair" className='button'>Hair/Makeup</button>

          <button key="PartyFavors" className='button'>Party Favors</button> */}
          <select className='box'>
          <option value="1">Decoration</option>
          <option value="2">Dress</option>
          <option value="3">Hair/Makeup</option>
          <option value="4">Accessory</option>
          <option value="5">Flower</option>
          <option value="6">Venue</option> 
          <option value="7">Party Favor</option> 
          </select>
        </div>
        <br/>
        <ul>
          {inspo && <div>{renderInspo()}</div>}
        </ul>
    </div>
  )
}

export default Categories