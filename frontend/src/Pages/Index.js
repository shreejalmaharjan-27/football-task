import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <h1>Index</h1>
            <p>This is the index page.</p>
            <Link to="/NewPage">New Page</Link>
        </div>
    );
};

export default Index;