import React from "react";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

function AddClaimRequest({ visible, hide }) {
    return (
    <Dialog header="Add Request Claim" visible={visible} style={{ width: '27vw' }} onHide={hide}>
        <p className="m-0">
           <form>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="name">Name</label>
                        <InputText id="name" className="form-control" />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="description">Description</label>
                        <InputTextarea
                            id="description"
                            className="form-control"
                            rows={5}
                            cols={30}
                        />
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                        <a href="#" className="btn btn-primary me-2">Save</a>
                        <a href="#" className="btn btn-secondary" onClick={hide}>Cancel</a>
                    </div>
                </div>
           </form>
        </p>
    </Dialog>
    );
}

export default AddClaimRequest;