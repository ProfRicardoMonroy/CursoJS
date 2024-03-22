create table gastos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gasto VARCHAR(150) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    monto DECIMAL(8, 2) NOT NULL
);