import React from "react";
import Spinner from "../img/loader.gif";

const Loader = (props) => {
    return (
        <img className={props.cname} src={Spinner} alt="Loading..." />
    );
}

export default Loader;