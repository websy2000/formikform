
import './App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function App() {
  const yupScheme = Yup.object().shape({
    name: Yup.string().min(2, 'To short').max(20, 'To long').required('Enter your name'),
    email: Yup.string().email('Invalid email').required('Enter your email'),
    password: Yup.string().min(2, 'To week').max(15, 'Strong').required('Enter your password')
  })
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: ''
      }}
      validationSchema={yupScheme}
      onSubmit={values => {
        console.log(values);

      }}
    >
      {({ errors, touched }) => (
        <Form className='app_form'>
          <h3>Signup</h3>
          <Field type="text" id="name" name="name" placeholder="Name"
            style={{ border: errors.name && touched.name ? '1px solid red' : '1px solid black' }} />
          {errors.name && touched.name ? <div style={{ color: 'red' }}>{errors.name}</div> : null}

          <Field type="email" id="email" name="email" placeholder="Email"
            style={{ border: errors.email && touched.email ? '1px solid red' : '1px solid black' }} />
          {errors.email && touched.email ? <div style={{ color: 'red' }}>{errors.email}</div> : null}

          <Field type="password" id="password" name="password" placeholder="Password"
            style={{ border: errors.password && touched.password ? '1px solid red' : '1px solid black' }} />
          {errors.password && touched.password ? <div style={{ color: 'red' }}>{errors.password}</div> : null}

          <div className='app_btn'>
            <Field type="submit" id="sumbit" name="submit" />
          </div>
        </Form>
      )}

    </Formik>
  )
}

export default App;
