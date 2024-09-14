import { MouseEvent, useEffect, useState } from 'react';
import {store} from "@/app/auth/model"


const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [formDisabled, setFormDisabled] = useState<boolean>(true);

    useEffect(() => {
        if(password.length > 6 && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setFormDisabled(false);
        } else {
            setFormDisabled(true);
        }

    }, [email, password] )

    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if(!formDisabled) {
            store.makeAuth(email, password);
        }
    }

    return (
        <form className="p-2 border border-primary rounded">
            <div className="p-1 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input onChange={(event) => {setEmail(event.target.value)}} value={email} type="email" className="form-control form-control-sm" id="email" placeholder="Введите email" />
            </div>
            <div className="p-1 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input onChange={(event) => {setPassword(event.target.value)}} value={password}  type="password" className="form-control form-control-sm" id="password" placeholder="Введите пароль" />
            </div>
            <div className="p-1 mb-3">
                <button className="btn btn-sm btn-primary" disabled={formDisabled} onClick={clickHandler}>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;