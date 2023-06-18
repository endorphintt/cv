import c from './TreeTwo.module.scss'

const TreeTwo: React.FC = () => {
    return (
        <div className={c.treeTwo}>
            <div className={c.leaf}></div>
            <div className={c.branch}></div>
        </div>
    )
}

export default TreeTwo;