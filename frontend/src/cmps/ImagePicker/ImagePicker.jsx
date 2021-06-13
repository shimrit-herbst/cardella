import './ImagePicker.scss';

function ImagePicker(props) {
    const imgUrls = [
        'https://res.cloudinary.com/morshva/image/upload/v1606942427/pexels-elle-hughes-1549201_uqaty3.jpg',
        'https://res.cloudinary.com/morshva/image/upload/v1606942055/pexels-stephan-seeber-1261728_woemwx.jpg',
        'https://res.cloudinary.com/morshva/image/upload/v1606941866/pexels-porapak-apichodilok-346768_s2wkfn.jpg',
        'https://res.cloudinary.com/morshva/image/upload/v1606941730/pexels-lisa-fotios-1314133_uolx6n.jpg',
        'https://res.cloudinary.com/morshva/image/upload/v1606922938/pexels-tyler-lastovich-997443_o6k7hc.jpg',
        'https://res.cloudinary.com/morshva/image/upload/v1606573776/7_op2qhx.jpg',
        'https://res.cloudinary.com/morshva/image/upload/v1606573383/5_mavwxz.jpg',
        'https://res.cloudinary.com/morshva/image/upload/v1606572976/3_ye915h.jpg',
    ];

    const selectImage = (imgUrl) => {
        props.onSetBackgroundImg(imgUrl);
    }

    return (
        <div className="image-picker flex">
            {imgUrls.map((imgUrl, index) =>
                <img
                    className="image-square"
                    src={imgUrl}
                    onClick={() => selectImage(imgUrl)}
                    index={index}
                    key={index}
                    alt=""
                />
            )
            }
        </div >
    )
}

export default ImagePicker;
