import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props){
    super(props)

    this.state = {
        isLoggedIn: false
    }
}

  render() {

      if(this.state.isLoggedIn){
        return(
            <div>
                welcome srijana
            </div>
        )
      }else {
        return (
            <div>
                welcome guest
            </div>
        )
      }

   /* return (
        <div>
<div>
        Welcome Srijana
      </div>
      <div>welcome cec</div>


        </div>
      
    ) */
  }
}

export default UserGreeting
