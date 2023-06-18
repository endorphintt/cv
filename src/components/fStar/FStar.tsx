import c from "./FStar.module.scss"

const FStar: React.FC = () => {
    return (
        <div className={c.falling_star}>
            <div className={c.star}></div>
            <div className={c.shine}></div>
        </div>
    )
}

export default FStar;