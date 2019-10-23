/**
 * Dummy REST resource for news items.
 * Do not change this file. You have no control over the "backend" in this case.
 */

const newsRepo = [{
  id: 3,
  title: "Things improve for wealthy people",
  content: "In a completely unexpected development, latest IMF findings indicate etc etc..."
}, {
  id: 39,
  title: "America and China do not like one another",
  content: "Levels of not-liking have increased recently after tensions erupted over etc etc..."
}, {
  id: 10,
  title: "Tea leaves predict Brexit outcome",
  content: "According to the dredges at the bottom of the cup of Mrs. Morris, 48 from Sheffield, the UK will not leave the EU until September 2050 at the earliest. \"The leaves don't lie, unlike those bureaucrats in Brussels!\" said Mrs. Morris."
}, {
  id: 1123,
  title: "Harry Potter and Fifty Shades authors team up for new book",
  content: "Mrs Rowling and Mrs James have teamed up to bless the literary world with a new novel. It is rumored that Harry Potter will play a role in the new book, that will involve a lot of role-playing in general, so it only seems logical. Whether or not he will whip out his wand remains to be seen, but the internet is already alight with rumors about its wood type!"
}, {
  id: 234,
  title: "General Italian strike against new espresso tax",
  content: "Italians like coffee and they like it a lot, even if it means plunging the country ever deeper into debt."
}, {
  id: 12344,
  title: "WWE fighters will star at Eurovision",
  content: "Seeking to increase the European Song Festival's popularity accross the pond, next year's hosts have added a twist by inviting renowned WWE-stars GazGuzzler McCrushFace and Peter Pantytwister to astound the world with hitherto unexpected musical gifts. Not everybody is happy with the new participants, one D. Trump responded by calling them \"losers\"."
}];

function validateNews(title, content) {
  if(typeof title !== "string" || typeof content !== "string") throw {status: 400, error: "Bad Request"};
}

async function getItem(id) {
  const item = newsRepo.find(function({id: itemId}) {return id === itemId});
  if (item) return {status: 200, data: item};
  else throw {status: 404, error: "Not Found"}
}

export default {
  news: {
    create: async (title, content) => {
      validateNews(title, content)
      const item = {id: Math.floor(Math.random() *  999999999999999999), title: title, content: content}
      newsRepo.push(item)
      return {status: 201, data: item}
    },
    index: async () => {return {status: 200, data: newsRepo}},
    get: getItem,
    update: async (id, title, content) => {
      const {data: item} = await getItem(id);
      title = title || item.title;
      content = content || item.content;
      validateNews(title, content)
      item.title = title;
      item.content = content;
      return {status: 200, data: item}
    },
    delete: async id => {
      const index = newsRepo.findIndex(function({id: itemId}) {return id === itemId})
      if (index === -1) throw {status: 404, error: "Not Found"}
      else {
        newsRepo.splice(index, 1);
        return {status: 204}
      }
    },
  }
}