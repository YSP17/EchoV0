import { MessageCircle, Heart, Share, MoreHorizontal, Plus, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function FeedTab() {
  const stories = [
    { id: 1, user: "Alex", avatar: "/diverse-person-avatars.png", movie: "Dune 2" },
    { id: 2, user: "Sarah", avatar: "/diverse-woman-avatar.png", movie: "Oppenheimer" },
    { id: 3, user: "Mike", avatar: "/man-avatar.png", movie: "Spider-Verse" },
    { id: 4, user: "Emma", avatar: "/diverse-girl-avatar.png", movie: "The Batman" },
  ]

  const posts = [
    {
      id: 1,
      user: "Alex Chen",
      avatar: "/diverse-person-avatars.png",
      time: "2h ago",
      content:
        "Just watched Dune: Part Two and I'm absolutely blown away! The cinematography is incredible. Hans Zimmer's score gives me chills every time. 🎬✨",
      movie: "Dune: Part Two",
      movieImage: "/dune-part-two-scene.png",
      likes: 24,
      comments: 8,
      isPublic: false,
    },
    {
      id: 2,
      user: "Sarah Johnson",
      avatar: "/diverse-woman-avatar.png",
      time: "4h ago",
      content:
        "Oppenheimer was a masterpiece of storytelling. Nolan really outdid himself with this one. The way he portrayed the moral complexity was brilliant.",
      movie: "Oppenheimer",
      movieImage: "/oppenheimer-movie-scene.png",
      likes: 31,
      comments: 12,
      isPublic: true,
    },
    {
      id: 3,
      user: "Mike Rodriguez",
      avatar: "/man-avatar.png",
      time: "6h ago",
      content:
        "Spider-Verse continues to set the bar for animation. Every frame is a work of art! Who else is excited for the next one?",
      movie: "Spider-Man: Into the Spider-Verse",
      movieImage: "/spider-verse-animation-scene.png",
      likes: 18,
      comments: 5,
      isPublic: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background futuristic-bg">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-background via-card to-background">
        <div className="absolute inset-0 gradient-warm-subtle"></div>
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-8 h-8 gradient-warm rounded-lg flex items-center justify-center">
            <Waves size={20} className="text-white" />
          </div>
          <div>
            <h1
              className="text-3xl font-black tracking-tight gradient-text-warm"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Feed
            </h1>
            <div className="flex gap-2 mt-1">
              <Badge className="gradient-warm text-white text-xs font-semibold rounded-full px-3">Friends Only</Badge>
              <Badge
                variant="outline"
                className="text-xs font-semibold rounded-full px-3 border-primary/30 text-primary hover:bg-primary/10"
              >
                For You
              </Badge>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary rounded-full">
          <MessageCircle size={24} />
        </Button>
      </header>

      {/* Stories */}
      <div className="p-6 border-b border-border">
        <div className="flex gap-4 overflow-x-auto pb-3">
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <div className="w-18 h-18 rounded-full border-3 border-dashed gradient-border-warm flex items-center justify-center p-1">
              <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                <Plus size={24} className="gradient-text-warm" />
              </div>
            </div>
            <span className="text-xs text-muted-foreground font-medium">Your Story</span>
          </div>
          {stories.map((story) => (
            <div key={story.id} className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="w-18 h-18 rounded-full gradient-border-warm p-1">
                <Avatar className="w-full h-full">
                  <AvatarImage src={story.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="gradient-warm text-white font-bold">{story.user[0]}</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs text-center text-balance leading-tight max-w-16 font-medium">{story.user}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6 p-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="bg-card border-border/30 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ borderRadius: "1.5rem" }}
          >
            <div className="p-6">
              {/* Post Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={post.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="gradient-warm text-white font-bold">
                      {post.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{post.user}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground font-medium">{post.time}</span>
                      {post.isPublic && (
                        <Badge className="gradient-warm text-white text-xs font-semibold rounded-full px-2">
                          Public
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="hover:bg-muted/50 rounded-full">
                  <MoreHorizontal size={20} />
                </Button>
              </div>

              {/* Post Content */}
              <p className="text-base mb-4 text-pretty leading-relaxed">{post.content}</p>

              {/* Movie Image */}
              <div className="relative mb-4 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={post.movieImage || "/placeholder.svg"}
                  alt={post.movie}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <Badge className="gradient-warm text-white font-bold rounded-full px-4 py-2 shadow-lg">
                    {post.movie}
                  </Badge>
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    <Heart size={18} />
                    <span className="font-semibold">{post.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full px-4 py-2 transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    <span className="font-semibold">{post.comments}</span>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full p-2 transition-all duration-300"
                >
                  <Share size={18} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
