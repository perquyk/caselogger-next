import React from 'react'
import '@/components/extra-content-cards/ExtraContentCard.css'
import Link from "next/link";

const ExtraContentCard = () => {
    const otherTools = [
        {name: "Frustrafix", version: "3.0.1", by: "Kenny Perquy", link: "https://chromewebstore.google.com/detail/frustrafix/obefljbiiicgmfajdhnpaklocbnlnkaf?authuser=0&hl=nl", action: "Add to Chrome"},
        {name: "Antscopy Remastered", version: "3.0.0", by: "Jonathan Gevaert", link: "/downloads/AntsCopy.zip", action: "Download .zip"},
        {name: "Antscopy Manifest v3", version: "0.2.1", by: "Kenny Perquy", link: 'https://chromewebstore.google.com/detail/antscopy/ndcgnmdjcfifegkmmlfnjiplbiochjhj?authuser=0&hl=nl', action: "Add to Chrome"},
        {name: "Caselogger (HTML)", version: "1.0.0", by: "Kenny Perquy", link: "https://perquyk.org", action: "Visit"},

]


    function generateCards(ar) {
        return (
            <>
                {ar.map((item, i) => (
                    <div key={i} className="card-frame">
                        <div className="card-frame-header">
                            <div className='card-header'>
                                <h1 className="text-3xl">{item.name}</h1>
                                <h6 className="card-version">Versie: {item.version}</h6>
                            </div>
                            <h6 className="by">Door: {item.by}</h6>
                        </div>
                        <div className="card-body">
                        <div className="card-action-div">

                            <button className="card-action-btn"><Link href={item.link}
                                                                      target="_blank">{item.action}</Link></button>
                        </div>
                        </div>
                    </div>
                ))}
            </>
        )

    }

    return (
        <div className={'cards'}>
            <div className="card-wrapper">
                {/*Automatic card-generation with data in const otherTools*/}
                {generateCards(otherTools)}

            </div>
        </div>
    )
}
export default ExtraContentCard
