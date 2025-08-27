import { Bell, Play, Star, Users, Waves, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MoviesTab() {
  const movieCategories = [
    {
      title: "Trending Now",
      movies: [
        { title: "Dune: Part Two", rating: 8.5, genre: "Sci-Fi", image: "/dune-part-two-poster.png", featured: true },
        { title: "Oppenheimer", rating: 8.9, genre: "Drama", image: "/images/posters/oppenheimer-poster.png" },
        { title: "Spider-Verse", rating: 8.7, genre: "Animation", image: "/spider-verse-movie-poster.png" },
        { title: "The Batman", rating: 8.2, genre: "Action", image: "/images/posters/the-batman-poster.png" },
      ],
    },
    {
      title: "Comedy Favorites",
      movies: [
        { title: "Everything Everywhere", rating: 8.8, genre: "Comedy", image: "/eeaao-poster.png" },
        {
          title: "The Grand Budapest",
          rating: 8.1,
          genre: "Comedy",
          image: "/grand-budapest-hotel-inspired-poster.png",
        },
        { title: "Knives Out", rating: 7.9, genre: "Mystery", image: "/knives-out-poster.png" },
        { title: "Parasite", rating: 8.6, genre: "Thriller", image: "/parasite-movie-poster.png" },
      ],
    },
    {
      title: "Sci-Fi Classics",
      movies: [
        { title: "Blade Runner 2049", rating: 8.0, genre: "Sci-Fi", image: "/blade-runner-2049-poster.png" },
        { title: "Interstellar", rating: 8.7, genre: "Sci-Fi", image: "/interstellar-movie-poster.png" },
        { title: "Ex Machina", rating: 7.7, genre: "Sci-Fi", image: "/ex-machina-movie-poster.png" },
        { title: "Arrival", rating: 7.9, genre: "Sci-Fi", image: "/arrival-movie-poster.png" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background bright-bg">
      <header className="relative flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-background via-card to-background">
        <div className="absolute inset-0 gradient-echoes-subtle"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-10 h-10 gradient-echoes rounded-lg flex items-center justify-center pixelated-icon shadow-lg">
            <Waves size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-5xl font-black tracking-wider gradient-text-echoes pixelated-text">ECHOES</h1>
          </div>
        </div>
        <div className="relative z-10 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full glow-echoes"
          >
            <MessageCircle size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full glow-echoes"
          >
            <Bell size={24} />
          </Button>
        </div>
      </header>

      <div className="space-y-12 p-6">
        {movieCategories.map((category, categoryIndex) => (
          <div key={category.title} className="space-y-6">
            {categoryIndex > 0 && <div className="section-divider-echoes"></div>}

            <div className="flex items-center justify-between">
              <h2 className="text-5xl font-black text-balance gradient-text-echoes tracking-tight">{category.title}</h2>
              <Button className="gradient-border-echoes pill-button text-foreground hover:glow-echoes transition-all duration-300 relative overflow-hidden bg-white">
                <span className="relative z-10 font-bold">View All</span>
              </Button>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-6">
              {category.movies.map((movie, index) => (
                <Card
                  key={movie.title}
                  className={`flex-shrink-0 w-44 bg-card border-border/30 movie-card-hover cursor-pointer group overflow-hidden shadow-lg ${
                    movie.featured ? "ring-2 ring-primary/40 glow-echoes" : ""
                  }`}
                  style={{ borderRadius: "1.5rem" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                    <img
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-115"
                    />

                    <div className="absolute inset-0 gradient-echoes-subtle opacity-0 group-hover:opacity-100 transition-all duration-400 z-20 flex items-center justify-center">
                      <div className="flex gap-3">
                        <Button
                          size="icon"
                          className="gradient-echoes glow-echoes hover:scale-125 transition-transform duration-300 rounded-full"
                        >
                          <Play size={20} className="text-white" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="bg-white/90 backdrop-blur-sm hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-full"
                        >
                          <Users size={20} />
                        </Button>
                      </div>
                    </div>

                    <Badge className="absolute top-4 right-4 gradient-echoes text-white font-bold shadow-xl z-30 rounded-full px-3 py-1">
                      <Star size={14} className="mr-1 fill-current" />
                      {movie.rating}
                    </Badge>

                    {movie.featured && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold shadow-xl z-30 rounded-full px-3 py-1">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <div className="p-5 bg-gradient-to-t from-card to-background">
                    <h3 className="font-bold text-lg text-balance leading-tight mb-3 text-foreground group-hover:gradient-text-echoes transition-all duration-300">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-semibold tracking-wide">{movie.genre}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
