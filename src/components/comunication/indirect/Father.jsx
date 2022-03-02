import React from "react";

import Child from './Child'

export default props => {

    function getInformations(name, age, likePopcorn){
        console.log(name, age, likePopcorn)
    }

    return(
        <div>
            <Child onClick={getInformations}/>
        </div>
    )
}