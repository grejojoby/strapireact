import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = ({ blogid, blogtitle, blogcontent, featuredimage, categories }) => {

    const category = categories.map((category) => {
        return category.categoryname
    })
    console.log(blogid);
    return (
        <div className="col-12">
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    {category}
                </div>
                <div className="card-body">
                    <img width="100%" alt={blogtitle} src={`http://localhost:1337${featuredimage.formats.medium.url}`} />
                    <h4 className="card-title">{blogtitle}</h4>
                </div>
                <a href={`./single/${blogid}`}>Learn More</a>
                <Link to={`/single/${blogid}`} className="btn btn-primary btn-lg">Learn More</Link>                
            </div>
        </div>
    )
}

export default BlogListItem;