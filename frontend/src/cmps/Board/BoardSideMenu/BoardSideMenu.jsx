import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPalette } from '@fortawesome/fontawesome-free-solid';
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular';
import ColorPicker from '../../ColorPicker/ColorPicker';
import ImagePicker from '../../ImagePicker/ImagePicker';
import './BoardSideMenu.scss';

function BoardSideMenu(props) {
    const [isBackgroundMenuOpen, setIsBackgroundMenuOpen] = useState(false);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
    const [isImgPickerOpen, setIsImgPickerOpen] = useState(false);

    const toggleChangeBgcMenu = () => {
        setIsBackgroundMenuOpen(!isBackgroundMenuOpen);
        setIsColorPickerOpen(false);
        setIsImgPickerOpen(false);
    }

    const toggleImgPicker = () => {
        setIsImgPickerOpen(!isImgPickerOpen);
    }

    const toggleColorPicker = () => {
        setIsColorPickerOpen(!isColorPickerOpen);
    }

    const onSetBackgroundImg = (imgUrl) => {
        props.onSetBackgroundImg(imgUrl);
    }

    const onSetBgc = (color) => {
        props.onSetBgc(color);
    }

    return (
        <div className="side-menu">
            <div className="side-menu-header flex">
                <h3>Menu</h3>
                <div className="side-menu-close-btn flex" onClick={props.toggleSideMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
            <div className="side-menu-nav flex f-col">
                <button className="clr-btn fs16" onClick={props.onRemoveBoard}>
                    <FontAwesomeIcon icon={faTrashAlt} className="icon" /> Delete Board
                </button>
                <button className="clr-btn fs16" onClick={toggleChangeBgcMenu}>
                    <FontAwesomeIcon icon={faPalette} className="icon" /> Change Background
                </button>

                {isBackgroundMenuOpen &&
                    <div className="background-change flex">
                        {isColorPickerOpen ?
                            <ColorPicker onSetBgc={onSetBgc} />
                            :
                            <div style={isImgPickerOpen ? { 'display': 'none' } : {}}>
                                <img
                                    onClick={toggleColorPicker}
                                    src="https://res.cloudinary.com/morshva/image/upload/v1607417101/colors_jnbhzi.png" alt=""
                                />
                                <h5 className="fs-16">Colors</h5>
                            </div>
                        }
                        {isImgPickerOpen ?
                            <ImagePicker onSetBackgroundImg={onSetBackgroundImg} />
                            :
                            <div style={isColorPickerOpen ? { 'display': 'none' } : {}}>
                                <img
                                    onClick={toggleImgPicker}
                                    src="https://res.cloudinary.com/morshva/image/upload/v1607417104/pictures_ksbogz.png" alt=""
                                />
                                <h5 className="fs-16">Photos</h5>
                            </div>
                        }
                    </div>
                }
            </div>
        </div >
    )
}

export default BoardSideMenu;
