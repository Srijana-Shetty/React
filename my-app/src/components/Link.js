import React from 'react'
import { LinkContainer } from './LoginContainer'
import { Link } from './Link'

const Link = () => {
  return (
    <div><ul>
    <li>home</li>
    <li>About</li>
    <li>history</li>
</ul>
<LinkContainer />

</div>
  
  )
}

export default Link;