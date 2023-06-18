import c from './Mountains.module.scss'

type Props = {
    positionLeft: number;
    startPosition: number;
}

const Mountains: React.FC<Props> = ({positionLeft, startPosition}) => {
    const mountainPosition = positionLeft / 2
    return (
        <div className={c.mountains}
            style={{
                left: `${mountainPosition}vw`
            }}
        >
            <div className={c.mountain}>
                <div className={c.mountain_top}></div>
            </div>
            <div className={c.mountain}>
                <div className={c.mountain_top}></div>
            </div>
            <div className={c.mountain}>
                <div className={c.mountain_top}></div>
            </div>
            <div className={c.mountain}>
                <div className={c.mountain_top}></div>
            </div>
        </div>
    )
}

export default Mountains;