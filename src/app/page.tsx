"use client";
import { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { MapPin, Code, HeartHandshake } from "lucide-react";
import { Experience } from "@/components/experience";
import { CLIENTWORKS } from "@/data/clients.config";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientWorksCard } from "@/components/client-works-card";
import { PROJECTS } from "@/data/projects.config";

const BLUR_FADE_DELAY = 0.04;

interface BlogsI {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    icon: string;
    featured: boolean;
    readTime: string;
  };
}

export default function Page() {
  const [blogPosts, setBlogPosts] = useState<BlogsI[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    if (blogPosts.length === 0) {
      fetchBlogPosts();
    }
  }, []);

  const [hovering, setHovering] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const placeholders = [
    "bobirrahmatof@gmail.com",
    "Dive deeper into the world of tech and beyond. Hit subscribe!",
    "Curious about everything? subscribe now!",
    "Write a Javascript method to reverse a string",
    "Discover the stories behind the code!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
        <div className="mx-auto w-full max-w-2xl space-y-8 mt-3">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-wrap gap-3 h-full w-full">
              <Badge variant="outline" className="cursor-pointer group">
                <MapPin className="size-4 mr-1 group-hover:text-green-500" />
                {DATA.location}
              </Badge>
              <Badge
                variant="outline"
                className="md:flex cursor-pointer group"
              >
                <Code className="size-4 mr-1 group-hover:text-red-500" />
                {DATA.newprojects}
              </Badge>
              <Badge
                variant="outline"
                className="hidden md:flex cursor-pointer group"
              >
                <HeartHandshake className="size-4 mr-1 group-hover:text-red-500" />
                {DATA.collaborate}
              </Badge>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <Experience />
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-5">
              Featured Projects
            </div>
            <Tabs
              defaultValue="myworks"
              className="flex flex-col items-center justify-center w-full"
            >
              <TabsList className="grid w-[400px] grid-cols-2 mb-4">
                <TabsTrigger value="myworks">My Works</TabsTrigger>
                <TabsTrigger value="clientworks">Client Works</TabsTrigger>
              </TabsList>
              <TabsContent value="myworks">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="space-y-12 w-full">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold tracking-tighter sm:text-2xl mt-2">
                          Creative code in action.
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I&apos;ve worked on a range of projects,
                          from simple websites to more complex web applications.
                          Here are a few of them. More details on the{" "}
                          <Link
                            href="/projects"
                            className="text-blue-500 hover:underline"
                          >
                            projects page
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
                      {PROJECTS.filter((project) => project.featured).map(
                        (project, id) => (
                          <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                          >
                            <ProjectCard
                              href={project.href}
                              active={project.active}
                              archived={project.archived}
                              key={project.title}
                              title={project.title}
                              description={project.description}
                              dates={project.dates}
                              tags={project.technologies}
                              image={project.image}
                              video={project.video}
                              links={project.links}
                            />
                          </BlurFade>
                        ),
                      )}
                    </div>
                  </div>
                </BlurFade>
              </TabsContent>
              <TabsContent value="clientworks">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="space-y-12 w-full">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold tracking-tighter sm:text-2xl mt-2">
                          Turning ideas into solutions.
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I&apos;ve collaborated on diverse client projects,
                          from freelance gigs to corporate solutions.
                          Here are some highlights. More details on the {" "}
                          <Link
                            href="/projects"
                            className="text-blue-500 hover:underline"
                          >
                            projects page
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
                      {CLIENTWORKS.filter((project) => project.featured).map(
                        (project, id) => (
                          <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                          >
                            <ClientWorksCard
                              key={project.title}
                              title={project.title}
                              worktype={project.worktype}
                              description={project.description}
                              dates={project.dates}
                              tags={project.technologies}
                              image={project.image}
                              video={project.video}
                              fatures={project.features}
                              links={project.links}
                              testimonial={project.testimonial}
                            />
                          </BlurFade>
                        ),
                      )}
                    </div>
                  </div>
                </BlurFade>
              </TabsContent>
            </Tabs>
          </div>
        </BlurFade>

      </section>
      <section id="blogs">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Latest Articles
                </div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
                  Thoughts on Code, Tech, and Life
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I write about programming, tech, and the freelance grind. From solving coding challenges to sharing insights about the journey, my blog captures it all.
                  Check out my latest posts, and feel free to explore more on {" "}
                  <Link href="/blog" className="text-blue-500 hover:underline">
                    blog page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-3 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="divide-y divide-dashed">
                {blogPosts
                  .filter((post) => post.metadata.featured)
                  .sort(
                    (a, b) =>
                      new Date(b.metadata.publishedAt).getTime() -
                      new Date(a.metadata.publishedAt).getTime(),
                  )
                  .map((post, id) => (
                    <BlurFade
                      key={post.slug}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <BlogCard
                        href={`/blog/${post.slug}`}
                        title={post.metadata.title}
                        description={post.metadata.summary}
                        publishedAt={post.metadata.publishedAt}
                        iconUrl={post.metadata.icon}
                        readTime={post.metadata.readTime}
                      />
                    </BlurFade>
                  ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Got a project in mind or a quick question? Drop me {" "}
                {" "}
                <Link
                  href={DATA.contact.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  an email
                </Link>{" "}
                or shoot me a message on
                {" "}
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  X
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main >
  );
}
