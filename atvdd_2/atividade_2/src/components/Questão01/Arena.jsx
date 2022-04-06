import React from "react";

function Arena(props) {
    return(
        <div>
            <h1>Arena: {props.arena}</h1>

            {React.Children.map(props.children, arena => {
                return React.cloneElement(arena, { ...props });
            })} 
            <hr/>
        </div>
    )
}

export default Arena