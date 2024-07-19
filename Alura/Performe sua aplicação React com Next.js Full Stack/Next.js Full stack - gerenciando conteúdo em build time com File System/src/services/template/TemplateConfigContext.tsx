import React from "react";
import { TemplateConfig } from "./withTemplateConfig";

const TemplateConfigContext = React.createContext<TemplateConfig>({});

interface TemplateConfigProviderProps {
  value: TemplateConfig;
  children: React.ReactNode;
}

export function TemplateConfigProvider({
  value,
  children,
}: TemplateConfigProviderProps) {
  return (
    <TemplateConfigContext.Provider value={value}>
      {children}
    </TemplateConfigContext.Provider>
  );
}

export const useTemplateConfig = () => React.useContext(TemplateConfigContext);
