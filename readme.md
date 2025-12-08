# Angular 21. Fundamentos (desde O)

Curso de introducción a Angular 21 para [Fortexpro](https://fortexpro.es/)

- 30 horas
- mates 09/12 - martes 16/12
- 9:00 - 14:00 (5h, 6 sesiones)

Repositorio: [GitHub](https://github.com/alce65/angular-fortexpro)

## Contenido

- Introducción. Entorno. Uso de Angular CLI.

  - Introducción a Angular y su ecosistema.
  - Elementos básicos de TypeScript.
  - Requisitos: Node.js y npm. Editor VSCode. Extensiones recomendadas.
  - Instalación de Angular CLI. Workspace y proyecto. ESLint. Comandos del CLI
  - Generación de componentes. Elementos de un componente. Guía de estilos actualizada

- Componentes y Rutas

  - Componentes: estado. Zone v. Zoneless. Detección del cambio. Signals
  - Rutas básicas. Navegación. Componente menu. @for
    - SPA: RouterLink y RouterLinkActive
    - Rutas Lazy. Default import en las páginas
  - Testing de componentes. Pruebas unitarias de componentes
  - Componentes. Condicionales @If. data binding. Proyección de contenido
  - Pipes. Location "es"
  - Comunicación entre componentes. input(). output()
    - Testing de componentes con comunicación.
  - Arquitectura de componentes
    - Componentes de contenedores vs de presentación. Componentes inteligentes vs tontos.
  - Forms Template Driven (TD). Validación. Tests de Forms TD

- Introducción a los servicios en Angular.

  - Servicios y Providers. DI (Dependency Injection)
  - Servicios y patrón Repository. Métodos CRUD.
    - Repositorio y lógica de negocio (estado). Estrategias
    - Repositorio y persistencia local (localStorage).
  - Testing de servicios. Tests de componentes con servicios (mocks y spies).

- Formularios reactivos (DD)

  - FormGroup, FormControl, FormBuilder
  - Binding desde el template
  - Validaciones síncronas y asíncronas.
  - Testing de formularios reactivos.

- Introducción a los servicios HTTP en Angular.

  - Servicio HttpClientModule. Observables (RxJs).
    - Creación de un ApiRepositoryService.
    - Configuración del servicio HTTP: provider
    - Uso desde la feature Tasks.
  - Tests de servicios HTTP con HttpTestingController
    - Test de componentes con servicios HTTP (mocks y spies).
  - Interoperatividad con signals

- Servicios stateful: patrón Flux
  - Estado con RxJS: Subjects. Uso desde los componentes
  - Estado basado en Signals
