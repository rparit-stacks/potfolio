# NainiStore — Hyperlocal Marketplace

Full-stack hyperlocal commerce platform for Nainital: multi-category customer app (Food, Bazaar, Electronics), seller panel, delivery partner app, and admin dashboard. Spring Boot backend on MongoDB with JWT auth, multi-store orders, zone-based delivery, COD settlements, and Razorpay payments.

## Highlights

- **Multi-store master orders** — one cart, multiple sellers; single delivery trip with per-stop pickup UI
- **Catalog** — Food restaurants, Bazaar grocery, Electronics; search, zones, product approval
- **Auth** — Email OTP, Google sign-in, JWT access + refresh (long-lived sessions)
- **Delivery** — Assignment lifecycle, multi-pickup routing, COD cash collection & platform settlement
- **Settlements** — Seller wallet, platform commission, delivery partner fees, Razorpay + COD flows
- **Push notifications** — Firebase Cloud Messaging for order updates
- **Media** — Cloudinary uploads for seller KYC and product images

## Tech Stack

**Backend:** Java 21, Spring Boot 3, Spring Security, JWT, MongoDB, Razorpay, Firebase Admin, Cloudinary  
**Frontends:** React 18/19, TypeScript, Vite, TanStack Query, Tailwind CSS  
**Deploy:** Vercel (SPAs), VPS (Spring Boot API)

## API Surface (examples)

- `POST /api/auth/*` — Customer OTP, Google, refresh tokens
- `GET /api/catalog/{food|bazaar|electronic}/*` — Stores, products, search, banners
- `POST /api/orders` — Checkout, master order + sub-orders
- `GET /api/delivery/assignments` — Partner trips with pickup stops
- `PATCH /api/delivery/assignments/{id}/status` — Accept → pickup → on the way → delivered
- `GET/POST /api/admin/*` — Sellers, products, zones, settlements, CMS

## Live Apps

- Customer (frontend): https://www.nainistore.in
- Backend API: https://nainistore.com
- Health check: https://nainistore.com/api/health
- Seller: https://seller.nainistore.in
- Delivery: https://delivery.nainistore.in
- Admin: https://admin.nainistore.in
