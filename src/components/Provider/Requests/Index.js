import React, { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import AddRequest from "./Add";
import api from "../../../services/api";

function Requests() {
    const [data, setData] = useState();
    const [showRequestModal, setShowRequestModal] = useState(false);

    const hideModal = () => {
        setShowRequestModal(false);
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = api.get(`GetRequestByUserId/${user.id}`);

        setData(response.data.data);
    });

    return (
    <>
        <div className="d-flex justify-content-between mb-3 mt-3 pb-2 dv-header">
            <label className="label-header">Requests</label>
            <a
                href="#"
                className="btn btn-primary"
                onClick={() => setShowRequestModal(true)}
            >Add</a>
        </div>

        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="No"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="description" header="Description"></Column>
        </DataTable>

        {/* Add Modal */}
        <AddRequest visible={showRequestModal} hide={hideModal} />
    </>
    );
}

export default Requests;