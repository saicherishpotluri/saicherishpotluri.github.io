import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiAward } from "react-icons/fi";
import resume from "../../assets/Sai-Cherish-Potluri-Resume.pdf";
import profilePhoto from "../../assets/profile-photo.jpg";
import TerminalWindow from "../../common/TerminalWindow";
import Badge from "../../common/Badge";
import Reveal from "../../common/Reveal";
import Magnetic from "../../common/Magnetic";
import useTypewriter from "../../common/useTypewriter";

const ROLES = ["Fullstack Software Engineer", "Java · Spring Boot · AWS", "Distributed Systems Engineer"];

const CERTIFICATIONS = [
  {
    label: "AWS Certified Solutions Architect – Associate",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/ae70c6577d244f1dad26f22954623768",
  },
  {
    label: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/f59885d2-b95f-4cc5-b1f2-fdb44b5147dd/public_url",
  },
];

function TiltAvatar({ src }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-border">
        <img
          src={src}
          alt="Headshot of Sai Cherish Potluri"
          width={700}
          height={700}
          className="aspect-square w-full object-cover"
        />
      </div>
    );
  }

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-border"
      style={{ perspective: 800 }}
    >
      <motion.img
        src={src}
        alt="Headshot of Sai Cherish Potluri"
        width={700}
        height={700}
        style={{ rotateX, rotateY }}
        className="aspect-square w-full object-cover will-change-transform"
      />
    </div>
  );
}

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const typed = useTypewriter(ROLES);
  const roleText = prefersReducedMotion ? ROLES[0] : typed;

  return (
    <section id="hero" className="grid grid-cols-1 items-center gap-10 pt-6 md:grid-cols-[1.3fr_1fr] md:gap-14">
      <Reveal>
        <TerminalWindow title="~/sai-potluri — zsh">
          <p className="font-mono text-sm text-text-muted">
            <span className="text-accent-green">$</span> whoami
          </p>
          <h1 className="mt-1 font-sans text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
            Sai Cherish Potluri
          </h1>

          <p className="mt-5 font-mono text-sm text-text-muted">
            <span className="text-accent-green">$</span> cat role.txt
          </p>
          <h2 className="mt-1 min-h-[1.75rem] font-mono text-lg text-accent-cyan sm:text-xl">
            {roleText}
            <span className="animate-caret-blink text-accent-cyan">▍</span>
          </h2>

          <div className="mt-5">
            <Badge variant="green" pulse>
              Open to new opportunities
            </Badge>
          </div>

          <p className="mt-5 max-w-lg font-sans text-base text-text-muted">
            Fullstack engineer building secure, high-throughput distributed systems across fintech,
            identity, and enterprise platforms — currently shipping OAuth2/OIDC identity services at
            PayPal.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {CERTIFICATIONS.map((cert) => (
              <a key={cert.label} href={cert.url} target="_blank" rel="noreferrer">
                <Badge variant="amber" icon={<FiAward />}>
                  {cert.label}
                </Badge>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Magnetic
              as="a"
              href={resume}
              download="Sai-Cherish-Potluri-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-accent-cyan px-4 py-2 font-mono text-sm font-medium text-bg"
            >
              <FiDownload /> resume.pdf
            </Magnetic>
            <a
              href="https://github.com/saicherishpotluri"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-md border border-border p-2.5 text-text-muted transition-colors hover:text-text"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/spotluri"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-md border border-border p-2.5 text-text-muted transition-colors hover:text-text"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </TerminalWindow>
      </Reveal>

      <Reveal delay={0.15}>
        <TiltAvatar src={profilePhoto} />
      </Reveal>
    </section>
  );
}

export default Hero;
