import c from './TreeOne.module.scss'

const TreeOne: React.FC = () => {
    return (
        <div className={c.treeOne}>
            <div className={c.leaf}></div>
            <div className={c.branch}></div>
        </div>
    )
}

export default TreeOne;