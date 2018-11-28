import { connect } from 'react-redux';

import TextDisplay from '../components/TextDisplay';

const mapStateToProps = state => ({
    textList: state.text.map(text => (text + '!!!!!'))
});

export default connect(mapStateToProps)(TextDisplay);