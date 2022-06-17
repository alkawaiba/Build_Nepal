
import React from 'react'
import MainSection from '../../components/MainSection/MainSection'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'

function Home ({member, setMember}) {
    return (
        <div className="home">
            <MainSection member = {member} setMember = {setMember} />
            <Menu />
            <Footer />

        </div>
        
    )
}

export default Home