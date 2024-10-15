// /components/blog/AuthorCard.tsx
interface AuthorCardProps {
  author: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-gray-300 font-semibold">{author}</div>
    </div>
  );
};

export default AuthorCard;
