describe('Display UI Elements on Main Page', () => {

  beforeEach(() => {
    cy.visit('http://172.26.248.184:3000/')
  });

  it('should display map', () => {
    cy.get('#theMap').should('be.visible')
  });

  it('should display header home button', () => {
    cy.get('#navButtons > :nth-child(1)').should('be.visible')
  });
  it('should display header about button', () => {
    cy.get('#navButtons > :nth-child(2)').should('be.visible')
  });

  it('should display header favorites button', () => {
    cy.get('#navButtons > :nth-child(3)').should('be.visible')
  });

  it('should display header volcano of the day button', () => {
    cy.get('#navButtons > div > button').should('be.visible')
  });

  it('should display header logo', () => {
    cy.get('#logo').should('be.visible')
  });

  it('should display page title', () => {
    cy.get('#title').should('be.visible')
  });

  it('should display search options and radio buttons', () => {
    cy.get('fieldset').should('be.visible')
  });

  it('should display search bar', () => {
    cy.get('[type="search"]').should('be.visible')
  });

  it('should display layers button', () => {
    cy.get('#navButtons > :nth-child(3)').should('be.visible')
  });
  
  it('should display print button', () => {
    cy.get(':nth-child(4) > #leafletEasyPrint').should('be.visible')
  });

  it('should display save button', () => {
    cy.get(':nth-child(5) > #leafletEasyPrint').should('be.visible')
  });
});

describe('Display UI Elements on About Page', () => {

  beforeEach(() => {
    cy.visit('http://172.26.248.184:3000/about')
  });

  it('should display about us title', () => {
    cy.get('#wrapperAbout > #title').should('be.visible')
  });

  it('should display list of devs', () => {
    cy.get('#devs').should('be.visible')
  });
});


describe('Display UI Elements on Favorites Page', () => {

  beforeEach(() => {
    cy.visit('http://172.26.248.184:3000/favorites')
  });

  it('should display favorite volcanoes title', () => {
    cy.get('#wrapperFavs > #title').should('be.visible')
  });

  it('should display favorites list element', () => {
    cy.get('#favs').should('be.visible')
  });
});

describe('Display UI Elements on Volcano of the Day Page', () => {

  beforeEach(() => {
    cy.visit('http://172.26.248.184:3000/daily')
  });

  it('should display volcano of the day image', () => {
    cy.get(':nth-child(2)').should('be.visible')
  });
});

describe('Redirect to Other Site Pages', () => {

  beforeEach(() => {
    cy.visit('http://172.26.248.184:3000/')
  })

  it('should redirect to About Page', () => {
    cy.get('#navButtons > :nth-child(2)').trigger('click')
    cy.get('#wrapperAbout > #title').should('be.visible')
  });

  it('should redirect to Favorites Page', () => {
    cy.get('#navButtons > :nth-child(3)').trigger('click')
    cy.get('#wrapperFavs > #title').should('be.visible')
  });

  // it('should redirect to Volcano of the Day Page', () => {
  //   cy.get('#navButtons > div > button').trigger('click')
  //   cy.get(':nth-child(2)').should('be.visible')
  // });

  it('should return to Home Page', () => {
    cy.get('#navButtons > :nth-child(1)').trigger('click')
    cy.get('#title').should('be.visible')
  });

});

describe('Nominally execute main page functions', () => {

  beforeEach(() => {
    cy.visit('http://172.26.248.184:3000/')
  })

  it('should toggle available map layers', () => {
    cy.get('.leaflet-control-layers-toggle').hover.click
  });

  it('should zoom in', () => {
    cy.get('.leaflet-control-zoom-in').click
  });

  it('should zoom out', () => {
    cy.get('.leaflet-control-zoom-out').click
  });

  it('should reset map view', () => {
    cy.get('.leaflet-top.leaflet-left > :nth-child(2) > a').click
  });


  it('should search the map for a specified target', () => {
    cy.get('#name').check
    cy.get('[type="search"]').type("Fue")
    cy.get(':nth-child(3) > button').trigger('click')
  });

});


// describe('Draw & Edit Polygons', () => {
  
//   it('correctly draws a polyline', () => {

//     cy.get('.leaflet-draw-draw-polyline')
//     cy.get('#theMap')
//       .click(200, 250)
//       .click(300, 250)
//       .click(350, 250)
//       .click(400, 250)
//       .click(400, 250);
//       cy.get('.leaflet-draw-draw-polyline').trigger('click')
//       cy.get('#theMap')
//       .click(200, 250)
//       .click(300, 250)
//       .click(350, 250)
//       .click(400, 250)
//       .click(400, 250);
//     })
//   });

//   it('correctly draws a polygon', () => {
//     cy.visit('http://172.26.248.184:3000/')
//     cy.get('.leaflet-draw-draw-polygon').click
//     cy.get('#theMap')
//       .click(200, 250)
//       .click(300, 250)
//       .click(200, 250);
//   });
// });