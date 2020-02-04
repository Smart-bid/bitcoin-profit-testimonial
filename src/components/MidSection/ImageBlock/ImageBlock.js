import React from 'react'
import first_img from './images/first.png'
import second_img from './images/second.png'
import third_img from './images/third.png'
import fours_img from './images/fours.png'

const ImageBlock = () => {
    return (
        <div className='ImageBlock'>
            <div className="item-block">
                <div className="item right">
                    <img src={first_img} alt=""/>
                </div>
                <div className="item left">
                    <img src={second_img} alt=""/>
                </div>
            </div>
            <div className="item-block">
                <div className="item right">
                    <img src={third_img} alt=""/>
                </div>
                <div className="item left">
                    <img src={fours_img} alt=""/>
                </div>
            </div>
        </div>
    )
};
export default ImageBlock;