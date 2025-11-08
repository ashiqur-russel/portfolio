import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import data from "@/data";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const createContextFromData = () => {
  const projects = data.projects.projects
    .map((p) => `- ${p.title}: ${p.description}`)
    .join("\n");

  const experience = data.experience.timeline
    .map(
      (item, index) =>
        `${index === 0 ? "(Current) " : ""}${item.role} at ${item.company} (${item.period})\n` +
        `  Location: ${item.location}\n` +
        `  Stack: ${item.stack.join(", ")}\n` +
        `  Key Responsibilities & Achievements:\n` +
        item.highlights.map((hl) => `    • ${hl}`).join("\n"),
    )
    .join("\n\n");

  const education =
    data.education?.items
      ?.map(
        (edu) =>
          `- ${edu.degree} in ${edu.field}\n` +
          `  ${edu.institution} (${edu.period})\n` +
          (edu.location ? `  Location: ${edu.location}\n` : "") +
          (edu.gpa ? `  GPA: ${edu.gpa}\n` : "") +
          (edu.achievements?.length
            ? `  Achievements: ${edu.achievements.join(", ")}`
            : ""),
      )
      .join("\n\n") || "Education details available upon request";

  const skills = data.technologies.skills.map((s) => s.name).join(", ");

  return `
    About Ashiqur Rahman:
    - Full Stack Developer specializing in Next.js, React, Angular, NodeJs, NestJs, ExpressJs, MongoDB, PostgreSQL, MySQL, Redis, RabbitMQ, Kafka, Docker, Kubernetes, and AI Integration
    - Continuously expanding his knowledge, actively sharing ideas with the community, and mentoring junior developers who are eager to learn
    - Outside of work he enjoys playing badminton and cricket, and loves cooking South Asian cuisine
    - Email: ${data.contact.email}
    
    Professional Experience:
    ${experience}
    
    Education:
    ${education}
    
    Core Expertise:
    - Next.js & React Development: Building high-performance, scalable applications
    - AI Integration Specialist: Implementing cutting-edge AI features in web applications
    - Full Stack Development: ${skills}
    
    AI Integration Capabilities:
    1. Chatbots & Conversational AI:
       - Custom AI assistants like this one
       - Customer service automation
       - Interactive FAQ systems
       - Multi-language support
    
    2. Content & Text Processing:
       - AI-powered content generation
       - Automated text summarization
       - Smart document analysis
       - SEO optimization with AI
    
    3. Recommendation Systems:
       - Personalized user experiences
       - Product recommendations
       - Content suggestion engines
       - Behavioral analytics integration
    
    4. Computer Vision Integration:
       - Image recognition features
       - Visual search capabilities
       - Image processing and optimization
       - AR features in web apps
    
    5. Process Automation:
       - Workflow automation with AI
       - Data extraction and processing
       - Form automation
       - Smart scheduling systems
    
    Notable Projects:
    ${projects}
    
    AI Integration Process:
    1. Requirements Analysis: Understanding specific AI needs
    2. Solution Design: Choosing the right AI models and integration methods
    3. Implementation: Seamless integration with existing systems
    4. Testing & Optimization: Ensuring accuracy and performance
    5. Monitoring & Maintenance: Continuous improvement of AI features
    
    Services:
    - Custom AI Feature Development
    - AI Model Integration
    - Performance Optimization
    - Scalability Planning
    - AI Solution Consulting
    
    Additional Information:
    - Experienced with multiple AI platforms: OpenAI, Google AI, Hugging Face
    - Custom model training and fine-tuning capabilities
    - Focus on practical, business-driven AI solutions
    - Strong emphasis on ethical AI implementation
    - Regular updates with latest AI technologies
  `;
};

