import c from './Clouds.module.scss'

const Clouds: React.FC = () => {
    const numbers = [];
    for (let i = 1; i <= 50; i++) {
    numbers.push(i);
    }

    return (
        <div className={c.clouds}>            
            {numbers.map((i) => {
                return (
                    <img key={i} className={c.cloud} src="./img/cloud.png" alt="img" />
                )
            })}
        </div>
    )
}

export default Clouds;