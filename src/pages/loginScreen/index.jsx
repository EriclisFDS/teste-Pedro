import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

export default function LoginScreen(){
    return(
        <section className="w-full my-0 mx-auto">
            <div className={`
                w-full 
                min-h-screen 
                flex 
                flex-wrap 
                items-center 
                justify-items-center
                p-3.5
                bg-blue-500
            `}>
                <div className={`
                    w-96 
                    bg-green-500 
                    rounded-lg
                    pt-20
                    px-14
                    pb-8
                    mx-auto
                `}>

                    <LoginForm/>

                    <div className={`
                        flex
                        justify-center
                        items-center
                        mt-12
                    `}>
                        <span className={`
                            text-xs
                        `}>
                            Esqueceu sua senha? <Link to={'/'} className="text-blue-900 underline">Clique aqui</Link> para recupera-la
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}