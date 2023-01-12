import React from "react";
import { Table } from "react-bootstrap";
import bills from "./bills.json";
// import bg from "../../Image/billbg1.jpg";

function AllBills() {
  return (
    <div>
      <Table className="text-light">
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Company Name Name</th>
            <th>Date</th>
            <th>Product Names</th>
          </tr>
        </thead>
        {bills.map((bill) => {
          return (
            <tbody>
              <tr>
                <td>{bill.invoiceNumber}</td>
                <td>{bill.companyName}</td>
                <td>{bill.date}</td>
                <td>{bill.productName}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}
export default AllBills;
