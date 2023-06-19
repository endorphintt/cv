import c from './TreeOne.module.scss'

type Left = {
    left: number;
}

const TreeOne: React.FC<Left> = ({left}) => {
    return (
        <div style={{left: `${left}vw`}}  className={c.treeOne}>
            <div className={c.leaf}></div>
            <div className={c.branch}></div>
        </div>
    )
}

export default TreeOne;