import { connect } from 'react-redux';
import Table from '../components/Table';
//import { getRootItems } from '../selectors';

export default connect(state => ({
    items: [{ id: 1, a: 'foo', b: 'foo' }, { id: 2, a: 'bar', b: 'bar' }],
    columns: [{ name: 'a', renderItem: item => item.a }, { name: 'b', renderItem: item => item.b }],
}))(Table);
