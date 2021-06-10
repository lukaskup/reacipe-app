import data from "../api/recipes.json";
import {React} from "react";
import {Link} from 'react-router-dom';

function List() {

    return (
        <div className={"list-container"}>
            <div id={"list"}>
                {Object.keys(data).map(key => {
                    return <div className={"item"}>
                        <div className={"title"}>{key}</div>
                        <div className={"button-container"}>
                            <button className={"edit"}>edit</button>
                            <button className={"delete"}>delete</button>
                        </div>
                    </div>
                })}
                <Link to={"/add"}><button className={"add"}>add</button></Link>
            </div>
        </div>
    );
}

export default List;
