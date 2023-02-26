import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const initialValues = {
  username: " ",
  email: " ",
  age: " ",
};

const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(2, "Username must be a minimum of two characters.")
    .max(20, "Username must be a maximum of 20 characters.")
    .lowercase()
    .trim(),
  email: yup
    .string()
    .email()
    .required()
    .max(50, "Email must be less than 50 characters."),
  age: yup
    .number()
    .typeError("Please enter a number.")
    .required()
    .integer()
    .positive(),
});

function FirstHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, isSubmitting, errors },
    formState,
  } = useForm({
    mode: "onChange",
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const submitHandler = (values) => {
    console.log(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <p>Please enter your details below:</p>
      <div className="form-row">
        <label htmlFor="username" className="field-name">
          Username:
        </label>
        <input
          id="username"
          type="text"
          name="username"
          {...register("username")}
          aria-invalid={errors.username ? "true" : "false"}
        />
        {errors.username && (
          <label htmlFor="username" role="alert" className="error">
            {errors.username?.message}
          </label>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="email" className="field-name">
          Email:
        </label>
        <input
          id="email"
          type="text"
          name="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <label htmlFor="email" role="alert" className="error">
            {errors.email?.message}
          </label>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="age" className="field-name">
          Age:
        </label>
        <input
          id="age"
          type="text"
          {...register("age")}
          aria-invalid={errors.age ? "true" : "false"}
        />
        {errors.age && (
          <label htmlFor="age" role="alert" className="error">
            {errors.age?.message}
          </label>
        )}
      </div>
      <div className="controls">
        <button type="reset" onClick={reset}>
          Reset
        </button>
        <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default FirstHookForm;
