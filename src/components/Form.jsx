import React from 'react';
import { useForm } from '../hooks/AllHooks';


const MyForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.username) errors.username = 'Required';
    return errors;
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useForm(
    { username: '' },
    validate
  );

  const onSubmit = async (values) => {
    // Simulate a form submission
    console.log('Form submitted:', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
