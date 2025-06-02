"use client";

import React from "react";

import { QueryParamProvider } from "use-query-params";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NextAdapterApp from "next-query-params/app";

type ProviderProps = {
  children?: React.ReactNode;
};

const queryClient = new QueryClient();

const Providers: React.FC<ProviderProps> = (props) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <QueryParamProvider adapter={NextAdapterApp}>
          {props.children}
        </QueryParamProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
