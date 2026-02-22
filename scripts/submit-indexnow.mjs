const key = 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4';
const host = 'allphaseconstructionfl.com';
const sitemapUrl = `https://${host}/sitemap.xml`;

const body = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: [`https://${host}/sitemap.xml`]
};

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body)
});

console.log('IndexNow status:', res.status);
