import c from './Skills.module.scss'

type Props={
    text: string;
    left: number;
    bottom: number;
}

const Skills: React.FC<Props> = ({text, left, bottom}) => {
    return (
        <div style={{left: `${left}vw`, bottom: `${bottom}vh`}} className={c.skills}>
            <div className={c.title}>{text}</div>
        </div>
    )
}

export default Skills;