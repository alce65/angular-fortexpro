# Angular 21. Fundamentos (desde O)

Curso de introducción a Angular 21 para [Fortexpro](https://fortexpro.es/)

- 30 horas
- mates 09/12 - martes 16/12
- 9:00 - 14:00 (5h, 6 sesiones)

Repositorio: [GitHub](https://github.com/alce65/angular-fortexpro)

Formador: Alejandro Cerezo <alce65@hotmail.es>

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

## Desarrollo del curso

## Dado por supuesto

- Elementos básicos de TypeScript.

  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos.
  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters de ES.
    - Herencia.
    - Clases abstractas.
  - Promesas y genéricos
  - Módulos ES6 en TypeScript.
    - Import y Export.
    - Módulos por defecto y nombrados.
  - Decoradores en TypeScript.

## Día 1 (M-09): Introducción a Angular

- Introducción a Angular y su ecosistema.
- Requisitos: Node.js y npm. Editor VSCode

- Entorno y proyectos en Angular

  - VSCode Extensiones recomendadas.
  - Instalación de Angular CLI.
  - Creación de un nuevo workspace Angular sin proyecto. `ng new`
  - Creación de un nuevo proyecto (app) Angular. `ng generate app`
  - Estructura de un workspace/proyecto Angular.
  - Añadiendo ESLint (`ng add`) y Prettier.
  - Angular CLI: Comandos básicos.
    - Servidor de desarrollo: `ng serve`.
    - Modo JIT (desarrollo) v. AOT (producción)
    - Signals en el estado del componente y en la plantilla.

- [Descanso]: 11:45 - 12:10 hs

  - Angular CLI: Comandos básicos.
    - Testing con Vitest: `ng test`.
    - Testing con Playwright: `ng e2e`.
    - Construcción del proyecto: `ng build`.
  - Generación de componentes: `ng generate component <nombre>`.
    - Elementos de un componente: HTML, CSS, TypeScript.
    - Template y estilos inline o en ficheros.
    - Guía de estilos actualizada
    - Scaffolding. Core
    - Componentes Header y Footer.

- Testing de componentes. Pruebas unitarias

  - Test con Vitest. Conceptos básicos y ejemplo
  - Elementos de los test en Angular: TestBed, fixture, componentInstance.
  - Test de implementación v. test de comportamiento.
  - Tests para componentes básicos. Header, Footer

## Día 2 (X-10): Componentes

- Testing de componentes. Pruebas unitarias (continuación)

  - DebugElement v. querySelector.
  - detectChanges()

- Scaffolding. Core (continuación)

  - Programación declarativa en el template: {{}}, [], ()
  - Componente Menu. Proyección de contenido
  - Componentes Card y Layout. Aspecto visual básico.
  - App como contenedor principal.

- Testing de todos los componentes
  - Test de Header, Footer, Menu, Card y Layout.
  -
- Scaffolding. Features

  - Componentes (pages): Home, About.

- Componentes.
  - Componente Counter. Eventos. (click)

[Descanso]: 11:35 - 12:00 hs

Componentes (continuación).

- Componente Greeting. Input de usuario: data binding. [(ngModel)]
- Referencias locales. #ref
  - Componente GreetingRef. Referencias locales en el template.
- Ciclo de vida de los componentes

## Día 3 (J-11): Componentes y Rutas

- Referencias locales(#ref) y acceso al DOM
  - Focus()
- Test y ciclo de vida

  - Mocks y spies

- Componentes: estado. Zone v. Zoneless
- Estado en los componentes con ZoneJS.

  - Componente Counter. Estado y eventos.
  - Detección del cambio: Zone v. Zoneless
  - Signals y estado
  - Zoneless y asincronía: uso de Signals

- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - RouterOutlet en AppComponent.

[Descanso]: 11:00 - 11:35 hs

- Rutas. Continuación

  - Array de opciones de menu
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive

- Rutas Lazy. Default import en las páginas

Componentes (continuación). Comunicación entre componentes

- Componente Counter2. Condicionales @If. [class]
- Input. Decoradores @Input. función input(). Drilling del título
  - MenuOptions opciones como props
- Output. Decorador @Output. EventEmitter. Función output(). Eventos del contador
  - Agrupando contadores.
  - Contadores. Eventos con valor

## Dia 4 (V-12): Pipes. Directivas. Arquitectura

- Comunicación entre componentes (continuación)

  - Computed signals
    - Cálculos a partir de signals
    - Signals de solo lectura
  - Testing de componentes con comunicación (inputs).
    - fixture.componentRef.setInput()

- Pipes. Location "es"
- Directivas.

  - Directivas propias de atributo

- [Descanso] 11:30 - 12:00

- Directivas (final)
  - Directivas propias estructurales
  - Componentes dinámicos

- Arquitectura de componentes
  - Componentes de contenedores vs de presentación.
  - Componentes inteligentes vs tontos.
- Ejemplo: Notes List (desde un proyecto previo)
  - Entidad Notes. Modelo y mock de datos asíncrono.
  - Componente Notes-List. Lógica del estado
  - Componente Notes-Item. input() y output() (Eventos)
  - Componente Notes-Create. output (Eventos)
    - Forms Template Driven (TD)
    - NgForm implícito, NgModel. Referencias locales
    - viewChild(NgForm) y form.reset()
    - viewChild(Form), ElementRef.nativeElement y acceso al DOM

<!--

## Día 5 (L-15). Servicios. Providers e injectors. Formularios DD

- Defer
- Introducción a los servicios en Angular.
- Servicios y Providers. DI (Dependency Injection)

  - Provider root v. provider en un componente / ruta
  - Ejemplo con un servicio simple: DateService
  - Injector jerárquico. Servicios singleton y no singleton.

- Servicios y patrón Repository

  - Servicio InMemoryTaskRepository. Mock de datos.
  - Uso en los componentes. Inyección de dependencias.
  - Métodos CRUD. getAll() y getById()

- [Descanso]

- Servicios y patrón Repository (continuación)

  - Métodos CRUD. add(), update(), delete()
  - Uso de promesas
  - Repositorio y lógica de negocio (estado). Estrategias
  - Repositorio y persistencia local (localStorage).
  - Testing de servicios.
    - Tests del servicio
      - Test de métodos CRUD.
      - Test de promesas (async, whenStable, expectAsync).
    - Testing de componentes con servicios (mocks y spies).

- Formularios reactivos (DD)
  - FormGroup, FormControl, FormBuilder
  - Binding desde el template

-->

<!--

## Día 6 (M-16). Servicios HTTP

- Formularios reactivos (review). Mensajes de validación

  - Validaciones síncronas y asíncronas.
  - Testing de formularios reactivos.

- Introducción a los servicios HTTP en Angular.
- Servicio fake basado en JSONServer.
  - Prueba con Postman
- Servicio HttpClientModule. Observables (RxJs).
  - Creación de un ApiRepositoryService.
  - Configuración del servicio HTTP: provider
  - Uso desde la feature Tasks.

- [Descanso]

- Servicio HttpClientModule. Observables (RxJs).
  - Tests de servicios HTTP con HttpTestingController
  - Test de componentes con servicios HTTP (mocks y spies).

- Servicios stateful: patrón Flux
  - Estado con RxJS: Subjects
  - Clonado de ToDo como ToDo-Flux
  - Uso del estado desde los componentes ToDo...
  - Uso desde cualquier parte de la aplicación.

-->
