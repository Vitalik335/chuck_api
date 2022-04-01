import * as React from "react";
import {Link} from "react-router-dom";
import _ from "lodash";
import {Button} from "antd";

function Home() {
    let requirements = [
        'The web app must have at least 2 routes. For example: "Jokes page" and "About page" (about yourself)',
        'It should be possible to get jokes by category and also randomly',
        'Received data must be stored in a redux store.',
        'It should also be possible to save jokes.',
        'Saved jokes should be shown in different place, in a table for example.',
        'It should be possible to edit and delete saved jokes.',
        'There must not be any duplicate jokes.'
    ];
    return (
        <>
            <div className="indents">
                <h1>Front-end test task</h1>
                <span><b>Goal:</b> Create a web application using React.JS. The web application will be pulling jokes (facts 😉) from the Chuck Norris API.
                    All documentation for API is available at this link https://api.chucknorris.io/</span>
            </div>
            <div className="indents">
                <span className="indents">
                    <b>Requirements:</b>
                    <ol className="list-numbered indents">
                        {
                            _.map(requirements, (item,index)=>{
                                return <li key={index}>{item}</li>;
                            })
                        }
                    </ol>
                </span>
            </div>
            <Button type="primary"><Link to="/jokes">Jokes</Link></Button>
        </>
    );
}

export default Home;