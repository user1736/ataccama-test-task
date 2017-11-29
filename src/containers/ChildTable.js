import { connect } from 'react-redux';
import Table from '../components/Table';
import { getChildViewData } from '../selectors';

export default connect((state, props) => getChildViewData(state, props))(Table);
