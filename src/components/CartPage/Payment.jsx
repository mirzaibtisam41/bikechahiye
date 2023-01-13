import React, { useState, useEffect } from "react";
import commaNumber from "comma-number";

const Payment = ({ storeCart }) => {
  const discount = 0;
  const deliverCharges = 100;

  const [totalPayment, setPayment] = useState(0);

  useEffect(() => {
    calculatePayment();
  }, [storeCart]);

  const calculatePayment = () => {
    const payment = storeCart?.reduce((acc, next) => {
      return acc + next?.product?.price * next?.count;
    }, 0);
    setPayment(payment);
  };

  return (
    <div className="bg-white payment-container border">
      <div className="py-3 px-4 border-bottom">
        <span style={{ fontSize: "large" }} className="text-muted">
          PRICE DETAILS
        </span>
      </div>
      <div className="border-bottom py-3 px-4">
        <section className="d-flex justify-content-between py-2">
          <span>Your Bill</span>
          <span className="text-green-500">
            {" "}
            Rs {commaNumber(totalPayment)}
          </span>
        </section>
        <section className="d-flex justify-content-between py-2">
          <span>Discount</span>
          <span className="text-green-500">- Rs {commaNumber(discount)}</span>
        </section>
        <section className="d-flex justify-content-between py-2">
          <span>Delivery Charges</span>
          <span>Rs {commaNumber(deliverCharges)}</span>
        </section>
      </div>
      <div className="py-2 px-4 text-red-500 border-bottom">
        <section className="d-flex justify-content-between py-2">
          <span>Total Amount</span>
          <span>
            Rs {commaNumber(totalPayment - discount + deliverCharges)}
          </span>
        </section>
      </div>
      <div className="px-4">
        <section className="d-flex justify-content-center py-2">
          <span className="text-green-600">
            <button className="btn btn-danger">Pay Amount</button>
          </span>
        </section>
      </div>
    </div>
  );
};

export default React.memo(Payment);
