import React from 'react'
import "./searchbar.css"
export const SearchBar = () => {
    return (
        <div className="container mt-5">

        <div className="row d-flex justify-content-center">

            <div className="col-md-12">

                <div className="card p-3  py-4">

                    <h5>An Easier way to find your Bike</h5>

                    <div className="row g-4 mt-2">

                        <div className="col-md-3">

                            <div className="dropdown">
                              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                Choose as city
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Rural</a></li>
                                <li><a className="dropdown-item" href="#">Urban</a></li>
                                <li><a className="dropdown-item" href="#">All</a></li>
                              </ul>
                            </div>
                            
                        </div>

                        <div className="col-md-6">

                            <input type="text" className="form-control" placeholder="Enter address e.g. street, city and state or zip"/>
                            
                        </div>

                        <div className="col-md-2 px-2">

                            <button className="btn btn-secondary btn-block">Search Results</button>
                            
                        </div>
                        
                    </div>


                    <div className="mt-3">
                        
  {/* <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" className="advanced">
    Advance Search With Filters <i className="fa fa-angle-down"></i>
  </a> */}
 

{/* <div className="collapse" id="collapseExample">
  <div className="card card-body">
      
     <div className="row">

        <div className="col-md-4">

            <input type="text" placeholder="Property ID" className="form-control">
            
        </div>


        <div className="col-md-4">

            <input type="text" className="form-control" placeholder="Search by MAP">
            
        </div>
         

         <div className="col-md-4">

            <input type="text" className="form-control" placeholder="Search by Country">
            
        </div>
         
     </div>

  </div>
</div> */}


                    </div>


                    


            
                </div>
                
            </div>
            
        </div>

        
        


    </div>
    )
}
