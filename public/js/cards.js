// Program Cards
const programCardsContainer = document.getElementById('programCardsContainer')

programCards = [
  {
    title: 'Food Distribution',
    bodyText:
      '<p>A hungry child is a child who will have a difficult time focusing at school.</p>\
      <p>In 2020, Elevatus distributed <b>21,600 meals</b> at the Ambohidranomanga Junior School, preventing dozens of children to go malnourished.</p>\
      <p>With your help we hope to double this number in 2022.</p>',
    donateLink: 'donate.html',
    programLink: 'programs.html',
    imgPath: 'img/food_distribution.jpg',
    imgAlt: 'Food being distributed to children waiting in line and laughing',
  },
  {
    title: 'School Supplies',
    bodyText:
      '<p>Each year, Elevatus pays for the tuition and the school supplies of every sponsored children, and distributes notebooks to all children.</p>\
      <p>We also make sure throughout the year that their school supplies are updated and replenished</p>\
      ',
    donateLink: 'donate.html',
    programLink: 'programs.html',
    imgPath: 'img/school_supplies.jpg',
    imgAlt: 'Boy receiving a pile of notebooks and school supplies',
  },
  {
    title: 'Sewing Classes',
    bodyText:
      '<p>At Elevatus we firmly believe that children need to explore different crafts, especially when living in rural areas.</p>\
      <p>Every child at the school is able to take a sewing class, throughout the year with Felana, who is also their math tutor.</p>\
      <p>With Elevatus growing and gaining new sponsors, we will propose other trade classes like carpentry, cooking, etc.</p>',
    donateLink: 'donate.html',
    programLink: 'programs.html',
    imgPath: 'img/sewing_classes.jpg',
    imgAlt: 'Boy using a sewing machine',
  },
  {
    title: 'Tutoring Classes',
    bodyText:
      '<p>Every Wednesday afternoon, all children can attend tutoring classes for 3 hours.</p>\
      <p>Despite thoses classes not being mandatory, almost every children from the junior school come each week, and even a few students from the near-by high school.</p>\
      <p>We need your help to increase the number of teachers, and even to build new classrooms to hold all those children.</p>',
    donateLink: 'donate.html',
    programLink: 'programs.html',
    imgPath: 'img/tutoring_classes.jpg',
    imgAlt: 'Children sitting behind desks, learning',
  },
  {
    title: 'School Renovations',
    bodyText:
      '<p>After carrying extension projects in 4 schools, Elevatus started the renovation of a century old junior school in 2018.</p>\
      <p>Elevatus still takes care of these historical buildings, but we would like to continue improving and expanding to host even more children.</p>',
    donateLink: 'donate.html',
    programLink: 'programs.html',
    imgPath: 'img/school_renovations.jpg',
    imgAlt: 'School building in Madagascar',
  },
  {
    title: 'Activities',
    bodyText:
      "<p>At least once a month, we have a special activity for the sponsored children. It can be anything, from a trip to the zoo, to a dance class or a volley-ball tournament.</p>\
      <p>It's an amazing opportunity for those children who never have the occasion to do such activities in their village.</p>",
    donateLink: 'donate.html',
    programLink: 'programs.html',
    imgPath: 'img/activities.jpg',
    imgAlt: 'Children observing giant turtles at the zoo',
  },
]

for (let i = 0; i < programCards.length; i++) {
  programCardsContainer.innerHTML += `
  <!-- card ${i + 1} -->
            <div class="showroom__card card">
              <input type="checkbox" id="toggle${i + 1}" class="hide" />
              <label for="toggle${i + 1}" class="card-btn">
                <img src="img/SVG/up-arrow.svg" alt="up arrow" />
              </label>
              <img
                src="${programCards[i].imgPath}"
                alt="${programCards[i].imgAlt}"
              />
              <div class="card__main">
                <div class="card__header">
                  <h4>${programCards[i].title}</h4>
                </div>
                <div class="card__body">
                  <div class="card__text">${programCards[i].bodyText}</div>
                  <a  class="card__program-link" href="${
                    programCards[i].programLink
                  }">Learn more</a>
                  <a class="card__sponsor" href="${
                    programCards[i].donateLink
                  }">Donate to this program</a>
                </div>
              </div>
            </div>
  `
}
