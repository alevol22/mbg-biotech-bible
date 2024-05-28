import React, {useState} from 'react'
import { Input } from './ui/Input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form } from 'formik';

const validate = values => {
  const errors = {};
  return errors;
};

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

return <div>

<Formik
        initialValues={{ code: '' }}
        validate={validate}
        onSubmit={values => {
          // TODO: implement login functionality here
          console.log(values);
        }}>
          <Form>
<Input
   type="search"
   label="Search here"
   onChange={handleChange}
   value={searchInput} 
   name="search" />
<FontAwesomeIcon icon={faSearch}
style={{ position: 'absolute', top: '4.5%', right: '9%', transform: 'translateY(-50%)', cursor: 'pointer' }}/>
</Form>
</Formik>
  </div>
};

export default SearchBar;