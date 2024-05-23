import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const communities = [
    {
        id: '1',
        name: 'Community 1',
        description: 'blah blah blah',
    },
    {
        id: '2',
        name: 'Community 2',
        description: 'blah blah blah',
    },
];

function Communities() {
    return (
    <>
        <div className="d-flex justify-content-between mb-3 mt-3 pb-2 dv-header">
            <label className="label-header">NearBy Communities</label>
            <a href="#" className="btn btn-primary">Add</a>
        </div>

        <DataTable value={communities} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="No"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="description" header="Description"></Column>
        </DataTable>
    </>
    );
}

export default Communities;