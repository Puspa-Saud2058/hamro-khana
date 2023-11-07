'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

 const Home = () => (
  <div>
    <Image
      src="/images.png"
      width={400}
      height={400}
      alt="Picture of the hamro khana"
    />
    <h1>Signup</h1>
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
        address:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="phoneNumber"  placeholder="phoneNumber" /> 
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="email" type="email" placeholder="email" />
          {errors.email && touched.email ? (
            <div>{errors.email}</div>
          ) : null}
             <Field name="address" type="address" placeholder="address" />
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null}
             <Field name="password" type="email" placeholder="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
         already register ? <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Home