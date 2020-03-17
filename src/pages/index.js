import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Post from '../components/Post';

export default () => (
<div>
<Header />
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-xs-6">
            <Post />
            </div>
        </div>
    </div>
    <Footer />
</div>
);
