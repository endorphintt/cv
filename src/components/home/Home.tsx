import Title from '../title/Title';
import TreeOne from '../treeOne/TreeOne';
import TreeThree from '../treeThree/TreeThree';
import TreeTwo from '../treeTwo/TreeTwo';
import c from './Home.module.scss'

const Home: React.FC = () => {
    return (
        <div className={c.home}>
            <Title />
            <img className={c.mushroomOne} src='./img/mushroomOne.png'></img>
            <TreeOne />
            <TreeTwo />
            <TreeThree />
            <img className={c.column} src="./img/column.png" alt="column" />
            <img className={c.question} src="./img/question.png" alt="question" />
        </div>
    )
}

export default Home;