import React from 'react'
import App1 from './App1'
import App2 from './App2'
import { render } from '@sencha/ext-react'

render(<App1/>, document.getElementById('div1'))

render(<App2/>, document.getElementById('div2'))





//import { launch } from '@sencha/ext-react'
//import { ExtReact } from '@sencha/ext-react'
//launch(() => {return <ExtReact><App/></ExtReact>})
//launch(<App/>)
//launch(() => {return <App/>})
//ReactDOM.render(<App/>, document.getElementById('root'))
// //console.log(document.getElementById('root'))
// //ReactDOM.render(<App/>, document.getElementById('root'))
// ReactDOM.render(<ExtReact><App/></ExtReact>, document.getElementById('root'))
// let viewport

// const render = (Component, target) => {
//   ReactDOM.render(<ExtReact><App/></ExtReact>, document.getElementById('root'))

//   // ReactDOM.render(
//   //   <ExtReact>
//   //     <AppContainer>
//   //       <Component/>
//   //     </AppContainer>
//   //   </ExtReact>,
//   //   target
//   // )
// }

// launch(target => render(App, viewport = target))

// launch(target => render(App, viewport = target))