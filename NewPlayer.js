import {Component, useState, useEffect} from 'react'

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'



function NewPlayer() {
    const [audioLists, setAudioLists] = useState([
        { name: 'Melophile', musicSrc: 'music/melophile.mp3' },
        { name: 'Misha x Jussi Halme  Bliss chill lofi beats', musicSrc: 'music/Misha x Jussi Halme  Bliss chill lofi beats.mp3.mp3' },
        { name: 'Swørn  Going Back Chillhop Essentials Winter', musicSrc: 'music/Swørn  Going Back Chillhop Essentials Winter.mp3' },
        { name: 'Billie Eilish  Ocean Eyes Official Music', musicSrc: 'music/Billie Eilish  Ocean Eyes Official Music.mp3' },
        { name: 'Anuv Jain  MISHRI Studio', musicSrc: 'music/Anuv Jain  MISHRI Studio.mp3' },
        { name: 'HRVY  Personal Official Video', musicSrc: 'music/HRVY  Personal Official Video.mp3' },
        {cover:'images/riha.jpg', name: 'RIHA by Anuv Jain Studio', musicSrc: 'music/RIHA by Anuv Jain Studio.mp3' },
              {cover:'images/Aisi-Raaton.jpg', name: 'Aisi Raaton  Anupam Roy', musicSrc: 'music/Aisi Raaton  Anupam Roy.mp3' },
              {cover:'images/alag-aasman.jpg', name: 'Anuv Jain  ALAG AASMAAN ', musicSrc: 'music/Anuv Jain  ALAG AASMAAN a song on the ukulele.mp3' },
              {cover:'images/sage.jpg', name: 'Ritviz  Sage ', musicSrc: 'music/Ritviz  Sage Official Music .mp3' },
              {cover:'images/ludo.jpg', name: 'LUDO Aabaad Barbaad ', musicSrc: 'music/LUDO Aabaad Barbaad Full VIdeo Abhishek B Aditya K Rajkummar R Sanya Fatima  Arijit Pritam.mp3' },
              {cover:'images/come-thru.png', name: 'Jeremy Zucker  comethru', musicSrc: 'music/Jeremy Zucker  comethru.mp3' },
              {cover:'images/bareilly.jpg', name: 'Nazm Nazm  Lyrical  Bareilly Ki Barfi  ', musicSrc: 'music/Nazm Nazm  Lyrical  Bareilly Ki Barfi  Kriti Sanon Ayushmann Khurrana  Rajkummar Rao  Arko.mp3' },
              {cover:'images/bookofyou.jpg', name: 'Alec Benjamin  The Book Of You  I', musicSrc: 'music/Alec Benjamin  The Book Of You  I.mp3' },
              {cover:'images/taaregin.jpg', name: 'Taare Ginn  Dil Bechara ', musicSrc: 'music/Taare Ginn  Dil Bechara  Full Song  SushantSanjana  AR Rahman  MohitShreya.mp3' },
              {cover:'images/play-date.jpg', name: 'Melanie Martinez  Play Date.mp3', musicSrc: 'music/Melanie Martinez  Play Date.mp3' },
              {cover:'images/i-like-me.jpg', name: 'Lauv  I Like Me Better ', musicSrc: 'music/Lauv  I Like Me Better Official Video.mp3' },
              {cover:'images/album-12.jpg', name: 'Prateek Kuhad  Tum Jab Paas  ', musicSrc: 'music/Prateek Kuhad  Tum Jab Paas  Artist Originals.mp3' },
   
      ])
    
      useEffect(() => {
        setTimeout(() => {
          setAudioLists([
              {cover:'images/thumb-5.jpg', name: 'Melophile', musicSrc: 'music/melophile.mp3' }, 
              {cover:'images/album-9.jpg', name: 'Swørn  Going Back Chillhop Essentials Winter', musicSrc: 'music/Swørn  Going Back Chillhop Essentials Winter.mp3' },
              {cover:'images/album-9.jpg', name:'Misha x Jussi Halme  Bliss chill lofi beats', musicSrc: 'music/Misha x Jussi Halme  Bliss chill lofi beats.mp3' }, 
             
              {cover:'images/album-10.png', name: 'Billie Eilish  Ocean Eyes Official Music', musicSrc: 'music/Billie Eilish  Ocean Eyes Official Music.mp3' },
              {cover:'images/mishri.jpg', name: 'Anuv Jain  MISHRI Studio', musicSrc: 'music/Anuv Jain  MISHRI Studio.mp3' },
              {cover:'images/personal.jpg', name: 'HRVY  Personal Official Video', musicSrc: 'music/HRVY  Personal Official Video.mp3' },
              {cover:'images/riha.jpg', name: 'RIHA by Anuv Jain Studio', musicSrc: 'music/RIHA by Anuv Jain Studio.mp3' },
              {cover:'images/Aisi-Raaton.jpg', name: 'Aisi Raaton  Anupam Roy', musicSrc: 'music/Aisi Raaton  Anupam Roy.mp3' },
              {cover:'images/alag-aasman.jpg', name: 'Anuv Jain  ALAG AASMAAN ', musicSrc: 'music/Anuv Jain  ALAG AASMAAN a song on the ukulele.mp3' },
              {cover:'images/sage.jpg', name: 'Ritviz  Sage ', musicSrc: 'music/Ritviz  Sage Official Music .mp3' },
              {cover:'images/ludo.jpg', name: 'LUDO Aabaad Barbaad ', musicSrc: 'music/LUDO Aabaad Barbaad Full VIdeo Abhishek B Aditya K Rajkummar R Sanya Fatima  Arijit Pritam.mp3' },
              {cover:'images/come-thru.png', name: 'Jeremy Zucker  comethru', musicSrc: 'music/Jeremy Zucker  comethru.mp3' },
              {cover:'images/bareilly.jpg', name: 'Nazm Nazm  Lyrical  Bareilly Ki Barfi  ', musicSrc: 'music/Nazm Nazm  Lyrical  Bareilly Ki Barfi  Kriti Sanon Ayushmann Khurrana  Rajkummar Rao  Arko.mp3' },
              {cover:'images/bookofyou.jpg', name: 'Alec Benjamin  The Book Of You  I', musicSrc: 'music/Alec Benjamin  The Book Of You  I.mp3' },
              {cover:'images/taaregin.jpg', name: 'Taare Ginn  Dil Bechara ', musicSrc: 'music/Taare Ginn  Dil Bechara  Full Song  SushantSanjana  AR Rahman  MohitShreya.mp3' },
              {cover:'images/play-date.jpg', name: 'Melanie Martinez  Play Date.mp3', musicSrc: 'music/Melanie Martinez  Play Date.mp3' },
              {cover:'images/i-like-me.jpg', name: 'Lauv  I Like Me Better ', musicSrc: 'music/Lauv  I Like Me Better Official Video.mp3' },
              {cover:'images/album-12.jpg', name: 'Prateek Kuhad  Tum Jab Paas  ', musicSrc: 'music/Prateek Kuhad  Tum Jab Paas  Artist Originals.mp3' },
              {cover:'images/album-12.jpg', name: '', musicSrc: 'music/impact.mp3' },
              {cover:'images/album-9.jpg', name: '', musicSrc: 'music/impact.mp3' },
              {cover:'images/album-9.jpg', name: '', musicSrc: 'music/impact.mp3' },
              {cover:'images/album-9.jpg', name: '', musicSrc: 'music/impact.mp3' },
            ])
        }, 1000)
      }, [setAudioLists])
    
    return (
        <ReactJkMusicPlayer quietUpdate
        clearPriorAudioLists
        audioLists={audioLists}/>
    );
}

export default NewPlayer;