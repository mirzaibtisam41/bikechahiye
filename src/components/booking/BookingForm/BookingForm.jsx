import React from 'react'

const BookingForm = () => {
  return (
    <div className="d-flex m-auto mt-5 mb-5">
      <form className="border col-10 d-block m-auto  p-2">
        <div className="form-row d-flex p-3">
          <div className="form-group col-md-6 p-2">
            {/* <label for="inputEmail4">Email</label> */}
            <input
              type="name"
              className="form-control"
              //   id="inputEmail4"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-md-6 p-2">
            {/* <label for="inputPassword4">Password</label> */}
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-row d-flex m-auto p-3">
          <div className="form-group col-md-4 p-2">
            {/* <label for="inputState">State</label> */}
            <select id="inputState" class="form-control">
              <option selected>Plan...</option>
              <option>Down Payment</option>
              {/* <option>Installment</option> */}
            </select>
          </div>
          <div className="form-group col-md-4 p-2">
            {/* <label for="inputState">State</label> */}
            <select id="inputState" class="form-control">
              <option selected>Brand...</option>
              <option>Honda</option>
              <option>Honda 125(special Edition)</option>
              <option>Yahyma</option>
              <option>Suzuki</option>
              <option>Suzuki 125(special Edition)</option>
              <option>United</option>
              <option>Road Price</option>
              <option>Electric Bike</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group col-md-4 p-2">
            {/* <label for="inputZip">CC</label> */}
            <select id="inputState" class="form-control">
              <option selected>Cc...</option>
              <option>70cc</option>
              <option>100cc</option>
              <option>125cc</option>
              <option>150</option>
              <option>200</option>
              <option>250</option>
              <option>Others</option>
            </select>
          </div>
        </div>
        <div className="form-row d-flex m-auto p-3">
          <div className="form-group col-md-6 p-2">
            {/* <label for="inputZip">CC</label> */}
            <select id="inputState" class="form-control">
              <option selected>Model</option>
              <option>Upcoming</option>
              <option>2022</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group col-md-6 p-2">
            {/* <label for="inputState">State</label> */}
            <select id="inputState" class="form-control">
              <option selected>Payable Payment..</option>
              <option>15000 pkr</option>
              <option>20000 pkr</option>
              <option>25000 pkr</option>
              <option>30000 pkr</option>
              <option>35000 pkr</option>
              <option>40000 pkr</option>
            </select>
          </div>
        </div>
        <div className="form-group d-flex m-auto p-4">
          {/* <label for="inputAddress2">Address</label> */}
          <input
            type="text"
            className="form-control"
            id="inputAddress1"
            placeholder="Permanent Address 1"
          />
        </div>
        <div className="form-group d-flex m-auto p-4">
          {/* <label for="inputAddress2">Address</label> */}
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Permanent Address 2"
          />
        </div>
        <div className="form-row d-flex m-auto p-3">
          <div className="form-group col-md-6 p-2">
            {/* <label for="inputCity">City</label> */}
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="City"
            />
          </div>
          <div className="form-group col-md-4 p-2">
            {/* <label for="inputState">State</label> */}
            <select id="inputState" class="form-control">
              <option selected>Province...</option>
              <option>Punjab</option>
              <option>Sindh</option>
              <option>KPK</option>
              <option>Balochistan</option>
              <option>Azad Jammu Kashmir (AJK)</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group col-md-2 p-2">
            {/* <label for="inputZip">CC</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Postal Code (Optional)"
            />
          </div>
        </div>

        <div className="form-group d-flex m-auto p-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary p-3 mb-3 bold">
          Check Out
        </button>
      </form>
    </div>
  );
}

export default BookingForm
