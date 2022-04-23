//import AudioPlayer from 'react-h5-audio-player';
//import 'react-h5-audio-player/lib/styles.css';

import AudioPlayer from 'react-modular-audio-player';
import React, { Component } from 'react';
import './Audio.css';


  

let playlist = [
    { src: "music/Clarx - Shakedown [NCS Release].mp3",
      title: "Song",
      artist: "Singer" },
    { src: "music/Billie Eilish  Ocean Eyes Official Music.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];

class Player extends Component {
    render() {
        return (
           
            <AudioPlayer
  audioFiles={playlist}
  iconSize="1.1rem"
  playIcon="images/play.png"
  // playHoverIcon="/playHoverIcon.png"
  // pauseIcon="/pauseIcon.png"
  // pauseHoverIcon="/pauseIcon.png"
  // rewindIcon="/rewindIcon.png"
  // rewindHoverIcon="/rewindHoverIcon.png"
  // forwardIcon="/forwardIcon.png"
  // forwardHoverIcon="/forwardHoverIcon.png"
  // volumeIcon="/volumeIcon.png"
  // volumeEngagedIcon="/volumeIcon.png"
  // muteIcon="/muteIcon.png"
  // muteEngagedIcon="/muteIcon.png"
  // loopIcon="/loopIcon.png"
  // loopEngagedIcon="/loopEngagedIcon.png"
  // fontFamily="serif"
  // fontSize="1.5rem"
  playerWidth="92rem"
 

 
/>
        );
    }
}

export default Player;

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS


// import React, { Component } from 'react';

// const playlist = [
//     { name: 'y', src: 'music/impact.mp3' },
//     { name: 'z', src: 'music/impact2.mp3' },
//     { name: 'h', src: 'music/Midranger - Apocalypse [NCS Release].mp3' },
    
//   ];


// class Player extends Component {
//     render() {
//         return (
//             <div>
//                 <AudioPlayer src="music/impact.mp3"/>
//             </div>
//         );
//     }
// }

// export default Player;


//Workinggggggggggggg



// import React, { Component } from 'react';

// const playlist = [
//     { name: '枝芽', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3' },
//     { name: '自由女神', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
//     { name: '无雨无晴', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
//     { name: '碎片', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
//     { name: '永恒的港湾', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/yonghengdegangwan.mp3' },
//   ]
  
//   interface PlayListState {
//     currentMusicIndex: number
//   }
  
//   class PlayList extends Component<null, PlayListState> {
//     state = {
//       currentMusicIndex: 0,
//     }
  
//     handleClickPrevious = (): void => {
//       this.setState((prevState) => ({
//         currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
//       }))
//     }
  
//     handleClickNext = (): void => {
//       this.setState((prevState) => ({
//         currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
//       }))
//     }
  




//     render(): React.ReactNode  {
//         const { currentMusicIndex } = this.state
//         return (
//             <div>
//                 <p>currentMusicIndex: {currentMusicIndex}</p>
//         <AudioPlayer
//           autoPlayAfterSrcChange={true}
//           showSkipControls={true}
//           showJumpControls={false}
//           src={playlist[currentMusicIndex].src}
//           onClickPrevious={this.handleClickPrevious}
//           onClickNext={this.handleClickNext}
//         />
//             </div>
//         );
//     }
// }

// export default PlayList;