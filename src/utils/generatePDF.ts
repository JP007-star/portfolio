import { jsPDF } from "jspdf";
import { personalInfo, bio, skills, experience, projects, education, certifications, awards } from "@/data/portfolio";

export function generatePDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  // Helper functions
  const checkNewPage = (needed: number) => {
    if (y + needed > 270) {
      doc.addPage();
      y = 20;
    }
  };

  const addSectionTitle = (title: string) => {
    checkNewPage(15);
    doc.setFillColor(37, 99, 235);
    doc.rect(margin, y, 4, 8, "F");
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 30, 30);
    doc.text(title, margin + 8, y + 6);
    y += 12;
  };

  const addLine = () => {
    doc.setDrawColor(220, 220, 220);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;
  };

  // Header - Blue Background
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 40, "F");

  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(personalInfo.name, margin, 16);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(personalInfo.title, margin, 24);

  y = 50;

  // Contact Info
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(`${personalInfo.email}  |  ${personalInfo.phone}  |  ${personalInfo.location}`, margin, y);
  y += 12;

  // Summary Section - Prominent
  addSectionTitle("SUMMARY");

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 30, 30);
  doc.text(`${bio.yearsOfExperience}+ Years of Experience`, margin, y);
  y += 6;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  const summaryLines = doc.splitTextToSize(bio.full, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 5 + 5;

  addLine();

  // Technical Skills
  addSectionTitle("TECHNICAL SKILLS");

  const skillCategories = [
    { name: "Languages:", items: skills.languages.map(s => s.name).join(", ") },
    { name: "Frameworks:", items: skills.frameworks.map(s => s.name).join(", ") },
    { name: "Databases:", items: skills.databases.map(s => s.name).join(", ") },
    { name: "DevOps:", items: skills.devops.map(s => s.name).join(", ") },
    { name: "Cloud:", items: skills.cloud.map(s => s.name).join(", ") },
    { name: "Tools & Practices:", items: skills.toolsAndPractices.map(s => s.name).join(", ") },
  ];

  skillCategories.forEach(cat => {
    checkNewPage(8);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 30, 30);
    doc.text(cat.name, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const lines = doc.splitTextToSize(cat.items, contentWidth - 35);
    doc.text(lines, margin + 32, y);
    y += lines.length * 4.5 + 2;
  });

  y += 2;
  addLine();

  // Professional Experience
  addSectionTitle("PROFESSIONAL EXPERIENCE");

  experience.forEach((exp) => {
    checkNewPage(45);

    // Company & Period - Same line
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 30, 30);
    doc.text(exp.company, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), y);
    y += 5;

    // Role - Blue
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(37, 99, 235);
    doc.text(exp.role, margin, y);
    y += 5;

    // Subtitle (Project Name)
    const subtitle = exp.description.split('.')[0] + '.';
    doc.setFont("helvetica", "bold");
    doc.setTextColor(37, 99, 235);
    doc.text(subtitle, margin, y);
    y += 5;

    // Description (remaining after subtitle)
    const remainingDesc = exp.description.split('.').slice(1).join('.').trim();
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const descLines = doc.splitTextToSize(remainingDesc, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 4 + 3;

    // Key Achievements
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    exp.achievements.forEach(ach => {
      checkNewPage(5);
      doc.text(`• ${ach}`, margin + 2, y);
      y += 4;
    });

    y += 5;
  });

  addLine();

  // Projects
  addSectionTitle("PROJECTS");

  projects.slice(0, 4).forEach((project) => {
    checkNewPage(25);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 30, 30);
    doc.text(project.title, margin, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    const descLines = doc.splitTextToSize(project.description, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 4 + 2;

    doc.setTextColor(37, 99, 235);
    doc.text(project.techStack.join(" | "), margin, y);
    y += 8;
  });

  addLine();

  // Education
  addSectionTitle("EDUCATION");

  education.forEach((edu) => {
    checkNewPage(12);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 30, 30);
    doc.text(edu.degree, margin, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`${edu.institution} | ${edu.period} | ${edu.details}`, margin, y);
    y += 10;
  });

  addLine();

  // Certifications & Achievements
  addSectionTitle("CERTIFICATIONS & ACHIEVEMENTS");

  const certsAndAwards = [
    ...certifications.map(c => ({ title: c.title, org: c.organization, year: c.year.toString() })),
    ...awards.slice(0, 4).map(a => ({ title: a.title, org: a.organization, year: a.year.toString() })),
  ];

  certsAndAwards.forEach((item) => {
    checkNewPage(8);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 30, 30);
    doc.text(item.title, margin, y);
    y += 4;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`${item.org} | ${item.year}`, margin, y);
    y += 7;
  });

  // Save
  doc.save("Jaya_Prasad_Resume.pdf");
}