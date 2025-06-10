import React, { useEffect, useState } from 'react'

function About() {
    const [second, setSecond] = useState({
        name: 'john',
        age: 22,
        company: 'insta'
    })

    useEffect(() => {
        setTimeout(() => {
            setSecond({
                name: 'sakshi',
                age: 24,
                company: 'umer zone'
            })
        }, 300);
    })
    return (
        <p>
            <div>{second.name}</div>
            <div>{second.company}</div>
            <div>{second.age}</div>
        </p>
    )
}

export default About