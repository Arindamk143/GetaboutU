import React, { useState } from 'react'
import "./css/app.css"
// import { useState } from "react"


export default function FetchLocation(props) {
    const accessName = props.name
    const API_TOKEN = "4dc7d04c983a12"
    const [IP, setData] = useState("")
    const [hostname, setHost] = useState("")
    const [city, setCity] = useState("")
    const [region, setReg] = useState("")
    const [country, setCon] = useState("")
    const [location, setLoc] = useState("")
    const [org, setOrg] = useState("")
    const [pos, setPos] = useState("")
    const [timezone, setTime] = useState("")


    const fetchMe = () => {
        fetchAPI()
    }

    const fetchAPI = async () => {
        await fetch(`https://ipinfo.io/json?token=${API_TOKEN}`).then(
            async (response) => await response.json()
        ).then(
            (data) => {
                let speech = new SpeechSynthesisUtterance(
                    `Hello Dear ${accessName} this website created by code Arindam, Right Now Your City Is ${data.city} And Your Region Is ${data.region} And Your Country Is ${data.country} Also Let's Talk About Your Server so your IP ADDRESS Is ${data.ip} so That's IP Belongs To The Network Of ${data.org} At Last The TimeZone Is ${data.timezone}`
                )
                speechSynthesis.speak(speech)
                setData(`Your IP : ${data.ip}`)
                setHost(`Your HostName : ${data.hostname}`)
                setCity(`Your City : ${data.city}`)
                setReg(`Your Region : ${data.region}`)
                setCon(`Your Country : ${data.country}`)
                setLoc(`Your Location : ${data.loc}`)
                setOrg(`Your Orginazions : ${data.org}`)
                setPos(`Your Postal : ${data.postal}`)
                setTime(`Your TimeZone : ${data.timezone}`)
            }
        ).catch((error)=> window.alert(`Sorry Dear You Got Some Internals ERRORS Like ${error}`))
    }
    return (
        <div>
            <button onClick={fetchMe}>Find YourSelf</button>
            <div className='details'>
                <p>{IP}</p>
                <p>{hostname}</p>
                <p>{city}</p>
                <p>{region}</p>
                <p>{country}</p>
                <p>{location}</p>
                <p>{org}</p>
                <p>{pos}</p>
                <p>{timezone}</p>
            </div>
        </div>
    )
}
