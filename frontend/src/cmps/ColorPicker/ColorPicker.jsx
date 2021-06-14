import './ColorPicker.scss';

function ColorPicker(props) {
    const colors = [
        '#ececec',
        '#5699b4',
        '#2fb3a3',
        '#ffd56b',
        '#f8a663',
        '#e66646',
        '#bdbdbd',
        '#2f2f2f',
    ];

    const selectColor = (color) => {
        props.onSetBgc(color);
    }

    return (
        <div className="color-picker flex">
            {colors.map((color) =>
                <div
                    className="color-square"
                    style={{ backgroundColor: color }}
                    onClick={() => selectColor(color)}
                    key={color}
                ></div>
            )}
        </div >
    )
}

export default ColorPicker;
