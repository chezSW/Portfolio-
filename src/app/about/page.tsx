import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Chase Norvell, a mechanical engineering student who likes making real hardware.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="about-only shell">
      <div className="about-only__copy">
        <p>
          I’m Chase, born and raised in San Diego, and I’m currently studying Mechanical Engineering at San Diego Mesa College before transferring to finish my bachelor’s. I’ve always been someone who likes doing things with my hands and getting way too invested in whatever I’m working on. A lot of that started through Scouts and FIRST Robotics, where I spent years building things, working with teams, presenting ideas, and eventually taking on more leadership. Becoming an Eagle Scout was a pretty big part of that too. I think those experiences are where I picked up a lot of how I work now. I like taking responsibility for something, figuring it out as I go, and actually seeing it through instead of just talking about doing it.
        </p>
        <p>
          Engineering ended up fitting me really well because I like being able to point at something and say, “yeah, I actually helped make that.” Over the years that has gone from competition robots and random projects to autonomous vehicles and actual aerospace hardware. I’ve gotten to work in CAD, thermal analysis, machining, 3D printing, electronics packaging, Python, manufacturing, and a bunch of other stuff in between, but what I enjoy most is the whole process of turning an idea into something physical. I want to keep working in mechanical design and hardware development, especially on products where I can stay involved beyond just making the model and actually see how things are built, tested, broken, fixed, and improved.
        </p>
        <p>
          Outside of engineering, I’m still pretty much the same person who gets really into whatever seems interesting at the time. I like working out, gaming, building random things, making props, watching movies, and finding projects that give me an excuse to learn something new. I’m also a huge believer that engineering doesn’t have to be super serious all the time. Some of my favorite projects have come from messing around with an idea, making something questionable, breaking it, and then realizing there was actually something worth improving. I work hard and take what I do seriously, but I also want to enjoy the stuff I’m building and work with people who feel the same way.
        </p>
      </div>
      <figure className="about-only__portrait">
        <Image
          src="/images/about/chase-norvell-about.jpg"
          alt="Chase Norvell"
          fill
          priority
          sizes="(max-width: 860px) 100vw, 34vw"
        />
      </figure>
    </main>
  );
}
