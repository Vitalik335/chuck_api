import * as React from "react";
import {Card, Col, Button} from 'antd';
import {connect} from "react-redux";
import _ from "lodash";
import {getJokeFromCategoriesAsync} from "../redux/actions/getJokeFromCategoriesAsync";
import {useState} from "react";
import {IoMdHeartEmpty, IoMdHeart} from 'react-icons/io';
import {addJokeStore, deleteJokeStore} from "../redux/actions/favoriteJoke";

const style = {background: '#0092ff', width: '100%',};
const indentsAndHeight = {marginTop: '10px', height: '70px', overflowY: 'auto'};
const indentsCards = {padding: '10px'};
const indentsCard = {marginTop: '10px'};

function Cards(props) {
    const [current, setCurrent] = useState(false);

    const handleClickJokeCategories = () => {
        props.getJokeFromCategoriesAsync(props.item);
        setCurrent(current => true);
    };

    const handleClickAddFavorite = () => {
        props.addJokeStore(props.jokeFromCategories[props.item])
    };

    const handleClickRemoveFavorite = () => {
        props.deleteJokeStore(props.jokeFromCategories[props.item])
    };

    return (
        <>
            <Col xs={24} sm={24} md={12} lg={6} xl={6} className="gutter-row" style={indentsCards}>
                <Card size="small" title={props.item} style={indentsCard}>
                    <Button type="primary"
                            onClick={handleClickJokeCategories}
                            style={style}>
                        {
                            current ? `Other joke` : `Get joke`
                        }
                    </Button>
                    {
                        props.jokeFromCategories[props.item]?.value.length ?
                            <p style={indentsAndHeight}>
                                {
                                    props.jokeFromCategories[props.item]?.value
                                }
                                {
                                    props.jokeFromCategories[props.item]?.value ?
                                        _.find(props.favoriteJoke, ['id', props.jokeFromCategories[props.item]?.id]) ?
                                            <IoMdHeart onClick={handleClickRemoveFavorite}/>
                                            : <IoMdHeartEmpty onClick={handleClickAddFavorite}/> : null
                                }
                            </p>
                            : null
                    }
                </Card>
            </Col>
        </>
    );
}

function mapStateToProps(state) {
    return {
        jokeFromCategories: state.getJokeFromCategoriesReducer,
        favoriteJoke: state.addJokeStoreReducer.favoriteJoke
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getJokeFromCategoriesAsync: (jokeFromCategories) => dispatch(getJokeFromCategoriesAsync(jokeFromCategories)),
        addJokeStore: (joke) => dispatch(addJokeStore(joke)),
        deleteJokeStore: (joke) => dispatch(deleteJokeStore(joke))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);