import React from "react";
import style from './EmptyListComponent.module.css'

interface Props {
    hidden: boolean;
}

function EmptyListComponent(props: Props): JSX.Element {
    return (
      <div style={style}>
          <h1 hidden={props.hidden}>There are no movies that matched your query... Sorry!</h1>
      </div>
    );
}

export default EmptyListComponent