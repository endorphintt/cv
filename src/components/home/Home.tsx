import Title from '../title/Title';
import TreeOne from '../treeOne/TreeOne';
import c from './Home.module.scss'

const Home: React.FC = () => {
    return (
        <div className={c.home}>
            <Title />
            <img className={c.mushroomOne} src='./img/mushroomOne.png'></img>
        </div>
    )
}

export default Home;