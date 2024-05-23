import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Communities from '../Communities/Index';
import Requests from '../Requests/Index';

function ProviderDashboard() {
    const [showCommunities, setShowCommunities] = useState(false);
    const [showRequests, setShowRequests] = useState(false);

    const handleCommunitiesClick = () => {
        setShowRequests(false);
        setShowCommunities(true);
    }

    const handleRequestsClick = () => {
        setShowCommunities(false);
        setShowRequests(true);
    }

    return (
        <div>
            {/* Page (document) title */}
            <Helmet>
                <title>Provider Dashboard</title>
            </Helmet>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center dv-communities-count">
                        <a href="#" onClick={handleCommunitiesClick}>
                            <div className="dv-box">
                                <label className="dv-analytics-label">Nearby Communities</label>
                                <label className="dv-analytics-figure">20</label>
                            </div>  
                        </a>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center dv-requests-count">
                        <a href="#" onClick={handleRequestsClick}>
                            <div className="dv-box">
                                <label className="dv-analytics-label">Your Requests</label>
                                <label className="dv-analytics-figure">8</label>
                            </div>
                        </a>
                    </div>
                </div>

                <br/> <br/>
                {/* Communities */}
                <div class="mt-4">
                    {showCommunities
                    && <Communities /> }

                    {showRequests
                    && <Requests /> }
                </div>
            </div>

        </div>
    );
}

export default ProviderDashboard;