import * as React from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteJokeStore} from "../redux/actions/favoriteJoke";
import FavoriteTable from "./FavoriteTable";
import {Button, Row} from 'antd';

const style = {padding: '10px', margin: '10px'};
const indents = {margin: '10px'};

function Favorite(props) {
    return (
        <>
            <Button type="primary" style={indents}><Link to="/">Home</Link></Button>
            <Button type="primary" style={indents}><Link to="/jokes">Jokes</Link></Button>
            <Row style={style}>
                {
                    props.favoriteJoke.length ?
                        _.map(props.favoriteJoke, (item) => {
                            return <FavoriteTable item={item}/>
                        }) :
                        <p>Add favorite joke if you want to edit, please !</p>
                }
            </Row>
        </>
    );
}

function mapStateToProps(state) {
    return {
        favoriteJoke: state.addJokeStoreReducer.favoriteJoke
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteJokeStore: (joke) => dispatch(deleteJokeStore(joke))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);