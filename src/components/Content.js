import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './Contact.js'
import Projects from './Projects.js'
import Resume from './Resume.js'


function Content(){
  return (
    <div className='contentSection'>
      <Switch>
        <Route path='/Projects' component={Projects} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Resume' component={Resume} />
      </Switch>
    </div>
  )
}

export default Content;