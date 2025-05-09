import React, { useState, useCallback, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, Loader2 } from 'lucide-react';

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const createParticle = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.3,
    });

    const particleCount = 30;
    const initialParticles = Array.from({ length: particleCount }, createParticle);
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

const bioInfo = `
Mohammed Huzaifah

AI/ML Engineer & Computer Science Researcher

Personal Information
- Full Name: Mohammed Huzaifah
- Date of Birth: 27 March 2003 (Age: 22)
- Location: Hyderabad, Telangana, India
- Languages:
  • English (Professional)  
  • Hindi (Fluent)  
  • Urdu (Native)  
  • Telugu (Conversational)
- Contact:
  • Email: huzaif027@gmail.com  
  • Phone: +91 6300940175  
  • GitHub: https://github.com/Sa1f27  
  • LinkedIn: https://linkedin.com/in/huzaifah-27o3  
  • Portfolio: https://portfolio-huz.vercel.app/

Professional Summary
Innovative AI/ML engineer with hands-on expertise in building production-grade architectures for LLMs, RAG systems, NLP pipelines, vector search, computer vision, and real-time voice processing. Proven track record of delivering scalable MLOps workflows, autonomous data-extraction agents, and fraud-resistant interview platforms. Skilled at optimizing cost, latency, and accuracy across structured, semi-structured, and unstructured datasets.

Core Technical Competencies
- Large Language Models & RAG: fine-tuning, prompt engineering, embedding strategies  
- Neural Architectures: CNNs, RNNs, GANs, Transformers (BERT, GPT-style)  
- Computer Vision: YOLO object detection, segmentation, OpenCV pipelines  
- NLP: classification, sentiment analysis, summarization, generative text  
- Generative AI & Agents: LangChain, LangFlow, autonomous multi-agent systems  
- Vector Databases & Semantic Search: Pinecone, Chroma, Faiss  
- Real-Time Voice: STT, TTS, custom voice cloning (90%+ transcription accuracy, lifelike synthesis)  
- MLOps & Infrastructure: Docker, MLflow, DVC, CI/CD (GitHub Actions, Jenkins), AWS ML, GCP AI Platform  
- Data Platforms: MongoDB (cross-region replication), SQL Server, PostgreSQL, Apache Spark  
- Web & APIs: FastAPI, Django, REST, WebSockets, token-based auth, rate-limiting, structured logging  

Work Experience
AI Developer Intern (Full-time, On-site)  
Lanciere Technologies | Feb 2025 – Present  
- Engineered AI-driven interview automation: resume parsing + generative assessments → 40% faster hiring cycles  
- Built custom YOLO object detection with 94% accuracy on domain-specific datasets  
- Architected fraud-resistant interview system with real-time voice analysis, visual monitoring, and behavioral verification  
- Developed adaptive educational platform: video lecture analysis → daily practice + weekly assessments  
- Implemented STT, TTS, and voice-cloning models for seamless AI-to-human dialogue  
- Designed backend on MongoDB & SQL Server with AWS/GCP replication for 99.9% uptime  
- Exposed FastAPI endpoints with token auth, rate limits, comprehensive logging & monitoring  

Signature Projects
1. **Graph-RAG**  
   Enhanced RAG search by integrating LLMs with knowledge graphs → 90% retrieval accuracy.  
   Tech: OpenAI, Weaviate, Databricks, RDFLib, Pandas  
   GitHub: https://github.com/Sa1f27/GraphRAG  

2. **Crawler-RAG Agent**  
   AI documentation crawler + RAG agent indexing hundreds of sites into vector DB for contextual Q&A.  
   Tech: Crawl4AI, OpenAI, Supabase, FastAPI, Pydantic  
   GitHub: https://github.com/Sa1f27/Crawler-AI  

3. **Vocal-Diagnose**  
   Voice-pattern analysis for early disease detection (90%+ accuracy).  
   Tech: Groq API, TensorFlow, Librosa, RandomForest  

4. **KidsCare-Pro**  
   Pediatric health monitoring and prediction using ML algorithms.  
   Tech: Groq, TensorFlow, AWS SageMaker, LightGBM  

5. **Disease Diagnosis Platform**  
   Deep-learning & CV for automated disease screening.  
   Tech: PyTorch, k-NN, Streamlit  

6. **DocHub-AI**  
   Multi-agent RAG platform for intelligent document assistance & government service navigation.  
   Tech: LLama, Flask, BeautifulSoup  

Certifications & Hackathons
- Udemy Machine Learning Engineering (2024)  
- RAM Infotech Internship Certificate (2024)  
- CodSoft Internship Certificate (2024)  
- Hackathon Podiums: HackRevolution ’25, CodeFest ’24, Hackprix ’24, Hackprix ’25, Imagine ’24  
- DataNyx Datathon (MJCET ’24) awardee  

Professional Metrics
- **LeetCode:** 190+ solved (110 Easy, 60 Medium, 20 Hard)  
- **GitHub:** 550+ contributions, 45+ repos  
- **Hackathons:** 6+ attended, 2 podium finishes  
- **Projects Deployed:** 8 till now

Education
B.E. in Computer Science (AI & ML), CGPA 8.5/10  
Lords Institute of Engineering & Technology | Expected May 2026  

Personal Interests
AI research & open-source contributions, competitive programming, football (Real Madrid fan), tech blogging  

Current Status
- Seeking full-time roles in AI/ML Engineering, Data Science, or MLOps  
- Available immediately  
- References upon request  
`;


