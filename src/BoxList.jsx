import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxList() {
    const [boxes, setBoxes] = useState([])

    const addBox = box => {
        let newBox = { ...box, id: uuid() }
        setBoxes(boxes => [...boxes, newBox])
        console.log(newBox)
    }
    console.log(boxes)

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const boxComponents = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            handleRemove={removeBox}
        />
    ))

    return (
        <div >
            <NewBoxForm classname="BoxForm" addBox={addBox} />
            {boxComponents}

        </div>
    )

}

export default BoxList;