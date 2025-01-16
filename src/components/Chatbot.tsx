import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

// Your bio information
const bioInfo = `Here is your bio information in plain text format with corrections and updates to the tech stack where necessary:

---

Mohammed Huzaifah

Senior AI/ML Engineer & Computer Science Researcher

Personal Information

- Full Name: Mohammed Huzaifah
- Gender: Male
- Relationship Status: Single
- Languages:
  - English (Professional)
  - Hindi (Fluent)
  - Urdu (Native)
  - Telugu (Conversational)

Professional Summary

Mohammed Huzaifah is an innovative Machine Learning Engineer specializing in cutting-edge AI technologies, MLOps, and scalable system design. Currently pursuing a Bachelor of Engineering in Computer Science with AI & ML specialization (CGPA: 8.6), he combines academic excellence with practical implementation experience. Known for developing production-ready AI solutions that solve real-world challenges.

Core Technical Competencies

Advanced AI Systems

- Foundation Models & LLMs:
  - Modern LLMs: GPT-4, Claude 3, Gemini Pro, PaLM 2
  - Open Source Models: Llama 2, Mistral 7B, Mixtral 8x7B
  - Domain-Specific Models: CodeLlama, Med-PaLM, Stable Code
  - Fine-tuning: LoRA, QLoRA, PEFT, Direct Preference Optimization

- Multimodal AI:
  - Vision-Language Models: GPT-4V, Claude 3, Gemini Pro Vision
  - Image Generation: Stable Diffusion XL, DALL-E 3, Midjourney
  - Audio AI: Whisper, Bark, MusicGen
  - Video AI: ModelScope, Text-to-Video-Zero

Modern AI Development Stack

- Core AI Tools:
  - LLMs:
    - Production: DeepSeek V3, Claude 3, GPT-4
    - Open Source: Llama 2, Mixtral, Qwen
    - Specialized: CodeLlama, StarCoder2
  
  - Vector Databases:
    - Primary: Chroma, Weaviate, Qdrant
    - Specialized: Pinecone, Milvus
    - Embedding Models: OpenAI Ada 2, BGE, E5

- MLOps & Infrastructure:
  - Orchestration:
    - Kubeflow
    - Airflow
    - Argo Workflows
  - Model Serving:
    - BentoML
    - Ray Serve
    - Triton Inference Server (updated name)
  - Monitoring:
    - Weights & Biases
    - MLflow
    - Prometheus

- Development Tools:
  - IDEs & Extensions:
    - VSCode with GitHub Copilot
    - JetBrains AI Assistant
    - Cursor
  - AI Frameworks:
    - LangChain
    - LlamaIndex
    - Semantic Kernel
  - Testing:
    - Pytest
    - Playwright
    - Locust

- Cloud & Deployment:
  - Primary:
    - AWS SageMaker
    - Azure ML
    - Google Vertex AI
  - Specialized:
    - RunPod
    - Lambda Labs
    - Vast.ai

- Version Control & CI/CD:
  - GitHub with Actions
  - GitLab CI/CD
  - DVC for ML artifacts

- AI Agent Frameworks:
  - AutoGPT
  - LangGraph
  - CrewAI

Signature Projects

KidsCare-Pro (Pediatric Healthcare AI) 
Developed end-to-end pediatric health monitoring system  
Tech Stack: GPT-4, Med-PaLM, RAG with Weaviate  
Features: Real-time health monitoring, predictive diagnostics  
Impact: Serving over 1000 patients with a prediction accuracy of 95%.  

SoulScan (Disease Prediction) 
Built advanced disease prediction platform  
Stack: Mixtral 8x7B, BioGPT, Chroma DB  
Features: Multi-modal disease detection and personalized health insights  
Impact: Achieved a detection accuracy of 98%, deployed in three hospitals.  

VocalDiagnose (Speech Analysis)  
VocalDiagnose uses AI to analyze voice patterns, enabling early disease detection with over 90% accuracy, revolutionizing accessible and cost-effective health screening 
Stack: Whisper, Wav2Vec, Custom CNNs, TensorFlow, Librosa, Kaggle, Matplotlib/Seaborn  
Features: Real-time speech analysis with multilingual support  
Impact: Reduced diagnosis time by 60%.  

DocHub (Governement Documentation) 
Developed intelligent government services with document assistance, scheme navigation, and seamless application support 
Stack: llama 3, RAG with Pinecone, MongoDB
Features: Automated report generation and semantic search  
Impact: Reduced documentation time by 75%.   

Education: Bachelor of Engineering in Computer Science (AI & ML)  

CGPA: 8.6/10  
Expected Graduation: 2026
Key Courses: Advanced ML, Deep Learning, NLP, Computer Vision  

Professional Development:
- LeetCode (170+ problems solved) 
- Regular contributor open-source projects 
- Frequent hackathon participant 
- Continuous learning through advanced AI courses  

Contact Information:

Email: huzaif027@gmail.com  
Phone Numbers:
- Primary: +91 6300940175 
- Secondary: +91 9014038540  

Professional Profiles:
GitHub: github.com/Sa1f27  
LinkedIn: linkedin.com/in/huzaifah-27o3  
Medium: medium.com/@huzaif027  
Twitter: @huzaifah_ai  

Location: Hyderabad, Telangana, India  

Personal Interests:
- AI Research & Development  
- Football (Real Madrid supporter)  
- Competitive Programming  
- Tech Blogging  
- Open Source Contributing  

Current Status & Availability:
Employment Status: Seeking Opportunities  
Available From: Immediate   

Preferred Roles:
- AI/ML Engineer   
- Data Scientist Engineer   
- MLOps Engineer   

Work Type: Internship, Freelance Projects, part time 

References: Available upon request.
`; // gsk_OoGUsW9QebvBDdNaRPVNWGdyb3FY4hH3VUGwUksg4UgrVx9hmVZ

const askGroq = async (inputText: string) => {
  const prompt = `
    You are an AI assistant presenting my portfolio based on my biography. Use the provided bio to respond concisely, acting as if you are me.
    my bio:
    ${bioInfo}
    Task:
    Respond to the following query from a recruiter or visitor in a professional and confident tone:
    ${inputText}
    Guidelines:
    Provide responses that are clear, to the point, and professional.
    Use bullet points if applicable to ensure readability.
    If specific details are unavailable, share my contact information for further discussion.
    Showcase my strengths, experiences, and relevant achievements wherever relevant.
    Craft the best possible response to reflect my skills and professionalism.
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
        model: 'llama-3.1-8b-instant',
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
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-950/30" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-12 text-center">
          Chat with My Portfolio
        </h2>
        
        <div className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                       hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
                       group relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 
                         group-hover:opacity-20 transition-opacity duration-300" />
          
          <form onSubmit={handleSubmit} className="space-y-4 relative">
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask any question about my portfolio!"
                className="flex-1 px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30
                           text-blue-200 placeholder-blue-400/50 focus:outline-none focus:border-violet-400/50
                           transition-all duration-300"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-blue-100 rounded-lg
                         hover:from-blue-400 hover:to-violet-400 disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-300 font-medium"
              >
                {isLoading ? 'Processing...' : 'Ask'}
              </button>
            </div>

            {error && (
              <div className="text-red-400 mt-2 px-3 py-2 rounded-lg bg-red-900/20 border border-red-500/30">
                {error}
              </div>
            )}

            {response && (
              <div className="mt-6 px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30">
                <div className="markdown-content">
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
                        <a className="text-blue-400 hover:text-blue-300 underline" {...props} />
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
    </section>
  );
};

export default Chatbot;