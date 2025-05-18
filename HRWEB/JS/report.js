const emp_count_Link = "https://ideal-giggle-pj94vwj6rrp6h7967-6006.app.github.dev/empCount";

fetch(emp_count_Link)
.then(response => {
    console.log('Employee response status:', response.status);
    if (!response.ok) throw new Error("Failed to Fetch data from given URL");
    return response.json();
})
.then(data => {
    console.log("Employee data:", data);
    document.getElementById('emp').innerHTML = data[0].count;
})
.catch(err => {
    console.error("Employee fetch error:", err.message);
});

const coun_count_Link = "https://ideal-giggle-pj94vwj6rrp6h7967-6006.app.github.dev/countryCount";

fetch(coun_count_Link)
.then(response => {
    console.log('Country response status:', response.status);
    if (!response.ok) throw new Error("Failed to Fetch data from given URL");
    return response.json();
})
.then(data => {
    console.log("Country data:", data);
    document.getElementById('country').innerHTML = data[0].count;
})
.catch(err => {
    console.error("Country fetch error:", err.message);
});

const dept_count_Link = "https://ideal-giggle-pj94vwj6rrp6h7967-6006.app.github.dev/deptCount";

fetch(dept_count_Link)
.then(response => {
    console.log('Country response status:', response.status);
    if (!response.ok) throw new Error("Failed to Fetch data from given URL");
    return response.json();
})
.then(data => {
    console.log("Country data:", data);
    document.getElementById('country').innerHTML = data[0].count;
})
.catch(err => {
    console.error("Country fetch error:", err.message);
});
