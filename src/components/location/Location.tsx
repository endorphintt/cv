import c from './Location.module.scss'

const Location: React.FC = () => {
    return (
        <div className={c.location}>
            <div className={c.house}>
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
        </div>
    )
}

export default Location;