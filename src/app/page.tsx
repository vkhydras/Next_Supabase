"use client";

import ArticleItem from "@/components/ArticleItem";
import { useArticles } from "@/hooks/useArticles";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
  const { articles, getArticles } = useArticles();
    const subscribedChannel = supabase
      .channel("articles-follow-up")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "votes",
        },
        (payload: any) => {
           getArticles();
        }
      )
    .subscribe();
  
   

  
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="container mx-auto my-8">
      <div className="grid gap-4 px-12">
        {articles.map((article: any, key: number) => {
          return <ArticleItem key={key} article={article} />;
        })}
      </div>
    </div>
  );
}