import React from 'react'
// i18n
import i18n from '../../i18n/I18n'
import Hero from '../../components/heros/Hero'

class Home extends React.Component {    
    render () {
        return (

            <div
                style={{
                    height: 1500
                }}
            >
                <Hero/>
                {
                    i18n.getString('banner.main.title', 'mario', 'medrano')
                }
            </div>
        );
    }
}

export default Home;