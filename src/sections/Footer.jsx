import React from 'react'

const Footer = () => {
    return (
        <section className={"c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"}>

            <a href='https://github.com/ayaanhaq' target= "_blank" rel="noreferrer" className={"flex justify-items-center"}>
                <div className={"social-icon"}>
                    <img src="/assets/github.svg" alt="github" className={"w-1/2 h-1/2"}/>
                </div>
            </a>
            <a href='https://www.linkedin.com/in/ayaan-haq-3a93b031a/' target= "_blank" rel="noreferrer" className={"flex justify-center gap-3"}>
                <div className={"social-icon"}>
                    <img src="/assets/instagram.svg" alt="linkedin" className={"w-1/2 h-1/2"}/>
                </div>
            </a>
        </section>
    )
}
export default Footer
//create linkedin link asw