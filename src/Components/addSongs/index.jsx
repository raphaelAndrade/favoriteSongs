import React, { useState, useEffect, useRef } from 'react'
import { Form, InputText, AddSongButton } from './styles'

const AddSongs = ({onSubmit}) => {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            name: input
        });
        setInput('');
    };

    return (
        <Form onSubmit={handleSubmit} >
            <>
                <InputText
                    placeholder='Add a song'
                    value={input}
                    onChange={handleChange}
                    name='name'
                    ref={inputRef}
                />
                <AddSongButton onClick={handleSubmit}>
                    Add Song
                </AddSongButton>
            </>
        </Form>
    )
}

export default AddSongs