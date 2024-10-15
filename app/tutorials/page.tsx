"use client"
import Pagination from '@/components/tutorials/Pagination';
import TutorialCard from '@/components/tutorials/TutorialCard';
import { useState, useEffect } from 'react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
}

const TutorialsPage: React.FC = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tutorialsPerPage = 6;

  useEffect(() => {
    // Simulate API fetch (replace with real API call)
    const mockTutorials: Tutorial[] = Array.from({ length: 20 }).map((_, index) => ({
      id: `${index + 1}`,
      title: `Tutorial ${index + 1}: Learn TypeScript Basics`,
      description: 'A deep dive into TypeScript essentials, interfaces, and generics.',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      publishedAt: `October ${index + 1}, 2024`,
    }));
    setTutorials(mockTutorials);
  }, []);

  const startIndex = (currentPage - 1) * tutorialsPerPage;
  const paginatedTutorials = tutorials.slice(startIndex, startIndex + tutorialsPerPage);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Tutorials
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          totalItems={tutorials.length}
          itemsPerPage={tutorialsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default TutorialsPage;
