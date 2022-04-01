import * as React from "react";
import {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import _ from "lodash";
import Cards from "./Cards";
import {Button, Row, Spin} from "antd";
import {getAllCategoriesAsync} from "../redux/actions/getAllCategoriesAsync";

const style = {padding: '10px'};
const centerLoader = {position: 'absolute', top: '40%', left: '49%'};
const indents = {margin: '10px'};

function Jokes(props) {

    useEffect(() => {
        props.getAllCategoriesAsync();
    }, []);

    return (
        <>
            <Button type="primary" style={indents}><Link to="/">Home</Link></Button>
            <Button type="primary" style={indents}><Link to="/favorite">Favorite</Link></Button>
            {
                props.allCategories.length === 0 ?
                    <Spin size="large" style={centerLoader}/> :
                    <Row style={style}>
                        {
                            _.map([...props.allCategories, 'random'], (item) => {
                                return <Cards item={item} key={item.id}/>
                            })
                        }
                    </Row>
            }
        </>
    );
}

function mapStateToProps(state) {
    return {
        allCategories: state.getAllCategoriesReducer.allCategories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllCategoriesAsync: () => dispatch(getAllCategoriesAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);