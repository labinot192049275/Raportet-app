var Raports = [
    {
        Name:"RName",
        Departament: "IT",
        Description: "DailyRaport",
        Phone: 4541534554,
        Email: "test@gmail.com",

    },

    {
        Name:"Test",
        Departament: "Cyber",
        Description: "DailyRaport",
        Phone: 454534554,
        Email: "test2@gmail.com",
    },

    {
        Name:"Syla",
        Departament: "HR",
        Description: "DailyRaport",
        Phone: 4545334554,
        Email: "test3@gmail.com",

    },


]

const tableBody = document.getElementById('tbody');

for (const Raport of Raports) {
  const tr = document.createElement('tr');
  const content = `<td>${Raport.Name}</td>
  <td>${Raport.Departament}</td>
  <td>${Raport.Description}</td>
  <td>${Raport.Phone}</td>
  <td>${Raport.Email}</td>`;
  
  tr.innerHTML = content;
  tableBody.appendChild(tr)
 }