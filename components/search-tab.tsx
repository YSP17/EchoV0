import { Search, Filter, TrendingUp as Trending, Users, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function SearchTab() {
  const trendingTopics = [
    { topic: "Dune Part Two", posts: "2.3k posts" },
    { topic: "Oppenheimer", posts: "1.8k posts" },
    { topic: "Spider-Verse", posts: "1.2k posts" },
    { topic: "The Batman", posts: "956 posts" },
  ]

  const suggestedFriends = [
    { name: "Emma Wilson", username: "@emmaw", avatar: "/diverse-woman-avatar.png", mutualFriends: 5 },
    { name: "David Kim", username: "@davidk", avatar: "/man-avatar.png", mutualFriends: 3 },
    { name: "Lisa Chen", username: "@lisac", avatar: "/diverse-girl-avatar.png", mutualFriends: 8 },
  ]

  const recentSearches = [
    { type: "movie", query: "Interstellar", icon: Film },
    { type: "user", query: "Alex Chen", icon: Users },
    { type: "movie", query: "Blade Runner 2049", icon: Film },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="p-4 border-b border-border">
        <h1 className="text-2xl font-bold text-primary mb-4">Search</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          <Input placeholder="Search friends, movies, threads..." className="pl-10 pr-12 bg-input border-border" />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
            <Filter size={16} />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mt-3">
          <Badge variant="default" className="bg-primary text-primary-foreground">
            All
          </Badge>
          <Badge variant="outline">Friends</Badge>
          <Badge variant="outline">Movies</Badge>
          <Badge variant="outline">Threads</Badge>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Recent Searches */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Recent Searches</h2>
          <div className="space-y-2">
            {recentSearches.map((search, index) => {
              const Icon = search.icon
              return (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <Icon size={16} className="text-muted-foreground" />
                  <span className="text-sm">{search.query}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Trending Topics */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Trending size={18} className="text-primary" />
            <h2 className="text-lg font-semibold">Trending</h2>
          </div>
          <div className="space-y-2">
            {trendingTopics.map((trend, index) => (
              <Card key={index} className="p-3 bg-card hover:bg-card/80 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{trend.topic}</h3>
                    <p className="text-xs text-muted-foreground">{trend.posts}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    #{index + 1}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Suggested Friends */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users size={18} className="text-primary" />
            <h2 className="text-lg font-semibold">People You May Know</h2>
          </div>
          <div className="space-y-3">
            {suggestedFriends.map((friend, index) => (
              <Card key={index} className="p-3 bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={friend.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {friend.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{friend.name}</h3>
                      <p className="text-xs text-muted-foreground">{friend.username}</p>
                      <p className="text-xs text-muted-foreground">{friend.mutualFriends} mutual friends</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    Follow
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
