import c from './School.module.scss'

type Props = {
    name: string;
    title: string;
    position: string;  
    left: number; 
    span: string;
}

const School: React.FC<Props> = ({name, title, position, left, span}) => {
    return (
        <div style={{left: `${left}vw`}} className={c.school}>
            <div className={c.second_floor}>
                <div className={c.window}></div>
                <div className={c.window}></div>
            </div>
            <div className={c.first_floor}>
                <div className={c.window}></div>
                <div className={c.window}></div>
                <div className={c.window}></div>
            </div>
            <div className={c.board_container}>
                <div className={c.board}>
                    <div className={c.board__name}>{name}</div>
                    <div className={c.board__title}>{title}</div> 
                    <div className={c.board__position}>{position} <br /> <span>{span}</span></div>
                    <div className={`${c.point} + ${c.first}`}></div> 
                    <div className={`${c.point} + ${c.second}`}></div>                                         
                    <div className={`${c.point} + ${c.third}`}></div>      
                    <div className={`${c.point} + ${c.fourth}`}></div>      
                </div>
            </div>
        </div>
    )
}

export default School;