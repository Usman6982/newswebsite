import React, { Component } from 'react'
import NewsItem from './NewsItem'
//Parent component//
export class News extends Component {

    constructor() {
        super();
        console.log("Hello i am constructor from news");
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a38c7916cd96416f88991edd14b4f661";
        let data = await fetch(url);//promise//
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    render() {

        return (
            <div className="container my-3">
                <h1>NewsWebsite - Top Headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} news={element.url} />
                        </div>
                    })}

                </div>
            </div>

        )
    }
}

export default News
