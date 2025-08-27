import { Settings, MoreHorizontal, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProfileTab() {
  const watchHistory = [
    { title: "Dune: Part Two", date: "2 days ago", rating: 9, image: "/dune-part-two-poster.png" },
    { title: "Oppenheimer", date: "1 week ago", rating: 8, image: "/oppenheimer-poster.png" },
    { title: "Spider-Verse", date: "2 weeks ago", rating: 9, image: "/spider-verse-poster.png" },
    { title: "The Batman", date: "3 weeks ago", rating: 7, image: "/batman-poster.png" },
  ]

  const wnthacPosts = [
    {
      id: 1,
      movie: "Dune: Part Two",
      topic: "The ending and what it means for Part Three",
      timeLeft: "3 days left",
      comments: 24,
      image: "/dune-discussion.png",
    },
    {
      id: 2,
      movie: "Oppenheimer",
      topic: "Historical accuracy vs dramatic storytelling",
      timeLeft: "5 days left",
      comments: 18,
      image: "/oppenheimer-discussion.png",
    },
  ]

  const privatePosts = [
    {
      id: 1,
      content:
        "Finally watched Interstellar again. Still gives me chills every time. The docking scene is pure perfection! 🚀",
      movie: "Interstellar",
      time: "3h ago",
      likes: 12,
    },
    {
      id: 2,
      content:
        "Hot take: The Matrix Resurrections wasn't as bad as everyone says. It had some interesting ideas about legacy and nostalgia.",
      movie: "The Matrix Resurrections",
      time: "1d ago",
      likes: 8,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <h1 className="text-2xl font-bold text-primary">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
      </header>

      {/* Profile Info */}
      <div className="p-4 border-b border-border">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/user-profile-avatar.png" />
            <AvatarFallback className="text-lg">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold">John Doe</h2>
              <Badge variant="secondary" className="text-xs">
                Movie Buff
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">@johndoe</p>
            <p className="text-sm text-pretty mb-3">
              Passionate about cinema and storytelling. Always up for a good movie discussion! 🎬✨
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                <span>Joined March 2023</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={12} />
                <span>San Francisco</span>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <span>
                <strong>1,234</strong> <span className="text-muted-foreground">Following</span>
              </span>
              <span>
                <strong>5,678</strong> <span className="text-muted-foreground">Followers</span>
              </span>
              <span>
                <strong>342</strong> <span className="text-muted-foreground">Movies Watched</span>
              </span>
            </div>
          </div>
        </div>
        <Button className="w-full bg-primary text-primary-foreground">Edit Profile</Button>
      </div>

      {/* Profile Tabs */}
      <div className="p-4">
        <Tabs defaultValue="private" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="private" className="text-xs">
              Private Posts
            </TabsTrigger>
            <TabsTrigger value="public" className="text-xs">
              Public Posts
            </TabsTrigger>
            <TabsTrigger value="history" className="text-xs">
              Watch History
            </TabsTrigger>
            <TabsTrigger value="wnthac" className="text-xs">
              WNTHAC
            </TabsTrigger>
          </TabsList>

          <TabsContent value="private" className="space-y-4 mt-4">
            {privatePosts.map((post) => (
              <Card key={post.id} className="p-4 bg-card">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.movie}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                </div>
                <p className="text-sm text-pretty mb-3">{post.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.likes} likes</span>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="public" className="mt-4">
            <div className="text-center py-8">
              <p className="text-muted-foreground">No public posts yet</p>
              <Button variant="outline" className="mt-2 bg-transparent">
                Create Public Post
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-3 mt-4">
            {watchHistory.map((movie, index) => (
              <Card key={index} className="p-3 bg-card">
                <div className="flex items-center gap-3">
                  <img
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{movie.title}</h3>
                    <p className="text-xs text-muted-foreground">{movie.date}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs">Rating:</span>
                      <Badge variant="secondary" className="text-xs">
                        {movie.rating}/10
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="wnthac" className="space-y-4 mt-4">
            <div className="mb-4">
              <h3 className="font-semibold mb-1">We Need to Have a Conversation</h3>
              <p className="text-xs text-muted-foreground">Active discussion topics (7-day limit)</p>
            </div>
            {wnthacPosts.map((post) => (
              <Card key={post.id} className="p-4 bg-card">
                <div className="flex gap-3">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.movie}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <Badge variant="outline" className="text-xs mb-2">
                      {post.movie}
                    </Badge>
                    <h4 className="font-medium text-sm text-balance mb-2">{post.topic}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.comments} comments</span>
                      <Badge variant="secondary" className="text-xs">
                        {post.timeLeft}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
