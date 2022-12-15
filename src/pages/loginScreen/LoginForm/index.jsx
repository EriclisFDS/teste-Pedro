import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "teste@teste.com" && password === "123456"){
            navigate("/charts")
        }else{
            alert("senha incorreta");
        }
    }

    return(
        <form className="w-full" onSubmit={e => handleSubmit(e)}>
            <span className={`
                block 
                text-3xl 
                text-white 
                text-center
                pb-6
            `}>
                Wellcome
            </span>
            
            <span className={`
                block 
                text-3xl 
                text-white 
                text-center
            `}>
                <img 
                    src="" 
                    alt="" 
                    className="w-24"
                />
            </span>
            
            <div className={`
                w-full
                relative
                mb-9
                border-b-2
            `}>
                <input 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="teste@teste.com" 
                    className={`
                        text-base
                        text-white
                        border-none
                        block
                        w-full
                        h-11
                        py-0
                        px-1
                        bg-transparent
                        focus:outline-none
                    `} 
            />
            </div>
            
            <div className={`
                w-full
                relative
                mb-9
                border-b-2
            `}>
                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="123456"
                    className={`
                        text-base
                        text-white
                        border-none
                        block
                        w-full
                        h-11
                        py-0
                        px-1
                        bg-transparent
                        focus:outline-none
                    `} 
            />
            </div>
            
            <div className={`
                flex
                flex-wrap
                justify-center
                pb-3
            `}>
                <button
                    type="submit" 
                    className={`
                    text-base
                    border-none
                    rounded-lg
                    text-white
                    uppercase
                    flex
                    justify-center
                    items-center
                    w-full
                    h-12
                    bg-yellow-500
                    mt-4
                `}>
                    Login
                </button>
            </div>
        
        </form>
    )
}