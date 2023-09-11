import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter your First Name'),
  lname: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter your Last Name'),

  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your Email'),

  password: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter your Password'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your Email'),

  password: Yup.string().required('Please enter your Password'),
});
