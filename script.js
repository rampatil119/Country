
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('Country');
    const btn = document.getElementById('btn');
    const name = document.getElementById('name');
    const code = document.getElementById('code');
    const countryId = document.getElementById('countryId');  // Add a new element for ID
    
    function checkout(countryName) {
        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", "Mjg2V1VtMGFSbHU1MFJlR2NtR1pzMGFSOVhQUk51cVo4ZDFBbVgzTg==");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        fetch(`https://api.countrystatecity.in/v1/countries/${countryName}`, requestOptions)
        .then(response => response.json())  
        .then(data => {
            console.log(data);  
            if (data) {
                name.innerHTML = data.name ? `${data.name}` : 'No Name Available'; 
                code.innerHTML = data.iso2 ? `${data.iso2}` : 'No ISO Code Available';    
                countryId.innerHTML = data.country_id ? `${data.id}` : 'No Country ID Available';  
            }
           const list=document.getElementById('list')
           data.forEach(element => {
            const listItem=document.createElement('li')
            listItem.textContent = `${element.name} (${element.iso2})`;
            list.appendChild(listItem)
           });

        })
        .catch(error => console.log('error', error));
    }

    btn.addEventListener('click', () => {
        const countryName = input.value.trim();  
        if (countryName) {
            checkout(countryName); 
        } else {
            console.log('Please enter a country name');
        }
    });
});
