# Notas e Instrucciones:

```Este es mi primer proyecto con Node, usando la consola

1. Clonar o descargar/descomprimir
2. Ejecutar npm install
3. Usar la aplicación!

    Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es la base de la tabla de multiplicar      [número] [requerido]
  -l, --limite   Es el límite númerico hasta donde deseas multiplicar
                                                          [número] [defecto: 10]
  -m, --mostrar  Muestra la tabla en la consola      [booleano] [defecto: false]


    USO DE LA APLICACIÓN:
        1. Abrir la consola
        2. Ejecutar el comando node app --help                  (ver las ayudas)
        3. Ejecutar el comando deseado                      (ver a continuación)

    EJEMPLO DE USO:
        node app -b 5    ("Genera la tabla solicitada (Carpeta tablasGeneradas),
                            pero no la muestra en consola)

        node app -b 7 -m                  ("Muestra la tabla del 7, hasta 7x10")

        NOTA:   -m -->    De esta manera indicamos que queremos ver el resultado
                            en consola

        node app -b 10 -l 20            ("Muestra la tabla del 10, hasta 10x20")
        -l 20     ("Modifica el valor por defecto(10) y genera la tabla hasta un
                    límite dado")
```
