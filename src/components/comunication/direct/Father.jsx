import React from "react";

import Child from './Child'

export default props => {
    return(
        <div>
            <Child name="Antônio" age={4} likePopcorn={true}/>
            <Child name="Valmir" age={13} likePopcorn={false}/>
        </div>
    )
}