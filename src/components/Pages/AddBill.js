import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import DatePicker from "react-date-picker";
export const AddBill = () => {
  const [value, onChange] = useState(new Date());
  const [SelectValue, setSelectValue] = useState([
    { id: 1, itemName: "Item 1", price: 254 },
    { id: 2, itemName: "Item 2", price: 202 },
    { id: 3, itemName: "Item 3", price: 152 },
  ]);
  return (
    <div>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="invoice" placeholder="Invoice Number" size="sm" />
        <br />
        <Form.Text>Bill Date</Form.Text>
        <DatePicker onChange={onChange} value={value} />
        <br />
        <Form.Select aria-label="Default select example" size="sm">
          <option>Select the Item</option>
          <option value={1}>{SelectValue[0].itemName}</option>
          <option value={2}>{SelectValue[1].itemName}</option>
          <option value={3}>{SelectValue[2].itemName}</option>
        </Form.Select>
        <InputGroup className="mb-3">
          <InputGroup.Text>₹</InputGroup.Text>
          <Form.Control aria-label="Amount (to the nearest rupees)" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
      </Form.Group>
    </div>
  );
};
