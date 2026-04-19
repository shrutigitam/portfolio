import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, PieChart, Database, Cpu, Settings, Globe, BarChart, GitBranch, Sparkles } from "lucide-react";
import {
  FaPython,
  FaChartBar,
  FaDatabase,
  FaChartPie,
  FaChartLine,
  FaChartArea,
  FaCogs,
  FaProjectDiagram,
  FaLayerGroup,
  FaTable,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaRobot,
  FaBrain,
  FaMagic
} from "react-icons/fa";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card id={title.toLowerCase().replace(/\s+/g, '-')} className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Technical Skills",
      color: "text-blue-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "R", icon: <FaChartBar className="w-4 h-4 text-[#276DC3]" /> },
        { name: "SQL", icon: <FaDatabase className="w-4 h-4 text-[#336791]" /> },
      ],
    },
    {
      icon: PieChart,
      title: "Visualization Tools",
      color: "text-green-400",
      skills: [
        { name: "Tableau", icon: <FaChartPie className="w-4 h-4 text-[#E97627]" /> },
        { name: "Power BI", icon: <FaChartLine className="w-4 h-4 text-[#F2C811]" /> },
        { name: "Matplotlib", icon: <FaChartArea className="w-4 h-4 text-[#8CAAE6]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      color: "text-purple-400",
      skills: [
        { name: "Scikit-learn", icon: <FaCogs className="w-4 h-4 text-[#F7931E]" /> },
        { name: "TensorFlow", icon: <FaProjectDiagram className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "Keras", icon: <FaLayerGroup className="w-4 h-4 text-[#D00000]" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-orange-400",
      skills: [
        { name: "MySQL", icon: <FaDatabase className="w-4 h-4 text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <FaDatabase className="w-4 h-4 text-[#336791]" /> },
        { name: "SQLite", icon: <FaDatabase className="w-4 h-4 text-[#003B57]" /> },
      ],
    },
    {
      icon: Settings,
      title: "Tools",
      color: "text-pink-400",
      skills: [
        { name: "Excel", icon: <FaTable className="w-4 h-4 text-[#217346]" /> },
        { name: "Google Sheets", icon: <FaTable className="w-4 h-4 text-[#34A853]" /> },
        { name: "Pivot Tables", icon: <FaTable className="w-4 h-4 text-[#217346]" /> },
        { name: "Trello", icon: <FaTools className="w-4 h-4 text-[#0052CC]" /> },
        { name: "JIRA", icon: <FaTools className="w-4 h-4 text-[#0052CC]" /> },
      ],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      color: "text-yellow-400",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> },
        { name: "JavaScript", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
      ],
    },
    {
      icon: BarChart,
      title: "Statistical Tools",
      color: "text-teal-400",
      skills: [
        { name: "SPSS", icon: <FaChartBar className="w-4 h-4 text-[#CC0000]" /> },
        { name: "Stata", icon: <FaChartBar className="w-4 h-4 text-[#1A5276]" /> },
      ],
    },
    {
      icon: GitBranch,
      title: "Version Control",
      color: "text-red-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-[#181717]" /> },
      ],
    },
    {
      icon: Sparkles,
      title: "AI Tool Expertise",
      color: "text-cyan-400",
      skills: [
        { name: "Antigravity", icon: <FaRobot className="w-4 h-4 text-[#10A37F]" /> },
        { name: "Claude Opus 4.5", icon: <FaBrain className="w-4 h-4 text-[#D97757]" /> },
        { name: "Midjourney", icon: <FaMagic className="w-4 h-4 text-[#FFFFFF]" /> },
        { name: "Hugging Face", icon: <span className="text-xl">🤗</span> },
        { name: "Gemini 3 Flash", icon: <Sparkles className="w-4 h-4 text-[#8E75FF]" /> },
        { name: "OpenAI API", icon: <FaRobot className="w-4 h-4 text-[#74AA9C]" /> },
      ],
    },
  ];

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main id="skills" className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
