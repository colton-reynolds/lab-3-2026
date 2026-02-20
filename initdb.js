const url = 'https://script.google.com/macros/s/AKfycbx_i9x3d6mAhaHI2v8rGWjKdusE9mSNkpjLnCgeInZ1QIkP27_jInoqUE36m2QtU9-H5Q/exec';
const key = '1CMqZHN5Qnv3Qzve7djIq97dtZOXEdkPPwOxkEDFwoWQ';

const send = (body) => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key, ...body })
}).then(r => r.json());

send({ action: 'create', type: 'table', table: 'Experiences' })
.then(r => { console.log(r); return send({ action: 'create', type: 'column', table: 'Users', column: 'Name', dataType: 'string', required: true }); })
.then(r => { console.log(r); return send({ action: 'create', type: 'column', table: 'Users', column: 'Email', dataType: 'string', required: true }); })
.then(r => { console.log(r); return send({ action: 'create', type: 'column', table: 'Users', column: 'Experience', dataType: 'string', required: true }); })
.then(r => console.log(r))
.catch(err => console.error(err));