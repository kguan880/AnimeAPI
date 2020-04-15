import React from 'react'
import { getAnime } from '../apis/anime'
import Anime from './Anime'

class App extends React.Component {

  state = {
    anime:[]
  }

  componentDidMount(){
    console.log('mounting')
    getAnime()
      .then(animeList =>{
        this.setState({
          anime:animeList.results
        })
        })
  }

  render() {
    console.log('rendering')
    return (
      <>
      <h1>NARUTOOOOOO</h1>
      {console.log(this.state.anime)}
      <Anime anime={this.state.anime}/>
      </>
    )
  }
}

export default App
