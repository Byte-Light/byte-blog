// /components/blog/TagList.tsx
interface TagListProps {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, index) => (
        <span key={index} className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
