# 🖥️ Especialidad Programación — Instituto Técnico La Falda

Sitio web institucional de la **Especialidad en Programación** del Instituto Técnico La Falda, Córdoba. Desarrollado como proyecto escolar por alumnos de la especialidad.

---

## 👥 Equipo

| Integrante | Rol |
|---|---|

| Fabry | Desarrollo |
| Guada | Desarrollo |
| Mile | Desarrollo |
| Rocco | Desarrollo |

---

## 📋 Descripción del proyecto

Landing page institucional que presenta la especialidad de Programación al público. Contiene toda la información relevante para estudiantes, familias e interesados en la carrera técnica.

El sitio es una **página única (single-page)** con navegación por anclas, más **4 páginas secundarias** correspondientes a cada año de la especialidad (4to, 5to, 6to y 7mo), desarrolladas por otros grupos.

---

## 🗂️ Estructura del proyecto

```
/
├── index.html              ← Página principal (landing)

```

---

## 📄 Secciones de la landing page

La página principal está organizada en las siguientes secciones, cada una con su ID para la navegación por anclas:

| Sección | ID | Descripción |
|---|---|---|
| Navbar | — | Menú fijo con links a cada sección |
| Intro | `#intro` | Título principal y llamada a la acción |
| Quiénes somos | `#quienessomos` | Descripción del instituto y la especialidad |
| Objetivos y visión | `#objetivos` | Misión, visión y objetivos en cards |
| Por qué elegirnos | `#eleginos` | Ventajas y diferenciadores de la especialidad |
| Cursos | `#cursos` | Cards de cada año con link a su página |
| Horarios | `#horarios` | Links para ver/descargar el PDF de cada año |
| Profesores | `#profesores` | Cards con foto, nombre y materia de cada docente |
| Footer | — | Logo, dirección y redes sociales |

---

## ⚙️ Cómo correr el proyecto

No requiere instalación de ningún tipo. Al ser HTML, CSS y archivos estáticos, alcanza con abrir `index.html` en cualquier navegador moderno.

**Opción 1 — Abrir directo:**
Hacer doble clic sobre `index.html`.

**Opción 2 — Con servidor local (recomendado para evitar problemas con rutas):**

Si tenés VS Code, instalá la extensión **Live Server** y hacé clic derecho sobre `index.html` → *Open with Live Server*.

---

## ✏️ Cómo actualizar el contenido

### Cambiar textos
Abrí `index.html` en cualquier editor de texto (VS Code, Notepad++, etc.) y editá el contenido dentro de las etiquetas HTML. Cada sección tiene un comentario que la identifica, por ejemplo:

```html
<!-- ===================== PROFESORES ===================== -->
```

### Agregar/cambiar fotos
Reemplazá los archivos en la carpeta `img/` respetando los nombres existentes. Si usás otro nombre, actualizá el atributo `src` en el HTML.

### Actualizar horarios
Reemplazá los PDFs en la carpeta `pdfs/` respetando los nombres:

```
horario-4to.pdf
horario-5to.pdf
horario-6to.pdf
horario-7mo.pdf
```

No hace falta tocar el HTML.

### Agregar un profesor
Dentro de la sección `#profesores` en `index.html`, duplicá un bloque `<article>` existente y reemplazá los datos:

```html
<article>
  <img src="img/foto-profX.jpg" alt="Foto del profesor Nombre Apellido">
  <h3>Nombre Apellido</h3>
  <p>Materia que dicta</p>
</article>
```

---

## 🔗 Links entre páginas

Las cards de la sección **Cursos** usan links directos a las páginas de cada año:

```html
<a href="4to.html">...</a>
<a href="5to.html">...</a>
<a href="6to.html">...</a>
<a href="7mo.html">...</a>
```

Esas páginas (`4to.html`, `5to.html`, `6to.html`, `7mo.html`) son desarrolladas por otros grupos del proyecto.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura semántica
- **CSS3** — estilos y diseño visual *(próximamente)*
- Sin frameworks ni dependencias externas

---

## 📌 Estado del proyecto

- [x] Estructura HTML base (`index.html`)
- [x] Todas las secciones definidas con IDs y semántica correcta
- [x] Horarios vinculados a PDFs
- [ ] CSS / diseño visual
- [ ] Imágenes y fotos reales
- [ ] PDFs de horarios
- [ ] Datos reales de profesores
- [ ] Textos definitivos (misión, visión, objetivos, etc.)
- [ ] Páginas de cada año (otros grupos)

---

## 🏫 Institución

**Instituto Técnico La Falda**
La Falda, Córdoba, Argentina
Especialidad: Programación
