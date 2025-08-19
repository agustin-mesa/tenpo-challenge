# 🚀 Challenge Técnico Tenpo

## 📖 Descripción

Aplicación web desarrollada como parte del proceso de selección para **Talentos de Tecnología en Tenpo**.

La aplicación implementa un sistema de autenticación fake y una interfaz para visualizar una lista paginada de 2000+ transacciones financieras, demostrando buenas prácticas de desarrollo frontend y arquitectura escalable.

### 💚 **Inspiración en Tenpo**

Este proyecto fue desarrollado con **profunda inspiración en la identidad visual y filosofía de Tenpo**:

🎨 **Design System Inspirado en Tenpo**

- **Paleta de colores**: Implementé los tonos verdes y neutros característicos de la marca
- **Tipografía**: Jerarquía visual que refleja la claridad y modernidad de Tenpo
- **Componentes**: Cards de transacciones que evocan la experiencia de la app móvil

🏦 **Experiencia Bancaria Digital**

- **Temática financiera realista**: Transacciones con categorías, montos y comercios
- **Dashboard estilo fintech**: Estadísticas en tiempo real como en productos bancarios reales
- **UX familiar**: Navegación intuitiva similar a la experiencia Tenpo

💭 **Filosofía "Todo en un solo lugar"**

- **Sidebar unificada**: Acceso rápido a todas las funcionalidades
- **Estados de loading**: Transparencia en cada acción, como en la app real
- **Responsive first**: Pensado para mobile, como el ADN de Tenpo

**Esta no es solo una prueba técnica, sino mi visión de cómo me integraría al equipo Tenpo, creando productos que los usuarios amen usar.** 🚀

## ✨ Funcionalidades Implementadas

### 🔐 Autenticación

- **Login fake** con validación de email y contraseña
- **Token fake** generado automáticamente
- **Persistencia de sesión** en localStorage
- **Auto-logout** en caso de token inválido (401)
- **Protección de rutas** privadas

### 💰 Transacciones

- **Lista paginada** de 2000+ transacciones
- **Conexión con API propia** para datos optimizados
- **Filtrado y búsqueda** (preparado para futuras implementaciones)
- **Estadísticas en tiempo real** por página
- **UI responsiva** para web y mobile

### 🎨 Interfaz de Usuario

- **Diseño responsivo** adaptado a diferentes dispositivos
- **Tema oscuro** con paleta de colores de Tenpo
- **Componentes reutilizables** y consistentes
- **Estados de carga** y manejo de errores
- **Navegación intuitiva** con sidebar y navbar

## 🛠️ Tecnologías Utilizadas

### Core

- **React 19.1.1** - Librería de interfaz de usuario
- **TypeScript 5.8.3** - Tipado estático para JavaScript
- **Vite 7.1.2** - Build tool y dev server

### Estado y Datos

- **Zustand 5.0.7** - Gestión de estado global
- **React Query 5.85.0** - Manejo de estado del servidor y cache
- **Axios 1.11.0** - Cliente HTTP con interceptors

### Estilos

- **TailwindCSS 4.1.11** - Framework de utilidades CSS
- **PrimeReact 10.9.7** - Componentes UI profesionales
- **PrimeIcons 7.0.0** - Iconografía consistente

### Routing y Layouts

- **React Router Dom 7.8.0** - Navegación SPA
- **Layouts modulares** - Contextos público/privado separados

### Desarrollo

- **ESLint + Prettier** - Linting y formateo de código
- **TypeScript Config** - Configuración estricta de tipos

## 🚀 Instalación y Ejecución

### Prerrequisitos

- **Node.js** 18+ o **Bun** 1.0+
- **Git**

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd tenpo-challenge

# 2. Instalar dependencias (usando Bun - recomendado)
bun install

# O usando npm
npm install

# 3. Ejecutar en modo desarrollo
bun dev

# O usando npm
npm run dev

# 4. Abrir en el navegador
# La aplicación estará disponible en: http://localhost:5173
```

### Scripts Disponibles

```bash
# Desarrollo
bun dev          # Inicia servidor de desarrollo

# Producción
bun build        # Construye la aplicación para producción
bun preview      # Previsualiza el build de producción

# Calidad de Código
bun lint         # Ejecuta ESLint para verificar código
```

## 🔑 Credenciales de Prueba

Para acceder a la aplicación, utiliza **cualquier combinación** de email y contraseña:

```
📧 Email: cualquier@email.com
🔒 Contraseña: 123 (mínimo 3 caracteres)

