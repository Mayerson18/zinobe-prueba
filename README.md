### Getting Started

- Clonar este repositorio `git clone https://github.com/Mayerson18/zinobe-prueba`
- Instalación de depencias `yarn install o npm install`
- Inicializar proyecto `yarn start o npm start`

El proyecto usa implementaciones react con typescript y hooks, tambien se usa redux, helpers y una variedad de pluglins que creo que no son limitantes para esta prueba

Para correr correctamente el proyecto se debe usar json-server, la configuración inicial de este servidor se encuentra en el archivo db.json por lo general corre en http://localhost:3000

El .env esta ignorado, crear uno con estas variables para que funcione correctamente: 

- REACT_APP_BANK_BASE_CAPITAL=10000
- REACT_APP_API=http://localhost:3000

Observaciones: 

Hay una parte del enunciado que dice que para crear el usuario el sistema valida aleatoriamente si fue probado o no, para estó hay una funcion en la carpeta config, sin embargo si se rechazo a dicho usuario este mismo no podra hacer una solicitud exitosa, por tanto estoy tomando en cuenta a un usuario nuevo a aquel que tenga una cédula diferente

