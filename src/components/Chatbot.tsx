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
- Gender: Male
- Date of Birth: 27th March 2003
- Age: 22
- Location: Hyderabad, Telangana, India
- Relationship Status: Single
- Languages:
  - English (Professional)
  - Hindi (Fluent)
  - Urdu (Native)
  - Telugu (Conversational)

Professional Summary
Mohammed Huzaifah is an innovative Machine Learning Engineer specializing in cutting-edge AI technologies, MLOps, and scalable system design. Currently pursuing a Bachelor of Engineering in Computer Science with AI & ML specialization (CGPA: 8.6), he combines academic excellence with practical implementation experience. Known for developing production-ready AI solutions that solve real-world challenges.

Core Technical Competencies
- AI & Machine Learning
  - Large Language Models: Fine-tuning, RAG systems, prompt engineering
  - Neural Networks: CNNs, RNNs, GANs, Transformers
  - Computer Vision: Object detection, segmentation, OpenCV
  - NLP: Text classification, sentiment analysis, text generation
- Generative AI & Emerging Technologies
  - LLM Integration: DeepSeek V3, Qwen, Llama, Gemini 2.0 Flash, Claude Haiku
  - Multi-modal Models: Text-to-image synthesis, voice processing
  - AI Agents: LangFlow, autonomous systems, LangGraph
  - Vector Databases: Semantic search, embeddings
- Technical Stack:
  - Primary: Python
  - Secondary: React.js, TypeScript , Java
  - Web: HTML, CSS
- Frameworks & Libraries:
  - ML/DL: TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost, LGBoost
  - Data: Pandas, SQL, NumPy, Apache Spark
  - Visualization: Matplotlib, Seaborn, Plotly
- AI Tools:
  - Development: Bolt.new, Windsurf/Cursor
  - Frameworks: Pydantic AI, LangGraph
  - Search: Rrave, Firecrawi, Perplexity, SearchiAP
- Infrastructure:
  - Cloud: DigitalOcean, RunPod, AWS, Azure
  - Containerization: Docker
  - CI/CD: GitHub Actions
  - MLOps: MLflow, DVC, Jenkins

