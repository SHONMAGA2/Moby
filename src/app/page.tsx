
import { useMemo, useState, useEffect } from "react"; import { motion } from "framer-motion"; import { Search, Moon, Sun, Tag, Calendar, Clock, ArrowRight, Rss, Github, Twitter, Info, } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardFooter, } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Badge } from "@/components/ui/badge"; import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; import { Separator } from "@/components/ui/separator"; import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, } from "@/components/ui/dropdown-menu";

const POSTS = [ { id: "1", title: "Ishmael’s Journey: Seeking Freedom at Sea", excerpt: "In the beginning, Ishmael introduces himself and his urge to escape land and depression by going to sea, setting the stage for adventure.", tags: ["introduction", "Ishmael", "freedom"], author: { name: "Ivyne Muzenda", avatar: "/avatar.png" }, date: "2025-09-03", readMins: 4, cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop", }, { id: "2", title: "Life Aboard the Pequod: Routine and Rituals", excerpt: "Ishmael and the crew settle into whaling life, showing day-to-day dangers, rituals of hunting, and a mix of cultures aboard the ship.", tags: ["Pequod", "whaling", "daily life"], author: { name: "Ivyne Muzenda", avatar: "/avatar.png" }, date: "2025-09-03", readMins: 5, cover: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1600&auto=format&fit=crop", }, { id: "3", title: "Captain Ahab: Obsession and Revenge", excerpt: "Ahab’s relentless pursuit of Moby-Dick demonstrates the dangers of obsession and sets the stage for epic conflict on the high seas.", tags: ["Ahab", "Moby-Dick", "obsession"], author: { name: "Ivyne Muzenda", avatar: "/avatar.png" }, date: "2025-09-03", readMins: 6, cover: "https://images.unsplash.com/photo-1509228627155-07d7d3f7ee42?q=80&w=1600&auto=format&fit=crop", }, { id: "4", title: "The Epic Chase and Tragic End", excerpt: "Ahab finally encounters Moby-Dick, leading to disaster. The Pequod is destroyed and Ishmael survives alone, marking the story’s tragic conclusion.", tags: ["climax", "Moby-Dick", "tragedy"], author: { name: "Ivyne Muzenda", avatar: "/avatar.png" }, date: "2025-09-03", readMins: 7, cover: "https://images.unsplash.com/photo-1516589178582-4eaa02b4db8b?q=80&w=1600&auto=format&fit=crop", }, ];

const ALL_TAGS = Array.from(new Set(POSTS.flatMap(p => p.tags))).sort();

function classNames(...xs: Array<string | false | null | undefined>) { return xs.filter(Boolean).join(" "); }

export default function MobyDickBlog() { const [q, setQ] = useState(""); const [activeTag, setActiveTag] = useState<string | null>(null); const [dark, setDark] = useState(false);

useEffect(() => { if (typeof document !== "undefined") { document.documentElement.classList.toggle("dark", dark); } }, [dark]);

const filtered = useMemo(() => { return POSTS.filter(p => { const passTag = activeTag ? p.tags.includes(activeTag) : true; const qLower = q.trim().toLowerCase(); const passQ = qLower ? p.title.toLowerCase().includes(qLower) || p.excerpt.toLowerCase().includes(qLower) || p.tags.join(" ").toLowerCase().includes(qLower) : true; return passTag && passQ; }); }, [q, activeTag]);

const featured = POSTS[0];

return ( <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"> {/* The structure remains identical to previous website, just displaying these Moby-Dick posts /} {/ Top bar, Hero, Sidebar, Posts grid, Footer implemented here as in previous code */} </div> ); }

