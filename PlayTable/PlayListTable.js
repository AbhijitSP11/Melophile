import AudioPlayer from "react-modular-audio-player";
import { Table, Button } from 'react-bootstrap';
import '../Footer/Footer.css'
import './Plst.css';

import React, { Component } from 'react';

let rearrangedPlayer = [
    {
      className: "adele",
      innerComponents: [
        {
          type: "play",
          style: {
            width: "100%",
            justifyContent: "center",
            filter: "invert(100%)",
            opacity: "0.4"
          }
        }
      ]
    }
  ];

  let Bellie = [
   
    {  src: "music/Billie Eilish  Ocean Eyes Official Music.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];
  let Anuv = [
   
    {  src: "music/Anuv Jain  MISHRI Studio.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];
  let Like = [
   
    {  src: "music/Lauv  I Like Me Better Official Video.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];
  let HRVY = [
   
    {  src: "music/HRVY  Personal Official Video.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];
  let Nasm = [
   
    {  src: "music/Nazm Nazm  Lyrical  Bareilly Ki Barfi  Kriti Sanon Ayushmann Khurrana  Rajkummar Rao  Arko.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];
  let Sanam = [
   
    {  src: "music/O Sanam  Sunoh  Lucky Ali  Official.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];

  let Tum = [
   
    {  src: "music/Prateek Kuhad  Tum Jab Paas  Artist Originals.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];
  let Kasoor = [
   
    {  src: "music/Prateek Kuhad  Kasoor Official Music Video.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];


class PlayListTable extends Component {
    render() {
        return (
            <div>
                 {/* <div className="container-fluid " style={{height:380}}>
                <div className="row">
                <div className="col-md-2  item text">
                <br/><br/>
                       <img src ="images/album-3.jpg" style={{height:"250px", width:"250px"}}/>
                     
                    </div> */}
                    {/* <div className="col-md-3 item text" style={{marginLeft:30, marginTop:40}}>
                        <h3>Playlist</h3>
                       
                        <p style={{fontSize:12}}></p>
                    </div>
                   
                    
                    <div className="col-md-8 item text ">
                        <br/>
                    <Button type="button" variant="outline-light" >Play Now</Button>

                        
                    </div> */}
                    {/* <div className="col-sm-4 col-md-2 item">
                        <h3>More</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Partnership</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-2 item">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div> */}
                  
                {/* </div>
              
            </div> */}
            <div>
            <Table hover variant="dark"  responsive>
                <thead style={{ backgroundColor: "#111217" }}>
                    <tr>
                        <th></th>
                        <th style={{color:"#EA215C"}}>Title</th>
                        <th style={{color:"#EA215C"}}>Artist</th>
                        <th style={{color:"#EA215C"}}>Time</th>
                        <th style={{color:"#EA215C"}}>Options</th>
                       
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: "#111217" }}>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={Bellie}/></td>
                        <td>Ocean Eyes </td>
                        <td>Billie Eilish</td>
                        <td>03:00</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={Anuv}/></td>
                        <td>MISHRI </td>
                        <td>Anuv Jain  MISHRI Studio</td>
                        <td>02:56</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={Kasoor}/></td>
                        <td >Kasoor</td>
                        <td>Prateek Kuhad</td>
                        <td>02:59</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={Like}/></td>
                        <td >I Like me better</td>
                        <td>Lauv</td>
                        <td>03:55</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr> <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                    <tr>
                        <td><AudioPlayer rearrange={rearrangedPlayer}  playerWidth="0.2rem" iconSize="2rem"  audioFiles={HRVY}/></td>
                        <td >HRVY  Personal </td>
                        <td>HRVY</td>
                        <td>03:53</td>
                        <td style={{color:"#EA215C"}}><i class="bi bi-share"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus-square"></i></td>
                    </tr>
                </tbody>
            </Table>
            </div>
            </div>
        );
    }
}

export default PlayListTable;

// function PlayListTable(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default PlayListTable;