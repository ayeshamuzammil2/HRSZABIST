const departments_URL = "https://ideal-giggle-pj94vwj6rrp6h7967-6006.app.github.dev/dept";

fetch(departments_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch department Data");
        return response.json();
}).then(data=>{
    const tbody = document.querySelector("#departmenttable tbody");

    data .forEach(departments=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${departments.department_id}</td>
        <td>${departments.department_name}</td>
        <td>${departments.manager_id}</td>
        <td>${departments.location_id}</td
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});

