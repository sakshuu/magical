import React, { useEffect, useState } from 'react'

function About() {
    const [second, setSecond] = useState({
        name: 'shubham',
        age: 22,
        company: 'google'
    })

    useEffect(() => {
        setTimeout(() => {
            setSecond({
                name: 'sakshi',
                age: 24,
                company: 'umer zone'
            })
        }, 3000);
    })
    return (
        <p>
            <h1>{second.name}</h1>
            <h1>{second.age}</h1>
            <h1>{second.company}</h1>
        </p>
    )
}

export default About