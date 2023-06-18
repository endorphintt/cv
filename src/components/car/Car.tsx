import c from './Car.module.scss'
import Hero from '../hero/Hero'

type Props = {
    hero: string;
    side: string;
}

const Car: React.FC<Props> = ({hero, side}) => {
    return (
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
    )
}

export default Car;