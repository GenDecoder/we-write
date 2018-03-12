import React from 'react'
import bkHero from '../../resources/images/bkHero.jpg'

class Hero extends React.Component {
    constructor(props) {
        super(props);        
    }
    move = e => {
        let x = ((this.initialX - e.pageX)/e.target.offsetWidth)*100;
        let y = ((this.initialY - e.pageY)/e.target.offsetHeight)*100;

        x = parseInt(e.target.style.backgroundPositionX.split('%')[0]) + x;
        y = parseInt(e.target.style.backgroundPositionY.split('%')[0]) + y;

        if (y > 100)  y = 100;
        else if (y < 0) y = 0;

        if (x > 100)  x = 100;
        else if (x < 0) x = 0;
        
        e.target.style.backgroundPositionX = x + '%';
        e.target.style.backgroundPositionY = y + '%';      

        this.initialX = e.pageX;
        this.initialY = e.pageY;
    }
    render () {
        return <div
            style={{
                height: 400,
                position: 'relative'
            }}
        >
            
            {/* <div
                style={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(19, 19, 19, 0.37)'
                }}
            >
                Some Text
            </div> */}
            <div
                onMouseDown={e => {
                    e.target.focus();
                    this.initialY = e.pageY; 
                    this.initialX = e.pageX;
                }}
                onMouseMove={e => {
                    if (this.initialX && this.initialY) {
                        this.move(e);
                    }
                } }
                onMouseUp={e => {
                    this.move(e);
                    this.initiaX = null;
                    this.initialY = null;
                } }
                onMouseLeave={
                    e => {
                        this.initiaX = null;
                        this.initialY = null;
                    }
                }
                style={{
                    cursor: 'pointer',
                    height: '100%',
                    backgroundImage: 'url(' + bkHero + ')',
                    backgroundPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    userSelect: 'none'
                }}
            >

            </div>
        </div>
    }
    _bkImage = () => {

    }
    _content = () => {

    }
}

export default Hero;