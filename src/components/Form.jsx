import React, { useState } from 'react'

const header = {
    textAlign: "right",
    padding: "10px"
}

function Form({ movieSearch }) {
    const [form, setForm] = useState({
        searchTerm: ''
    });

    const handleChange = (e) => {

        console.log(e.target.value);

        setForm({
            ...form,
            searchTerm: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        movieSearch(form.searchTerm);
    }

    return (
        <div>
             <div style={header}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.searchTerm} onChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
        </div>

        </div>
       
    )
}

export default Form