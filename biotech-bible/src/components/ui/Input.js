import styled from "styled-components";
// import { render } from "react-dom";
// import { motion } from "framer-motion"
import React, { useState } from 'react';
import { useField } from 'formik';

const Input = ({ label, locked, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [active, setActive] = useState((locked && props.active) || false);

  const changeValue = (event) => {
    helpers.setValue(event.target.value);
    helpers.setError("");
  };

  const fieldClassName = `field ${(locked ? active : active || field.value) && "active"} ${locked && !active && "locked"}`;

  return (
    <div className={fieldClassName}>
      <input
        {...field}
        placeholder={label}
        onChange={changeValue}
        onFocus={() => !locked && setActive(true)}
        onBlur={() => !locked && setActive(false)}
      />
      <label htmlFor={field.name} className={meta.error && "error"}>
        {meta.error || label}
      </label>
    </div>
  );
};

export {Input};

// const Input = ({ field, form, ...props }) => {
//     <input {...field} {...props} />
// };

// class Input extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         active: (props.locked && props.active) || false,
//         value: props.value || "",
//         error: props.error || "",
//         label: props.label || "Label"
//       };
//     }
  
//     changeValue(event) {
//       const value = event.target.value;
//       this.setState({ value, error: "" });
//     }
  
//     handleKeyPress(event) {
//       if (event.which === 13) {
//         this.setState({ value: this.props.predicted });
//       }
//     }
  
//     render() {
//       const { active, value, error, label } = this.state;
//       const { predicted, locked } = this.props;
//       const fieldClassName = `field ${(locked ? active : active || value) &&
//         "active"} ${locked && !active && "locked"}`;
  
//       return (
//         <div className={fieldClassName}>
//           {active &&
//             value &&
//             predicted &&
//             predicted.includes(value) && <p className="predicted">{predicted}</p>}
//           <input
//             id={1}
//             type="text"
//             value={value}
//             placeholder={label}
//             onChange={this.changeValue.bind(this)}
//             onKeyPress={this.handleKeyPress.bind(this)}
//             onFocus={() => !locked && this.setState({ active: true })}
//             onBlur={() => !locked && this.setState({ active: false })}
//           />
//           <label htmlFor={1} className={error && "error"}>
//             {error || label}
//           </label>
//         </div>
//       );
//     }
//   }

// everything is the same, exept is styles with the field2 class
class Input2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        active: (props.locked && props.active) || false,
        value: props.value || "",
        error: props.error || "",
        label: props.label || "Label"
      };
    }
  
    changeValue(event) {
      const value = event.target.value;
      this.setState({ value, error: "" });
    }
  
    handleKeyPress(event) {
      if (event.which === 13) {
        this.setState({ value: this.props.predicted });
      }
    }
  
    render() {
      const { active, value, error, label } = this.state;
      const { predicted, locked } = this.props;
      const fieldClassName = `field2 ${(locked ? active : active || value) &&
        "active"} ${locked && !active && "locked"}`;
  
      return (
        <div className={fieldClassName}>
          {active &&
            value &&
            predicted &&
            predicted.includes(value) && <p className="predicted">{predicted}</p>}
          <input
            id={1}
            type="text"
            value={value}
            placeholder={label}
            onChange={this.changeValue.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            onFocus={() => !locked && this.setState({ active: true })}
            onBlur={() => !locked && this.setState({ active: false })}
          />
          <label htmlFor={1} className={error && "error"}>
            {error || label}
          </label>
        </div>
      );
    }
  }

export {Input2};