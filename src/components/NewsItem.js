import React, { Component } from 'react'


export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, news } = this.props;

        return (
            <div className="my-3">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={!imageUrl?"https://img.onmanorama.com/content/dam/mm/en/news/india/images/2023/10/1/nps-protest-ramlila-maidan.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={news} target="_blank" rel="opener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
