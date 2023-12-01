const productData = [
  {id:1, modelo: "2001",año: 2023, categoria: "Motocicleta",peso: 210, silindraje: "500", precio: 100000,kilometraje: 100, imageUrl: "/img/mt1.jpg" },
  {id:2, modelo: "2012",año: 2023, categoria: "Motocicleta",peso: 110, silindraje: "660", pricio: 40000,kilometraje: 100, imageUrl: "/img/mt2.jpg" },
  {id:3, modelo: "2012",año: 2023, categoria: "Motocicleta",peso: 200, silindraje: "1200", precio: 19000,kilometraje: 100, imageUrl: "/img/mt3.jpg"},
  { id:4,modelo: "2013",año: 2023, categoria: "Motocicleta",peso: 300, silindraje: "700", precio: 22000,kilometraje: 100, imageUrl: "/img/mt4.jpg"},
  {id:5, modelo: "2009",año: 2023, categoria: "Motocicleta",peso: 220, silindraje: "300", precio: 30000,kilometraje: 100, imageUrl: "/img/mt5.jpg"},
  { id:6,modelo: "2010",año: 2023, categoria: "Motocicleta",peso: 200, silindraje: "400", precio: 80000,kilometraje: 100, imageUrl: "/img/mt6.jpg"},
  { id:7,modelo: "2020",año: 2023, categoria: "Motocicleta",peso: 100, silindraje: "2000", precio: 50000,kilometraje: 100, imageUrl: "/img/mt7.jpg"},
  {id:8, modelo: "2007",año: 2023, categoria: "Motocicleta",peso: 400, silindraje: "130", precio: 21000,kilometraje: 100, imageUrl: "/img/mt8.jpg"},
  { id:9,modelo: "2021",año: 2023, categoria: "Motocicleta",peso: 330, silindraje: "150", precio: 33000,kilometraje: 100, imageUrl: "/img/mt9.jpg"},
  {id:10, modelo: "2022",año: 2023, categoria: "Motocicleta",peso: 900, silindraje: "400",precio: 99000,kilometraje: 100, imageUrl: "/img/mt10.jpg"},

  // segunda tanda remplazar ID seguir con el conteo, cambiar modelo de imagen, seguir con el conteo 
  {id:11, modelo: "2015", categoria: "Automovil", silindraje: "1500", precio: 33000, imageUrl: "/img/11.jpg" },
  {id:12, modelo: "2013", categoria: "Automovil", silindraje: "3000", pric: 12100, imageUrl: "/img/12.jpg" },
  {id:13, modelo: "2020", categoria: "Automovil", silindraje: "4000", precio: 140000, imageUrl: "/img/13.jpg"},
  { id:14,modelo: "2022", categoria: "Automovil", silindraje: "5000",precio: 24000, imageUrl: "/img/14.jpg"},
  {id:15, modelo: "2021", categoria: "Repuestos", silindraje: "2031", precio: 300, imageUrl: "/img/15.jpg"},
  { id:16,modelo: "2012", categoria: "Repuestos", silindraje: "212", precio: 400, imageUrl: "/img/16.jpg"},
  { id:17,modelo: "2011", categoria: "Repuestos", silindraje: "23", precio: 140, imageUrl: "/img/17.jpg"},
  {id:18, modelo: "2011", categoria: "Repuestosa", silindraje: "222", precio: 1000, imageUrl: "/img/18.png"},
  { id:19,modelo: "2010", categoria: "Repuestos", silindraje: "2011", precio: 1200, imageUrl: "/img/19.jpg"},
  {id:20, modelo: "2011", categoria: "Repuestos", silindraje: "2013", precio: 1400, imageUrl: "/img/20.png"},
  
  // tercera  tanda remplazar ID seguir con el conteo, cambiar modelo de imagen, seguir con el conteo 
  
  {id:21, modelo: "2015", categoria: "Repuestos", silindraje: "500", precio: 3000, imageUrl: "/img/21.jpg" },
  {id:22, modelo: "2013", categoria: "Repuestos", silindraje: "300", pric: 1200, imageUrl: "/img/22.jpg" },
  {id:23, modelo: "2010", categoria: "Repuestos", silindraje: "4000", precio: 4000, imageUrl: "/img/23.jpg"},
  { id:24,modelo: "2012", categoria: "Repuestos", silindraje: "500",precio: 24000, imageUrl: "/img/24.jpg"},
  {id:25, modelo: "2021", categoria: "Repuestos", silindraje: "231", precio: 3300, imageUrl: "/img/25.png"},
  { id:26,modelo: "2012", categoria: "Repuestos", silindraje: "2102", precio: 4200, imageUrl: "/img/26.png"},
  { id:27,modelo: "2021", categoria: "Repuestos", silindraje: "223", precio: 1420, imageUrl: "/img/27.jpg"},
  {id:28, modelo: "2011", categoria: "accesorios", silindraje: "212", precio: 12000, imageUrl: "/img/28.jpg"},
  { id:29,modelo: "2020", categoria: "casco", silindraje: "Protege", precio: 100, imageUrl: "/img/29.jpg"},
  {id:30, modelo: "2019", categoria: "accesorios", silindraje: "2013", precio: 14400, imageUrl: "/img/30.webp"},

   // 4 tanda remplazar ID seguir con el conteo, cambiar modelo de imagen, seguir con el conteo 
  
  {id:31, modelo: "2015", categoria: "Repuestos", silindraje: "500", precio: 3000, imageUrl: "/img/31.jpg" },
  {id:32, modelo: "2023", categoria: "Repuestos", silindraje: "300", pric: 200, imageUrl: "/img/32.jpg" },
  {id:33, modelo: "2010", categoria: "Repuestos", silindraje: "4000", precio: 6000, imageUrl: "/img/33.png"},
  { id:34,modelo: "2022", categoria: "accesorios", silindraje: "500",precio: 2000, imageUrl: "/img/34.jpg"},
  {id:35, modelo: "2011", categoria: "accesorios", silindraje: "231", precio: 3400, imageUrl: "/img/35.webp"},
  { id:36,modelo: "2022", categoria: "accesorios", silindraje: "2102", precio: 200, imageUrl: "/img/36.jpg"},
  { id:37,modelo: "2001", categoria: "accesorios", silindraje: "223", precio: 1420, imageUrl: "/img/37.jpg"},
  {id:38, modelo: "2011", categoria: "accesorios", silindraje: "212", precio: 12000, imageUrl: "/img/38.jpg"},
  { id:39,modelo: "2010", categoria: "casco", silindraje: "Protege", precio: 1000, imageUrl: "/img/39.jpg"},
  {id:40, modelo: "2009", categoria: "Repuestos", silindraje: "2013", precio: 3400, imageUrl: "/img/40.jpg"},

// 4 tanda remplazar ID seguir con el conteo, cambiar modelo de imagen, seguir con el conteo 
  
{id:41, modelo: "2023", categoria: "accesorios", silindraje: "500", precio: 3000, imageUrl: "/img/41.jpg" },
{id:42, modelo: "2013", categoria: "accesorios", silindraje: "300", pric: 200, imageUrl: "/img/42.jpg" },
{id:43, modelo: "2020", categoria: "accesorios", silindraje: "4000", precio: 6000, imageUrl: "/img/43.jpg"},
{ id:44,modelo: "2012", categoria: "accesorios", silindraje: "500",precio: 2000, imageUrl: "/img/44.jpg"},
{id:45, modelo: "2021", categoria: "accesorios", silindraje: "231", precio: 3400, imageUrl: "/img/45.jpg"},
{ id:46,modelo: "2012", categoria: "Repuestos", silindraje: "2102", precio: 200, imageUrl: "/img/46.jpg"},
{ id:47,modelo: "2011", categoria: "Repuestos", silindraje: "223", precio: 1420, imageUrl: "/img/47.jpg"},
{id:48, modelo: "2031", categoria: "Repuestos", silindraje: "212", precio: 12000, imageUrl: "/img/48.jpg"},
{ id:49,modelo: "2010", categoria: "Repuestos", silindraje: "Protege", precio: 1000, imageUrl: "/img/49.jpg"},
{id:50, modelo: "2019", categoria: "Repuestos", silindraje: "2013", precio: 3400, imageUrl: "/img/50.webp"},


];

