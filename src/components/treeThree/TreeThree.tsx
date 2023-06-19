import c from './TreeThree.module.scss'

type Left = {
    left: number;
}

const TreeThree: React.FC<Left> = ({left}) => {
    return (
        <div style={{left: `${left}vw`}} className={c.treeThree}>
            <div className={c.leaf}></div>
            <div className={c.branch}></div>
        </div>
    )
}

export default TreeThree;