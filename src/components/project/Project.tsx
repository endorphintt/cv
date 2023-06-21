import c from './Project.module.scss'

type Props = {
    bottom: number;
    color: string;
    border_bottom: string; 
    title: string;
    description: string;
}   

const Project: React.FC<Props> = ({bottom, color, border_bottom, description, title}) => {
    return (
        <div 
            style={{
                bottom: `${bottom}vh`,
                backgroundColor: `${color}`,
                borderBottom: `40px solid ${border_bottom}`
            }} 
            className={c.project}
        >
            <div className={c.title}>{title}</div>
            <div className={c.description}>{description}</div>
        </div>
    )
}

export default Project