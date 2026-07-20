const skills = [
  'JavaScript',
  'React',
  'Node.js / Express',
  'HTML/CSS',
  'Python',
  'MySQL / Sequelize',
  'Supabase',
  'Git / GitHub',
  'Bootstrap',
];

function SkillsList() {
  return (
    <div className="skills-list">
      {skills.map((skill) => (
        <span key={skill} className="skill-pill">
          {skill}
        </span>
      ))}
    </div>
  );
}

export default SkillsList;