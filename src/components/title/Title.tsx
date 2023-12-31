import c from "./Title.module.scss"

const Title: React.FC = () => {
  return (
    <div className={c.title_container}>
        <h2 className={c.pretitle}>Resume of</h2>
        <h1 className={c.title}>Taras Tsehenko</h1>
        <h3 className={c.subtitle}>web developer</h3>
        <div className={c.crosses}>
          <div className={c.pixel_cross}></div>
          <div className={c.pixel_cross}></div>
          <div className={c.pixel_cross}></div>
          <div className={c.pixel_cross}></div>
        </div>
    </div>
  )
}

export default Title;
