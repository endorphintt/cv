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
                if(positionLeft + deltaVW < 300){
                    setPL(deltaVW + positionLeft)
                    console.log(positionLeft, 'STAGE 1')
                } else if ( positionLeft + deltaVW > 300 && positionLeft < 500 ) {
                    setPL(positionLeft + deltaVW * (2/3))
                    if(positionBottom <= 100){
                        setPB(positionBottom + deltaVW * (1/3))
                    } else {
                        setPB(100)
                    }
                    console.log(positionLeft, 'STAGE 2')
                    console.log(positionBottom)
                } else if ( positionLeft > 500 && positionLeft < 800) {
                    setPL(positionLeft + deltaVW)
                    console.log(positionLeft, 'STAGE 3')
                    // console.log(positionBottom)
                } else if ( positionLeft > 800 && positionLeft < 1000) {
                    setPL(positionLeft + deltaVW * (2/3))
                    if(positionBottom - deltaVW * (1/3) > 0){
                        setPB(positionBottom - deltaVW * (1/3))
                    } else {
                        setPB(0)
                    }
                    console.log(positionLeft, 'STAGE 4')
                    console.log(positionBottom)
                } else if ( positionLeft > 1000 && positionLeft < 1300){
                    setPL(positionLeft + deltaVW)
                    if(positionLeft + deltaVW >= 1300) {
                        setPB(10)
                        setPL(1300)
                    }
                    console.log(positionLeft, 'STAGE 5')
                } else if ( positionLeft >= 1300 ){
                    setPL(1300)
                    if(positionBottom + deltaVW <= 500 && positionBottom >= 10){
                        setPB(positionBottom + deltaVW)
                    } else if(positionBottom < 10){
                        setPL(1299)
                        setPB(0)
                    } else {
                        setPB(500)
                    }
                    console.log(positionLeft, positionBottom, 'STAGE 6')
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