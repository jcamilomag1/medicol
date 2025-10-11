import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Preventive Care",
    description: "Learn why regular check-ups are essential for maintaining long-term health.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2025",
    category: "Wellness"
  },
  {
    title: "Telemedicine: The Future is Here",
    description: "Discover how virtual consultations are revolutionizing healthcare access.",
    author: "Dr. Michael Chen",
    date: "March 10, 2025",
    category: "Technology"
  },
  {
    title: "Nutrition Tips for Better Health",
    description: "Expert advice on building healthy eating habits that last a lifetime.",
    author: "Dr. Emily Rodriguez",
    date: "March 5, 2025",
    category: "Nutrition"
  }
];

export const BlogPreview = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Latest Health Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with expert advice and healthcare updates.
            </p>
          </div>
          <Button variant="outline" className="group">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border group animate-fade-in-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {post.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
