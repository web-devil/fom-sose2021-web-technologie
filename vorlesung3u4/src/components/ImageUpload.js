import { useState } from 'react';

export default function ImageUpload({ addImage }) {
    const [name, setName] = useState('');
    const [path, setPath] = useState('');

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onPathChange(event) {
        setPath(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        addImage({
            name: name,
            path: path,
        });
        /* fetch("https://server.de/image-upload", {
            headers: {},
            body: {
                "name": name,
                "path": path,
                "binaryImage": base64_encode()
            }
        })*/
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Image upload</h1>
            <label htmlFor="path">
                Image path
                <input
                    type="text"
                    name="path"
                    value={path}
                    onChange={onPathChange}
                />
            </label>
            <label htmlFor="name">
                Image name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onNameChange}
                />
            </label>
            <button>Anlegen!</button>
        </form>
    );
}
