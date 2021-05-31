import { useState } from 'react';
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
