
import AnimatedSection from "./ui/AnimatedSection";

const skillCategories = [
  {
    title: "Testing Tools",
    skills: [
      { name: "Selenium", proficiency: 90 },
      { name: "Cypress", proficiency: 85 },
      { name: "JUnit/TestNG", proficiency: 80 },
      { name: "Postman", proficiency: 95 },
      { name: "JMeter", proficiency: 75 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", proficiency: 85 },
      { name: "Python", proficiency: 80 },
      { name: "JavaScript", proficiency: 75 },
      { name: "SQL", proficiency: 90 },
      { name: "TypeScript", proficiency: 70 },
    ],
  },
  {
    title: "CI/CD Tools",
    skills: [
      { name: "Jenkins", proficiency: 85 },
      { name: "GitHub Actions", proficiency: 80 },
      { name: "Azure DevOps", proficiency: 75 },
      { name: "Docker", proficiency: 70 },
      { name: "CircleCI", proficiency: 65 },
    ],
  },
  {
    title: "QA Processes",
    skills: [
      { name: "Test Planning", proficiency: 95 },
      { name: "Test Case Design", proficiency: 90 },
      { name: "Bug Reporting", proficiency: 95 },
      { name: "Agile Testing", proficiency: 85 },
      { name: "Continuous Testing", proficiency: 80 },
    ],
  },
];

const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{proficiency}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expertise in quality assurance tools, frameworks, and methodologies
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 100} className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
