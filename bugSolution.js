```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'], // <-- Updated content configuration
  theme: {
    extend: {
      // ... your custom theme ...
    },
  },
  plugins: [],
};
```