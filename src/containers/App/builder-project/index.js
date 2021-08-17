import { connect } from 'react-redux';
import { compose } from 'redux';
import Builder from './builder';
import {getCategoryList} from './action'
import WithCounter from '../../../containers/HighOrderComponent/withCounter'


const mapDispatchToProps = (dispatch) => ({
    getCategoryList: (...args) => dispatch(getCategoryList(...args)),

});

const mapStateToProps = (state) => {
	// const HS = state[REDUCER_KEY_MAP.hs];
	return {
        listData: state.builder.list,
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Builder);
