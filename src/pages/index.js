import React from "react";
import { Link } from "gatsby";
import Header from '../components/header'

export default () => (
<div>
<Header title="Header of index page">
</Header>
    <h1>Hello world!</h1>
    <Link to="/test/">Go to test page</Link>
    <img src="https://cdn130.picsart.com/263973985003212.png?r480x480" width="680"></img>
</div>
);
