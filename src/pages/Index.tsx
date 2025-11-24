import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import profileImage from "@/assets/profile.jpg";
import { 
  Database, 
  Code2, 
  Settings, 
  Github, 
  Linkedin, 
  Mail, 
  FileDown,
  Server,
  GitBranch,
  Layers,
  Boxes,
  CircleDot,
  Workflow
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { icon: Database, name: "PostgreSQL", category: "SQL" },
    { icon: Database, name: "MySQL", category: "SQL" },
    { icon: Server, name: "SQL Server", category: "SQL" },
    { icon: Boxes, name: "MongoDB", category: "NoSQL" },
    { icon: CircleDot, name: "Redis", category: "NoSQL" },
    { icon: Code2, name: "SQL", category: "Languages" },
    { icon: Code2, name: "Python", category: "Languages" },
    { icon: Code2, name: "C#", category: "Languages" },
    { icon: Layers, name: "Modelagem", category: "Concepts" },
    { icon: Settings, name: "Otimização", category: "Concepts" },
    { icon: Workflow, name: "ETL", category: "Concepts" },
    { icon: GitBranch, name: "Docker", category: "Tools" },
  ];

  const projects = [
    {
      title: "Sistema de Gerenciamento de Biblioteca",
      description: "Desenvolvimento de um banco de dados relacional (PostgreSQL) para gerenciar livros, empréstimos e usuários, com foco em normalização de dados e consultas eficientes para relatórios.",
      technologies: ["SQL", "PostgreSQL", "Modelagem Relacional"],
    },
    {
      title: "Análise de Dados de E-commerce",
      description: "Criação de um pipeline de ETL para extrair dados de vendas, processá-los com Python e carregá-los em um banco de dados para análise. O objetivo é criar um sistema capaz de gerar insights sobre o comportamento do consumidor.",
      technologies: ["Python", "Pandas", "SQL", "ETL"],
    },
    {
      title: "Catálogo de Produtos com NoSQL",
      description: "Exploração do MongoDB para criar um catálogo de produtos flexível para uma aplicação web, aproveitando a estrutura de documentos para armazenar produtos com atributos variados e complexos.",
      technologies: ["MongoDB", "NoSQL", "JSON"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold font-mono text-primary">{"<DB/>"}</span>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex space-x-8">
                {[
                  { id: "home", label: "Início" },
                  { id: "about", label: "Sobre" },
                  { id: "skills", label: "Habilidades" },
                  { id: "projects", label: "Projetos" },
                  { id: "contact", label: "Contato" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`transition-colors duration-300 hover:text-primary ${
                      activeSection === item.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300">
              <img 
                src={profileImage} 
                alt="Bernardo Borba" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient glow-text">
            Bernardo Borba
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-foreground">
            Construindo Fundamentos Sólidos com Dados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Apaixonado por transformar dados brutos em informações valiosas e otimizar sistemas para máxima eficiência e escalabilidade.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            Entre em Contato
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
            Sobre Mim
          </h2>
          <Card className="card-glow border-border bg-card">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estudante de Tecnologia da Informação, estou focado em construir uma carreira sólida na área de banco de dados. 
                Tenho um perfil analítico e organizado, e busco constantemente aprender sobre modelagem de dados, otimização de 
                consultas e as melhores práticas para garantir a integridade e segurança da informação. Meu objetivo é aplicar 
                meu conhecimento para resolver problemas complexos e contribuir para projetos inovadores que transformam dados 
                em valor real para negócios.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
            Minhas Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="card-glow border-border bg-card text-center hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 flex flex-col items-center">
                    <Icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{skill.category}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient">
            Projetos em Desenvolvimento
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estes são alguns dos projetos que estou planejando e desenvolvendo para aprofundar meus conhecimentos em banco de dados. 
            Eles demonstram minha linha de raciocínio e as tecnologias que pretendo dominar.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="card-glow border-border bg-card hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a
              href="mailto:bernardoborbar@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>bernardoborbar@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bernardo-borba-7a725737b/?trk=opento_sprofile_goalscard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
              <span>linkedin.com/in/bernardo-borba</span>
            </a>
            <a
              href="https://github.com/BernardoBorbaR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
              <span>github.com/BernardoBorbaR</span>
            </a>
          </div>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            <FileDown className="w-5 h-5 mr-2" />
            Baixar meu Currículo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="font-mono text-sm">
            {"<"} Desenvolvido com dedicação aos dados {"/>"}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
