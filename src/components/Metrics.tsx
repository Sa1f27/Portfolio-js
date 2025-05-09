import React, { useState, useEffect } from 'react';
import { Trophy, Award, Code, GitBranch, Box, Star, Rocket, Brain, Shield, Cpu, Cloud } from 'lucide-react';

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
    <div className="absolute inset-0 pointer-events-none">
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

// Custom Card Components
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
);

// Contribution heatmap component with loading state
const ContributionHeatmap = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-52 gap-1 animate-pulse">
        {[...Array(52)].map((_, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-1">
            {[...Array(7)].map((_, dayIndex) => (
              <div 
                key={dayIndex}
                className="w-3 h-3 rounded-sm bg-blue-950/20 border border-blue-500/20"
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto pb-4">
      <img 
        src={`https://ghchart.rshah.org/60A5FA/${data.username}`} 
        alt="Github Contribution Chart"
        className="min-w-full h-auto filter hue-rotate-5 brightness-80 contrast-115"
      />
    </div>
  );
};

// LeetCode heatmap component
const LeetCodeHeatmap = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="h-32 bg-blue-950/20 animate-pulse rounded-lg"></div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg">
      <img 
        src={`https://leetcard.jacoblin.cool/${data.username}?theme=dark&font=Nunito&ext=heatmap`}
        alt="LeetCode Stats"
        className="w-full h-auto filter hue-rotate-15 brightness-110 contrast-125"
      />
    </div>
  );
};

const CertificationCard = ({ title, issuedBy, date, link, icon: Icon }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer" 
    className="group bg-blue-950/20 border border-blue-500/20 backdrop-blur-sm rounded-lg p-4
               hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
               hover:scale-105 cursor-pointer"
  >
    <div className="flex items-start gap-4">
      <div className="p-2 bg-blue-900/20 rounded-lg">
        <Icon className="text-blue-400 w-6 h-6" />
      </div>
      <div className="flex-1">
        <h4 className="text-blue-400 font-semibold group-hover:text-blue-300">{title}</h4>
        <p className="text-blue-400/60 text-sm">{issuedBy}</p>
        <p className="text-blue-400/40 text-xs mt-1">{date}</p>
      </div>
    </div>
  </a>
);

const MetricCard = ({ icon: Icon, value, label, increment, color = "blue" }) => (
  <Card className="bg-blue-950/20 border border-blue-500/20 backdrop-blur-sm">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-400/60">{label}</p>
          <div className="flex items-baseline gap-2">
            <h3 className={`text-4xl font-bold text-${color}-400`}>
              {value || '...'} 
            </h3>
            {increment && (
              <span className="text-green-400 text-sm">+{increment} this month</span>
            )}
          </div>
        </div>
        <Icon className={`text-${color}-400 w-8 h-8`} />
      </div>
    </CardContent>
  </Card>
);

const MetricsSection = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Manual metrics data
  const metrics = {
    leetcode: {
      problems: {
        easy: '120+',
        medium: "65+",
        hard: "12+"
      },
      history: Array.from({ length: 12 }, (_, i) => ({
        month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
        problems: Math.floor(Math.random() * 30 + 10)
      }))
    },
    hackathons: {
      attended: 6,
      won: 1,
      upcoming: 2
    },
    projects: {
      total: 45,
      deployed: 8,
      featured: 6
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const githubResponse = await fetch('https://api.github.com/users/Sa1f27');
        const githubJson = await githubResponse.json();
        setGithubData({
          username: 'Sa1f27',
          contributions: "550+",
          repos: githubJson.public_repos,
          followers: githubJson.followers
        });

        setLeetcodeData({
          username: 'huzaif027',
          totalSolved: "195+" // Replace with actual data
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

const certifications = [
  {
    title: "Machine Learning Engineer",
    issuedBy: "Udemy",
    date: "2024",
    link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/ML-Udemy%20Certificate.pdf",
    icon: "Brain" // Represents online/cloud-based learning
  },
  {
    title: "HackRevolution Hackathon",
    issuedBy: "MJCET",
    date: "2025",
    link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/HackRev-Certificate.jpg",
    icon: "Database" // Represents innovation and problem-solving
  },
    {
    title: "DataNyx Datathon",
    issuedBy: "MJCET",
    date: "2024",
    link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/DataNyx-Certificate.jpg",
    icon: "Brain" // Represents data-related events
  },
  {
    title: "RAM Infotech Internship",
    issuedBy: "RAM Innovative Infotech",
    date: "2024",
    link: "https://github.com/Sa1f27/Certs/blob/65741ed34d0cad506b0b8c878faf12859fb8b950/Certificates/Ram%20Infotech-Internship.jpg",
    icon: "Briefcase" // Represents internship or professional development
  },
  {
    title: "CodSoft Internship",
    issuedBy: "CodSoft",
    date: "2024",
    link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/CodSoft-Internship.pdf",
    icon: "Briefcase" // Represents internship or professional development
  },
  {
    title: "CodeFest Hackathon",
    issuedBy: "Edventure-Park",
    date: "2024",
    link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/CodeFest-Certificate.jpg",
    icon: "Code" // Represents coding and programming
  },
  {
    title: "Hackprix Hackathon",
    issuedBy: "LIET",
    date: "2024",
    link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/Hackprix-Certificate.pdf",
    icon: "Trophy" // Represents achievement and competition
  },
  {
    title: "Imagine Hackathon",
    issuedBy: "PanIIT",
    date: "2024",
    link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/Imagine-Certificate.jpg",
    icon: "Lightbulb" // Represents creativity and innovation
  },
//     {
//     title: "CloudX-25",
//     issuedBy: "MJCET",
//     date: "2025",
//     link: "https://github.com/Sa1f27/Certs/blob/a8a03c11992606b45f5b94032431d4cd760646f7/Certificates/CloudX-25.jpg",
//     icon: "Brain" // Represents creativity and innovation
//   }
];

  
  return (
    <section id="metrics" className="min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-violet-950/50" />
            {/* Animated Particles */}
      <ParticleEffect />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            Achievement Metrics
          </h2>
          <p className="text-blue-400/60 mt-4">Tracking progress through numbers</p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Key Metrics and GitHub */}
          <div className="lg:col-span-8 space-y-8">
            {/* Key Metrics Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <MetricCard 
                icon={Code} 
                value={leetcodeData?.totalSolved} 
                label="LeetCode Problems" 
              />
              <MetricCard 
                icon={GitBranch} 
                value={githubData?.repos} 
                label="GitHub Repos" 
              />
              <MetricCard 
                icon={Trophy} 
                value={metrics.hackathons.attended} 
                label="Hackathons" 
                increment={metrics.hackathons.upcoming}
              />
              <MetricCard 
                icon={Rocket} 
                value={metrics.projects.total} 
                label="Projects" 
                increment={metrics.projects.deployed}
              />
            </div>

            {/* GitHub Activity */}
            <Card className="bg-blue-950/20 border border-blue-500/20 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">GitHub Contributions</h3>
              <ContributionHeatmap 
                data={{ username: 'Sa1f27' }} 
                loading={loading} 
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-2xl font-bold text-blue-400">{githubData?.repos || '...'}</p>
                  <p className="text-blue-400/60 text-sm mt-1">Repositories</p>
                </div>
                <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-2xl font-bold text-blue-400">{githubData?.followers || '...'}</p>
                  <p className="text-blue-400/60 text-sm mt-1">Followers</p>
                </div>
                <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-2xl font-bold text-blue-400">{githubData?.contributions || '...'}</p>
                  <p className="text-blue-400/60 text-sm mt-1">Contributions</p>
                </div>
              </div>
            </Card>
                    <div className="lg:col-span-12 grid gap-8">
        {/* Hackathon Achievements */}
        <Card className="bg-blue-950/20 border border-blue-500/20 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-blue-400">Hackathon Achievements</h3>
            <Award className="text-blue-400 w-6 h-6" />
            </div>
            <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">{metrics.hackathons.attended}</p>
                <p className="text-blue-400/60 text-sm mt-2">Attended</p>
            </div>
            <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">{metrics.hackathons.won}</p>
                <p className="text-blue-400/60 text-sm mt-2">Won</p>
            </div>
            <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">{metrics.hackathons.upcoming}</p>
                <p className="text-blue-400/60 text-sm mt-2">Upcoming</p>
            </div>
            </div>
        </Card>
        {/* Project Stats */}
        <Card className="bg-blue-950/20 border border-blue-500/20 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-blue-400">Project Statistics</h3>
            <Box className="text-blue-400 w-6 h-6" />
            </div>
            <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">{metrics.projects.total}</p>
                <p className="text-blue-400/60 text-sm mt-2">Total</p>
            </div><ParticleEffect />
            <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">{metrics.projects.deployed}</p>
                <p className="text-blue-400/60 text-sm mt-2">Deployed</p>
            </div>
            <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">{metrics.projects.featured}</p>
                <p className="text-blue-400/60 text-sm mt-2">Featured</p>
            </div>
            </div>
        </Card>
        </div>

          </div>

          {/* Right Column - Certifications */}
          <div className="lg:col-span-4 space-y-8">
        
            {/* LeetCode Stats (Compact) */}
            <Card className="bg-blue-950/20 border border-blue-500/20 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">LeetCode Progress</h3>

              <div className="h-48 overflow-hidden rounded-lg">
                <LeetCodeHeatmap 
                  data={{ username: 'huzaif027' }} 
                  loading={loading} 
                />
              </div>
            </Card>
            
            {/* Certifications */}
            {/* Certifications */}
            <Card className="bg-blue-950/20 border border-blue-500/20 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} {...cert} />
                ))}
              </div>
            </Card>
          </div>

          {/* Bottom Row - Full Width Stats */}
          
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
