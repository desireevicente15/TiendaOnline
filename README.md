Tenemos unos componentes dentro de la carpeta "services":
  truncate-text.pipe.ts: Con el (value) recibimos un texto y con (wordLimit) nos pone un límite de palabras.
                          Si el texto está vacío devuelve una cadena vacía
                          Luego se divide el texto en palabras
                          Si el número de palabras es mayor al límite (wordLimit) se tomaría solo las primeras palabras permitidas, se unen y se añade "..." al inicio.
                          Pero si el texto no supera el límite se devuelve sin cambios.
                          Este servicio lo usaremos en /app/backoffice/tabs/tab-notification.

  sidebar-status.service.ts: Lo primero en el BehaviorSubject se guarda un booleano para saber si el sidebar (barra lateral) está visible o no. Si se cambia automáticamente se avisa para que el resto de componente estén pendientes
                              Para que estos componentes sepan el estado del sidebar se suscriben, para que así se actualicen por si hay cambio
                              El status$ serviría para que los componentes pueden escuchar para saber si el sidebar está abierto o cerrado.
                              Después en el método changeStatus, dependiendo del parámetro se abriría (true) o se cerraría (false) el sidebar.
                              Este servicio está relacionado en el componente /app/backoffice/sidebar

  credentials.service.ts: Se encarga de manejar las credenciales de autenticación de los usuarios, incluyendo el inicio de sesión y el registro. 
                          Importa HttpClient para realizar peticiones HTTP, Observable para manejar respuestas asíncronas, environment para acceder a variables de entorno como la URL base de la API.
                          En el constructor se realizan solicitudes HTTP. 
                          Cuenta con dos métodos:
                            El primero es login que recibe las credenciales de un usuario y realiza una petición HTTP POST a la ruta users/login, devolviendo un Observable con la respuesta del servidor. 
                            El segundo método es register que recibe los datos de un nuevo usuario y hace una petición HTTP POST a users/register, también devolviendo un Observable con la respuesta.

  token.interceptor.ts: Se define una función que recibe dos parámetros, req que representa la solicitud HTTP original, y next que permite pasar la solicitud al siguiente
                        interceptor/servidor.
                        Posteriormente, se crea una nueva solicitud basada en la original utilizando req.clone, pero añadiéndole un encabezado Content-Type: application/json. 
                        El método setHeaders agrega o modifica los encabezados de la solicitud. 
                        Finalmente, se devuelve next(cloneReq), lo que permite que la solicitud modificada continúe su flujo normal hacia el servidor.

  auth.ts:  La interfaz (UserInterface) representa un usuario con sus campos correspondientes.
            Luego, se crea (LoginInterface) aquí solo toma "username" y "password" de la anterior interfaz, lo que será útil para manejar los datos del inicio de sesión.  

environments: Aquí guardaremos las URL de las apis.

Sidebar.component.ts: Aquí hay 2 métodos simples de rutas para que al hacer click te lleve a la página del perfil o bien de control-panel.
                      Escucha los cambios del estado del sidebar.
                      Guarda isActiveMenuHeader para saber si está activo o no.
                      En ngOnInit se suscribe al status$ del SidebarStatusService (mencionado anteriormente). Si el estado cambia, actualiza isActiveMenuHeader.

Header-Backoffice.component.ts: Lo mismo que en el anterior, una variable para saber si la variable está activa o no (isActive).
                                Las variables las inicializamos, por lo que solo una a la vez podrá ser visible y todas estarán inicializadas a false para que no estén activas desde un inicio.
                                En el constructor tendremos SidebarStatusService para poder cambiar el estado de la barra.
                                El método toggleLogo se usará para que cuando se haga click se abra o se cierre la barra.
                                El método toggleItem se usará para que cuando se haga click se abra o se cierre una opción (por parámetro).

Graphic-Primera-Caja.component.ts,
Graphic-Segunda-Caja.component.ts, 
Graphic-Tercera-Caja.component.ts:  El código de estos 3 componentes es muy similar. Aquí se harán las gráficas.
                                    La primera gráfica es de doughnut.
                                    La segunda gráfica es de Bar.
                                    Y la tercera gráfica es de Linea.
                                    Para conseguir esto, se debe usar "chart.js" y "ng2-charts" para ello se debe instalar estas dependencias:  npm install chart.js ng2-charts.
                                    Muy importante también es hacer las importaciones (ChartConfiguration, ChartDataset, ChartType, BaseChartDirective), pero bueno esto es importante en cualquier typescript para su funcionamiento.
                                    ChartConfiguration se usa para el título del gráfico, el responsive, la posición, display, etc...
                                    ChartDataset y ChartType se usan para poner el tipo de gráfica quieres poner y la información que tendrá dentro esa gráfica, usando arrays para el color de fondo,
                                    los datos o detalles como el color cuando el puntero esté pasando por encima.

Layout.component.ts: Su código typescript es muy similar al de Sidebar.component.ts.
                      Pero este se encarga de que el backoffice sea dinámico.

Perfil.component.ts: Este código es del perfil del vendedor.
                      Primero de todo guardaremos su nombre en una varible.
                      Aquí hay varios métodos:
                        editProfile: Recibe el contenido del modal (ventana emergente).
                                      Y lo muestra centrado en la pantalla.
                                      Sirve para cambiar el nombre del usuario.
                        saveProfile: Cuando se guarden los cambios se cierra el modal.
                                      Para guardar el nombre modificado del usuario.
                        addProduct: Redirige al usuario a otra página para agregar productos.
                        viewSales: Se abre un modal, estilo listas, para mostrar la venta de productos.

Add-Producto.component.ts: Lo primero que haremos será crear un objeto.
                            Este objeto es de tipo Producto usando la estructura de la interfaz producto.ts en /app/backoffice/interface/producto.ts.
                            Aquí hay dos métodos:
                            onAddProduct: Esto ocurrirá cuando el usuario haga click en Agregar Producto.
                                          Se mostrarán los campos a rellenar por el usuario.
                                          Y cuando haga click en Publicar Producto llevará al usuario de vuelta a la página de perfil.
                            cancel: Cuando el usuario haga click en la opción Cancelar, llevará al usuario de vuelta a la página de perfil.

login.component.ts: Dentro hay un formulario que contiene dos campos: username y password, con validaciones que requieren que el campo no esté vacío.  
                    En el método "submit()", primero se verifica si el formulario es inválido, en cuyo caso se detiene la ejecución. Si es válido, se llama al servicio "CredentialsService.login()", enviando los datos del formulario. La respuesta se maneja con "subscribe()", donde "next" muestra la respuesta en la consola si el inicio de sesión es exitoso, y "error" captura y muestra posibles errores en la consola. 

registro.component.ts: Dentro hay un formulario reactivo que contiene los campos necesarios, todos con validaciones que requieren que el campo no esté vacío.  
                      En este método se hace lo mismo que en el anterior (login.component.ts)
                      Este componente se encarga de la creación de nuevos usuarios en la aplicación, asegurando que todos los datos requeridos sean ingresados correctamente.