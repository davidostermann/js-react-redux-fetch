import {connect} from 'react-redux';
import ColorList from '../components/list/ColorList';
import {changeColor} from '../actions';

const mapStateToProps = (state) => {
  return {
    colors: state.colors
  };
};

const mapDispatchToProps = {
  changeColor
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList);

export default ListContainer;
