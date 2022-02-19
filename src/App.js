import React ,{ Component } from 'react'

import Side from './components/side';
import Main from './components/main';


class App extends Component {
// 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 

  render(){
    
    return (
      <div className='row w-100 h-100' style={{margin:'auto', overflow:'none'}} >
        <div className='col-2' style={{backgroundColor:'#e9e9e9',height:'100vh'}}>
          <Side />
        </div>


        <div className='col-10' style={{ height:'100vh'}}>
          <Main />
        </div>
      </div>
    ) 

    }
}

export default App;