Signature Projects:
1. Graph-RAG
   A Graph RAG (Retrieval-Augmented Generation) application combining Large Language Models (LLMs) with knowledge graphs to enhance the accuracy and explainability of Retrieval-Augmented Generation.  
   - Tech Stack: OpenAI, Weaviate, Databricks, RDFLib, Pandas  
   - GitHub: [Graph-RAG](https://github.com/Sa1f27/GraphRAG)  

2. Crawler - RAG Agent  
   An intelligent documentation crawler and RAG (Retrieval-Augmented Generation) agent that transforms documentation websites into an interactive knowledge base. Built with Pydantic AI and Supabase, this system crawls documentation, indexes it in a vector database, and provides AI-powered answers to user queries using contextually relevant documentation chunks.  
   - Tech Stack: Crawl4AI, OpenAI, Supabase, FastAPI, Pydantic  
   - GitHub: [Crawler - RAG Agent](https://github.com/Sa1f27/Crawler-AI.git)  

3. Vocal-Diagnose  
   VocalDiagnose uses AI to analyze voice patterns, enabling early disease detection with over 90% accuracy, revolutionizing accessible and cost-effective health screening.  
   - Tech Stack: Groq, TensorFlow, Librosa, Kaggle, Matplotlib, RandomForest  
   - GitHub: [Vocal-Diagnose](https://github.com/Sa1f27/Vocal-Diagnose)  

4. KidsCare-Pro  
   AI-powered pediatric health solution for monitoring and predicting children's health conditions using advanced machine learning algorithms.  
   - Tech Stack: Groq, TensorFlow, AWS, Matplotlib/Seaborn, LightGBM  
   - GitHub: [KidsCare-Pro](https://github.com/Sa1f27/KidsCare-Pro)  

5. Disease Diagnosis  
   High-accuracy disease prediction platform utilizing deep learning and computer vision for early detection and diagnosis.  
   - Tech Stack: PyTorch, Knn, TensorFlow, Matplotlib/Seaborn, Streamlit  
   - GitHub: [Disease Diagnosis](https://github.com/Sa1f27/Disease-Prediction)  

6. DocHub-AI  
   A RAG-based multi-agent AI platform revolutionizing access to government services with intelligent document assistance, scheme navigation, and seamless application support.  
   - Tech Stack: Python, LLama, TensorFlow, Flask, BeautifulSoup, API  
   - GitHub: [DocHub-AI](https://github.com/Sa1f27/DocHub-AI)  

Certifications & Professional Development
1. Machine Learning Engineering Certification
   - Issued by: Udemy
   - Year: 2024
   - Verification: [ML Engineering Certificate](https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/ML-Udemy%20Certificate.pdf)

2. Hackathon Achievements
   - HackRevolution Hackathon (MJCET, 2025)
     - Certificate: [HackRevolution Certificate](https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/HackRev-Certificate.jpg)
   - CodeFest Hackathon (Edventure-Park, 2024)
     - Certificate: [CodeFest Hackathon Certificate](https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/CodeFest-Certificate.jpg)
   - Hackprix Hackathon (LIET, 2024)
     - Certificate: [Hackprix Hackathon Certificate](https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/Hackprix-Certificate.pdf)
   - Imagine Hackathon (PanIIT, 2024)
     - Certificate: [Imagine Hackathon Certificate](https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/Imagine-Certificate.jpg)

3. Professional Internships
   - RAM Infotech Internship (2024)
     - Certificate: [RAM Infotech Internship Certificate](https://github.com/Sa1f27/Certs/blob/65741ed34d0cad506b0b8c878faf12859fb8b950/Certificates/Ram%20Infotech-Internship.jpg)
   - CodSoft Internship (2024)
     - Certificate: [CodSoft Internship Certificate](https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/CodSoft-Internship.pdf)

4. Data Science & AI Competitions
   - DataNyx Datathon (MJCET, 2024)
     - Certificate: [DataNyx Datathon Certificate](https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/DataNyx-Certificate.jpg)

Professional Metrics & Achievements
- LeetCode Problem Solving:
  - Total Problems Solved: 170+
  - Breakdown:
    * Easy Problems: 110+
    * Medium Problems: 60+
    * Hard Problems: 10+
- Hackathons:
  - Total Attended: 6
  - Awards Won: 1
  - Upcoming Hackathons: 2
- Project Portfolio:
  - Total Projects: 32
  - Deployed Projects: 8
  - Featured Projects: 6

Education:  
- Bachelor of Engineering in Computer Science (AI & ML)
- University: Lords Institute of Engineering & Technology (LIET) 
  - CGPA: 8.6/10  
  - Expected Graduation: 2026  
  - Key Courses: Advanced ML, Deep Learning, NLP, Computer Vision  

Professional Development:
- Solved 170+ problems on LeetCode  
- Regular contributor to open-source projects  
- Frequent hackathon participant  
- Continuous learning through advanced AI courses  

Contact Information:
- Email: huzaif027@gmail.com  
- Phone Numbers:
  - Primary: +91 6300940175  
  - Secondary: +91 9014038540  

Professional Profiles:
- GitHub: [Sa1f27](https://github.com/Sa1f27)  
- LinkedIn: [Mohammed Huzaifah](https://linkedin.com/in/huzaifah-27o3)  

Personal Interests:
- AI Research & Development  
- Football (Real Madrid supporter)  
- Competitive Programming  
- Tech Blogging  
- Open Source Contributing  

Current Status & Availability:
- Employment Status: Seeking Opportunities  
- Available From: Immediate  

Preferred Roles:
- AI/ML Engineer  
- Data Scientist Engineer  
- MLOps Engineer  

Work Type: Internship, Freelance Projects, Part-time  

References: Available upon request.
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
        model: 'llama3-8b-8192',
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