# Portfolio — Víctor Peña

Portfolio personal estático y responsive, preparado para publicarse en GitHub Pages. Incluye diecisiete casos de estudio navegables, enlaces a los proyectos publicados e ilustraciones CSS sin dependencias gráficas externas.

## Vista local

Abre `index.html` directamente en el navegador o ejecuta un servidor local:

```powershell
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `portfolio`.
2. Sube el contenido de esta carpeta a la rama `main`.
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main`, carpeta `/(root)` y pulsa **Save**.

La web quedará disponible en `https://TU-USUARIO.github.io/portfolio/`.

## Personalización rápida

- Datos, textos, correo y enlaces: `index.html`.
- Colores y estilos: variables al inicio de `styles.css`.
- Los proyectos se presentan con ilustraciones CSS, por lo que no dependen de imágenes externas.

Antes de publicar, confirma que el correo y el enlace de GitHub del bloque de contacto sean los correctos.
