import readYamlFile from "read-yaml-file";

export interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  };
  personal?: {
    name?: string;
    avatar?: string;
    socialNetworks?: {
      github?: string;
      twitter?: string;
      instagram?: string;
    };
  };
}

export async function withTemplateConfig(props = {}) {
  const templateConfig = await readYamlFile<TemplateConfig>(
    "template-config.yml"
  );

  return {
    ...props,
    templateConfig,
  };
}
