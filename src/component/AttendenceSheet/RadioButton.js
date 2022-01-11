import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

const RadioButton = () => {
    const [radioValue, setRadioValue] = useState(false);
    const radios = [
        { name: 'P', value: '1' },
        { name: 'A', value: '2' },
        { name: 'L', value: '3' },
    ];
    return (
        <ButtonGroup>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    className='rounded-circle mx-1'
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
};

export default RadioButton;