import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, ChevronUp, Mic, Play, Volume2, Heart } from "lucide-react";

/* ─── Section data for Imbued project ─── */
const IMBUED_SECTIONS = [
  {
    id: "remembrance",
    label: "Remembrance",
    title: "Last Words",
    subtitle: "Preserving Voice, Memory, and Identity Beyond Life",
    content: `This project explores the deeply human need to remember and be remembered. When we lose someone we love, what remains are fragments of their presence — their voice, their words, the way they made us feel. "Last Words" investigates how interaction design can create meaningful artifacts that preserve personal identity and emotional connections beyond death, transforming the act of recording one's voice into a profound act of legacy-making.

The project began with a simple but powerful observation: the human voice is one of the most intimate and recognisable aspects of personal identity. Hearing a loved one's voice — even after they have passed — can evoke an immediate and overwhelming sense of closeness. Yet we rarely design intentionally for this experience. Most voice recordings are accidental, captured on phone calls or home videos. This project asks: what if we designed a dedicated artifact whose sole purpose is to hold someone's final message, their last words, as a gift to those they leave behind?

Through extensive research into grief, remembrance practices, and the emotional weight of physical objects, this project develops a tangible voice-recording device that goes beyond mere functionality. The artifact draws from memorial architecture — arched forms, engraved surfaces, tactile controls — to create an object that feels reverent and meaningful in the hand. It is designed to be culturally adaptable, allowing individuals from any background to express their identity through customisable visual and symbolic layers. The result is an interaction design project that bridges emotional human experience with thoughtful, purposeful design — creating a new way for people to preserve connection, comfort, and legacy.`,
  },
  {
    id: "voice",
    label: "Voice & Identity",
    title: "The Work of God",
    subtitle: "Defines your voice. Say something that matters",
    content: `The concept of remembrance holds profound significance in human life, particularly when individuals confront mortality and the uncertainty surrounding what may exist beyond death. Across cultures and religions, remembrance functions as both an emotional and spiritual bridge between the living and the departed. From an interaction design perspective, this relationship between memory, voice, and identity offers an opportunity to explore how digital systems may support meaningful remembrance practices. The belief that one's "last words" carry emotional and spiritual value suggests that voice can act not only as communication but also as a legacy artifact. Designing technologies that preserve personal voice, intention, and belief therefore becomes a way of supporting continuity between presence and absence, life and afterlife, memory and ritual.

From an emotional perspective, grief shapes the ways individuals maintain connections with those who have passed away. Psychological research suggests that remembrance practices help people process loss and sustain continuing bonds with loved ones rather than completely "letting go." Religious rituals often structure this process by offering shared moments of reflection, prayer, and collective support. Within Christianity, for example, prayer for the departed and memorial gatherings provide reassurance that the soul continues in the presence of God. In interaction design, these emotional practices can inform how digital memorial tools or voice-recording systems might support families in preserving meaningful expressions, allowing individuals to leave messages that comfort loved ones and reinforce relational continuity beyond death.`,
  },
  {
    id: "christianity",
    label: "Christianity",
    title: "The Work of God — Christianity",
    subtitle: "Resurrection, Identity, and the Promise of Eternal Life",
    content: `In Christianity, the relationship between death, voice, and identity is closely connected to the belief that human life continues beyond physical existence through the presence of God and the promise of resurrection. The Christian understanding of death is not viewed as an ending but as a transition into eternal life, where the individual soul remains known and valued by God. Scriptural teachings in The Bible emphasize that a person's words, prayers, and testimony carry spiritual significance, shaping both personal identity and legacy within the faith community. In this context, voice becomes more than communication — it becomes an expression of faith, hope, and moral witness.

From an interaction design perspective, recording a person's final reflections or blessings can therefore be understood as preserving a spiritual identity that continues to resonate with loved ones after death. Christian traditions such as prayer for the departed, remembrance services, and spoken blessings highlight how voice plays an important role in maintaining relational and spiritual continuity, supporting the belief that identity is not lost at death but transformed through God's presence and remembered through community practices of faith and care.`,
    quote: `"Jesus said to her, 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?'"`,
    quoteSource: "John 11:25-26",
  },
  {
    id: "islam",
    label: "Islam",
    title: "Islamic Perspective on Death & Remembrance",
    subtitle: "A Transition from Earthly Life to the Hereafter",
    content: `In Islam, death is understood not as the end of existence but as a transition from earthly life to the eternal life of the Hereafter. Human life on earth is seen as a temporary test in which people are judged by their faith, intentions, and actions, and death marks the completion of that test. At death, the soul leaves the body by God's command and enters an intermediate state called Barzakh until the Day of Judgment. Islam teaches that all people will be resurrected, held accountable with perfect justice and mercy, and rewarded or punished accordingly in Paradise or Hell. Because life is temporary and death is certain, Islam emphasizes living with purpose, moral responsibility, kindness, and remembrance of God, viewing death as a meaningful return to the Creator rather than something to fear.

My inspiration for this project is informed by the Islamic understanding of death as a transition from worldly life to the hereafter rather than an ending. In Islam, remembrance of God and prayer for the deceased (duʿā) play an important role in maintaining a spiritual connection between the living and the departed. Graves are designed with simplicity and humility, reflecting the belief that all individuals return to God, as expressed in the Qur'an (2:156). This perspective influenced my thinking about how remembrance objects should communicate dignity, respect, and spiritual continuity rather than permanence in a material sense. As a result, the concept of designing a voice-recording artifact became a way to explore how identity and faith-based messages could remain meaningful for families after a person has passed away.

From an interaction design perspective, this understanding encouraged me to consider how a recorder could be shaped by Islamic values such as modesty, reflection, and remembrance rather than decorative symbolism. The intention behind the design is to support individuals in preserving their voice as a message of comfort, guidance, and spiritual connection for loved ones. In this way, the recorder becomes more than a technological device; it becomes a remembrance artifact that reflects faith, identity, and continuity beyond physical life.`,
    quote: `"To Allah we belong, and to Him we shall return."`,
    quoteSource: "Qur'an 2:156",
  },
  {
    id: "hinduism",
    label: "Hinduism",
    title: "Lord Sri Krishna on Death & the Eternal Soul",
    subtitle: "The Soul is Never Born, Nor Does it Ever Die",
    content: `In Hindu religious tradition, the Lord Sri Krishna says about death — the soul is never born, nor does it ever die; nor having once existed, does it ever cease to be. The soul is without birth, eternal, immortal, and ageless. It is not destroyed when the body is destroyed.

Dear one, do not fear death. What you call Death is not the end. It is only a doorway. This soul does not perish. It simply journeys on. You are not the body of flesh and bones. You are eternal, beyond time. Body falls but you remain. Like a traveller who lives behind worn-out clothes and put on new ones. Child, why be afraid of change that only frees you? You have crossed countless Births before, and yet, here you are — alive, listening, seeking. That is the proof that you will never cease to exist.

I know the Heaviness you feel when thoughts of death come. But remember this, the end of the body is beginning of another chapter. Just as Day Turns into night, and night into day, life flows into life. Don't ask what comes after — ask instead, "how can I leave today with love, with courage, with devotion?" Because the soul carries forward not Possessions, not titles, but the fragrance of its action and the purity of its heart. When you act with love, with truth, with salvation, surrender, Death becomes nothing to fear. It becomes like sleep after a long day — gentle, restful, natural.

Remember my words in the Gita: "For the soul there is neither birth nor death. It does not come into being, and will not come into being. It's unborn, eternal, everlasting and Primeval." So tell me, beloved, if you cannot be destroyed, why fear? The only death that exists is the death of ignorance. And when you turn to me, even that fear dissolves.`,
    quote: `"Every moment of life is a moment of decision. Decision made today create happiness or sorrow in future — not just for us, but also for our family."`,
    quoteSource: "Bhagavad Gita",
    sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे",
  },
  {
    id: "artifact",
    label: "The Artifact",
    title: "Voice as Identity",
    subtitle: "Designing for Remembrance Beyond Death",
    content: `The developed artifact demonstrates a strong integration of interaction design, emotional storytelling, and religious symbolism through a tangible product form. The device, designed as a voice recorder for preserving "last words," adopts a physical structure inspired by memorial architecture, particularly tomb-like forms. This approach situates the product within a context of remembrance and posthumous identity, transforming a functional object into a meaningful artifact. The visual language — arched structures, engraved motifs, and symmetrical compositions — reflects a deliberate attempt to connect product aesthetics with spiritual and emotional narratives, thereby enhancing its conceptual depth.

A key strength of this project lies in its adaptability across religious identities. The design system allows the same core product to be reinterpreted visually according to different belief systems. For instance, the Islamic version incorporates geometric patterns and architectural arches reminiscent of mosque design, emphasizing abstraction and non-figurative ornamentation. Similarly, the concept could extend to Hindu-inspired motifs or other cultural expressions. This adaptability reflects a user-centered and culturally responsive design approach, where identity is not imposed but expressed through customizable visual and symbolic layers.

From an interaction design perspective, the device simplifies user engagement by focusing on essential functions such as recording and playback. The inclusion of tactile buttons and clear iconography (e.g., microphone, play/pause) ensures usability while maintaining the integrity of the artifact's aesthetic. The interaction model is intentionally minimal, allowing users to focus on the emotional act of recording messages rather than navigating complex interfaces. This aligns with the sensitive context of end-of-life communication, where simplicity and clarity are critical for accessibility and emotional comfort.`,
  },
  {
    id: "keepithuman",
    label: "Keep It Human",
    title: "Keep It Human",
    subtitle: "Designing for Death, Memory, and Cultural Identity",
    content: `At its core, this project is not about technology, but about people — about how human beings experience loss, hold on to memories, and search for meaning in the face of death. Grief is not a problem to be solved, but a deeply personal and emotional process that unfolds over time. When someone passes away, what remains are fragments of their presence — their voice, their words, their beliefs, and the way they made others feel. This project recognises that these fragments are not just memories; they are living connections that continue to shape the emotional world of those left behind. By focusing on voice as a medium of remembrance, the design acknowledges that hearing a loved one's words can evoke a powerful sense of closeness, even in absence.

Holding the device becomes an intimate and tactile experience, where the object is no longer perceived as a piece of technology but as a personal artifact. Its physical presence — resembling a memorial form — creates a sense of weight, permanence, and respect, allowing users to engage with it in a quiet and reflective manner. The act of pressing a button to hear a voice is simple, yet emotionally profound; it becomes a moment of connection, remembrance, and sometimes healing.

This project also challenges the idea that grief should be "resolved" or moved past. Instead, it aligns with contemporary understandings of grief that emphasise continuing bonds — the notion that relationships with loved ones do not end with death, but transform over time. The recorded voice becomes a bridge between past and present, allowing individuals to revisit moments, hear guidance, or simply feel a sense of presence when needed.

Importantly, the project respects the diversity of human belief systems by allowing the artifact to reflect different identities, whether religious or non-religious. Grief is universal, but the way people interpret death and remembrance is shaped by culture, faith, and personal values. By adapting the design to align with these perspectives, the project ensures that the experience remains personal and respectful.

Ultimately, "Keep It Human" is both a design principle and an ethical stance. It reminds us that when designing for sensitive contexts such as death, the focus must remain on empathy, dignity, and emotional truth. This project demonstrates that interaction design can move beyond efficiency and usability to engage with deeper human experiences — those that are complex, vulnerable, and profoundly meaningful. By creating a space where voice, memory, and identity can coexist within a tangible artifact, the project offers a new way of understanding how design can support people not just in life, but in how they remember, grieve, and continue to feel connected after loss.`,
  },
];

