import React, {PropTypes} from 'react';
import './Add.css';

const Form  = (props) => {
  return (<form className="sub-container add-container" onSubmit={(e)=> {e.preventDefault(); props.onSubmit();}}>
    <h3>{props.title}</h3>
    { props.children }
  </form>);
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
