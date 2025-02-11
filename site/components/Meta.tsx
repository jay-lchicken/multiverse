import Head from "next/head";
// import theme from '../lib/theme'

const makeTitle = (title: string, name: string) =>
  title === name ? title : `${title} – ${name}`;

const Meta = ({
  title = `Hack Club Multiverse`, // page title
  name = `Calling all club leaders!`, // site name
  description = "Join us on March 29-31 and help save the Hack Club Multiverse!", // page description
  image = "/link-image.png", // social card image URL
  url = "https://multiverse.hackclub.com",
  target = "teenagers",
  children,
}: any) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />

    <title key="title">
      {makeTitle(
        title.replace("teenagers", target),
        name.replace("teenagers", target)
      )}
    </title>
    <meta
      key="og_title"
      property="og:title"
      content={makeTitle(
        title.replace("teenagers", target),
        name.replace("teenagers", target)
      )}
    />

    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={`/link-image.png`} />
      </>
    )}
    <meta key="theme_color" name="theme-color" content={"#7100E1"} />
    <meta key="tile_color" name="msapplication-TileColor" content={"#7100E1"} />

    <link key="manifest" rel="manifest" href={`${url}/site.webmanifest`} />
    {children}
  </Head>
);

export default Meta;
