import React, {Fragment} from 'react';

const BlogList = ({children}) => {
    return (
        <Fragment>
            <section className="section-news">
                {children}
            </section>
        </Fragment>
    )
}

export default BlogList;