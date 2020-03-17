import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Post from '../components/Post';

export default () => (
<div>
<Header />
    <div className="contaienr">
       <Post></Post>
    </div>
    <Footer />
</div>
);
