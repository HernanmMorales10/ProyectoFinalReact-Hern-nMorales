# Tienda de comics online WOWComic

## Video

el video ha sido subido a drive por su peso comparto link aca y de la misma fomra en el comentario de mi entrega
https://drive.google.com/file/d/1f7TCqHwGkA7o3Cfw4m8UY9-px6QeHEA8/view?usp=sharing

Los componentes que se utilizan en este proyectos son los siguientes:

- main.jsx: Archivo principal de la aplicación donde se renderiza el componente App.
- app.jsx: Componente principal de la aplicación donde se definen las rutas y se obtiene la información de los productos a través de la base de datos Firebase.
- loader.jsx: Componente que muestra una animación de carga mientras se obtiene la información de los productos desde la base de datos Firebase.
- Brand.jsx: Muestra el logo con una animación y te dirige al home desde cualquier parte del sitio en donde te encuentres.
- Navbar.jsx: Componente que muestra la barra de navegación con los enlaces a las diferentes categorías y al carrito de compras, tiene como hijo al componente CartWidget.
- CartWidget.jsx: Componente que muestra el ícono del carrito de compras y la cantidad de productos agregados en la barra de navegación.
- ItemListContainer.jsx: Componente que muestra el listado de productos comp´leto y tambien los puede filtrar por categoría, tiene como hijo al componente ItemList.
- ItemList.jsx: Componente que muestra la vista previa de un producto en la página principal.
- ItemDetailContainer.jsx: Componente que muestra la vista detallada de un producto seleccionado, tiene como hijo al componente ItemDetail.
- ItemDetail.jsx: Componente que muestra la información detallada de un producto seleccionado, y tiene como hijo al componente AddItemButtom para agregar productos.
- AddItemButton.jsx: Componente que permite agregar un producto al carrito de compras.
- CartContext.jsx: Archivo que define el contexto para compartir la información del carrito de compras entre diferentes componentes.
- Cart.jsx: Componente que muestra el contenido del carrito de compras y permite eliminar productos o finalizar la compra.
- ItemQuantitySelector.jsx: Componente que permite seleccionar la cantidad de un producto ya sea para disminuir o aumentar, en el carrito de compras.
- Checkout.jsx: Componente que permite al usuario ingresar su información personal para finalizar la compra, devolviendole un identificador de la operacion.

