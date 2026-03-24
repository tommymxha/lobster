/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Bot, 
  Zap, 
  Globe, 
  MessageSquare, 
  Brain, 
  Lock, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  Menu, 
  X,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Smartphone,
  History,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Use Cases", href: "#use-cases" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 p-1.5 rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">LobsterLair</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a href="#login" className="text-sm font-medium text-gray-600 hover:text-gray-900">Sign in</a>
              <a 
                href="#register" 
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-red-200"
              >
                Try Free for 48 Hours
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-3">
                <a href="#login" className="text-center py-3 text-base font-medium text-gray-600 border border-gray-200 rounded-xl">Sign in</a>
                <a href="#register" className="text-center py-3 text-base font-medium bg-red-500 text-white rounded-xl">Try Free for 48 Hours</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-6 border border-red-100">
            <Zap className="w-4 h-4" />
            Deploy in under 2 minutes
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Managed OpenClaw Hosting — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Your AI in Minutes
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
            Deploy your own OpenClaw AI chatbot in under 2 minutes. Fully managed hosting with AI included — no API keys, no servers, no technical skills needed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href="#register" 
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-2 group"
            >
              Try Free for 48 Hours
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#how-it-works" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-bold transition-all"
            >
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            No credit card required
          </p>
        </motion.div>

        {/* Dashboard Preview Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden aspect-[16/9] flex flex-col">
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="mx-auto bg-white border border-gray-200 rounded-md px-3 py-1 text-[10px] text-gray-400 w-1/3 text-center">
                app.lobsterlair.xyz/dashboard
              </div>
            </div>
            <div className="flex-1 bg-gray-50/50 p-6 flex flex-col gap-4">
              <div className="w-1/3 h-8 bg-white rounded-lg border border-gray-100" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-white rounded-xl border border-gray-100 shadow-sm" />
                <div className="h-24 bg-white rounded-xl border border-gray-100 shadow-sm" />
                <div className="h-24 bg-white rounded-xl border border-gray-100 shadow-sm" />
              </div>
              <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
                <div className="w-1/2 h-4 bg-gray-100 rounded" />
                <div className="w-3/4 h-4 bg-gray-50 rounded" />
                <div className="w-2/3 h-4 bg-gray-50 rounded" />
                <div className="mt-auto flex gap-2">
                  <div className="flex-1 h-10 bg-gray-50 rounded-lg border border-gray-100" />
                  <div className="w-10 h-10 bg-red-500 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "AI Included",
      description: "Powered by MiniMax M2.7 with 200k context. No API key needed - we handle the AI so you just chat.",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Browser Automation Built-In",
      description: "Every instance includes full Chromium web automation. Your bot can browse the web and interact out of the box.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Chat Your Way",
      description: "Use the built-in webchat to start instantly, or connect Telegram for on-the-go access.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Remembers You",
      description: "Your bot learns your preferences and remembers past conversations. It gets better the more you use it.",
      icon: <History className="w-6 h-6" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Fully Private",
      description: "Only you can talk to your bot. Your data stays encrypted, your conversations stay yours.",
      icon: <Lock className="w-6 h-6" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Always On",
      description: "Your bot runs 24/7 with automatic restarts and monitoring. It's there whenever you need it.",
      icon: <Activity className="w-6 h-6" />,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">OpenClaw hosting, fully managed</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your own OpenClaw instance — deployed, managed, and monitored. No servers, no API keys, no headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign up",
      description: "Create an account in seconds. No credit card needed.",
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />
    },
    {
      title: "Name your bot & connect Telegram",
      description: "Give your AI assistant a name. Optionally connect your Telegram bot for mobile access.",
      icon: <Smartphone className="w-8 h-8 text-red-500" />
    },
    {
      title: "Start chatting",
      description: "Your bot goes live instantly. Chat right from the dashboard or via Telegram.",
      icon: <MessageSquare className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Up and running in 3 steps</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No technical knowledge required. Just sign up and start chatting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-200 -translate-y-1/2 -z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center shadow-lg mb-8">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#register" 
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-red-200"
          >
            Try Free for 48 Hours
          </a>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600">Start free. Subscribe when you're convinced.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 lg:p-12 rounded-3xl border-2 border-red-500 bg-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-1.5 rounded-bl-2xl text-sm font-bold">
              AI INCLUDED
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Managed OpenClaw</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-extrabold text-gray-900">$19</span>
              <span className="text-gray-500 font-medium">/month</span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "48-hour free trial - no card needed",
                "AI included - no API key needed",
                "Fully managed OpenClaw instance",
                "Webchat & optional Telegram",
                "Secure, isolated environment",
                "Persistent memory across chats",
                "24/7 uptime with auto-restart"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#register" 
              className="block w-full text-center bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-red-100"
            >
              Start Your Free Trial
            </a>
            <p className="text-center text-sm text-gray-500 mt-4">No credit card required</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need my own AI API key?",
      answer: "No! AI is included in every plan. We use MiniMax M2.7, a powerful AI model with 200k context window. You don't need to sign up for any external services or manage API keys."
    },
    {
      question: "How do I start the free trial?",
      answer: "Sign up, name your bot, and start chatting via webchat - completely free for 48 hours, no credit card required. If you like it, subscribe for $19/month to keep it running."
    },
    {
      question: "Who can talk to my bot?",
      answer: "Only you. Your webchat is protected by your account login, and if you connect Telegram, only your User ID is allowed. Your conversations are completely private."
    },
    {
      question: "What can I use my bot for?",
      answer: "Anything you'd use an AI assistant for: quick questions, brainstorming, writing help, code review, language practice, daily journaling, smart home control, and much more."
    },
    {
      question: "What happens if I cancel?",
      answer: "Your bot stops running when your subscription ends. Your data and configuration are kept for 30 days, so you can easily resubscribe and pick up where you left off."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#all-faqs" className="text-red-500 font-bold hover:underline inline-flex items-center gap-1">
            View all FAQs <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-500 p-1.5 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">LobsterLair</span>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Managed OpenClaw hosting — deploy your own AI chatbot in under 2 minutes. AI included, no API key needed.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#pricing" className="text-gray-500 hover:text-red-500 transition-colors">Pricing</a></li>
              <li><a href="#use-cases" className="text-gray-500 hover:text-red-500 transition-colors">Use Cases</a></li>
              <li><a href="#faq" className="text-gray-500 hover:text-red-500 transition-colors">FAQ</a></li>
              <li><a href="https://openclaw.ai" className="text-gray-500 hover:text-red-500 transition-colors">OpenClaw</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#blog" className="text-gray-500 hover:text-red-500 transition-colors">Blog</a></li>
              <li><a href="#privacy" className="text-gray-500 hover:text-red-500 transition-colors">Privacy</a></li>
              <li><a href="#terms" className="text-gray-500 hover:text-red-500 transition-colors">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="mailto:support@lobsterlair.xyz" className="text-gray-500 hover:text-red-500 transition-colors">Email Support</a></li>
              <li><a href="#telegram" className="text-gray-500 hover:text-red-500 transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 LobsterLair. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-600">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        
        {/* Final CTA */}
        <section className="py-24 bg-red-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Ready to meet your AI assistant?</h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed">
              Set up your personal AI chatbot in under 2 minutes. Chat via webchat or Telegram. Free for 48 hours, no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#register" 
                className="w-full sm:w-auto bg-white text-red-500 hover:bg-red-50 px-10 py-5 rounded-full text-xl font-bold transition-all shadow-2xl"
              >
                Try Free for 48 Hours
              </a>
            </div>
            <p className="text-red-100/80 text-sm mt-6">No credit card required</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