//PAGINACION
const itemsPorPagina = 10;
let páginaActual = 1;
const productContainer = document.getElementById('productList');
const totalPaginasContainer = document.getElementById('totalPages');
const totalElementosContainer = document.getElementById('totalElements');
const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');
const borrarFiltroButton = document.getElementById('borrarFiltro');
const precioFiltroInput = document.getElementById('precioFiltro');
const modeloFiltroInput = document.getElementById('modeloFiltro');
const silindrajeFiltroInput = document.getElementById('silindrajeFiltro');

borrarFiltroButton.addEventListener('click', () => {
  precioFiltroInput.value = '';
  modeloFiltroInput.value = '';
  silindrajeFiltroInput.value = '';
  mostrarProductosEnPagina();
});


const totalPaginas = Math.ceil(productData.length / itemsPorPagina);
let totalElementos = productData.length;

totalPaginasContainer.innerText = `Página ${páginaActual} de ${totalPaginas}`;
totalElementosContainer.innerText = `Total de elementos: ${totalElementos}`;

function agregarEventoDetalles(boton, modelo) {
  boton.addEventListener('click', () => mostrarDetalles(modelo));
}

function aplicarFiltros(product) {
  const precioFiltro = parseFloat(precioFiltroInput.value) || 0;
  const modeloFiltro = modeloFiltroInput.value.toLowerCase();
  const silindrajeFiltro = silindrajeFiltroInput.value.toLowerCase();

  return (
    (precioFiltro === 0 || product.precio === precioFiltro) &&
    (modeloFiltro === '' || product.modelo.toLowerCase().includes(modeloFiltro)) &&
    (silindrajeFiltro === '' || product.silindraje.toLowerCase().includes(silindrajeFiltro))
  );
}
function showProductDetails(product) {
  const productDetails = document.getElementById('productDetails');
  productDetails.style.display = 'block'; // Muestra la sección de detalles del producto

  document.getElementById('productTitle').innerHTML = product.name;
  document.getElementById('productImage').src = product.imageUrl;
  document.getElementById('productDescription').innerHTML = product.description;
  document.getElementById('productPrice').innerHTML = product.price;
  document.getElementById('productModel').innerHTML = product.model;
  document.getElementById('productDisplacement').innerHTML = product.displacement;
}

