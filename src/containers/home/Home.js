import React from 'react'
// i18n
import T from 'i18n-react'
import i18n from '../../i18n/I18n'

class Home extends React.Component {    
    render () {
        i18n.getTest();
        return (
            <div
                style={{
                    height: 1500
                }}
            >
                <T.span text='greetings.hello'/>
            </div>
        );
    }
}

export default Home;