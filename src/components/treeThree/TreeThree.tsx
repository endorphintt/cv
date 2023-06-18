import c from './TreeThree.module.scss'

const TreeThree: React.FC = () => {
    return (
        <div className={c.treeThree}>
            <div className={c.leaf}></div>
            <div className={c.branch}></div>
        </div>
    )
}

export default TreeThree;