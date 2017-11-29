import { connect } from 'react-redux';
import Table from '../components/Table';
import { getRootViewData } from '../selectors';
import { onItemDelete } from '../actions';

export default connect(state => getRootViewData(state), { onItemDelete })(Table);
