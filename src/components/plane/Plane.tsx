import c from './Plane.module.scss'
import Hero from '../hero/Hero'

type Props = {
    side: string;
}

const Plane: React.FC<Props> = ({side}) => {
    return (
        <div className={c.plane_container}>
            <Hero hero='taras' side={side} position='staying'/>
            <img 
                className={c.plane}
                style={{transform: `rotateY(${side === 'right' ? '0deg' : '180deg'} )`}}
                src="./img/plane.png" alt="plane" 
            />
        </div>
    )
}

export default Plane;