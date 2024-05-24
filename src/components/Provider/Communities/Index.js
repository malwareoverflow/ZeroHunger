import React, { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import api from "../../../services/api";

function Communities() {
    const [data, setData] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = api.get(`GetNearestRequests/${user.id}`);

        setData(response.data.data);
    });

    return (
    <>
        <div className="d-flex justify-content-between mb-3 mt-3 pb-2 dv-header">
            <label className="label-header">NearBy Communities</label>
            <a href="#" className="btn btn-primary">Add</a>
        </div>

        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="No"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="description" header="Description"></Column>
        </DataTable>
    </>
    );
}

export default Communities;