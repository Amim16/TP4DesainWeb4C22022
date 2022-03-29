function addData() {
    var name = document.getElementById("nama").value;
    var bday = document.getElementById("bday").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    
    var hobby = [];
    var choose = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < choose.length; i++) {
        if (i!=choose.length-1) {
            hobby = hobby+`${choose[i].value}, `;            
        }else{
            hobby = hobby+`${choose[i].value}`;
        }
    }

    var religion = document.getElementById("religion").value;
    var message = document.getElementById("Pesan").value;

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    table.setAttribute("class", "table");

    // Adding the entire table to the body tag
    document.getElementById('card').appendChild(table);



    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Label";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Value";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    thead.appendChild(row_1);

    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "Nama";
    row_2_data_1.style.fontWeight = "700";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = name;
    
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    tbody.appendChild(row_2);
    
    // Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "Tanggal Lahir";
    row_3_data_1.style.fontWeight = "700";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = bday;
    
    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    tbody.appendChild(row_3);
    
    // Creating and adding data to fourth row of the table
    let row_4 = document.createElement('tr');
    let row_4_data_1 = document.createElement('td');
    row_4_data_1.innerHTML = "Jenis Kelamin";
    row_4_data_1.style.fontWeight = "700";
    let row_4_data_2 = document.createElement('td');
    row_4_data_2.innerHTML = gender;
    
    row_4.appendChild(row_4_data_1);
    row_4.appendChild(row_4_data_2);
    tbody.appendChild(row_4);
    
    // Creating and adding data to fifth row of the table
    let row_5 = document.createElement('tr');
    let row_5_data_1 = document.createElement('td');
    row_5_data_1.innerHTML = "Hobi";
    row_5_data_1.style.fontWeight = "700";
    let row_5_data_2 = document.createElement('td');
    row_5_data_2.innerHTML = hobby;
    
    row_5.appendChild(row_5_data_1);
    row_5.appendChild(row_5_data_2);
    tbody.appendChild(row_5);
    
    // Creating and adding data to sixth row of the table
    let row_6 = document.createElement('tr');
    let row_6_data_1 = document.createElement('td');
    row_6_data_1.innerHTML = "Agama";
    row_6_data_1.style.fontWeight = "700";
    let row_6_data_2 = document.createElement('td');
    row_6_data_2.innerHTML = religion;
    
    row_6.appendChild(row_6_data_1);
    row_6.appendChild(row_6_data_2);
    tbody.appendChild(row_6);
    
    // Creating and adding data to seventh row of the table
    let row_7 = document.createElement('tr');
    let row_7_data_1 = document.createElement('td');
    row_7_data_1.innerHTML = "Pesan";
    row_7_data_1.style.fontWeight = "700";
    let row_7_data_2 = document.createElement('td');
    row_7_data_2.innerHTML = message;

    row_7.appendChild(row_7_data_1);
    row_7.appendChild(row_7_data_2);
    tbody.appendChild(row_7);
}