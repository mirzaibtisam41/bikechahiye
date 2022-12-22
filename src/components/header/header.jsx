import React from 'react';
import "../css/component.css"
const Header = () => {
  return (
    <header className='row p-2'>
      <div className='col-2 d-flex align-items-center justify-content-center' >
    
        <img src="/images/pkBikes.png" alt='PK Bikes' style={{width:'180px', height:'150px'}}/>
      </div>
      <div className='col-10'>
          <div className='col-11'>
            <div className='row p-2 d-flex justify-content-between m-2'>
              <div className='col-8 d-flex align-items-center'>
                <input style={{backgroundColor: "lightGray", width: "90%"}} class="form-control" type="text" placeholder="c"/>
              </div>
              <div className='col-2 d-flex align-items-center header-icon'>
                <i class="bi bi-suit-heart"></i>
                <i class="bi bi-basket3"></i>
                <i class="bi bi-menu-button-wide"></i>
              </div>
               <div class="nav-item  dropdown bold col d-flex align-items-center justify-content-end" >
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                login/Sign up
                </a>
              </div>
            </div>
          </div>
          <div className='col-11'>
            <div className='row'>
              <nav class="col p-0 navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-item nav-link m-2 bold" href="#">Home</a>
                    <a class="nav-item nav-link m-2 bold" href="#">Brand</a>
                    <a class="nav-item nav-link m-2 bold" href="#">Sale</a>
                    <a class="nav-item nav-link m-2 bold" href="#">Collections</a>
                    <a class="nav-item nav-link m-2 bold" href="#">Vendors</a>
                    <a class="nav-item nav-link m-2 bold" href="#">Blogs</a>
                    <a class="nav-item nav-link m-2 bold" href="#">Help & Support</a>
                  </div>
                </div>
              </nav>

              <div className='col-2 d-flex align-items-center justify-content-end' >
              
                <button className='p-2 d-flex align-items-center bold' style={{height: "40px",backgroundColor: "white" ,border: "2px solid red", borderRadius: "10px"}}>Sell with us</button>
              </div>
            </div>  
          </div>
      </div>
    </header>
  );
}

export default Header;
