import React from 'react'
import './page.css'
import Changelog from '@/components/changelog/Changelog'
import Image from "next/image";
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
                    <p className="home-text">Bij problemen: stuur Kenny een Whatsappje 😊</p>
                </div>

            </div>
        </>
    )
}
export default Page

