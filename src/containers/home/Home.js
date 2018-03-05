import React from 'react'
// i18n
import i18n from '../../i18n/I18n'

class Home extends React.Component {    
    render () {
        return (
            <div
                style={{
                    height: 1500
                }}
            >
                {
                    i18n.getString('banner.main.title', 'mario', 'medrano')
                }
            </div>
        );
    }
}

export default Home;