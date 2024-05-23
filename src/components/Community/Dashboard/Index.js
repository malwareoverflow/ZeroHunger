import React from "react";
import { Helmet } from "react-helmet";

function CommunityDashboard() {
    return (
        <div>
            {/* Page (document) title */}
            <Helmet>
                <title>Community Dashboard</title>
            </Helmet>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center dv-communities-count">
                        <div className="dv-box">
                            <label className="dv-analytics-label">Your Requests</label>
                            <label className="dv-analytics-figure">20</label>
                        </div>  
                    </div>
                    <div className="col-md-6 d-flex justify-content-center dv-requests-count">
                        <div className="dv-box">
                            <label className="dv-analytics-label">Request Claims</label>
                            <label className="dv-analytics-figure">8</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityDashboard;