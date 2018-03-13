import React from 'react'
import bkHero from '../../resources/images/bkHero.jpg'

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.el;
        this.lastX;
        this.lastY;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onPageScroll = this.onPageScroll.bind(this);
        this.onRef = this.onRef.bind(this);
    }    
    onMouseDown = e => {
        this.lastX = e.pageX;
        this.lastY = e.pageY;
    }
    onMouseLeave = e => {
        this.lastX = null;
        this.lastY = null;
    }
    onMouseMove = e => {
        if (this.lastX && this.lastY) {
            let x = parseInt(e.target.style.backgroundPositionX.split('%')[0] || 0) + (this.lastX - e.pageX)/e.target.offsetWidth*100;
            let y = parseInt(e.target.style.backgroundPositionY.split('%')[0] || 0) + (this.lastY - e.pageY)/e.target.offsetHeight*100;

            if (y > 100)  y = 100; else if (y < 0) y = 0;
            if (x > 100)  x = 100; else if (x < 0) x = 0;
            
            e.target.style.backgroundPositionX = x + '%';
            e.target.style.backgroundPositionY = y + '%';      

            this.lastX = e.pageX;
            this.lastY = e.pageY;
        }
    }
    onMouseUp = e => {
        this.lastX = null;
        this.lastY = null;
    }
    onPageScroll = e => {
        console.log(this.el)
        var rect = this.el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
    onRef = el => {
        if (!this.el)
            this.el = el;
    }
    componentDidMount () {
        window.addEventListener('scroll', this.onPageScroll);
    }
    componentWillUnMount () {
        window.removeEventListener("scroll", this.onPageScroll);
    }
    render () {
        return (
            <div
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
                    onMouseDown={ this.onMouseDown }
                    onMouseLeave={ this.onMouseLeave }
                    onMouseMove={ this.onMouseMove }
                    onMouseUp={ this.onMouseUp }
                    ref={ this.onRef }
                    style={{
                        cursor: 'pointer',
                        height: '100%',
                        backgroundImage: 'url(' + bkHero + ')',
                        //backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        userSelect: 'none'
                    }}
                />
            </div>
        );
    }
}

export default Hero;