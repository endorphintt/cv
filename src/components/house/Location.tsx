import c from './Location.module.scss'

type Props = {

}

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
                <div className={c.flag}>
                    <div className={c.branch}></div>
                    <div className={c.flag}>WROCLAW</div>
                </div>
            </div>
        </div>
    )
}

export default Location;