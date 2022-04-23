import React from 'react';

const Detail = ({album, artists, name}) => {

    return (
        
        <div className="offset-md-1 col-sm-4" >
            <div className="row col-sm-12 px-0">
                <img 
                    src={album.images[0].url}
                    alt={name} style={{height:250}}>                    
                </img>
            </div>
            <div className ="container">
            <div className="row col-sm-12 px-0">
                <label htmlFor={name} className="form-label col-sm-12" style={{color:'white', marginLeft:-30}}>
                    {name}
                </label>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={artists[0].name} className="form-label col-sm-12"style={{color:'white', marginLeft:-30}}>
                    {artists[0].name}
                   
                </label>
                <button type="button" class="btn btn-danger col-sm-4" style={{height:35, marginLeft:-20}}> <h5 style={{color:'white'}}>Listen</h5></button>
            </div>
            </div>
        </div>
    );
}

export default Detail;