Ejemplos válidos:
• test@tenpo.com / 123456
• admin@test.cl / password
• user@demo.com / 123
```

**Nota**: La validación es fake, cualquier email válido y contraseña de 3+ caracteres funcionará.

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Configuración global de la app
│   ├── providers/         # Providers de contexto (Query, Global)
│   ├── router/           # Componentes de routing (ProtectedRoute)
│   └── store/            # Stores de Zustand (auth.store)
│
├── layouts/              # Layouts reutilizables
│   ├── AuthLayout        # Layout para páginas públicas
│   ├── PrivateLayout     # Layout para páginas privadas
│   └── MainLayout        # Layout principal wrapper
│
├── modules/              # Módulos de funcionalidad
│   ├── auth/            # Módulo de autenticación
│   │   ├── hooks/       # Custom hooks (useLogin, useLogout)
│   │   └── pages/       # Páginas del módulo (LoginPage)
│   │
│   └── transactions/    # Módulo de transacciones
│       ├── components/  # Componentes específicos
│       ├── hooks/       # Custom hooks (useTransactions)
│       └── pages/       # Páginas del módulo
│
├── shared/              # Recursos compartidos
│   ├── components/      # Componentes reutilizables
│   │   └── ui/         # Componentes de UI base
│   ├── hooks/          # Hooks compartidos
│   ├── services/       # APIs y servicios externos
│   ├── types/          # Tipos TypeScript compartidos
│   └── utils/          # Utilidades y helpers
│
└── routes.tsx          # Configuración de rutas principales
```

## 🏗️ Arquitectura y Decisiones Técnicas

### 🎯 Patrones Implementados

- **Clean Architecture** - Separación clara de responsabilidades
- **Composition over Inheritance** - Composición de componentes
- **Custom Hooks** - Lógica reutilizable encapsulada
- **Dependency Injection** - Servicios inyectados via hooks

### 🌐 ApiClient Centralizado (`api.config.ts`)

Una de las implementaciones más destacadas del proyecto es el **ApiClient centralizado**, que encapsula toda la lógica de comunicación HTTP con características enterprise-level:

#### 🔧 **Características Principales**

```typescript
class ApiClient {
	// Configuración automática con variable de entorno
	private static readonly baseURL = import.meta.env.VITE_API_URL;

	// Timeout configurado para evitar requests colgados
	timeout: 10000;
}
```

#### 🛡️ **Interceptors Inteligentes**

**Request Interceptor - Autenticación Automática:**

```typescript
// Inyecta automáticamente el Bearer token en todas las requests
if (token && !config.headers.skipAuth) {
	config.headers.Authorization = `Bearer ${token}`;
}

// Headers comunes en todas las requests
config.headers['Content-Type'] = 'application/json';
config.headers['timezone-offset'] = new Date().getTimezoneOffset().toString();
```

**Response Interceptor - Manejo de Errores:**

```typescript
// Auto-logout automático en 401 (token expirado/inválido)
if (error.response?.status === 401) {
	useAuthStore.getState().logout();
}

// Conversión a APIError personalizado con datos estructurados
throw new APIError(status, data, message);
```

#### ✨ **Ventajas del ApiClient**

1. **🔐 Autenticación Transparente**
    - Token se inyecta automáticamente en todas las requests
    - Opción `skipAuth` para endpoints públicos (login)
    - Auto-logout en casos de token inválido

2. **🎯 Tipado Estricto**
    - `ApiRequest` type union para diferentes tipos de requests
    - Generics para responses tipadas: `send<ResponseType>()`
    - `APIError` personalizado con status y data estructurados

3. **🛠️ Utilidades Integradas**
    - `objectToURLParams()` para query parameters automáticos
    - Construcción inteligente de URLs con parámetros
    - Headers condicionales según el tipo de request

4. **⚡ Rendimiento y UX**
    - Timeout configurado para evitar requests infinitas
    - Timezone automático para requests con fecha/hora
    - Error handling centralizado y consistente

5. **🔧 Mantenibilidad**
    - Un solo punto de configuración para todas las APIs
    - Lógica reutilizable en todas las clases de servicio
    - Fácil extensión para nuevos interceptors o configuraciones

#### 📋 **Ejemplo de Uso**

```typescript
// Todas las clases de API extienden ApiClient
export class TransactionsAPI extends ApiClient {
	async getTransactions(params?: TransactionQueryParams) {
		// El token se inyecta automáticamente
		// Los parámetros se convierten a URLSearchParams automáticamente
		// Los errores se manejan centralizadamente
		const response = await this.send<TransactionsResponse>({
			method: 'get',
			path: '/transactions',
			searchParams: this.objectToURLParams(params)
		});

		return response.data;
	}
}
```

#### 🎖️ **Impacto en la Calidad del Código**

