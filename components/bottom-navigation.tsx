"use client"

import { Film, Home, Search, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "movies", label: "Movies", icon: Film },
    { id: "feed", label: "Feed", icon: Home },
    { id: "search", label: "Search", icon: Search },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border shadow-2xl">
      <div className="absolute inset-0 gradient-warm-subtle"></div>
      <div className="relative z-10 flex items-center justify-around py-4">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-400 transform relative",
                isActive
                  ? "text-white glow-warm scale-110 shadow-xl"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30 hover:scale-105",
              )}
            >
              {isActive && <div className="absolute inset-0 gradient-warm rounded-2xl"></div>}
              <Icon
                size={26}
                className={cn("transition-all duration-300 relative z-10", isActive && "drop-shadow-lg")}
              />
              <span
                className={cn("text-xs font-bold transition-all duration-300 relative z-10", isActive && "text-white")}
              >
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 gradient-warm rounded-full shadow-lg"></div>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
