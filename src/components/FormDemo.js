import { useState } from "react";

export default function FormDemo() {
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    terms: false,
    job: "",
    state:""
  });

  const handleChange = (e) => {
    const { value, type, name, checked } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  return (
    <div className="container  mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              name="firstName"
              onChange={handleChange}
              value={FormData.firstName}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              name="lastName"
              onChange={handleChange}
              value={FormData.lastName}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              name="email"
              onChange={handleChange}
              value={FormData.email}
            />
          </div>
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="terms"
            onChange={handleChange}
            id="terms"
            value={FormData.terms}
          />
          <label className="form-check-label" htmlFor="terms">
            Default checkbox
          </label>
        </div>

        <div className="row">
          <div className="col">Job Status</div>
          <div className="col">
            {" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="job"
                checked={FormData.job === "Full Time"}
                onChange={handleChange}
                value="Full Time"
                id="fulltime"
              />
              <label className="form-check-label" htmlFor="fulltime">
                Full-Time
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="job"
                checked={FormData.job === "Part Time"}
                onChange={handleChange}
                value="Part Time"
                id="parttime"
              />
              <label className="form-check-label" htmlFor="parttime">
                Part-Time
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="job"
                checked={FormData.job === "Unemployed"}
                onChange={handleChange}
                value="Unemployed"
                id="unemployed"
              />
              <label className="form-check-label" htmlFor="unemployed">
                Unemployed
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select" onChange={handleChange} name="state" value={FormData.state} >
              <option value="">Choose...</option>
              <option value="Gujarat" >Gujarat</option>
              <option value="Maharashtra" >Maharashtra</option>
              <option value="Rajasthan" >Rajasthan</option>
              <option value="Delhi" >Delhi</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
