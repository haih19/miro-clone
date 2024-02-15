"use client";

import { EmptyBoards } from "./empty-board";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

type Props = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

export const BoardList = ({ orgId, query }: Props) => {
  const data = [];

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }
  return <div>{JSON.stringify(query)}</div>;
};
