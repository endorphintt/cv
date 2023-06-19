import School from '../school/School';
import c from './Education.module.scss'

const Education = () => {
    return (
        <div className={c.education}>
            <School
                name={'Uniwersity of Wroclaw'}
                title={'Computer Science'}
                dates={'2021 - not graduated'}
                position={'Balchelor'}
                left={5}
            />
            <School
                name={'Uniwersity of Wroclaw'}
                title={'Computer Science'}
                dates={'2021 - not graduated'}
                position={'Balchelor'}
                left={55}
            />
        </div>
    )
}

export default Education;