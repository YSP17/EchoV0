"use client"

import { useState } from "react"
import { MoviesTab } from "@/components/movies-tab"
import { FeedTab } from "@/components/feed-tab"
import { SearchTab } from "@/components/search-tab"
import { ProfileTab } from "@/components/profile-tab"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function EchoesApp() {
  const [activeTab, setActiveTab] = useState("movies")

  const renderActiveTab = () => {
    switch (activeTab) {
      case "movies":
        return <MoviesTab />
      case "feed":
        return <FeedTab />
      case "search":
        return <SearchTab />
      case "profile":
        return <ProfileTab />
      default:
        return <MoviesTab />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-20">{renderActiveTab()}</main>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
