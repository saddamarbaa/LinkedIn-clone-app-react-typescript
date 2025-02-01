import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider enableSystem={true} defaultTheme="light" attribute="class">
			<BrowserRouter>
				<div className="transition-colors flex min-h-screen flex-col bg-customWhite-40 text-customBlack-700 dark:bg-customBlack-900 dark:text-customWhite-50">
					<App />
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
)
