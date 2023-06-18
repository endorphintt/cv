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
            {[1, 2, 3, 4, 5].map((i) => {
                return (
                    <div key={i} className={c.mountain}>
                        <div className={c.mountain_top}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Mountains;