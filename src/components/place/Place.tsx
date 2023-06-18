import c from './Place.module.scss'
import Hero from '../hero/Hero';
import { useState, useEffect } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import Clouds from '../clouds/Clouds';
import Road from '../road/Road';
import Home from '../home/Home';
import Stars from '../stars/Stars';
import Form from '../form/Form';
import Mountains from '../mountains/Mountains';
import Location from '../location/Location';


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
    const[hero, setHero] = useState<string>('taras') 

    useEffect(() => {
        const intervalId = setInterval(() => {
          setP('staying')
        }, 2000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    const changePlacePosition = (event: React.WheelEvent<HTMLDivElement>) => {
            const deltaVW = event.deltaY / (componentWidth / 1500)
            const deltaVH = event.deltaY / (componentWidth / 600)

            // hero
            if(event.deltaY > 0 && side != 'rigth') {
                setSide('right')
            } else {
                setSide('left')
            }
            setP(event.deltaY > 0 ? 'walking_right' : 'walking_left')
            if(positionLeft + deltaVW < 110) {
                setHero('taras')
            } else if(positionLeft + deltaVW > 110 && positionLeft + deltaVW < 300 ) {
                setHero('car')
            } else if(positionLeft + deltaVW > 300 && positionLeft + deltaVW < 1000 ) {
                setHero('plane')
            } else if(positionLeft + deltaVW > 1000 && positionLeft + deltaVW < 1300 ) {
                setHero('taras')
            } else if(positionLeft + deltaVW > 300 && positionLeft + deltaVW < 1000 ) {
                setHero('rocket')
            } 
            //
            
            if(positionLeft + deltaVW  > 0) {
                if(positionLeft + deltaVW < 300){
                    setPL(deltaVW + positionLeft)
                    setPB(0)
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
                    setPB(0)
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
            <div className={c.hero_container}
                style={{
                    left: `calc(${positionLeft}vw + 25vw - 50px)`,
                    bottom: `calc(${positionBottom}vh + 10vh)`,
                }}          
            >
                {hero === 'taras' ? 
                <Hero 
                    hero={hero}
                    side={side}
                    position={position}
                />
                :
                hero === 'car' ? 
                <div className={c.car_container}>
                    <Hero 
                        hero={hero}
                        side={side}
                        position={'staying'}
                    />
                    <img 
                        className={c.car}
                        style={{transform: `rotateY(${side === 'right' ? '0deg' : '180deg'} )`}}
                        src="./img/car.png" alt="car" 
                    />
                    <img className={side === 'right' ? c.leftWheel_toRight : c.leftWheel_toLeft} src="./img/wheel.png" alt="wheel" />
                    <img className={side === 'right' ? c.rightWheel_toRight : c.rightWheel_toLeft} src="./img/wheel.png" alt="wheel" />
                </div>
                :
                <div></div>
                }
            </div>
            <Clouds />
            <Road/>
            <Home/>
            <Stars />
            <Form />
            <Mountains startPosition={0} positionLeft={positionLeft} />
            <Location />
        </div>
    )
}

export default withResizeDetector(Place);