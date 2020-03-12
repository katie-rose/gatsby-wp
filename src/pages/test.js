import React from "react";
import {navigate} from "gatsby";
import Header from '../components/header'

const Test = () => (
<div>
    <Header />
    <h1>Hello world!</h1>
   <button onClick={()=>navigate('/')}>Homepage</button>
</div>
)

export default Test;