import { supabase } from "@/lib/supabase";
import { useState } from "react";

export const useVotes = () => {
  const [votes, setVotes] = useState<any[]>([]);
  const getVotes = async () => {
    const { data, error } = await supabase.from("votes").select("*"); //RLS Policies

    if (data) {
      setVotes(data);
    } else {
      console.log(error);
    }
  };

 

  return {
    votes,
    getVotes
  };
};