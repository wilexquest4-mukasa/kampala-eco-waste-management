import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Truck, 
  Award, 
  Target, 
  TrendingUp, 
  Clock,
  MapPin,
  Star,
  Users
} from "lucide-react";

export const DashboardSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Impact Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your contribution to Kampala's transformation. Every action counts towards our collective goal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Progress */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Weekly Recycling Goal
                  </CardTitle>
                  <Badge variant="secondary">85% Complete</Badge>
                </div>
                <CardDescription>Help us reach 500kg this week!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">425kg / 500kg</span>
                  </div>
                  <Progress value={85} className="h-3" />
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-primary">12kg</div>
                      <div className="text-xs text-muted-foreground">Your Contribution</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-community">75kg</div>
                      <div className="text-xs text-muted-foreground">This Week Left</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-impact">245</div>
                      <div className="text-xs text-muted-foreground">Green Points</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Next Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Next Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Tomorrow, 8:00 AM</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Bukoto, Kampala
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Clock className="h-4 w-4 mr-2" />
                    Set Reminder
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Recycled 5kg plastic bottles", points: "+50 points", time: "2 hours ago", icon: "🍶" },
                    { action: "Completed weekly goal", points: "+100 points", time: "3 days ago", icon: "🎯" },
                    { action: "Reported illegal dumping", points: "+25 points", time: "5 days ago", icon: "📍" },
                    { action: "Joined community cleanup", points: "+75 points", time: "1 week ago", icon: "🧹" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{activity.icon}</span>
                        <div>
                          <div className="font-medium">{activity.action}</div>
                          <div className="text-sm text-muted-foreground">{activity.time}</div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-primary font-medium">
                        {activity.points}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-community" />
                  Community Leaderboard
                </CardTitle>
                <CardDescription>Top contributors this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Nakato", points: 1250, position: 1 },
                    { name: "James Okello", points: 1100, position: 2 },
                    { name: "Maria Uwimana", points: 950, position: 3 },
                    { name: "You", points: 875, position: 4 }
                  ].map((user, index) => (
                    <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${user.name === "You" ? "bg-primary/10 border border-primary/20" : "bg-muted/30"}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          user.position === 1 ? "bg-community text-community-foreground" :
                          user.position === 2 ? "bg-muted text-muted-foreground" :
                          user.position === 3 ? "bg-impact text-impact-foreground" :
                          "bg-primary text-primary-foreground"
                        }`}>
                          {user.position}
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.points} points</div>
                        </div>
                      </div>
                      {user.position <= 3 && (
                        <Star className="h-4 w-4 text-community" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Collection
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  Report Dumping
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Find Cleanup Event
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};