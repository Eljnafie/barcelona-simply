# Barcelona Simply - Website Project

## How to Run This Project

1. **Install Node.js**: Ensure you have Node.js installed on your computer.
2. **Install Dependencies**: Open the terminal in VS Code and run:
   ```bash
   npm install
   ```
3. **Start Development Server**: Run the following command to start the website:
   ```bash
   npm run dev
   ```
4. **View Website**: Open your browser and go to `http://localhost:5173`.

## Project Structure

- **index.html**: The main entry HTML file.
- **index.tsx**: The JavaScript entry point that mounts the React app.
- **App.tsx**: Handles routing between pages.
- **constants.tsx**: Contains all text content (English, French, Arabic).
- **types.ts**: Defines data structures.
- **pages/**: Contains full page layouts (Home, Services, Pricing, etc.).
- **components/**: Contains reusable parts (Navbar, Footer, ChatWidget).

## Customization

To change text or prices, edit `constants.tsx`.
To change the color scheme, check the Tailwind config script in `index.html`.
