import { useState } from "react";

export type RangeSliderType = {
    value: number;
}

const RangeSlider: React.FC<RangeSliderType> = ({ value }) => {

  const [level, setLevel] = useState(value);

  const onChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLevel(value);
  }

  return (
    <div className="relative block w-full">
        <input
            onChange={onChangeRange}
            value={level}
            step={1}
            max={100}
            type="range"
            className={`
                block
                w-full
                accent-[#BBEE85]
            `}
            style={{
                background: `linear-gradient(to right, #BBEE85 0%, #BBEE85 ${level}%, #ddd ${level}%, #ddd 100%)`
            }}
            disabled
        />
    </div>
  );
};

export default RangeSlider;