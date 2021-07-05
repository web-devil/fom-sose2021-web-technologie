import { useEffect, useState } from 'react';
import ImageList from './ImageList';
import ImageUpload from './ImageUpload';

export default function ImageRoot() {
    const [imageList, setImageList] = useState([
        {
            path: 'urlaub1.png',
            name: 'Palma de Mallorca',
        },
        {
            name: 'Ibiza',
            path: 'urlaub2.png',
        },
    ]);

    // fetch().then() => BAD, because it would render an HTTP request for every re-render

    useEffect(() => {
        console.log(JSON.stringify(imageList));
    }, [imageList]);

    useEffect(() => {
        console.log('empty useEffect Array');
    }, []);

    console.log('Image root initial imagelist ', imageList);

    function addImage(image) {
        console.log(image);
        console.log([...imageList, image]);
        setImageList([...imageList, image]);
    }

    return (
        <>
            <ImageList list={imageList} />
            <ImageUpload addImage={addImage}></ImageUpload>
        </>
    );
}
