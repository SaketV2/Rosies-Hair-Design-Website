# Professional Web Solution

A mobile-responsive, production-grade business website built with HTML, CSS, JavaScript, and Firebase. Features a contact form that saves customer enquiries directly to Firestore.

## Features

- ✅ Fully mobile-responsive (works on all screen sizes)
- ✅ Sticky navigation with smooth scroll and active state
- ✅ Animated hero section with scroll reveal effects
- ✅ Services, About, and Contact sections
- ✅ Firebase Firestore contact form (enquiries saved to database)
- ✅ Accessible HTML (ARIA labels, semantic elements)
- ✅ No frameworks or dependencies — pure HTML/CSS/JS

## Project Structure

```
professional-web-solution/
├── index.html              # Main page
├── css/
│   └── style.css           # All styles (variables, layout, responsive)
├── js/
│   ├── firebase-config.js  # Firebase setup (plug your config in here)
│   └── main.js             # UI interactions + contact form logic
└── README.md
```

## Setup

### 1. Clone or download the project

```bash
git clone https://github.com/YOUR_USERNAME/professional-web-solution.git
cd professional-web-solution
```

### 2. Set up Firebase

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project (or use an existing one)
3. Click **Add app** → **Web** and register your app
4. Copy the config object provided

### 3. Plug in your Firebase config

Open `js/firebase-config.js` and replace the placeholder values:

```js
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

### 4. Set up Firestore

1. In the Firebase console, go to **Firestore Database**
2. Click **Create database** → Start in **test mode** (for development)
3. Enquiries submitted via the contact form will appear in the `enquiries` collection

### 5. Update your business details

In `index.html`, search for the following comments and replace with your info:

- Business name (`Apex` → your name/brand)
- Email address (`hello@apexsolutions.com.au`)
- Phone number
- Location

### 6. Run locally

Because `main.js` uses ES Modules (`import`/`export`), you need a local server — opening `index.html` directly in a browser won't work.

**Option A — VS Code Live Server** (recommended):
Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click `index.html` → Open with Live Server.

**Option B — Python:**
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

**Option C — Node.js:**
```bash
npx serve .
```

### 7. Deploy with Firebase Hosting (optional)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Customisation

| What to change | Where |
|---|---|
| Brand name / logo text | `index.html` → `.nav__logo` and `footer__logo` |
| Hero headline & subtext | `index.html` → `.hero` section |
| Services listed | `index.html` → `.services__grid` |
| About copy & stats | `index.html` → `.about` section |
| Colour palette | `css/style.css` → `:root` CSS variables |
| Fonts | `css/style.css` → `@import` and `--font-*` variables |

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, animations
- **JavaScript (ES Modules)** — no bundler required
- **Firebase v10** — Firestore for contact form storage

## Firestore Data Structure

Each contact form submission creates a document in the `enquiries` collection:

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+61 400 000 000",
  "message": "I'd like a website for my café...",
  "createdAt": "<server timestamp>"
}
```

## License

MIT — free to use and modify.
