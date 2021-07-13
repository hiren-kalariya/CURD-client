import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from ".././utils/AxiosInstance";
const ShowInfo = () => {
  const [info, setInfo] = useState([]);
  const [flag, setFlag] = useState(false);

  async function findData() {
    try {
      const res = await axios.get("/");
      const data = await res.data.data;
      setInfo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    findData();
  }, [flag]);

  let history = useHistory();

  const deleteData = async (id) => {
    console.log(id);
    setFlag(false)
    const res = await axios.delete("/id");
    const data = await res.data;

    if (data.status === "success") {
      alert("info delete sucessfully ");
      history.push("/");
      setFlag(true);
    } else {
      alert("Something wents wrong");
    }
  };

  const editData = (id) => {
    history.push(`/${id}`);
  };
  return (
    <>
      <div className="container">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">UserName</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {info.map((el) => {
              return (
                <tr key={el._id}>
                  {/* <th scope="row">{el.findIndex(info)}</th> */}
                  <td>{el.username}</td>
                  <td>{el.mobile}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => editData(el._id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary ms-1"
                      onClick={() => deleteData(el._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowInfo;
