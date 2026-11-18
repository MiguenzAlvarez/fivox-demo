# Demo pública de FIVOX

Esta versión funciona sin backend ni base de datos: conserva los cambios solamente mientras la persona navega la página.

## Probarla localmente

```powershell
cd frontend
npm run demo:build
npx vite --mode demo --host=127.0.0.1
```

Abrir `http://127.0.0.1:5173`.

## Cuentas incluidas

| Perfil | Email | Contraseña |
| --- | --- | --- |
| Usuario | `usuario@fivox.demo` | `demo123` |
| Administración | `admin@fivox.demo` | `demo123` |

También se pueden seleccionar desde los botones de acceso de la pantalla inicial.

## Publicarla en Netlify

1. Subir estos cambios al repositorio de GitHub.
2. En Netlify, elegir **Add new site → Import an existing project** y seleccionar el repositorio.
3. Netlify detectará `netlify.toml`; no cambiar el comando ni la carpeta de publicación.
4. Presionar **Deploy site**.

El archivo `netlify.toml` prepara la compilación demo y la redirección necesaria para las rutas de React. No se necesita configurar una base de datos ni variables privadas.