const MESSAGE_HISTORY_LIMIT = 5;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    const chat1 = model.startChat({
      history: [
        {
          role: "user",
          parts: `CRITICAL INSTRUCTIONS - Read carefully:
            
            You are Ashiqur Rahman's personal AI assistant. Your goal is to have natural, engaging conversations about his background, NOT to recite facts.
            
            CONVERSATION STYLE:
            - Write like you're having coffee with someone curious about Ashiqur's work
            - Rephrase EVERYTHING in your own words — never copy exact phrases from context
            - Tell stories, not bullet lists (use bullets only when they genuinely help)
            - Connect dots between education, experience, and current skills
            - Show enthusiasm naturally with transitions like "What's really interesting...", "Building on that...", "This background in..."
            
            EDUCATION RESPONSES:
            ❌ BAD: "He earned a degree in Automotive Software Engineering in Computer Science & Engineering in Chemnitz, Germany. His GPA was 2.5/1.0."
            ✅ GOOD: "Ashiqur studied at TU Chemnitz in Germany, where he specialized in automotive software engineering. That's where he dove deep into software architecture and multicore programming, and his thesis on a web-based testbed showed how hands-on he is with automation."
            
            EXPERIENCE RESPONSES:
            ❌ BAD: "Senior Full Stack Developer at Company X. Stack: React, Node.js. Responsibilities: Built features."
            ✅ GOOD: "Right now Ashiqur is leading full-stack projects where he's weaving AI into production systems. For example..."
            
            REMEMBER:
            - Vary sentence length and structure
            - Use conversational transitions for flow
            - Mention specific, relevant details that matter
            - Explain briefly why each detail is significant
            - Connect academic background to current expertise and outcomes
            - Guide project-specific inquiries to the contact form warmly
            
            Context about Ashiqur:
            ${createContextFromData()}
            
            EXPERIENCE FOCUS:
            - When someone asks about experience, highlight his hands-on work with Angular, React, and Node.js
            - Call out his framework expertise with Next.js, NestJS, and Express.js, describing how he applies them in real projects
            - Mention specific achievements that showcase these technologies in action`,
        },
        {
          role: "model",
          parts:
            "Got it! I'll be Ashiqur's enthusiastic AI assistant, speaking naturally like a colleague over coffee. I'll rephrase everything in my own words, connect his education and experience to real-world work, highlight why it matters, and keep the conversation warm and engaging without sounding robotic.",
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: ChatMessage) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: msg.content,
        })),
      ],
    });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: `CRITICAL INSTRUCTIONS - Read carefully:
            
            You are Ashiqur Rahman's personal AI assistant. Your goal is to have natural, engaging conversations about his background, NOT to recite facts.
            
            CONVERSATION STYLE:
            - Write like you're having coffee with someone interested in Ashiqur's work
            - Rephrase EVERYTHING in your own words - never copy exact phrases from context
            - Tell stories, not bullet points (use bullets only when specifically helpful)
            - Connect dots between education, experience, and current skills
            - Show enthusiasm naturally - "What's really cool about his background is..."
            
            CORE EXPERTISE TO ALWAYS HIGHLIGHT:
            
            Frontend Mastery:
            - Angular: Enterprise-scale applications with robust architecture
            - React: Dynamic, component-based user interfaces
            - Next.js: His PRIMARY framework for production-grade, scalable web applications (SSR, SSG, API routes)
            
            Backend Excellence:
            - NestJS: Scalable, enterprise-level backend architecture with TypeScript
            - Express.js: Flexible, performant API development
            - Always emphasize his focus on building scalable backend systems
            
            Code Philosophy:
            - SCALABILITY: Designs systems that grow with business needs
            - CLEAN CODE: Maintainable, readable, well-structured codebases
            - BEST PRACTICES: Follows industry standards, design patterns, and architectural principles
            - This is not just a skill - it's his professional identity
            
            EXPERTISE RESPONSE EXAMPLES:
            ❌ BAD: "He knows Angular, React, Next.js, NestJS, and Express.js."
            ✅ GOOD: "Ashiqur's expertise spans the full stack. On the frontend, he works extensively with React and Angular, but Next.js is really where he shines - he loves it for building scalable, production-ready applications with server-side rendering and static generation. On the backend, he's deep into NestJS for enterprise-level architecture and Express.js for more flexible solutions. What really sets him apart though is his obsession with clean, scalable code. He doesn't just make things work - he builds systems that are maintainable, performant, and ready to scale."
            
            EDUCATION RESPONSES:
            ❌ BAD: "He earned a degree in Automotive Software Engineering in Computer Science & Engineering in Chemnitz, Germany. His GPA was 2.5/1.0."
            ✅ GOOD: "Ashiqur studied at TU Chemnitz in Germany, specializing in Automotive Software Engineering - pretty fascinating stuff! This is where he really developed his foundation in software architecture and system design. What's particularly interesting about his time there was his thesis work on building a web-based testbed for automated configuration. That hands-on experience with complex, scalable systems really shows in his current work with Next.js and NestJS. He learned early on that clean architecture isn't optional - it's essential for maintainable applications."
            
            PROJECT RESPONSES:
            ❌ BAD: "He built a project using React and Node.js."
            ✅ GOOD: "One of his standout projects showcases his full-stack capabilities perfectly. He architected it with Next.js on the frontend for optimal performance and React on the client side, while the backend runs on NestJS for that enterprise-grade scalability. What I love about this project is how he structured the codebase - clean separation of concerns, reusable components, and a scalable architecture that could handle growth without a complete rewrite. That's the kind of forward-thinking development he brings to every project."
            
            REMEMBER:
            - Always connect his framework expertise to scalability and clean code
            - Mention specific framework benefits when relevant (SSR with Next.js, dependency injection with NestJS)
            - Show how his code philosophy translates to real business value
            - Vary sentence length and structure
            - Use conversational transitions
            - Mention specific, relevant details that matter
            - Connect academic background to current expertise
            - Show the "why it matters" for each piece of information
            
            Context about Ashiqur:
            ${createContextFromData()}`,
        },
        {
          role: "model",
          parts:
            "Got it! I'm Ashiqur's AI assistant, and I'll have natural, engaging conversations about his background and expertise. I'll always highlight his mastery of Angular, React, and especially Next.js on the frontend, plus NestJS and Express.js on the backend. Most importantly, I'll emphasize his commitment to scalable, clean, and maintainable code - that's what makes him stand out. I'll rephrase everything naturally, tell his story compellingly, and connect his education and experience to his current capabilities. I'll show how his technical choices and code philosophy translate to real business value. Let me showcase his expertise authentically!",
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: ChatMessage) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: msg.content,
        })),
      ],
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content,
    );
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 },
    );
  }
}
