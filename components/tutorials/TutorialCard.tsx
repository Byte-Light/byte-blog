// components/TutorialCard.tsx
import React from 'react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
}

interface Props {
  tutorial: Tutorial;
}

const TutorialCard: React.FC<Props> = ({ tutorial }) => {
  return (
    <div className="p-6 bg-gray-800 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{tutorial.title}</h3>
      <p className="text-gray-300 mb-4">{tutorial.description}</p>
      <div className="flex gap-2 mb-4">
        {tutorial.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm bg-cyan-600/20 text-cyan-300 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="block text-sm text-gray-500">{tutorial.publishedAt}</span>
    </div>
  );
};

export default TutorialCard;
