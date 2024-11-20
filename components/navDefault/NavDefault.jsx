import React from 'react'
import Link from "next/link";
import './NavDefault.css'

function NavDefault() {

    const inhomeLink = [
        {name: 'Install', link: '/forms/inhome/install', enabled: true},
        {name: 'Repair', link: '/forms/inhome/repair', enabled: true},
        {name: 'Project Unhappy Drop', link: '/forms/inhome/unhappy',enabled: true},]

    const ftthLink = [
        {name: 'RFoG-Install', link: '/forms/ftth/rfog-install',enabled: true},
    ]

    const B2BLink = [
        {name: 'CFN', link: '/forms/B2B/CFN',enabled: true},
        {name: 'IP-VPN', link: '/forms/IPVPN',enabled: true},
    ]
    const B2BProjectLink = [
        {name: 'GSX Migration', link: '/forms/B2B/Project/GSX',enabled: true},
    ]

    function linkSelect(ar) {
        //Filter through links declared above, if true, show them.
        const filteredAr = ar.filter((link, linkIndex) => {if(link.enabled){return true}})
        return filteredAr.map((link, index) => (<Link key={index} href={link.link}>{link.name}</Link>))
    }

    function dropdownSelect(name, ar) {
        //Adds selections to dropdown menu (NameOfDropDown, Array).
        return (<>
            <div className="dropdown">
                <button className="dropbtn">
                    {name}
                    <i className="fa fa-caret-down"/>
                </button>
                <div className="dropdown-content">
                    {linkSelect(ar)}
                </div>
            </div>
        </>)


    }

    return (
        <>
            <div className="navbar">
                <Link href="/">Caselogger</Link>

                {dropdownSelect("inHome", inhomeLink)}
                {dropdownSelect("FTTH", ftthLink)}
                {dropdownSelect("B2B", B2BLink)}
                {dropdownSelect("B2BProject", B2BProjectLink)}
            </div>
        </>
    )
}

export default NavDefault
