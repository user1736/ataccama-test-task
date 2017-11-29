import {connect} from 'react-redux';
import Table from '../components/Table';
import {getRootViewData} from '../selectors';

export default connect(state => getRootViewData(state))(Table);
