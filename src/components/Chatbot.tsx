import React, { useState } from 'react';

const Chatbot = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

// Your bio information
const bioInfo = `Mohammed Huzaifah is a forward-thinking Machine Learning Engineer with a robust foundation in Artificial Intelligence, Data Science, and MLOps. Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in AI and Machine Learning, he maintains an impressive CGPA of 8.6. Huzaifah is passionate about addressing real-world challenges and has demonstrated proficiency in designing, developing, and deploying scalable AI solutions. He leverages advanced concepts such as deep learning, neural networks, natural language processing (NLP), computer vision, and generative models.

Professional Experience:

AI-Driven Projects: Huzaifah has spearheaded innovative projects including KidsCare-Pro, an AI-powered pediatric health solution, and SoulScan, a high-accuracy disease prediction platform. These initiatives showcase his ability to integrate cutting-edge AI technologies to create impactful solutions.

Open-Source Contributions: An active contributor to the open-source community, Huzaifah has made significant inputs in areas like predictive modeling, data cleaning, feature engineering, and the development of machine learning and deep learning models, including CNNs, RNNs, GANs, and other advanced algorithms.

Hackathon Participation: Demonstrating teamwork and innovation, he has actively participated in hackathons, delivering impactful solutions under tight deadlines. His projects often focus on business-driven applications such as fraud detection and recommendation systems.

Technical Proficiencies:

Programming Languages: Python (primary), C, C++, Java, HTML, CSS, JavaScript (Basic)

Machine Learning & Deep Learning Frameworks: TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost, OpenCV

Data Management & Visualization: SQL, Pandas, NumPy, Apache Spark, Matplotlib, Seaborn, Plotly

Cloud Technologies: AWS, Azure

MLOps Tools: Docker, Kubernetes, MLflow, DVC, Jenkins

Emerging AI Technologies: Proficient in agentic AI, retrieval-augmented generation (RAG), and the latest generative AI models, staying abreast of advancements to implement state-of-the-art solutions.

Certifications and Achievements:

Hackathon Accolades: Earned recognition for delivering AI-driven solutions in various hackathons.

Project Recognitions: KidsCare-Pro, VocalDIagnose, Cronic DIseases Scan, Dochub have been praised for their innovative use of AI in healthcare management.

Competitive Programming: Solved over 150 problems on LeetCode, enhancing skills in data structures, algorithms, and problem-solving techniques.

Open-Source Contributions: Active contributor on GitHub, with notable projects in predictive modeling and machine learning model development.

Contact Information:

Email: huzaif027@gmail.com

Phone: +91 6300940175, +91 9014038540

GitHub: https://github.com/Sa1f27

LinkedIn: https://www.linkedin.com/in/huzaifah-27o3/

Location: Hyderabad, Telangana, India

Interests and Hobbies:

Beyond his professional endeavors, Huzaifah is passionate about exploring the latest advancements in AI, particularly generative models and MLOps. He enjoys playing football, supporting Real Madrid, participating in hackathons, and spending quality time with friends and family.

Availability:

Actively seeking internship and collaborative opportunities, Huzaifah is available to commence immediately.

References:

Available upon request.

Relationship:
- Single 😭 
`; // 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

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


 const handleSubmit = async (e: React.FormEvent) => {
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
          {/* Cyberpunk accent */}
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
              <div 
                className="mt-6 text-violet-300 px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30"
                dangerouslySetInnerHTML={{ __html: response }}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;