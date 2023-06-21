import School from '../school/School';
import c from './Education.module.scss'

const Education = () => {
    return (
        <div className={c.education}>
            <School
                name={'Uniwersity of Wroclaw'}
                title={'Computer Science'}
                position={`Balchelor`}
                span="(not graduated)"
                left={5}
            />
            <School
                name={'Foxminded'}
                title={'Frontend React'}
                position={'Junior'}
                span=""
                left={55}
            />
        </div>
    )
}

export default Education;