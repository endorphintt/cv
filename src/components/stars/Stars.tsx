import c from './Stars.module.scss'

const Stars: React.FC = () => {
    return (
        <div className={c.stars_container}>
            <div className={c.stars}></div>
            <div className={c.stars}></div>
            <div className={c.stars}></div>
            <div className={c.stars}></div>
            <div className={c.stars}></div>
        </div>
    )
}

export default Stars;