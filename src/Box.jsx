import { useState } from "react";

function Box(props) {
    const { id, handleRemove, backgroundColor, width, height } = props;

    const remove = () => {
        handleRemove(id)
    }

    const boxStyle = {
        backgroundColor: backgroundColor || 'lightgray',
        width: width || '50px',
        height: height || '50px'
    }
    return (
        <div>
            <div style={boxStyle}>
                <button onClick={remove}>X</button>
            </div>
            
        </div>
    )
}

export default Box;