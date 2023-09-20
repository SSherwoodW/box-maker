import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./BoxForm.css"

function NewBoxForm({addBox}) {
    const INITIAL_STATE = {
        backgroundColor: '',
        width: '',
        height: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((fData) => ({
            ...fData, 
            [name]: value
        }))
    }

    return (
        <div className="BoxForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="backgroundColor">Background Color:</label>
                <input
                    id="backgroundColor"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange} />
                <label htmlFor="width">Width:</label>
                <input
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange} />
                <label htmlFor="height">Height:</label>
                <input
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange} />
                <button className="box-form-button">Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;