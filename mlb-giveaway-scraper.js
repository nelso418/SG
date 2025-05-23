const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeMLBGiveaways(teamSlug) {
  const url = `https://www.mlb.com/${teamSlug}/schedule/promotions`;
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const giveaways = [];

    $('.promo-item, .promo-list__item').each((i, el) => {
      const description = $(el).find('.promo-title, .promo-item__title').text().trim();
      const date = $(el).find('.promo-date, .promo-item__date').text().trim();
      const img = $(el).find('img').attr('src');
      giveaways.push({ team: teamSlug, date, description, imageUrl: img });
    });

    console.log(giveaways);
    return giveaways;
  } catch (error) {
    console.error(`Failed to scrape ${teamSlug}:`, error.message);
    return [];
  }
}

// Example usage
scrapeMLBGiveaways('dodgers');