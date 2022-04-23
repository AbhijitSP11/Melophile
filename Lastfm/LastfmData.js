import React, { useEffect, useState } from "react";
import axios from 'axios';

function LastfmData() {

    const [tracks, setTrack] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("159393ef9eda626ce052ed637a1c6542")

    function handleChange(event){
        const tracks = event.target.value;
        setTrack(tracks);
    }

    function handleSubmit(event){
        event.preventDefault();
        
        axios.get("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+tracks+"&api_key="+apiKey+"&format=json&maxResults=35")
        .then(data => {
            console.log(data.data.results.trackmatches.track);
            setResult(data.data.results.trackmatches.track);
           
        })
          
       
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <div className="form-group">
                    <input type="text" onChange={handleChange} className="form-control" placeholder="Search your favourites" autoComplete="off" />
                </div>
                <button type="submit" className="btn btn-danger">Search</button>
            </form>
            {result.map(tracks => (
                // <a target="_blank" href={book.volumeInfo.previewLink}>
                <img src={tracks.image[1].url} alt={tracks.image}/>))}  
   
   
           
            
        </div>
    )
}

export default LastfmData;