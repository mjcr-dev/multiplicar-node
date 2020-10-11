## Tablas de multiplicar por comandos

Esta aplicación de Node nos permitirá mostrar cualquier tabla de multiplicar que pasemos por comandos y con un límite de resultados que pongamos (opcional).

Para utilizar esta aplicación deberemos reconstruir los paquetes de node
```
npm install
```

# Ejemplos de uso

En la app tendremos dos comandos: crear y listar.

Para listar una tabla de multiplicar por consola deberemos utilizar el comando y pasarle por el parametro --base (o -b) el número base de la tabla y opcionalmente hasta que número multiplica con --limite (o -l, por defecto es 10).
```
node app listar --base=5 --limite=20
```
En este caso mostrará por consola la tabla del 5 hasta por 20

Con el comando crear podremos crear un archivo de texto con la tabla (como mostrábamos en listar)
```
node app crear --base=5
```
En este caso creará un archivo de texto de la tabla del 3 hasta 10 (si no se escribe limite, por defecto será 10)