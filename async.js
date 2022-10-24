const tbody = document.getElementById("ty");

let productos = [];
const getProductos = async () => await fetch('./productos.json').then((response) => response.json()).then(json => {
    console.log(json);
    return json
})


console.log(productos);

async function mostrarProductos() {
    let data = await getProductos()
    console.log(data);
    let body = "";
    data.productos.map(producto => {
        let row = "<tr>" +
        `<td>${producto.id}</td>` +
        `<td>${producto.nombre}</td>` +
        `<td>${producto.precio}</td></tr>` 
        body = body + row;
    });
    console.log(body);
    console.log(tbody);
    tbody.innerHTML = body;
    
}

mostrarProductos()