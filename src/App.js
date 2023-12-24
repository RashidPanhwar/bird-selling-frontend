import React from "react";
import TopSec from "./components/TopSec";
import HeroSec from "./components/HeroSec";
import FeatureCategory from "./components/FeatureCategory";
import FeatureImage from '../src/assets/featureCategory/featureCategory.png';
import WhyChoseUs from "./components/WhyChoseUs";


function App() {
  
  
  return (
    <div className="App">
      <TopSec />
      <HeroSec />
      <FeatureCategory 
        category='Feature category'
        imageSource={FeatureImage}
        />
      <FeatureCategory 
        category='Feeds category'
        imageSource={FeatureImage}
      />
      <FeatureCategory 
        category='our blogs'
        imageSource={FeatureImage}
        />
      <WhyChoseUs />
    </div>
  );
}

export default App;
