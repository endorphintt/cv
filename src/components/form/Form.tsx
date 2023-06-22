import FStar from "../fStar/FStar";
import c from "./Form.module.scss"
import { useForm, ValidationError } from "@formspree/react";

const Form: React.FC = () => {
    const [state, handleSubmit] = useForm("xqkorkjl");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className={c.form_container}>
            <FStar />
            <form onSubmit={handleSubmit} className={c.form}>
                <div className={c.form__title}>contact</div>
                <div className={c.form__item}>
                    <input
                        className={c.form__input} 
                        id="email"
                        type="email" 
                        name="email"
                        placeholder="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className={c.form__item}>
                    <input 
                        type="name"
                        id="name"
                        name="name"
                        className={c.form__input}
                        placeholder="subject" 
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className={c.form__item_textarea}>
                    <textarea
                        id="message"
                        name="message"
                        className={c.form__textarea} 
                        placeholder="message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button className={c.form__button} type="submit" disabled={state.submitting}>
                    send
                </button>
            </form>
        </div>
    )
}

export default Form;