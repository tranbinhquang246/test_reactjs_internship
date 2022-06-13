import React,{useState} from 'react'
import Tab_lates from './Tab_lates';
import Tab_motion_trend_pick from './Tab_motion_trend_pick'

function Experimental() {
    const [showMotionTrend, setShowMotionTrend] = useState(true);
    const [showLates, setShowLatest] = useState(false);
    const [showRecommended, setShowRecommended] = useState(false);
    const activeTabMotion = () => {
        setShowMotionTrend(true);
        setShowLatest(false);
        setShowRecommended(false);
    }
    const activeTabLatest = () => {
        setShowMotionTrend(false);
        setShowLatest(true);
        setShowRecommended(false);
    }
    const activeTabRecommended = () => {
        setShowMotionTrend(false);
        setShowLatest(false);
        setShowRecommended(true);
    }
  return (
    <div className="flex flex-col ml-5 mr-5 mt-10 mb-10">
    <div className="flex">
        <p className="font-montserrat text-sm font-bold underline mr-5 cursor-pointer" 
        onClick={showMotionTrend ? null:activeTabMotion} style = {{fontWeight: showMotionTrend ? '' : '500', textDecoration: showMotionTrend ? '':'none'}}>Motion trend pick</p>
        <p className="font-montserrat text-sm mr-5 cursor-pointer" 
        onClick={showLates ? null:activeTabLatest} style={{fontWeight: showLates ? '700' : '', textDecoration: showLates? 'underline':''}}>Latest</p>
        <p className= "font-montserrat text-sm cursor-pointer" 
        onClick={showRecommended ? null:activeTabRecommended} style={{fontWeight: showRecommended ? '700' : '', textDecoration: showRecommended ? 'underline':''}}>Recommended</p>    
    </div>
   {
    showMotionTrend && <Tab_motion_trend_pick></Tab_motion_trend_pick>
   }
   {
    showLates && <Tab_lates></Tab_lates>
   }
</div>
  )
}

export default Experimental