const api_url ="https://api.ecelliitr.org/edc/community";
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data){
    let tab = 
    `  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Contact</th>
    <th>Linkedin</th>
    <th>Description</th>
    </tr>`;

    for(let r of data){
        tab += `<tr>
        <td id="name">${r.name}</td>
        <td>${r.email}</td>
        <td>${r.contact}</td>
        <td>${r.linkedin}</td>
        <td>${r.description}</td>
        </tr>`;
    }

    document.getElementById("startups").innerHTML = tab;
}