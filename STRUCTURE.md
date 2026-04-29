# EcoMart - E-Commerce Dashboard

A production-level e-commerce dashboard built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## 🚀 Project Structure

```
app/
├── components/
│   ├── ui/                      # Reusable UI Components
│   │   ├── AppText.tsx         # Typography component
│   │   ├── AppButton.tsx       # Button with variants
│   │   ├── AppCard.tsx         # Card container
│   │   ├── AppDropdown.tsx     # Dropdown selector
│   │   ├── AppInput.tsx        # Input field
│   │   ├── AppBadge.tsx        # Badge/Tag component
│   │   ├── AppLoader.tsx       # Loading spinner
│   │   ├── AppModal.tsx        # Modal dialog
│   │   ├── AppAvatar.tsx       # Avatar component
│   │   └── index.ts            # Barrel export
│   ├── layout/                  # Layout Components
│   │   ├── Header.tsx          # Top navigation
│   │   └── Footer.tsx          # Footer section
│   └── dashboard/              # Dashboard-specific components
│       ├── StatCard.tsx        # Statistics card
│       ├── RecentOrders.tsx    # Orders table
│       └── TopProducts.tsx     # Products grid
├── constants/                   # App constants
│   └── index.ts
├── types/                       # TypeScript types
│   └── index.ts
├── lib/                         # Utilities
│   └── utils.ts
├── dashboard/                   # Dashboard page
│   └── page.tsx
├── layout.tsx                   # Root layout
├── page.tsx                     # Home page
└── globals.css                  # Global styles
```

## 📦 Components

### UI Components

#### **AppText**

Typography component with multiple variants and styling options.

```tsx
<AppText variant="h1" weight="bold" color="primary">
  Heading
</AppText>

// Variants: h1, h2, h3, h4, subtitle, body, caption, small
// Colors: primary, secondary, muted, danger, success
// Weight: light, normal, semibold, bold
// Align: left, center, right
```

#### **AppButton**

Button component with variants and sizes.

```tsx
<AppButton variant="primary" size="md" loading={false} onClick={() => {}}>
  Click Me
</AppButton>

// Variants: primary, secondary, danger, ghost
// Sizes: sm, md, lg
```

#### **AppCard**

Card container for content grouping.

```tsx
<AppCard
  title="Card Title"
  subtitle="Subtitle"
  footer={<div>Footer</div>}
  hoverable={true}
>
  Card content
</AppCard>
```

#### **AppDropdown**

Dropdown selector component.

```tsx
<AppDropdown
  items={[
    { id: 1, label: "Option 1", value: "opt1" },
    { id: 2, label: "Option 2", value: "opt2" },
  ]}
  onSelect={(item) => console.log(item)}
  placeholder="Select an option"
/>
```

#### **AppInput**

Input field with validation support.

```tsx
<AppInput
  label="Email"
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors?.email}
  icon={<EnvelopeIcon />}
/>
```

#### **AppBadge**

Badge/tag component.

```tsx
<AppBadge label="In Stock" variant="success" size="md" icon={<CheckIcon />} />

// Variants: primary, secondary, success, danger, warning, info
// Sizes: sm, md
```

#### **AppLoader**

Loading indicator component.

```tsx
<AppLoader size="md" variant="spinner" label="Loading..." />

// Variants: spinner, dots, pulse
// Sizes: sm, md, lg
```

#### **AppModal**

Modal dialog component.

```tsx
<AppModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
  footer={
    <>
      <AppButton onClick={() => setIsOpen(false)}>Cancel</AppButton>
      <AppButton>Confirm</AppButton>
    </>
  }
>
  Modal content
</AppModal>

// Sizes: sm, md, lg
```

#### **AppAvatar**

Avatar component for user profiles.

```tsx
<AppAvatar
  src="/user.jpg"
  alt="User"
  size="md"
/>

// With initials fallback
<AppAvatar initials="JD" size="md" />

// Sizes: sm, md, lg
```

### Layout Components

#### **Header**

Navigation header with responsive menu.

```tsx
<Header />
```

#### **Footer**

Footer with links and information.

```tsx
<Footer />
```

### Dashboard Components

#### **StatCard**

Statistics card showing key metrics.

```tsx
<StatCard
  icon={<DollarIcon />}
  label="Total Sales"
  value="$28,450.99"
  change="12.5%"
  isPositive={true}
/>
```

#### **RecentOrders**

Table showing recent orders.

```tsx
<RecentOrders orders={mockOrders} />
```

#### **TopProducts**

Grid showing top-performing products.

```tsx
<TopProducts products={mockProducts} />
```

## 🎨 Styling

The project uses **Tailwind CSS 4** with a professional color palette:

- **Primary**: Blue (`bg-blue-600`)
- **Success**: Green (`bg-green-600`)
- **Danger**: Red (`bg-red-600`)
- **Warning**: Yellow (`bg-yellow-600`)
- **Info**: Cyan (`bg-cyan-600`)
- **Dark Mode**: Full support with `dark:` prefix

### Global Styles

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📋 Types

All TypeScript types are centralized in `app/types/index.ts`:

```tsx
// Product interface
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

// Order interface
interface Order {
  id: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  date: string;
  itemCount: number;
}

type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";
```

## 🛠️ Utilities

Common utility functions in `app/lib/utils.ts`:

```tsx
// Class name helper
classNames("p-4", "bg-blue-600", isActive && "opacity-50");

// Currency formatting
formatCurrency(1250.99); // "$1,250.99"

// Date formatting
formatDate("2026-04-28"); // "Apr 28, 2026"

// Text truncation
truncateText("Long text...", 20);

// Discount calculation
calculateDiscount(100, 75); // 25
```

## 🚦 Getting Started

### Installation

```bash
# Install dependencies
yarn install

# or
npm install
```

### Development

```bash
# Start development server
yarn dev

# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production
yarn build

# or
npm run build
```

### Production

```bash
# Start production server
yarn start

# or
npm start
```

## 📱 Responsive Design

All components are fully responsive:

- **Mobile**: `sm:` (640px)
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)
- **Large**: `xl:` (1280px)

## 🌙 Dark Mode

Dark mode is fully supported using Tailwind's `dark:` prefix. Enable it in `tailwind.config.ts`.

## 📖 Pages

### Home Page (`/`)

Landing page showcasing features and benefits.

### Dashboard Page (`/dashboard`)

Main admin dashboard with:

- Statistics cards
- Recent orders table
- Top products grid
- Product filtering and search
- Add product modal

## 🔧 Configuration

### TypeScript

- `strict: true` - Strict type checking
- Path alias: `@/*` points to project root

### Tailwind CSS

- Default dark mode support
- Customizable theme in `tailwind.config.ts`

## 📝 Best Practices

1. **Component Reusability** - Use existing components instead of creating new ones
2. **Type Safety** - Always use TypeScript interfaces
3. **Accessibility** - Components include ARIA labels and semantic HTML
4. **Performance** - Use React 19's features and lazy loading
5. **Consistency** - Follow the established naming conventions
6. **Error Handling** - Validate inputs and show error states

## 🚀 Performance Optimizations

- **Code Splitting**: Components are split into separate files
- **Tree Shaking**: Unused code is automatically removed
- **Image Optimization**: Next.js Image component ready
- **CSS Purging**: Only used styles are included

## 🎯 Future Enhancements

- [ ] Authentication system
- [ ] API integration
- [ ] Advanced analytics
- [ ] Real-time notifications
- [ ] Export reports to PDF/CSV
- [ ] Multi-language support
- [ ] Advanced filtering and search

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