const askGroq = async (inputText: string) => {
  const prompt = `
    You are an AI assistant presenting my portfolio based on my biography. Use the provided bio to respond concisely, acting as if you are me.
    my bio:
    ${bioInfo}
    Task:
    Respond to the following query from a recruiter or visitor in a professional and confident and casual tone:
    ${inputText}
    Guidelines:
    Provide responses that are clear, to the point, and professional.
    Use bullet points if applicable to ensure readability.
    If specific details are unavailable, share my contact information for further discussion.
    Showcase my strengths and relevant achievements if necessary.
    Craft the best possible concise response to reflect my skills and professionalism.
  `;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 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`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    throw new Error(`Error getting AI insights: ${error}`);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const result = await askGroq(userInput);
      setResponse(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-50 flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-950/30" />
      
      {/* Animated Particles */}
      <ParticleEffect />

      {/* Cyberpunk Grid with Mouse Parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(66, 153, 225, 0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <h2 className="text-4xl font-bold mb-12 text-center relative">
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            Ask anything about me!
          </span>
        </h2>
        
        <div className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                     hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
                     group relative">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-blue-500/20 opacity-0 
                       group-hover:opacity-100 transition-opacity duration-500 rounded-xl animate-pulse" />
          
          <form onSubmit={handleSubmit} className="space-y-4 relative">
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask anything about my experience, skills, or projects!"
                className="flex-1 px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30
                         text-blue-200 placeholder-blue-400/50 focus:outline-none focus:border-violet-400/50
                         transition-all duration-300 hover:border-blue-400/40"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-blue-100 rounded-lg
                         hover:from-blue-400 hover:to-violet-400 disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-300 font-medium flex items-center gap-2 hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    <span>Ask</span>
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="text-red-400 mt-2 px-3 py-2 rounded-lg bg-red-900/20 border border-red-500/30
                           animate-fade-in flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                {error}
              </div>
            )}

            {response && (
              <div className="mt-6 px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30
                           animate-fade-in relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 animate-pulse" />
                <div className="relative prose prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      p: ({node, ...props}) => (
                        <p className="text-violet-300 mb-4 leading-relaxed" {...props} />
                      ),
                      strong: ({node, ...props}) => (
                        <strong className="text-blue-300 font-semibold" {...props} />
                      ),
                      ul: ({node, ...props}) => (
                        <ul className="list-disc pl-6 space-y-2 mb-4" {...props} />
                      ),
                      li: ({node, ...props}) => (
                        <li className="text-violet-300 pl-2" {...props} />
                      ),
                      a: ({node, ...props}) => (
                        <a className="text-blue-400 hover:text-blue-300 underline transition-colors" {...props} />
                      ),
                      h1: ({node, ...props}) => (
                        <h1 className="text-2xl font-bold text-blue-300 mb-4" {...props} />
                      ),
                      h2: ({node, ...props}) => (
                        <h2 className="text-xl font-bold text-blue-300 mb-3" {...props} />
                      ),
                      h3: ({node, ...props}) => (
                        <h3 className="text-lg font-bold text-blue-300 mb-2" {...props} />
                      ),
                      blockquote: ({node, ...props}) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 my-4 text-violet-300 italic" {...props} />
                      ),
                    }}
                  >
                    {response}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
