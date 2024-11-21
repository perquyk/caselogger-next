import React from 'react'
import '@/components/extra-content-cards/ExtraContentCard.css'
import Link from "next/link";

const ExtraContentCard = () => {
    const otherTools = [
        {name: "Frustrafix", version: "3.0.1", description: "Voegt snelkoppelingen toe in SFX en Chrome", by: "Kenny Perquy", link: "https://chromewebstore.google.com/detail/frustrafix/obefljbiiicgmfajdhnpaklocbnlnkaf?authuser=0&hl=nl", action: "Add to Chrome"},
        {name: "Antscopy Remastered", version: "3.0.0", description: "Extra opties voor ants", by: "Jonathan Gevaert", link: "/downloads/AntsCopy.zip", action: "Download .zip"},
        {name: "Antscopy Manifest v3", version: "0.2.1", description: "Basisversie antscopy in manifest V3",by: "Kenny Perquy", link: 'https://chromewebstore.google.com/detail/antscopy/ndcgnmdjcfifegkmmlfnjiplbiochjhj?authuser=0&hl=nl', action: "Add to Chrome"},
        {name: "Caselogger", version: "1.0.0", description: "HTML/JS versie van caselogger", by: "Kenny Perquy", link: "https://perquyk.org", action: "Visit"}
]


    function generateCards(ar) {
        return (
            <>
                {ar.map((item, i) => (
                    <div key={i} className="card-frame">
                        <div className='card-header'>
                            <h1 className="text-3xl">{item.name}</h1>
                            <h6 className="card-version">versie: {item.version}</h6>
                        </div>
                        <hr/>
                        <p className="by">Door: {item.by}</p>
                        <p>{item.description}</p>

                        <div className="card-action-div">
                            <hr/>
                            <button className="card-action-btn"><Link href={item.link} target="_blank">{item.action}</Link></button>
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
