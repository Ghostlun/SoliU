import React, {Fragment} from 'react';
import Pic from '../../asset/image/loader.gif';

const LoadingScreen = () => {
    return(
        <Fragment>
            <div class="loader">
                <img src={Pic}
                    style={{
                    width: '300px',
                    display: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '250px'
                }}/>
            </div>  
        </Fragment>
    );
};
export default LoadingScreen;