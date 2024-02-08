import React from 'react';

const GenderBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="flex">
            <div className="form-control ">
                <label className={`cursor-pointer label ${selectedGender === 'male' && 'selected'}`}>
                    <span className="label-text pr-2">Male</span>
                    <input type="checkbox" className="checkbox checkbox-primary " checked={selectedGender === 'male'} onChange={() => onCheckboxChange('male')} />
                </label>
            </div>

            <div className="form-control">
                <label className={`cursor-pointer label ${selectedGender === 'female' && 'selected'}`}>
                    <span className="label-text pr-2">Female</span>
                    <input type="checkbox" className="checkbox checkbox-primary " checked={selectedGender === 'female'} onChange={() => onCheckboxChange('female')} />
                </label>
            </div>
        </div>
    )
}

export default GenderBox;