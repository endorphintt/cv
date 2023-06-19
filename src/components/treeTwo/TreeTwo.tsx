import c from './TreeTwo.module.scss'

type Left = {
    left: number;
}

const TreeTwo: React.FC<Left> = ({left}) => {
    return (
        <div style={{left: `${left}vw`}}  className={c.treeTwo}>
            <div className={c.leaf}></div>
            <div className={c.branch}></div>
        </div>
    )
}

export default TreeTwo;