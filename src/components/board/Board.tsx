import c from './Board.module.scss'

type Props = {
    positionLeft: number
    tablePosition: number
    width: number;
    height: number;
    color: string;
    title: string;
    technologies: { title: string, rating: number[] }[];
}

let a = 0

const Board: React.FC<Props> = ({width, height, color, title, technologies, positionLeft, tablePosition}) => {
    return (
        <div style={{display: `${positionLeft > tablePosition ? 'block' : 'none'}`, backgroundColor: `${color}`}} className={c.board}>
            <div className={c.board_title}>{title}</div>
            <div className={c.rating}>
                {['rating', 'beginner', 'elementary', 'intermeadiate', 'upper int.', 'advanced'].map((i) => {
                    return (
                        <div key={i} className={c.rating__item} >{i}</div>
                    )
                })}
            </div>
            <div className={c.technologies}>
                {technologies.map((i) => {
                    return (
                        <div className={c.technologies__item} key={i.title}>
                            <div className={c.tecnologies__title}>{i.title}</div>
                            <div className={c.technologies_rating}>
                                {i.rating.map((r) => {
                                    a++
                                    return(
                                        <div className={c.mario}>
                                            {r === 1 ? <img key={a} className={c.mush} src="./img/mush.png" alt="mushroom" /> : <span key={a}></span>}
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Board;