import Title from '../title/Title';
import TreeOne from '../treeOne/TreeOne';
import c from './Home.module.scss'

const Home: React.FC = () => {
    return (
        <div className={c.home}>
            <Title />
            <div className={c.house}>
                <div className={c.second_floor}>
                    <div className={c.window}></div>
                    <div className={c.window}></div>
                </div>
                <div className={c.first_floor}>
                    <div className={c.door_top}></div>
                    <div className={c.door_bottom}></div>
                </div>
            </div>
            <img className={c.mushroomOne} src='./img/mushroomOne.png'></img>
        </div>
    )
}

export default Home;