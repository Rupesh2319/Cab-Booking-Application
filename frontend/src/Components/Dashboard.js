import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const baseurl = "http://localhost:8080/api";
  const [bookData, setBookData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`${baseurl}/book_reqs`).then((response) => {
      setBookData(response.data._embedded.book_reqs);
    });
  }, []);

  useEffect(() => {
    axios.get(`${baseurl}/users`).then((response) => {
      setUser(response.data._embedded.users);
    });
  }, []);

  // const handleApprove = () => {
  //   axios.put(`http://localhost:8080/api/book_reqs`).then((response) => {
  //     console.log(response);
  //   });
  // };

  // const handleApproveClick = () => {
  //   handleApprove();
  // };

  const details = bookData.map((item) => {
    const userName = user.find((u) => u.id === item.user_id);
    function onApprove() {
      axios.put(`http://localhost:8080/api/book_req/approve/${item.id}`).then((response) => {
        console.log(response);
      });
      window.location.reload();
    }
    function onReject() {
      axios.put(`http://localhost:8080/api/book_req/reject/${item.id}`).then((response) => {
        console.log(response);
      });
      window.location.reload();
    }
    function onDelete() {
      axios.delete  (`http://localhost:8080/api/book_req/${item.id}`).then((response) => {
        console.log(response);
      });
      window.location.reload();
    }
    return (
      <tr className="admin_row" key={item.id}>
        <td>
          <h2>{userName ? userName.name : "un"}</h2>
        </td>
        <td>
          <h2>{item.starting_point}</h2>
        </td>
        <td>
          <h2>{item.ending_point}</h2>
        </td>
        <td>
          <h2>{item.cab_type}</h2>
        </td>
        <td>
          <h2>{item.booking_status}</h2>
        </td>
        {/* <td>
        <select name="Booking_status">
           <option value="Pending">Pending</option>
           <option onSelect={onApprove} value="Approve">Approve</option> 
           <option onSelect={onReject} value="Reject">Reject</option>
        </select>
        </td> */}
        <td>
          <button onClick={onApprove}>Approve</button>
        </td>
        <td>
          <button onClick={onReject}>Reject</button>
        </td>
        <td>
          <button onClick={onDelete}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="admin">
      <table>
        <tbody>
          <tr className="admin_row admin_tittle">
            <th>
              <h2>Username</h2>
            </th>
            <th>
              <h2>Starting point</h2>
            </th>
            <th>
              <h2>Ending Point</h2>
            </th>
            <th>
              <h2>Cab Type</h2>
            </th>
            <th>
              <h2>current status</h2>
            </th>
            {/* <th>
              <h2>Booking status</h2>
            </th> */}
            <th>
              <h2>Approve</h2>
            </th>
            <th>
              <h2>Reject</h2>
            </th>
            <th>
              <h2>Delete</h2>
            </th>
          </tr>

          {details}
        </tbody>
      </table>
    </div>
  );
}
