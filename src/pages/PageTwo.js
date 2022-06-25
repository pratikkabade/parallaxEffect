import React from 'react'
import { ParallaxLayer } from "@react-spring/parallax";

const PageTwo = () => {
  return (
    <div>
        {/* page2 */}
        <ParallaxLayer
          className="img"
          offset={1}
          speed={0}
          style={{ backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/SkyBG.png)', 
                    backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          className="img"
          offset={1}
          speed={0.2}
          style={{ backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds1.png)', 
                    backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          className="img"
          offset={1}
          speed={0.4}
          style={{ backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds2.png)', 
                    backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          className="img"
          offset={1}
          speed={0.6}
          style={{ backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds3.png)', 
                    backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          className="img"
          offset={1}
          speed={1}
          style={{ backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Moon.png)', 
                    backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          className="img"
          offset={1}
          speed={0}
          style={{ backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Hill.png)', 
                    backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          offset={1.5}
          speed={0.15}
        >
            <h1 className="custom motionText noSelect">Section2</h1>
        </ParallaxLayer>
    </div>
  )
}

export default PageTwo