import { useState } from 'react';
import c from './Hero.module.scss'

type Props = {
    side: string;
    position: string;
    hero: string;
}

const Hero: React.FC<Props> = ({position, side, hero}) => {
    return (
        <div
            className={c.hero}
        >   
            <div
                className={side === 'right' ? c.head_right : c.head_left}
            >
                <div className={c.lips}></div>
                <div className={c.ear}></div>
                <div className={c.eyes}>
                    <div className={c.eye}></div>
                    <div className={c.eye}></div>
                    <div className={c.branch}></div>
                </div>
            </div>
            <div className={position === 'walking_right' ? c.hand_right_activeR : position === 'walking_left' ? c.hand_right_activeL : c.hand_right}><div className={c.palm}></div></div>
            <div className={position === 'walking_right' ? c.hand_left_activeR : position === 'walking_left' ? c.hand_left_activeL : c.hand_left}><div className={c.palm}></div></div>
            <div
                style={{display: `${hero === 'taras' ? 'block' : 'none'}`}}
                className={position === 'walking_right' ? c.leg_right_activeR : position === 'walking_left' ? c.leg_right_activeL : c.leg_right}><div className={c.foot}></div></div>
            <div
                style={{display: `${hero === 'taras' ? 'block' : 'none'}`}}
                className={position === 'walking_right' ? c.leg_left_activeR : position === 'walking_left' ? c.leg_left_activeL : c.leg_left}><div className={c.foot}></div></div>
        </div>
    )
}

export default Hero;