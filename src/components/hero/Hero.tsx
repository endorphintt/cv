import c from './Hero.module.scss'

type Props = {
    positionBottom: number;
    positionLeft: number;
}

const Hero: React.FC<Props> = ({positionBottom, positionLeft}) => {
    return (
        <div
            className={c.hero}
            style={{
                left: `calc(${positionLeft}vw + 50vw - 50px)`,
                bottom: `calc(${positionBottom}vh + 30vh - 50px)`
            }}
        >
            hero
        </div>
    )
}

export default Hero;