import React from 'react';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
    }
  }

  render() {
    const { text, handleSearch, handleText } = this.props;
    return(
      <div>
        <label>
          Search for something
          <input type="text" value={text} onChange={handleText} />
        </label>
        <input type="submit" value="submit" onClick={(e) => {handleSearch(e)}} />
      </div>
    )
  }
}