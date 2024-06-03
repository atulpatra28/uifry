// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ImageButton from './components/imgbutton';


function App() {
  const handleClick = () => {
    console.log('Image button clicked!');
  };

  const [sentenceHeight, setSentenceHeight] = useState(0);

  useEffect(() => {
    const sentenceElement = document.querySelector('.sentence');
    const height = sentenceElement.clientHeight;
    setSentenceHeight(height);
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      const sentenceElement = document.querySelector('.sentence');
      const height = sentenceElement.clientHeight;
      setSentenceHeight(height);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="App">
      <div className="topbar">
        <img src="/pics/topbar.png" alt="Top Bar" />
      </div>
      <div className='star1'>
        <img src="/pics/star.png" alt="Star" />
      </div>
      <div className='star2'>
        <img src="/pics/star.png" alt="Star" />
      </div>
      <div className="sentence" style={{ top: `calc(50% - ${sentenceHeight / 2}px)` }}>
        <p>Make The Best<br/>Financial Decision</p>
      </div>
      <div className='circular-fade-red'/>

      <div className='circular-fade-yellow'/>


      <div className='sentence2'>
        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
          <br/>Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
      </div>
      <div className='phone1'>
        <img src="/pics/frph.png" alt="front phone"/>
      </div>
      <div className='circular-fade-red-ph'/>

      <div className='phone2'>
        <img src="/pics/miph.png" alt="front phone"/>
      </div>
      <div className='phone3'>
        <img src="/pics/baph.png" alt="front phone"/>
      </div>
      <div className='ellipse1'>
        <img src="/pics/ellipse.png" alt="front phone"/>
      </div>
      <div className='ellipse2'>
        <img src="/pics/ellipse.png" alt="front phone"/>
      </div>
      <div className='ellipse3'>
        <img src="/pics/ellipse.png" alt="front phone"/>
      </div>
      <div className='ribbon'>
        <img src="/pics/ribbon.png" alt="ribbon"/>
      </div>
      <div className='watchvid'>
      <ImageButton
        src="pics/watchvid.png"  // Replace with your image path
        alt="Button Image"
        onClick={handleClick}
      />      </div>
      <div className="getstarted">
      {/* Other content of your app */}
      <ImageButton
        src="pics/getstarted.png"  // Replace with your image path
        alt="Button Image"
        onClick={handleClick}
      />
    </div>
    <img src="/pics/yr.png" style={{ position: 'absolute', top: '800px' }} />
    <img src="/pics/ry.png" style={{ position: 'absolute', top: '1700px', left:'650px' }} />
    <img src="/pics/yrt.png" style={{ position: 'absolute', top: '2200px', left:'130px' }} />
    <img src="/pics/ry.png" style={{ position: 'absolute', top: '3125px', left:'20px' }} />

    <img src="/pics/testimonial.png" style={{ position: 'absolute', top:'2900px'}} />
    <img src="/pics/faq.png" style={{ position: 'absolute', top:'3800px' ,left:'30px'}} />

    <img src="/pics/rem.png" style={{ position: 'absolute', top: '800px' }} />
    </div>
    
    
    
  );
}

export default App;
