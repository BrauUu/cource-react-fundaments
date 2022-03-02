import React from "react";

import {If, Else} from './If'

export default props => {

    const name = props.name

    return (
        <div>
            <If test={name}>
                Seja bem-vindo <strong>{name}</strong>!
                <Else>
                    Seja bem-vindo <strong>Usuário</strong>!
                </Else>
            </If>
        </div>
    )
}