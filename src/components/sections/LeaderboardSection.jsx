// Server Component — static data, fully SSR'd and indexable
import Image from "next/image";
import { Trophy } from "lucide-react";

const leaderboardData = [
  { id: 1, name: "Arjun Sharma", role: "Full Stack Dev", points: 2850, rank: 1, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun", specialty: "React & Node.js" },
  { id: 2, name: "Priya Patel", role: "AI/ML Specialist", points: 2720, rank: 2, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya", specialty: "Python & TensorFlow" },
  { id: 3, name: "Rahul Verma", role: "Frontend Expert", points: 2590, rank: 3, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul", specialty: "React & TypeScript" },
  { id: 4, name: "Sneha Desai", role: "Backend Dev", points: 2410, rank: 4, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha", specialty: "Go & Microservices" },
  { id: 5, name: "Karan Singh", role: "DevOps Engineer", points: 2280, rank: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan", specialty: "Docker & K8s" },
];

const rankStyles = [
  "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg",
  "bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800",
  "bg-gradient-to-br from-orange-400 to-orange-600 text-white",
  "bg-muted text-muted-foreground",
  "bg-muted text-muted-foreground",
];

export default function LeaderboardSection() {
  return (
    <section className="relative py-32 overflow-hidden" aria-label="Community leaderboard">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-neutral-950 dark:to-neutral-900" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Trophy className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">Top Performers</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Community{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Leaderboard
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Points per game in arcade mode
          </p>
        </div>

        {/* Using ol for semantic ranking */}
        <ol className="max-w-3xl mx-auto space-y-4" aria-label="Top 5 community members">
          {leaderboardData.map((member, index) => (
            <li
              key={member.id}
              className={`glass-card rounded-2xl p-6 border transition-all duration-300 ${
                index === 0 ? "border-primary/50 bg-primary/5" : "border-border/50 hover:border-primary/30"
              } hover:shadow-lg hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${rankStyles[index] || rankStyles[3]}`} aria-label={`Rank ${member.rank}`}>
                  #{member.rank}
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src={member.avatar}
                    alt={`${member.name} avatar`}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-2 border-border bg-card"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-xl font-bold truncate">{member.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{member.specialty}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {member.points.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Points</div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
