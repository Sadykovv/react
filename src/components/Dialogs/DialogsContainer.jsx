import { sendMessageActionCreator ,updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux';
import Dialogs from './Dialogs';



const mapStateToProps = (state) => 
{
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => 
{
    return {
        updateNewMessageTextActionCreator: (text) =>
        {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessageActionCreator: () => 
        {
            dispatch(sendMessageActionCreator());
        }
    }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

