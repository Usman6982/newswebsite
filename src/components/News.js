import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
//Parent component//
export class News extends Component {

    constructor() {
        super();
        console.log("Hello i am constructor from news");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a38c7916cd96416f88991edd14b4f661&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);//promise//
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false })

    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a38c7916cd96416f88991edd14b4f661&page=${this.state.page + 1}pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);//promise//
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) //it will return the next  big integer//
        {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a38c7916cd96416f88991edd14b4f661&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);//promise//
            let parsedData = await data.json()
            this.setState({ loading: false })
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {

        return (
            <div className="container my-3">
                <h1 className="text-center">NewsWebsite - Top Headlines</h1>
                {this.state.loading && <Spinner />}

                <div className="row">
           
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} news={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>


        )
    }
}

export default News
