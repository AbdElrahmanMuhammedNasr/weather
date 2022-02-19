import React ,{ Component } from 'react'

import Side from './components/side';
import Main from './components/main';


class App extends Component {


  render(){
    
    return (
      <div className='row w-100 ' style={{margin:'auto'}} >
        <div className='col-2' style={{backgroundColor:'#e9e9e9',height:'100vh'}}>
          <Side />
        </div>


        <div className='col-10' style={{backgroundColor:'blue',height:'100vh'}}>
          <Main />
        </div>
      </div>
    ) 

    }
}

export default App;
