import Head from "next/head";
import { TemplateConfig } from "./withTemplateConfig";
import { TemplateConfigProvider } from "./TemplateConfigContext";

interface TemplatePageHOCOptions {
  title?: string;
}

export default function templatePageHOC(
  Component: (props: any) => JSX.Element,
  templatePageHOCOptions: TemplatePageHOCOptions = {}
) {
  return function TemplatePageHOC(props: { templateConfig: TemplateConfig }) {
    return (
      <>
        <Head>
          <title>
            {templatePageHOCOptions?.title
              ? `${templatePageHOCOptions.title} | ${props.templateConfig.site.title}`
              : props.templateConfig.site.title}
          </title>
          <meta
            name="description"
            content={props.templateConfig.site.description}
          />
        </Head>
        <TemplateConfigProvider value={props.templateConfig}>
          <Component {...props} />
        </TemplateConfigProvider>
      </>
    );
  };
}
