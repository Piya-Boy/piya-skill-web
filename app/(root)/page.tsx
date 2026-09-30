// Thai is the default language. A static site cannot redirect on the server, so "/" ships a
// meta refresh plus visible links for visitors and crawlers that do not follow it.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Root() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${basePath}/th/`} />
      <p className="text-center text-sm text-muted">
        <a className="underline underline-offset-4" href={`${basePath}/th/`} lang="th">
          ภาษาไทย
        </a>
        {" · "}
        <a className="underline underline-offset-4" href={`${basePath}/en/`} lang="en">
          English
        </a>
      </p>
    </>
  );
}
