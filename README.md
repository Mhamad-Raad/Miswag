# 🛍️ Dynamic Product Blocks – Nuxt 3 + Tailwind CSS

A responsive, performant Nuxt 3 project that dynamically renders block-based layouts (Products & Grids) from a JSON API. Designed for clean architecture, efficient rendering, and easy extensibility.

# 🧠 Architecture & Approach

### 🔳 Block-Based Rendering

- Dynamic rendering of multiple block types (products, grid) from a JSON payload.
- Each block has its own component and interface props for reusability and control.

### 📦 Component Structure

- components/UI – Shared UI components (skeletons, badges, states, icons).
- components/Product – Product cards, modals, and logic-heavy parts.
- composables/ – API fetching and data formatting via useHomeContent().
- stores/ – Pinia stores for cart, favorites, and search.
- utils/ – Helpers like convertKeysToCamelCase() and formatCurrency().

### ⚙️ State & Performance

- Full client-side state management via Pinia.
- Favorites and cart functionality implemented with full LocalStorage persistence.
- Lazy-loaded images with skeleton loaders to enhance perceived performance.
- Clean, scoped transitions using fade-scale for UI polish.

### ✅ Bonus Features

- Functional favorites and cart modules.
- Responsive design with Tailwind CSS.
- Functional Search bar.
- Skeleton loaders & error states.
- Modular, maintainable architecture.
- Excellent scalability for future feature additions.

### Deployment Link:

check the Deployed version [here](https://miswag.vercel.app/)

### ♻️ Extensibility

<ins>To add a new block type</ins>:

1. Extend the API response with a new block.
2. Create a corresponding Vue component.
3. Update the rendering logic to support it.

---

## 🚀 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Mhamad-Raad/Miswag.git
cd Miswag

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

```
