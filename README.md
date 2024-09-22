# Eco-Commerce: Admin Panel 🌿

**Eco-Ecommerce** es una plataforma diseñada para la venta de productos amigables con el medio ambiente. Ofrecemos una selección curada de artículos sostenibles que incluyen moda orgánica, tecnología verde y elementos para el hogar ecológicos. Nuestro objetivo es promover un estilo de vida consciente, brindando acceso a productos que reducen el impacto ambiental y respetan los recursos naturales.

En esta parte del proyecto se plantea ver la vista de administrador y el manejo de lo visto en el User-Front.

![ecocommerce](https://github.com/user-attachments/assets/1259bd33-6363-418e-86e0-5f88db7000d3)




## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Next.js**: Utilizado para la creación de una aplicación web rápida, con soporte para renderizado del lado del servidor (SSR) y rutas dinámicas, lo que mejora la experiencia del usuario.
- **MongoDB**: Base de datos NoSQL utilizada para manejar de manera eficiente los productos, usuarios y pedidos de la plataforma.
- **React**: Biblioteca para la construcción de la interfaz de usuario, proporcionando una experiencia interactiva y fácil de usar.
- **Node.js**: Utilizado para el backend del proyecto, facilitando la gestión de API y la conexión con la base de datos.
- **Tailwinds**: es un framework de CSS que, a diferencia de los tradicionales como Bootstrap, no crea componentes con una sola clase, sino que tiene algo llamado Utility Classes, que son clases específicas para casa cosa.






![stackFULLHD](https://github.com/user-attachments/assets/a29a0c4b-3343-4e01-9c28-045f1c6a0c42)


## Características Principales

- **Conexión a un bucket de AWS S3**: Permite almacenar y gestionar imágenes de productos de manera eficiente en la nube.
- **Conexión a MongoDB**: Utilizado como la base de datos principal para gestionar productos, usuarios y órdenes de manera eficiente.
- **Agregar nuevos productos**: Los administradores pueden añadir nuevos productos al catálogo con facilidad, especificando categorías y propiedades.
- **Ver órdenes hechas**: En la aplicación complementaria del **Panel de Administración**, los administradores pueden visualizar y gestionar todas las órdenes realizadas por los usuarios.
- **Agregar categorías y propiedades a productos**: Los productos pueden ser organizados por categorías y se les pueden añadir propiedades específicas como tamaño, color, y más.
- **Gestión completa del catálogo**: A través del panel complementario, los administradores pueden agregar, editar y eliminar productos, así como ver y actualizar el inventario.

## Proyecto Complementario

Este proyecto está complementado por un **Front-Store** que permite tener un contacto directo con la tienda.

Para más detalles sobre esta front store, puedes visitar su repositorio [aquí](https://github.com/KrankVegan/userinterface).


## Como Correr Proyecto utilizando Yarn

Sigue los siguientes pasos para poder correr este proyecto: 

## Vaya a la carpeta del proyecto

Abra su terminal y vaya al directorio raíz de su proyecto Next.js.

## Instalar dependecias

Utilizar el siguiente comando cuando nos encontramos en el directorio del proyecto:


```bash
yarn install
```


## Iniciar proyecto

Ya con las dependencias necesarias, se procede a correr el siguiente comando:


```bash
yarn dev
```

## Abrir puerto local

Por ultimo, vamos al siguiente url en nuestro browser preferido:


```bash
http://localhost:3000/
```




**Nota: Si tienes problemas con http://localhost:3000, prueba accediendo a http://localhost:3000/categories. A partir de ahí, debería funcionar correctamente.** 



