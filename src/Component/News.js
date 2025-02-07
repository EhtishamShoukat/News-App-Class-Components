import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country:'us',
    pageSize: 8,
    category:'general'
}
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,


  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
    };
      document.title=this.props.category;
  }

  
  async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f0dffb249c747bf880a1978fd7c1516&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles:parseData.articles ,totalResults:parseData.totalResult,loading:false })
    }
handlePrevClick = async ()=>{
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f0dffb249c747bf880a1978fd7c1516&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})  
  let data = await fetch(url);
  let parseData = await data.json()
  console.log(parseData);
  this.setState({
    page:this.state.page-1,
    articles:parseData.articles,
    loading:false

  })

}
handleNextClick = async()=>{
  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
   
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f0dffb249c747bf880a1978fd7c1516&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true})
          let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
          page:this.state.page+1,
          articles:parseData.articles,
          loading:false
        
  })
}
}
  
render() {
           return (
      <div>
        <div className="container my-3">
          <h2 className="text-center" style={{marginTop:"90px"}}>Today News Headline</h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
            
            {!this.state.loading && this.state.articles.map((element) => {
           return   <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title?element.title.slice(0,45):""}
                  description={element.description?element.description.slice(0,88):""}
                  urlToImage={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt} 
                  source={element.source.name}

                />
              </div>
              
  })}
          </div>
          <div className="container d-flex justify-content-between">

          <button disabled={this.state.page <=1} type="button"className="btn btn-dark"onClick={this.handlePrevClick} >&larr; Previous</button>
          <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr; </button>

          </div>
        </div>
      </div>
  

    );
  }
}

export default News;
