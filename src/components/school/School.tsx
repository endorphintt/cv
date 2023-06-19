import c from './School.module.scss'

type Props = {
    name: string;
    title: string;
    dates: string;
    position: string;  
    left: number; 
}

const School: React.FC<Props> = ({name, title, dates, position, left}) => {
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
        </div>
    )
}

export default School;