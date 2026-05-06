import Image from "next/image"
import { ThumbsUp, Award } from "lucide-react"

const features = [
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee on every job.",
  },
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Our team brings years of experience and expertise to every plumbing challenge.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wrench-background.png"
          alt=""
          fill
          className="object-cover object-right-bottom opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ABOUT <span className="text-primary">US</span>
          </h2>
        </div>

        {/* About Us Story */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            913 Solutions and Services LLC was built by neighbors, for neighbors. Founded right here in Kansas, our team brings together years of hands-on experience in plumbing, repairs, and home maintenance — with the work ethic and accountability you&apos;d expect from someone who lives in the same community as you.
          </p>
          <p>
            We started 913 Solutions because we saw a gap in the market: homeowners and property managers struggling to find a reliable, fairly priced trades company that actually shows up and wants to work, does the job right, and stands behind their work. That&apos;s exactly what we set out to fix.
          </p>
          <p>
            The &quot;913&quot; in our name isn&apos;t just an area code — it&apos;s a statement. We&apos;re proud to serve Johnson &amp; Miami County and the greater Kansas City area, and we&apos;re committed to being the company this community can count on for the long haul.
          </p>
          <p>
            Whether it&apos;s a leaking pipe or a list of repairs you&apos;ve been putting off for months, 913 Solutions is ready to offer the solution. Give us a call — we&apos;d love to earn your business.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Why Choose <span className="text-primary">913 Solutions LLC</span>?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
