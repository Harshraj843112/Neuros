import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import IPDdischarge1 from '../img/ipdimage1.jpg';
import IPDdischarge2 from '../img/ipdimage2.jpg';

const SliderIPD = () => {
    return (
        <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <h2 className="text-lg font-semibold text-center mb-4 text-[#2E4168]">Compare Images</h2>
            <div className="w-full" style={{ height: '100%' }}> {/* Full-height container */}
                <ReactCompareSlider
                    itemOne={
                        <ReactCompareSliderImage
                            src={IPDdischarge1}
                            alt="Before - IPD Discharge 1"
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    }
                    itemTwo={
                        <ReactCompareSliderImage
                            src={IPDdischarge2}
                            alt="After - IPD Discharge 2"
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    }
                    className="rounded-lg"
                    position={50} // Default position of the slider
                />
            </div>
        </div>
    );
};

export default SliderIPD;
