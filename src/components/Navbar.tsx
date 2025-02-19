// src/components/Navbar.tsx
"use client";

import React, {useState } from "react";
import { QrCode } from "lucide-react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";

export function Navbar() {
	
	const [active, setActive] = useState<string | null>(null);
	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
			<div className="container flex h-14 items-center mt-3">
				<div className="flex items-center space-x-2">
					<span className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b font-[700]">8AIKU</span>
				</div>
				<div className="">
				<Menu setActive={setActive}>
					<Link href="https://www.8aiku.com/">
					<MenuItem setActive={setActive} active={active} item="Home">
					</MenuItem>
					</Link>
					<MenuItem setActive={setActive} active={active} item="Features">
					<div className="flex flex-col space-y-4 text-sm">
					<HoveredLink href="/imageocr">Image to text</HoveredLink>
					<HoveredLink href="https://text-to-qr-zeta.vercel.app/" target="_blank" >Text to qr generator</HoveredLink>
					<HoveredLink href="https://barcode-gen-zeta.vercel.app/" target="_blank">Barcode generator</HoveredLink>
					<HoveredLink href="https://8aiku.com/extract_qr" target="_blank">Barcode decode</HoveredLink>
					</div>
					</MenuItem>
					<Link href={"/contact"}>
				<MenuItem setActive={setActive} active={active} item="Contact Us">
				</MenuItem>
					</Link>
				</Menu>
				</div>
				<div className="flex-1" />
				<ThemeSwitcher />
			</div>
		</nav>
	);
}
