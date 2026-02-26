# Next.js + Tailwind + shadcn — Template base

Proyecto base para clonar y usar como punto de partida. Incluye Next.js (App Router), Tailwind CSS v4 y shadcn/ui, listo para desplegar en Vercel.

## Stack

- **Next.js** (App Router, React 19)
- **Tailwind CSS** v4
- **shadcn/ui** (componentes en `src/components/ui/`)
- **TypeScript**

## Uso

### Clonar

```bash
git clone https://github.com/TU_USUARIO/nextjs-tailwind-shadcn-starter.git mi-proyecto
cd mi-proyecto
```

### Instalar y correr

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Añadir componentes shadcn

```bash
npx shadcn@latest add [nombre-componente]
```

Ejemplos: `npx shadcn@latest add card`, `npx shadcn@latest add input`.

## Deploy en Vercel

1. Sube el repo a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New** → **Project** → importa el repo.
3. Vercel detecta Next.js; deja los valores por defecto y haz **Deploy**.

O con [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```

## Scripts

| Comando   | Descripción        |
|----------|---------------------|
| `npm run dev`   | Servidor de desarrollo |
| `npm run build` | Build de producción   |
| `npm run start` | Servidor de producción |
| `npm run lint`  | Ejecutar ESLint       |
