import c from './Place.module.scss'
import Hero from '../hero/Hero';
import { useState, useEffect } from 'react';
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

    // hero view
    const[side, setSide] = useState<string>('right')
    const[position, setP] = useState<string>('staying')

    useEffect(() => {
        const intervalId = setInterval(() => {
          setP('staying')
        }, 2000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    const changePlacePosition = (event: React.WheelEvent<HTMLDivElement>) => {
            // hero
            if(event.deltaY > 0 && side != 'rigth') {
                setSide('right')
            } else {
                setSide('left')
            }
            setP(event.deltaY > 0 ? 'walking_right' : 'walking_left')

            const deltaVW = event.deltaY / (componentWidth / 1500)
            const deltaVH = event.deltaY / (componentWidth / 600)
            
            if(positionLeft + deltaVW  > 0) {
                if(positionLeft + deltaVW < 300){
                    setPL(deltaVW + positionLeft)
                } else if ( positionLeft + deltaVW > 300 && positionLeft < 500 ) {
                    setPL(positionLeft + deltaVW * (2/3))
                    if(positionBottom <= 100){
                        setPB(positionBottom + deltaVW * (1/3))
                    } else {
                        setPB(100)
                    }
                } else if ( positionLeft > 500 && positionLeft < 800) {
                    setPL(positionLeft + deltaVW)
                } else if ( positionLeft > 800 && positionLeft < 1000) {
                    setPL(positionLeft + deltaVW * (2/3))
                    if(positionBottom - deltaVW * (1/3) > 0){
                        setPB(positionBottom - deltaVW * (1/3))
                    } else {
                        setPB(0)
                    }
                } else if ( positionLeft > 1000 && positionLeft < 1300){
                    setPL(positionLeft + deltaVW)
                    if(positionLeft + deltaVW >= 1300) {
                        setPB(10)
                        setPL(1300)
                    }
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
                side={side}
                position={position}
            />
        </div>
    )
}

export default withResizeDetector(Place);