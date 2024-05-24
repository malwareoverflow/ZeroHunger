import React, { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import AddRequest from "./Add";

const requests = [
    {
        id: '1',
        name: 'Request 1',
        description: 'blah blah blah',
    },
    {
        id: '2',
        name: 'Request 2',
        description: 'blah blah blah',
    },
];

function RequestClaims() {
    const [showRequestModal, setShowRequestModal] = useState(false);

    const hideModal = () => {
        setShowRequestModal(false);
    }

    return (
    <>
        <div className="d-flex justify-content-between mb-3 mt-3 pb-2 dv-header">
            <label className="label-header">Request Claims</label>
            <a
                href="#"
                className="btn btn-primary"
                onClick={() => setShowRequestModal(true)}
            >Add</a>
        </div>

        <DataTable value={requests} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="No"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="description" header="Description"></Column>
        </DataTable>

        {/* Add Modal */}
        <AddRequest visible={showRequestModal} hide={hideModal} />
    </>
    );
}

export default RequestClaims;