import React from 'react'
// i18n
import T from 'i18n-react'

class Home extends React.Component {
    render () {
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