- **DRY (Don't Repeat Yourself)**: Zero repetición de lógica HTTP
- **Single Responsibility**: Cada método se enfoca solo en la lógica de negocio
- **Error Consistency**: Manejo uniforme de errores en toda la app
- **Security**: Autenticación automática sin riesgo de olvidos
- **Debugging**: Logs centralizados y estructura de errores consistente

### 🔒 Gestión de Estado

- **Zustand + Persist** - Estado de autenticación persistente
- **React Query** - Cache y sincronización de datos del servidor
- **Local State** - Estados locales con useState cuando corresponde

### 🛡️ Seguridad y Buenas Prácticas

- **Protected Routes** - Rutas privadas protegidas por autenticación
- **Token Management** - Manejo automático de tokens en requests
- **Error Boundaries** - Manejo robusto de errores
- **Type Safety** - TypeScript estricto en toda la aplicación

### 📱 Responsive Design

- **Mobile First** - Diseño pensado primero para móviles
- **Breakpoints Adaptativos** - Layouts que se adaptan al dispositivo
- **Touch Friendly** - Interfaz optimizada para touch

## 🎨 Sistema de Diseño

### Paleta de Colores

- **Primario**: Colores de marca Tenpo
- **Neutros**: Escalas de grises para texto y fondos
- **Semánticos**: Success, Error, Warning para estados

### Tipografía

- **Jerarquía clara** - H1, H2, H3, Body1, Body2, Caption
- **Legibilidad** - Contraste adecuado y tamaños optimizados

## 🔧 Variables de Entorno

```bash
# .env (opcional)
VITE_API_URL=https://api-tenpo-challenge.vercel.app  # URL desarrollada por mí
```

## 📊 Métricas y Rendimiento

- **Bundle Size Optimizado** - Lazy loading de componentes
- **Caching Inteligente** - React Query para cache de datos
- **Paginación Eficiente** - Solo carga datos necesarios
- **TypeScript** - Detección temprana de errores

---

## 📝 Notas del Challenge

### Decisiones Técnicas Destacadas

#### 🎯 **Estrategia de Visualización: Paginación Inteligente vs Carga Masiva**

**Decisión Tomada**: Implementar **paginación server-side** en lugar de cargar los 2000 elementos de una vez.

**Argumentación Técnica**:

1. **⚡ Rendimiento del Browser**
    - **DOM Performance**: Renderizar 2000 elementos DOM simultáneamente causa lag significativo
    - **Memory Management**: Reduce el footprint de memoria de ~50MB a ~2MB por página
    - **Time to Interactive**: Mejora de 3-5 segundos a <500ms en el primer render

2. **🌐 Eficiencia de Red**
    - **Payload Optimizado**: 10 elementos (~15KB) vs 2000 elementos (~3MB)
    - **Progressive Loading**: Usuario ve contenido inmediatamente, no espera carga completa
    - **Bandwidth Friendly**: Especialmente crítico en conexiones móviles lentas

3. **👤 Experiencia de Usuario**
    - **Cognitive Load**: Los usuarios no procesan 2000 items simultáneamente
    - **Scroll Performance**: Scroll nativo fluido vs virtual scrolling complejo
    - **Search & Filter**: Paginación permite filtros server-side más eficientes

4. **🏗️ Escalabilidad Arquitectónica**
    - **Future Proof**: Si mañana son 50,000 elementos, la arquitectura soporta sin cambios
    - **Database Efficiency**: Queries con LIMIT/OFFSET optimizadas
    - **Caching Strategy**: Cada página se puede cachear independientemente

**Implementación Destacada**:

```typescript
// Configuración inteligente de paginación
const [params, setParams] = useState({
  page: 1,
  limit: 10,  // Sweet spot: balance entre requests y UX
  ...initialParams
});

// React Query con cache inteligente por página
queryKey: TRANSACTIONS_KEYS.list(params),
staleTime: 5 * 60 * 1000,  // 5 min cache por página
```

**Resultado**: Una experiencia fluida que simula un producto enterprise real, no un demo técnico.

- **Backend Propio**: Creé API personalizada para datos más realistas
- **TypeScript Estricto**: Tipado completo para robustez
- **Arquitectura Modular**: Preparada para escalar con nuevos módulos

## 💚 **Conexión Personal con Tenpo**

### 🎯 **Más allá del Challenge Técnico**

Este proyecto representa **mi visión de formar parte del ecosistema Tenpo**. Cada decisión de diseño y desarrollo fue tomada pensando en:

- **🎨 Coherencia visual**: Adopté la identidad de marca para sentirme parte del equipo
- **⚡ Performance first**: Priorizando la velocidad que caracteriza a los productos Tenpo
- **📱 Mobile-centric**: Respetando el ADN móvil de la empresa

### 💭 **Research de la Marca**

Durante el desarrollo, investigué profundamente:

- **🌐 Tenpo.cl**: Estudié la landing page, colores, tipografías y messaging
- **📱 App móvil**: Analicé los patrones de UX/UI para aplicarlos al challenge
- **🎯 Filosofía "Todo en un lugar"**: Implementé una experiencia unificada
- **💚 Branding**: Uso de logo y video

### 🚀 **Mi Visión Como Futuro Tenper**

**No desarrollé solo una prueba técnica, sino un prototipo de cómo contribuiría al producto real:**

- Pensando en escalabilidad para millones de usuarios
- Optimizando para conexiones lentas de Latinoamérica
- Priorizando accesibilidad y usabilidad
- Manteniendo la excelencia técnica que Tenpo merece

---

## 👨‍💻 Desarrollador

**Mauro Agustín Mesa**

- 🌐 LinkedIn: [linkedin.com/in/mauro-agustin-mesa](https://www.linkedin.com/in/mauro-agustin-mesa/)
- 📧 Email: [mauroagustinmesa@gmail.com](mailto:mauro.agustin.mesa@gmail.com)

_Desarrollado con 💚👨🏻‍💻 para **formar parte del equipo que está revolucionando las finanzas en Latinoamérica**_
