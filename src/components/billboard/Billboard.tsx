import c from './Billboard.module.scss'

type Props = {
    positionLeft: number
    tablePosition: number
    dates: string;
    company: string;
    title: string;
    points: string[];
}

const Billboard: React.FC<Props> = ({title, positionLeft, tablePosition, dates, company, points}) => {
    return (
        <div style={{display: `${positionLeft > tablePosition ? 'block' : 'none'}`}} className={c.board}>
            <div className={c.board_title}>{title}</div>
            <div className={c.deskription}>
                <div className={c.company}>{company}</div>
                <div className={c.dates}>{dates}</div>
            </div>
            <div className={c.points}>
                {points.map((i) => {
                    return (
                        <p className={c.points__item}>
                            {i}
                        </p>
                    )
                })}
            </div>
            <img src='./img/longcolumn.png' alt='column' className={c.column}/>
            <img src='./img/MushroomOne.png' alt='mush' className={c.mush}/>
        </div>
    )
}

export default Billboard;