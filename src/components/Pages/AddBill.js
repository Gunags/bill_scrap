import React from "react";
import { useState } from "react";
import DatePicker from "react-date-picker";

export const AddBill = () => {
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "Product1", text: "Product 1", price: "254" },
    { value: "Product2", text: "Product 2", price: "520" },
    { value: "Product3", text: "Product 1", price: "485" },
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [selectedPrice, setSelectedPrice] = useState(options[0].price);
  const [value, onChange] = useState(new Date());

  const handleChange = (event) => {
    setSelected(event.target.value);
    setSelectedPrice(event.target.value);
  };
  return (
    <>
      <div className="d-flex justify-content-center text-white ">
        <form>
          <div className="mb-3">
            <label htmlFor="invoiceNumber" className="form-label">
              Enter Invoice Number
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="companyname" className="form-label">
              Company Name
            </label>
            <input type="text" className="form-control" id="companyName" />
          </div>
          <div>
            <label htmlFor="selectyouritem" className="form-label">
              Select Date
            </label>
            <DatePicker
              className="form-select"
              aria-label="Default select example"
              onChange={onChange}
              value={value}
            />
          </div>
          <div>
            <label htmlFor="selectyouritem" className="form-label">
              Select the Product Name
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selected}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.price}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className="input-group mb-3">
            <span className="input-group-text">₹</span>
            <input type="text" className="form-control" value={selectedPrice} />

            <span className="input-group-text"> .00</span>
          </div>

          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
