import Table from "react-bootstrap/Table";
import { DeleteUser, GetUser } from "../../utils/function";


function Contact({ editHandler }) {
  const { contactList } = GetUser();
  return (
    <div className="w-50 ">
      <h3 className="text-center">CONTACTS</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contactList?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.userName}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>
                  <button onClick={() => DeleteUser(item.id)}>
                   X
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      editHandler(
                        item?.id,
                        item?.userName,
                        item?.phone,
                        item?.gender
                      )
                    }
                  >
                  Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Contact;