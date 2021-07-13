import React, { useState, useEffect } from "react";
import axios from ".././utils/AxiosInstance";
import { useParams, useHistory } from "react-router-dom";
const EditInfo = () => {
  const [info, setInfo] = useState({
    username: "",
    mobile: "",
  });

  let { id } = useParams();
  let history = useHistory();

  async function findData() {
    try {
      
      const res = await axios.get(`/${id}`);
      const data = await res.data.data;
      setInfo(data);
    
    } catch (error) {
      console.log(error);
    }
  }
  
  const change = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  useEffect(() => {
    findData();
  }, []);


  const submit = async (e) => {
 
    e.preventDefault();
    try {
     
      const res = await axios.patch(`/${id}`, info);
      const data = await res.data;

      if (data.status === "success") {
        alert("user edit sucessfully ");
        history.push("/");
      } else {
        alert("Something wents wrong");
      }
    } catch (error) {
      alert(" duplicate not aloud");
    }
  };
  return (
    <div>
      <>
        <div className="container">
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="username"
                value={info.username}
                onChange={change}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                name="mobile"
                value={info.mobile}
                onChange={change}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    </div>
  );
};

export default EditInfo;