function mostrarProductosEnPagina() {
  const inicio = (páginaActual - 1) * itemsPorPagina;
  const fin = inicio + itemsPorPagina;
  const productosFiltrados = productData.filter(aplicarFiltros);
  const productosEnPagina = productosFiltrados.slice(inicio, fin);

  productContainer.innerHTML = '';

  productosEnPagina.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.modelo}">
      <h3>Modelo ${product.modelo}</h3>
      <p>Año: ${product.año}</p>
      <p>Categoría: ${product.categoria}</p>
      <p>Peso: ${product.peso}</p>
      <p>Cilindraje: ${product.silindraje}</p>
      <p>Precio: ${product.precio}</p>
      <p>Kilometraje: ${product.kilometraje}</p>
      <button class="btn-2" data-modelo="${product.modelo}"> Ver Detalle </button> 

      
    `;

    productContainer.appendChild(productDiv);

    // Utiliza el atributo data- para almacenar el modelo
    agregarEventoDetalles(productDiv.querySelector('.btn-2'), product.modelo);
  });

  totalPaginasContainer.innerText = `Página ${páginaActual} de ${totalPaginas}`;
  totalElementosContainer.innerText = `Total de elementos: ${totalElementos}`;
}

async function mostrarDetalles (modelo) {
  const product = productData.find(item => item.modelo === modelo);
  const selectedCard = document.querySelector(`[alt="${modelo}"]`);
  const detailsContainer = document.createElement('div');
  detailsContainer.className = 'details-container';
  selectedCard.appendChild(detailsContainer); 

  const loadingMessageElement = document.createElement('p');
  loadingMessageElement.innerText = 'Cargando...';
  detailsContainer.appendChild(loadingMessageElement);

  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    detailsContainer.innerHTML = `
      <div class="product-details">
        <img src="${product.imageUrl}" alt="${product.modelo}">
        <h3>Modelo ${product.modelo}</h3>
        <p>Año: ${product.año}</p>
        <p>Categoría: ${product.categoria}</p>
        <p>Peso: ${product.peso}</p>
        <p>Cilindraje: ${product.silindraje}</p>
        <p>Precio: ${product.precio}</p>
        <p>Kilometraje: ${product.kilometraje}</p>
      </div>
    `;
  } finally {
    loadingMessageElement.remove();
  }
}

botonSiguiente.addEventListener('click', () => {
  if (páginaActual < totalPaginas) {
    páginaActual++;
    mostrarProductosEnPagina();
  }
});

botonAnterior.addEventListener('click', () => {
  if (páginaActual > 1) {
    páginaActual--;
    mostrarProductosEnPagina();
  }
});

precioFiltroInput.addEventListener('input', mostrarProductosEnPagina);
modeloFiltroInput.addEventListener('input', mostrarProductosEnPagina);
silindrajeFiltroInput.addEventListener('input', mostrarProductosEnPagina);

// Llama a mostrarProductosEnPagina al cargar la página
mostrarProductosEnPagina();
