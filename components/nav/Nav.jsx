import React from 'react'
import Link from 'next/link'
import '@/components/nav/Nav.css'
import Image from "next/image";
import ChevronDown from "@/components/parts/icons/ChevronDown";

const Nav = () => {
    const inHomeLinks = [
       {name: "Install", loc: "/forms/inhome/install", enabled: true},
       {name: "Repair", loc: "/forms/inhome/repair", enabled: true},
       {name: "Project Unhappy Drop", loc: "/forms/inhome/proj-unhappy-drop", enabled: true},
   ]
    const ftthLinks = [
        {name: "RFoG Install", loc: "/forms/ftth/rfog-install", enabled: true},
    ]
    const b2bLinks = [
        {name: "Corporate Fibernet", loc: "/forms/b2b/cfn", enabled: true},
        {name: "PSV KA", loc: "/forms/b2b/PSV", enabled: true},
    ]
    const projLinks = [
        {name: "GSX-Migration", loc: "/forms/b2b/project/gsx-migration", enabled: true},
        {name: "Modem/NIU-swap", loc: "/forms/b2b/project/modem-niu-swap", enabled: true},
    ]

    function dropdownSelect(name, ar) {
       const filteredAr = ar.filter((link) => {if(link.enabled){return true}})
        return(
            <>
            <div className="dropdown">
                <button className="dd-label">
                    {name}
                    <div className="dd-chevron"><ChevronDown/></div>
                </button>
                <div className="dropdown-content">
                    {filteredAr.map((link, index) => (<Link key={index} href={link.loc}>{link.name}</Link>))}
                </div>

            </div>
            </>
        )
    }

    return (
        <nav className="navbar">
            <div className="nav-group">
                <Link className="nav-brand" href="/">
                    <Image src='/Logo32.png' alt="logo" width="32" height="32"/>
                    <span>Caselogger</span>
                </Link>
            </div>

            <div>
                <div className="nav-group">
                    <div className="nav-item-group">
                        {dropdownSelect("inHome", inHomeLinks)}
                        {dropdownSelect("FTTH", ftthLinks)}
                        {dropdownSelect("B2B", b2bLinks)}
                        {dropdownSelect("B2B Projects", projLinks)}
                        <button className="nav-item"><Link href="/page/extra">Other Tools</Link></button>

                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav
