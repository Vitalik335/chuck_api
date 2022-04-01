import * as React from "react";
import {useState} from "react";
import {connect} from "react-redux";
import {Input, message, Button} from 'antd';
import {deleteJokeStore, editJokeStore} from "../redux/actions/favoriteJoke";
import {IoIosBrush, IoMdHeart, IoIosCheckmark, IoIosClose} from 'react-icons/io';

const {TextArea} = Input;

const styleInlineText = {flex: '10', marginTop: '30px', marginRight: '10px'};
const styles = {width: '100%', marginTop: '30px'};
const styleArea = {width: '90%', marginTop: '10px', marginRight: '10px'};
const styleText = {marginRight: '10px'};

function FavoriteTable(props) {

    const [value, setValue] = useState(props.item.value);
    const [isToggled, setIsToggled] = React.useState(false);
    const [textBeforeChange, getTextBeforeChange] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClickRemoveFavorite = () => {
        props.deleteJokeStore(props.item);
    };

    const handleClickEditText = () => {
        getTextBeforeChange(props.item.value);
        setIsToggled(!isToggled);
    };

    const handleClickClose = () => {
        setValue(textBeforeChange);
        setIsToggled(!isToggled);
    };

    const handleClickSubmit = () => {
        setIsToggled(!isToggled);
        props.item.value = value;
        props.editJokeStore(props.item);
        message.success('Joke changed');
    };

    return (
        <>
            {

                <span style={styles}>
                    <span style={styleInlineText}>
                        {
                            !isToggled ?
                                <span style={styleText}>
                                    {props.item.value}
                                </span> :
                                <TextArea rows={2} style={styleArea} onChange={handleChange} value={value}/>
                        }
                        <span>
                            {
                                !isToggled ?
                                    <>
                                        <Button style={styleText} type="primary" onClick={handleClickRemoveFavorite}
                                                icon={<IoMdHeart/>}/>
                                        <Button type="primary" onClick={handleClickEditText} icon={<IoIosBrush/>}/>
                                    </>
                                    :
                                    <>
                                        <Button type="primary" onClick={handleClickSubmit} style={styleText}
                                                icon={<IoIosCheckmark size={25}/>}/>
                                        <Button type="primary" danger onClick={handleClickClose}
                                                icon={<IoIosClose size={25}/>}/>
                                    </>
                            }
                        </span>
                    </span>
                </span>
            }
        </>
    );
}

function mapStateToProps(state) {
    return {
        favoriteJoke: state.addJokeStoreReducer.favoriteJoke,
        editJoke: state.addJokeStoreReducer.favoriteJoke
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteJokeStore: (joke) => dispatch(deleteJokeStore(joke)),
        editJokeStore: (joke) => dispatch(editJokeStore(joke)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteTable);