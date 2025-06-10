import React, { useEffect, useState } from 'react'

function About() {
    const [first, setFirst] = useState({
        name: 'shubham',
        age: 22,
        company: 'google'
    })

    useEffect(() => {
        setTimeout(() => {
            setFirst({
                name: 'sakshi',
                age: 24,
                company: 'umer zone'
            })
        }, 3000);
    })
    return (
        <p>
            <h1>{first.name}</h1>
            <h1>{first.age}</h1>
            <h1>{first.company}</h1>
        </p>
    )
}

export default About