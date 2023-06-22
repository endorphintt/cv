import { useState } from 'react';
import c from './Loader.module.scss'

const Loader: React.FC = () => {

    return (
        <div className={c.loader}>
            <div className={c.hero}>
                <div
                    className={c.head_right}
                >
                    <div className={c.lips}></div>
                    <div className={c.ear}></div>
                    <div className={c.eyes}>
                        <div className={c.eye}></div>
                        <div className={c.eye}></div>
                        <div className={c.branch}></div>
                    </div>
                </div>
                <div className={c.hand_right}><div className={c.palm}></div></div>
                <div className={c.hand_left}><div className={c.palm}></div></div>
                <div className={c.leg_right}><div className={c.foot}></div></div>
                <div className={c.leg_left}><div className={c.foot}></div></div>
            </div>
            <div className={c.load}>Loading...</div>
        </div>
    )
}

export default Loader;