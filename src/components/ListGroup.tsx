function ListGroup() {
  let staffs = [
    'Nne-Ohe', 'A Death in Ngwo','From Ngwo To Oxford','Oyiwe; My mountain','A father Affair','Dear Ada-Ubo', 'Dont Tell daddy what happened in Ngwo',]
    staffs = [];
    if (staffs.length === 0)
      return (
     <>
         <h1>List</h1>
         <p>No item found</p>
     </>
         
  );
    return ( 
    <> 
    <h2 className="content">My Works</h2> 
    {staffs.length === 0 ? <p> No Item found</p> : null}
    <ul className="list-group, content">
            {staffs.map((staff, index) => <li className="List-group-item" key={staff} onClick={(event) => console.log(event) }>{staff}</li>)}
  </ul> 
 </>
);
}

export default ListGroup;                                             