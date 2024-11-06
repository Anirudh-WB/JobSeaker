import React from "react";

function JobDescription() {
  const jobs = [
    {
      description:
        "We are seeking a highly motivated and skilled Software Engineer to join our dynamic development team. As a Software Engineer, you will work on designing, developing, and maintaining high-quality software solutions. You’ll have the opportunity to work in a collaborative environment, solving real-world problems and contributing to innovative projects.",
      responsibilities: [
        "Design, develop, and maintain high-quality software solutions",
        "Work in a collaborative environment, solving real-world problems and contributing to innovative projects",
        "Write clean, maintainable, and efficient code",
        "Perform code reviews and contribute to the overall codebase",
        "Work closely with cross-functional teams to develop and deliver software solutions",
        "Lead by example and demonstrate your ability to lead and mentor others",
        "Be a team player and work well with your colleagues",
        "Be a problem solver and have a knack for solving complex problems",
      ],
      requirements: [
        "Bachelor's degree in Computer Science, Software Engineering, or a related field",
        "Excellent programming skills, including C#, Java, or Python",
        "Experience with design patterns, software architecture, and testing frameworks",
        "Strong problem-solving and analytical skills",
      ],
      qualifications: [
        "Experience with Agile methodologies, Scrum, or Kanban",
        "Experience with version control systems, such as Git",
        "Experience with cloud platforms, such as AWS or Azure",
        "Experience with continuous integration and deployment (CI/CD) tools, such as Jenkins or GitLab CI/CD",
      ],
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Java",
        "CSS",
        "HTML",
        "C#",
        ".NET",
        "SQL",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
    },
  ];

  return (
    <div className="px-36">
      <div className="mt-5 flex-1 flex flex-col gap-5 rounded h-fit">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border rounded border-gray-200 shadow h-fit p-5"
          >
            <div className="p-3">
              <h3 className="font-semibold">Job Description</h3>
              <p className="mt-1 text-sm text-gray-600">{job.description}</p>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold">Responsibilities</h3>
              <ul className="mt-1 list-disc list-inside text-sm text-gray-600">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold">Requirements</h3>
              <ul className="mt-1 list-disc list-inside text-sm text-gray-600">
                {job.requirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold">Qualifications</h3>
              <ul className="mt-1 list-disc list-inside text-sm text-gray-600">
                {job.qualifications.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {job.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="mt-2 border rounded-full px-3 py-1 text-sm text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobDescription;
