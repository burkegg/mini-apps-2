import React from 'react';
import ReactDom from 'react-dom';
import Search from './Search.jsx';
import List from './List.jsx';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import $ from 'jQuery';


export default class History extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      facts: [],
      text: '',
      //pageCount: null,
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleText = this.handleText.bind(this);
  }
  handleSearch(e){
    // will be passing in state from Search component
    e.preventDefault();
    
    const term = this.state.text;

    // $.ajax({
    //   url: `http://localhost:3000/events?q=${term}`,
    //   type: `GET`,
    //   success: function(response){
    //     console.log(response);
    //     // console.log(data);
    //     // console.log(request);
    //     // console.log(request.getResponseHeader('X-Total-Count'));
    //   },
    //   error: function(errMsg) { 
    //     //console.log(errMsg); 
    //   }
    //   });
    


    axios.get(`http://localhost:3000/events?q=${term}`)
    .then(function (response) {
      console.log(response);
      console.log(response.request.getResponseHeader('x-Total-Count'));
      console.log(response.request.xhr.getResponseHeader('X-Total-Count'));

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getPageCount(data) {

  }
  handleText(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }



  render(){
    const { facts, text } = this.state;
    return(
      <div>
      <Search handleSearch={this.handleSearch} handleText={this.handleText} text={text} />
      <List facts={facts} />
      <ReactPaginate previousLabel={"previous"}
               nextLabel={"next"}
               breakLabel={<a href="">...</a>}
               breakClassName={"break-me"}
               pageCount={this.state.pageCount}
               marginPagesDisplayed={2}
               pageRangeDisplayed={5}
               onPageChange={this.handlePageClick}
               containerClassName={"pagination"}
               subContainerClassName={"pages pagination"}
               activeClassName={"active"} />

      </div>
    );
  }
}