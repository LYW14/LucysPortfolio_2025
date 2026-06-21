import React from 'react';

export const ReadingWindow: React.FC = () => (
  <div>
    <h3 className="text-lg font-bold mb-3">📚 Coursework</h3>
    <p>A list of my college coursework. Note: not all courses were taken at the same school, hence they may have different course code formats.</p>
    <div className="mt-4 space-y-2">
      <div className="p-3 bg-white rounded border">
        <strong>Programming / Data Science</strong><br />
        <strong>QST BA576:</strong> Machine Learning for Business Analytics<br />
        <strong>CDS CS519:</strong> Spark! Software Engineering Practicum<br />
        <strong>CDS DS430:</strong> Introduction to Bioinformatics and Computational Biology<br />
        <strong>CDS DS340:</strong> Introduction to Machine Learning and Artificial Intelligence<br />
        <strong>CDS DS497:</strong> Data Science of the Mind<br />
        <strong>CDS DS320:</strong> Algorithms for Data Science<br />
        <strong>CDS DS310:</strong> Data Mechanics<br />
        <strong>SCI CS0445:</strong> Data Structures and Algorithms I<br />
        <strong>SCI CMPINF401:</strong> Intermediate Programming
      </div>
      <div className="p-3 bg-white rounded border">
        <strong>Math / Statistics</strong><br />
        <strong>MATH0230:</strong> Analytic Geometry and Calculus II<br />
        <strong>DS122:</strong> Foundations of Data Science III<br />
        <strong>MA213:</strong> Basic Statistics and Probability
      </div>
      <div className="p-3 bg-white rounded border">
        <strong>Public Health</strong><br />
        <strong>SPH PH510:</strong> Essentials of Public Health<br />
        <strong>SPH PH507e:</strong> Controversies in International Health<br />
        <strong>SPH PH506e:</strong> International Health at the World Health Organization<br />
        <strong>SAR HS325:</strong> Introduction to Global Health
      </div>
      <div className="p-3 bg-white rounded border">
        <strong>Math Education</strong><br />
        <strong>WED ME501:</strong> Methods for Tutoring Math Students<br />
        <strong>WED ME500:</strong> Introduction to Mathematics Education
      </div>
    </div>
  </div>
);