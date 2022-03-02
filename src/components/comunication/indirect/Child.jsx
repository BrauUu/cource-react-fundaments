import React from "react";

export default props => {
    return(
        <div>
           <div>Componente Filho</div>
           <button onClick={ 
                 () => {
                    props.onClick('Leandro', 37, true)
                }
            }
            >
                Fornecer Informações
            </button>
        </div>
    )
}