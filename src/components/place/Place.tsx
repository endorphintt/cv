import c from './Place.module.scss'
import Hero from '../hero/Hero';
import { useState, useRef } from 'react';
import { withResizeDetector } from 'react-resize-detector';


interface MyComponentProps {
    width: number;
    height: number;
}

const Place: React.FC<MyComponentProps> = ({ width, height }) => {
    const [positionLeft, setPL] = useState<number>(0)
    const [positionBottom, setPB] = useState<number>(0)
    const componentWidth = width
    const componentHight = height

    const changePlacePosition = (event: React.WheelEvent<HTMLDivElement>) => {
            const deltaVW = event.deltaY / (componentWidth / 1500)
            const deltaVH = event.deltaY / (componentWidth / 600)
            
            if(positionLeft + deltaVW  > 0) {
                if(positionLeft + deltaVW < (componentWidth / 1500) * 30){
                    setPL(deltaVW + positionLeft)
                    console.log(positionLeft, 'STAGE 1')
                } else if ( positionLeft + deltaVW > (componentWidth / 1500) * 30
                 && positionLeft + deltaVW < (componentWidth / 1500) * 60) {
                    setPL(positionLeft + deltaVW * (2/3))
                    if(positionBottom < 100){
                        setPB(positionBottom + deltaVW * (1/3))
                    }
                    console.log(positionLeft, 'STAGE 2')
                    console.log(positionBottom)
                 } else if ( positionLeft + deltaVW > (componentWidth / 1500) * 60
                 && positionLeft + deltaVW < (componentWidth / 1500) * 80) {
                    setPL(positionLeft + deltaVW)
                    console.log(positionLeft, 'STAGE 3')
                    // console.log(positionBottom)
                 } else if ( positionLeft + deltaVW > (componentWidth / 1500) * 80
                 && positionLeft + deltaVW < (componentWidth / 1500) * 110) {
                    setPL(positionLeft + deltaVW * (2/3))
                    if(positionBottom > 0){
                        setPB(positionBottom - deltaVW * (1/3))
                    }
                    console.log(positionLeft, 'STAGE 4')
                    console.log(positionBottom)
                 } else if ( positionLeft + deltaVW > (componentWidth / 1500) * 110
                 && positionBottom + deltaVH < (componentWidth / 1500) * 150) {
                    if(positionBottom < 500){
                        setPB(positionBottom + deltaVW)
                    }
                    console.log(positionLeft, 'STAGE 5')
                    console.log(positionBottom)
                 }
            }         
    }

    return (
        <div 
            className={c.place}
            onWheel={changePlacePosition}
            style={{
                left: `${-positionLeft}vw`,
                bottom: `${-positionBottom}vh`
            }}
        >
            <Hero 
                positionLeft={positionLeft}
                positionBottom={positionBottom}
            />
        </div>
    )
}

export default withResizeDetector(Place);