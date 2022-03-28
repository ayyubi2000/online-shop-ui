import {ErrorMessage, useField} from "formik";
import React from "react";

const TextField = ({label , ...props}) => {
    const [field , meta ] = useField(props);
    return (
        <>
        <div className="mb-2">
            <label htmlFor="field.name">
                {label}
            </label>
        </div>
          <input className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`}
          {...field}{...props}
          autoComplete="off"
          />
          <ErrorMessage component="div" className="error" name={field.name} />
        </>
    );
}

export default TextField;