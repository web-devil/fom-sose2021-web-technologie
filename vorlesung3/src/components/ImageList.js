// "list" ist ein "prop" der Komponente "ImageList"
export default function ImageList({ list }) {
    console.log('ImageList initial ', list);

    return (
        <ul>
            {list.map((image) => (
                <li className="image-list-item">
                    <h2>{image.name}</h2>
                    <p>{image.path}</p>
                </li>
            ))}
        </ul>
    );
}
