// src/components/Footer.tsx
import { Github, Instagram, Linkedin } from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 mt-auto">
			<div className="container flex h-14 items-center justify-between">
				<p className="text-sm">
					© {new Date().getFullYear()} <a href="https://www.8aiku.com/">8aiku</a> | All rights
					reserved.
				</p>
				<div className="flex items-center space-x-4 hidden">
					<a
						href="https://8aiku.com/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<Github className="h-5 w-5" />
					</a>
					<a
						href=""
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<Instagram className="h-5 w-5" />
					</a>
					<a
						href="/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<Linkedin className="h-5 w-5" />
					</a>
				</div>
			</div>
		</footer>
	);
}
