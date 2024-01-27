"use client";
import IconsUp from "./icons/Up";
import { useArticles } from "@/hooks/useArticles";

export type Article = {
  id?: string;
  created_at?: string;
  title?: string;
  votes?: any[];
};

const ArticleItem = ({ article: {id, title, votes } }: { article: Article }) => {
   const {newVote} = useArticles()
  return (
    <div className="border flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg">
      <h2 className="text-blue-500">{title}</h2>
      <div className="grid text-center ">
        <span onClick={() => newVote(id)}>
          <IconsUp />
        </span>
        <span>{votes?.length} votes</span>
        <span onClick={() => newVote(id, true)}>
          <IconsUp className="rotate-180" />
        </span>
      </div>
    </div>
  );
};

export default ArticleItem;