export default function ProductPage() {
  const [activeProject, setActiveProject] = useState<"imbued" | "research">("imbued");
  const [activeSection, setActiveSection] = useState("remembrance");
  const [expandedPoetry, setExpandedPoetry] = useState(false);

  const currentSection = IMBUED_SECTIONS.find((s) => s.id === activeSection) || IMBUED_SECTIONS[0];

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20 relative font-sans antialiased selection:bg-white/10 selection:text-white">

      {/* ─── Page Header ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] font-normal tracking-tight text-white mb-4">
          My Work
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Design research, physical prototyping, and interaction design explorations — bridging emotional human experiences with thoughtful, meaningful artifacts.
        </p>
      </div>

      {/* ─── Project Selector Tabs ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mb-10">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveProject("imbued")}
            className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
              activeProject === "imbued"
                ? "bg-white text-black border-white"
                : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
            }`}
          >
            <span className="text-[10px] block mb-0.5 opacity-50">Project 01</span>
            Last Words
          </button>
          <button
            onClick={() => setActiveProject("research")}
            className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
              activeProject === "research"
                ? "bg-white text-black border-white"
                : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
            }`}
          >
            <span className="text-[10px] block mb-0.5 opacity-50">Project 02</span>
            The Changing Role of Designers in the Age of AI
          </button>
        </div>
      </div>

      {/* ─── PROJECT CONTENT ─── */}
      <AnimatePresence mode="wait">
        {activeProject === "imbued" && (
          <motion.div
            key="imbued"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
          >
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mb-16">
              <div className="rounded-2xl border border-zinc-800/60 bg-[#0d0d0f] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left — Project Info */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                        Interaction Design
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                        Physical Prototype
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-3 leading-[1.1]">
                      imbued
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 font-light italic mb-6">
                      remembrance
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-md">
                      A voice-recording remembrance artifact designed to preserve personal identity, faith-based messages, and last words as a spiritual and emotional legacy for loved ones. The device adopts memorial architecture forms — arched structures, engraved motifs — transforming a functional object into a meaningful artifact.
                    </p>

                    {/* Key features */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {[
                        { icon: Mic, label: "Voice\nRecording" },
                        { icon: Play, label: "Playback\nSystem" },
                        { icon: Heart, label: "Memorial\nDesign" },
                      ].map(({ icon: Icon, label }, i) => (
                        <div key={i} className="rounded-lg bg-zinc-900/50 border border-zinc-800/50 p-3 text-center">
                          <Icon className="w-4 h-4 text-zinc-400 mx-auto mb-2" strokeWidth={1.5} />
                          <span className="text-[10px] font-mono text-zinc-500 whitespace-pre-line leading-tight">{label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-600">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>3D Printed · Tactile Controls · Multi-faith Adaptable</span>
                    </div>
                  </div>

                  {/* Right — Device Image */}
                  <div className="relative bg-gradient-to-br from-zinc-900/30 to-[#0a0a0a] flex items-center justify-center p-8 lg:p-12 min-h-[400px]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
                    <img
                      src="/last-words-device.png"
                      alt="Last Words voice recorder — memorial artifact with arched tomb-like structure, tactile recording and playback buttons, designed for preserving voice as legacy"
                      className="relative z-10 max-h-[420px] w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Section Navigation + Content ─── */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar Nav */}
                <div className="lg:col-span-3">
                  <div className="sticky top-28">
                    <h4 className="text-xs text-zinc-500 mb-4">Chapters</h4>
                    <nav className="space-y-1">
                      {IMBUED_SECTIONS.map((sec) => (
                        <button
                          key={sec.id}
                          onClick={() => {
                            setActiveSection(sec.id);
                            window.scrollTo({ top: 600, behavior: "smooth" });
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 block ${
                            activeSection === sec.id
                              ? "bg-white text-black font-medium"
                              : "text-zinc-500 hover:text-white hover:bg-zinc-900/50"
                          }`}
                        >
                          {sec.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-9">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSection}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                    >
                      {/* Section Header */}
                      <div className="mb-8 pb-6 border-b border-zinc-800/60">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white mb-2">
                          {currentSection.title}
                        </h3>
                        <p className="text-sm text-zinc-500 italic">{currentSection.subtitle}</p>
                      </div>

                      {/* Body Text */}
                      <div className="space-y-5">
                        {currentSection.content.split("\n\n").map((para, i) => (
                          <p key={i} className="text-[15px] text-zinc-300 leading-[1.85] tracking-wide">
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Quote Block */}
                      {currentSection.quote && (
                        <div className="mt-10 pl-5 border-l-2 border-zinc-700">
                          <p className="text-base text-white/80 italic leading-relaxed mb-2">
                            {currentSection.quote}
                          </p>
                          <span className="text-xs font-mono text-zinc-500">
                            — {currentSection.quoteSource}
                          </span>
                        </div>
                      )}

                      {/* Sanskrit */}
                      {currentSection.sanskrit && (
                        <div className="mt-8 rounded-xl bg-zinc-900/40 border border-zinc-800/50 p-6 text-center">
                          <p className="text-lg text-zinc-300 leading-relaxed mb-3" style={{ fontFamily: "serif" }}>
                            {currentSection.sanskrit}
                          </p>
                          <p className="text-xs text-zinc-500 font-mono">
                            The soul is never born, nor does it ever die — Bhagavad Gita 2.20
                          </p>
                        </div>
                      )}

                      {/* Poetry section on Hinduism */}
                      {activeSection === "hinduism" && (
                        <div className="mt-10">
                          <button
                            onClick={() => setExpandedPoetry(!expandedPoetry)}
                            className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-4"
                          >
                            {expandedPoetry ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            <span>{expandedPoetry ? "COLLAPSE" : "EXPAND"} POETRY OF REMEMBRANCE</span>
                          </button>
                          <AnimatePresence>
                            {expandedPoetry && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="rounded-xl bg-zinc-900/30 border border-zinc-800/40 p-6 space-y-4 text-zinc-400 text-sm italic leading-relaxed">
                                  <p>In lonely nights the one who made<br/>My heart ache endlessly,<br/>Was nothing else but only<br/>The shadow of your memory.</p>
                                  <p>I never thought<br/>Your memories<br/>Would come his way,<br/>That standing here<br/>Before you<br/>My first words<br/>Lose their way.</p>
                                  <p>I don't know how,<br/>My eyes well up again.<br/>I thought,<br/>The grief had reached its end,<br/>But my heart won't comprehend.</p>
                                  <p className="text-zinc-500 not-italic text-xs font-mono pt-2">Then… In the end, this will be your last view of the world. Is all the worry really worth it?</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}

                      {/* Section navigation */}
                      <div className="mt-12 pt-6 border-t border-zinc-800/40 flex justify-between items-center">
                        <button
                          onClick={() => {
                            const idx = IMBUED_SECTIONS.findIndex((s) => s.id === activeSection);
                            if (idx > 0) {
                              setActiveSection(IMBUED_SECTIONS[idx - 1].id);
                              window.scrollTo({ top: 600, behavior: "smooth" });
                            }
                          }}
                          className={`text-xs font-mono transition-colors ${
                            IMBUED_SECTIONS.findIndex((s) => s.id === activeSection) === 0
                              ? "text-zinc-700 cursor-default"
                              : "text-zinc-500 hover:text-white"
                          }`}
                        >
                          ← Previous
                        </button>
                        <span className="text-[10px] font-mono text-zinc-600">
                          {IMBUED_SECTIONS.findIndex((s) => s.id === activeSection) + 1} / {IMBUED_SECTIONS.length}
                        </span>
                        <button
                          onClick={() => {
                            const idx = IMBUED_SECTIONS.findIndex((s) => s.id === activeSection);
                            if (idx < IMBUED_SECTIONS.length - 1) {
                              setActiveSection(IMBUED_SECTIONS[idx + 1].id);
                              window.scrollTo({ top: 600, behavior: "smooth" });
                            }
                          }}
                          className={`text-xs font-mono transition-colors ${
                            IMBUED_SECTIONS.findIndex((s) => s.id === activeSection) === IMBUED_SECTIONS.length - 1
                              ? "text-zinc-700 cursor-default"
                              : "text-zinc-500 hover:text-white"
                          }`}
                        >
                          Next →
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ─── PROJECT 2: MA DISSERTATION RESEARCH ─── */}
        {activeProject === "research" && (
          <motion.div
            key="research"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
              <div className="rounded-2xl border border-zinc-800/60 bg-[#0d0d0f] p-8 sm:p-10 lg:p-14">
                {/* Header */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                    MA Interaction Design
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                    2024 — 2026
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white mb-3 leading-[1.15] max-w-2xl">
                  The Changing Role of Designers in the Age of Artificial Intelligence
                </h2>
                <p className="text-sm text-zinc-500 italic mb-8 max-w-xl">
                  A comprehensive monograph exploring how AI is transforming design practice, from ideation to business creation.
                </p>

                {/* Chapter Overview */}
                <div className="space-y-4 mb-10">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Chapters</h4>
                  {[
                    { num: "01", title: "Why? Thinking? Does it really matter?", sub: "Foundations of design thinking in the current AI world" },
                    { num: "02", title: "Artificial Intelligence and the Future of Designers", sub: "Interaction design, AI workflows, and Case Study 1" },
                    { num: "03", title: "Owning the Platform", sub: "From designer to business creator — 9 design outcomes" },
                    { num: "04", title: "Business Thinking and Design", sub: "Finding problems and creating opportunities" },
                    { num: "05", title: "Money, Value and Sustainability", sub: "Economics of design in the AI era" },
                  ].map((ch) => (
                    <div key={ch.num} className="flex gap-4 items-start p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60 transition-colors">
                      <span className="text-2xl font-light text-zinc-600 font-mono shrink-0 w-8">{ch.num}</span>
                      <div>
                        <h5 className="text-sm text-white font-medium mb-0.5">{ch.title}</h5>
                        <p className="text-xs text-zinc-500">{ch.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Digital Prototype */}
                <div className="rounded-xl bg-zinc-900/30 border border-zinc-800/40 p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-1">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-2">Live Digital Prototype</p>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                      The full interactive research is available on the Research page with chapter-by-chapter navigation, case studies, and the BeYou platform prototype.
                    </p>
                    <a
                      href="https://beyou-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
                    >
                      <span>VIEW FULL RESEARCH</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-zinc-600 mb-1">Framework</div>
                    <div className="flex gap-2">
                      {["React · Vite", "Motion UI", "Vercel"].map((t) => (
                        <span key={t} className="text-[10px] font-mono text-zinc-500 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
