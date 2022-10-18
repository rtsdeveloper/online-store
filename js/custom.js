fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json();
}).then((Objectdata) => {
    let tabledata = "";
    Objectdata.map((value) => {
        tabledata += ` <tr>
                          <td>${value.title}</td>
                          <td>${value.category}</td>
                          <td>${value.description}</td>
                          <td>${value.price}</td>
                          <td><img src="${value.image}"></td>
                       </tr> `;
    });

    document.getElementById("tbody").innerHTML = tabledata;

})