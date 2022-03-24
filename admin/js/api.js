const baseUrl = 'https://enigma-demoserver.herokuapp.com/api/';
const source = 1;

// REPORTS

async function getReports() {
    let { data } = await axios.get(`${baseUrl}reports`); 
    return data;   
}

async function getReport(id) {
    let { data } = await axios.get(`${baseUrl}reports/${id}`); 
    return data;   
}

async function approveReport(id) {
    let { data } = await axios.put(`${baseUrl}reports/${id}/approve`); 
    window.location.reload();
    return data;   
}

async function dismissReport(id) {
    let { data } = await axios.put(`${baseUrl}reports/${id}/dismiss`); 
    window.location.reload();
    return data;   
}

async function createReport(report) {
    let { data } = await axios.post(`${baseUrl}reports`, report,  { headers: { 'X-Enigma-Source': source } });
    return data;
}

// INVESTIGATIONS

async function getInvestigations() {
    let { data } = await axios.get(`${baseUrl}investigations`); 
    return data;   
}

async function getInvestigation(id) {
    let { data } = await axios.get(`${baseUrl}investigations/${id}`); 
    return data;   
}

async function commenceInvestigation(id) {
    let { data } = await axios.put(`${baseUrl}investigations/${id}/commence`); 
    window.location.reload();
    return data;   
}

async function concludeInvestigation(id, conclusion) {
    conclusion = prompt("Please enter the investigation's conclusion:", "[Not Provided]")
    let { data } = await axios.put(`${baseUrl}investigations/${id}/conclude`, { comment: conclusion }); 
    window.location.reload();
    return data;   
}

async function createInvestigation(investigation) {
    let { data } = await axios.post(`${baseUrl}investigations`, investigation); 
    return data;   
}

// NOTIFICATIONS

async function getNotifications() {
    let { data } = await axios.get(`${baseUrl}notifications`); 
    return data;   
}