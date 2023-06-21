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
import Location from '../house/Location';
import Car from '../car/Car';
import Plane from '../plane/Plane';
import Skills from '../skills/Skills';
import Board from '../board/Board';
import Billboard from '../billboard/Billboard';
import TreeOne from '../treeOne/TreeOne';
import TreeTwo from '../treeTwo/TreeTwo';
import TreeThree from '../treeThree/TreeThree';
import Education from '../education/Education';
import Project from '../project/Project';


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

            console.log(positionLeft, deltaVW)

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
            } else if(positionLeft === 1300 && deltaVW < 0) {
                setHero('rocket')    
            } else if(positionLeft + deltaVW > 300 && positionLeft + deltaVW < 1000 ) {
                setHero('plane')
            } else if(positionLeft + deltaVW > 1000 && positionLeft + deltaVW < 1300 ) {
                setHero('taras')
            }  else if(positionLeft + deltaVW > 1300 && positionLeft + deltaVW < 1550) {
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
                <Car hero={hero} side={side} />
                :
                hero === 'plane' ?
                <Plane side={side} />
                :
                hero === 'rocket' ?
                <img className={c.hero_rocket} src='./img/rocket.png' />
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
            <Skills left={200} bottom={0} text='SKILLS'/>
            <div className={c.board_first}>
                <Board
                    positionLeft={positionLeft}
                    width={80}
                    height={40} 
                    color='#D37E24' 
                    tablePosition={210}
                    title='Frondtend 1/2' 
                    technologies={[{title: 'js', rating: [1, 1, 1, 1, 0]}, {title: 'ts', rating: [1, 1, 1, 1, 0]}, {title: 'react', rating: [1, 1, 1, 1, 1]}, {title: 'redux', rating: [1, 1, 1, 1, 0]}, {title: 'mobX', rating: [1, 1, 1, 0, 0]}]}
                />
            </div>
            <div className={c.board_second}>
                <Board
                    positionLeft={positionLeft}
                    width={80}
                    height={40} 
                    color='#D34C24'  
                    tablePosition={310}
                    title='frontend 2/2' 
                    technologies={[{title: 'html', rating: [1, 1, 1, 1, 1]}, {title: 'css', rating: [1, 1, 1, 1, 1]}, {title: 'Antd, BS', rating: [1, 1, 1, 0, 0]}, {title: 'Toolkit', rating: [1, 1, 1, 0, 0]}, {title: 'scss/sass', rating: [1, 1, 1, 1, 1]}]}
                />
            </div>
            <div className={c.board_third}>
                <Board
                    positionLeft={positionLeft}
                    width={80}
                    height={40} 
                    color='#C98875'  
                    tablePosition={410}
                    title='backend' 
                    technologies={[{title: 'node.js', rating: [1, 1, 1, 1, 0]}, {title: 'express', rating: [1, 1, 1, 0, 0]}, {title: 'MongoDB', rating: [1, 1, 1, 1, 1]}, {title: 'SQL', rating: [1, 1, 0, 0, 0]}]}
                />
            </div>
            <div className={c.board_fourth}>
                <Board
                    positionLeft={positionLeft}
                    width={80}
                    height={40} 
                    color='#7C1B1A'
                    tablePosition={510}
                    title='Languages' 
                    technologies={[{title: 'English', rating: [1, 1, 1, 1, 0]}, {title: 'Polish', rating: [1, 1, 1, 1, 0]}, {title: 'Ukrainian', rating: [1, 1, 1, 1, 1]}, {title: 'Russian', rating: [1, 1, 1, 1, 1]}]}
                />
            </div>
            <Skills left={700} bottom={100} text='EXPERIENCE'/>
            <div className={c.board_fifth}>
                <Billboard
                    positionLeft={positionLeft}
                    tablePosition={710}
                    dates='Feb 2023 - June 2023'
                    title='Junior Front-end React' 
                    company='Atlantis & Co.'
                    points={['Main stack: React + Redux + Typescript', 'Other technologies: Bootstrap, SCSS/CSS, HTML, JavaScript, node.js, Express.', 'Standardized all output with a new, responsive, mobile-first approach and strategy.']}
                />
            </div>
            <div className={c.board_sixth}>
                <Billboard
                    positionLeft={positionLeft}
                    tablePosition={810}
                    dates='June 2022 - Feb 2023'
                    title='Web developer' 
                    company='Freelance'
                    points={['Frontend + Backend development (website) for law company (React, Redux, Toolkit, SCSS,  TS, JS, Kit). ', 'Frontend + Backend development for  fuel production company (React, Redux, Bootstrap, SCSS, TS, JS) ', 'Frontend development - CVwebsite (React, MobX, Antd, SCSS, TS, JS',]}
                />
            </div>
            <Skills left={1000} bottom={0} text='EDUCATION'/>
            <TreeOne left={997}/>
            <TreeTwo left={1003}/>
            <TreeThree left={1015}/>
            <Education/>
            <img style={{display: `${positionLeft > 1299 ? 'none' : 'block'}`}} className={c.rocket} src='./img/rocket.png' />
            <div className={c.stand}></div>
            <img style={{display: `${positionLeft > 1299 ? 'none' : 'block'}`}} className={c.crane} src='./img/crane.png' />
            <Skills left={1300} bottom={100} text='own projects'/>
            <Project bottom={220} color='red' border_bottom='#3f0d03' title='program for managing employees' description='React.ts + Redux + Antd + node.js'/>
            <Project bottom={270} color='blue' border_bottom='#45fff8' title='furniture store' description='React.js+ Mobx  + node.js'/>
            <Project bottom={320} color='#450b48' border_bottom='#b31360' title='weather program' description='JQuery + Bootstrap'/>
            <Project bottom={370} color='#4e345e' border_bottom='#783e66' title='website for law company' description='React.js+ Redux + node.js'/>
            <Project bottom={420} color='#b7547e' border_bottom='#f1798e' title='program for managing employees' description='React.ts + node.js'/>
            <TreeOne left={1197}/>
            <TreeTwo left={1203}/>
            <TreeThree left={1215}/>
            <img className={c.poligon} src="./img/polygon.png" alt="poligon" />
            <img className={c.mush_12} src="./img/mushroomOne.png" alt="mushroom" />
        </div>
    )
}

export default withResizeDetector(Place);