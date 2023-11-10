//https://codesandbox.io/s/formik-v2-tutorial-final-ge1pt?file=/src/index.js
//https://formik.org/docs/tutorial#schema-validation-with-yup
//https://github.com/stackworx/formik-mui
//https://formik.org/docs/examples/with-material-ui

import { useFormik } from "formik";
import "./App.css";

function App() {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      //send to api
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <br />
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <br />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
