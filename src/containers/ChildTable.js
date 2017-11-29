import { connect } from 'react-redux';
import Table from '../components/Table';
import { getChildViewData } from '../selectors';
import { onItemDelete } from '../actions';

export default connect((state, props) => getChildViewData(state, props), { onItemDelete })(Table);
