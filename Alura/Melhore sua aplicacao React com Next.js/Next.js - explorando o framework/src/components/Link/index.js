import NextLink from "next/link";

export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <p {...props}>{children}</p>
    </NextLink>
  );
}
