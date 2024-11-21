import React from 'react'
import './page.css'
import Changelog from '@/components/changelog/Changelog'
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Page = () => {
    return (
        <>
            <div className="content-div">
                <div className="content-header">
                    <div className="flex-title">
                        <Image className="header-logo" src="/Logo50.png" alt="Logo" width={50} height={50}/>
                        <h1>Caselogger</h1>
                    </div>
                    <h6 className='subtitle'>Ik maak caselogs alsof ze voor mezelf zouden zijn.</h6>
                </div>
                <hr/>
                <div className="content-body">
                    <p className="home-text">Kies bovenaan de gewenste template <br/>
                    Vul het formulier in en druk op de Copy of Download knop.<br/>
                    Easy-Peasy.</p>
                    <hr/>
                    <Changelog />
                    <hr/>
                    <div className="contact-buttons">
                        <h3 className="home-text">Bij problemen:</h3>
                        <button className="whatsapp-button"> <Link href="https://wa.me/32471562237" target="_blank"><FaWhatsapp className="whatsapp-icon"/></Link> </button>
                        <button className="mail-button"> <Link href="mailto:kenny.perquy@unit-t.eu" target="_blank"><CiMail className="mail-icon"/></Link></button>
                        <button className="github-button"><Link href="https://github.com/perquyk/caselogger-next/issues/new" target="_blank"><FaGithub className="github-icon"/></Link></button>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Page

