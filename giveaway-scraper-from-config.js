const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Load team promo config
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'promo-url-config.json'), 'utf-8'));

// Generic scraper function
async function scrapeGiveawaysFromURL(league, teamSlug, url, selectors = {
  item: '.promo-item, .promo-list__item',
  title: '.promo-title, .promo-item__title',
  date: '.promo-date, .promo-item__date'
}) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const giveaways = [];

    $(selectors.item).each((i, el) => {
      const description = $(el).find(selectors.title).text().trim();
      const date = $(el).find(selectors.date).text().trim();
      const img = $(el).find('img').attr('src');
      giveaways.push({ league, team: teamSlug, date, description, imageUrl: img });
    });

    return giveaways;
  } catch (error) {
    console.error(`Error scraping ${league} - ${teamSlug}:`, error.message);
    return [];
  }
}

// Loop through leagues and teams
(async () => {
  let allGiveaways = [];

  for (const league in config) {
    const teams = config[league];
    for (const teamSlug in teams) {
      const url = teams[teamSlug];
      const giveaways = await scrapeGiveawaysFromURL(league, teamSlug, url);
      allGiveaways = allGiveaways.concat(giveaways);
    }
  }

  // Save to file
  fs.writeFileSync('all-giveaways.json', JSON.stringify(allGiveaways, null, 2));
  console.log(`✅ Scraping complete. ${allGiveaways.length} giveaways saved to all-giveaways.json`);
})();