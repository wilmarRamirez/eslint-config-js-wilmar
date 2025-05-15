# eslint-config-js-wilmar

Configuración de ESLint reutilizable para proyectos Node.js y JavaScript, con reglas personalizadas de buenas prácticas.

## 🚀 Instalación

```bash
npm install --save-dev eslint eslint-config-js-wilmar
```

## ⚙️ Uso

En tu archivo `eslint.config.js`:

```js
import config from 'eslint-config-js-wilmar/config'

export default config
```

## 📋 Reglas incluidas

- `max-statements`: 10
- `max-lines-per-function`: 50
- `complexity`: 10
- `capitalized-comments`: comentarios empiezan en mayúscula
