describe('Display UI Elements', () => {
  it('should display map', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('#theMap').should('be.visible')
    
  });
  it('should display header home button', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('#navButtons > :nth-child(1)').should('be.visible')
    
  });
  it('should display header about button', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('#navButtons > :nth-child(2)').should('be.visible')
    
  });
  it('should display header favorites button', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('#navButtons > :nth-child(3)').should('be.visible')
    
  });

  it('should display header volcano of the day button', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('#navButtons > div > button').should('be.visible')
    
  });

  it('should display header logo', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('#logo').should('be.visible')
    
  });

  it('should display page title', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('#title').should('be.visible')
    
  });
  it('should display search options and radio buttons', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('fieldset').should('be.visible')
    
  });
  it('should display search bar', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('[type="search"]').should('be.visible')
    
  });
  it('should display layers button', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('#navButtons > :nth-child(3)').should('be.visible')
    
  });
  it('should display about us title', () => {
    cy.visit('http://172.26.248.184:3000/about')
    cy.get('#wrapperAbout > #title').should('be.visible')
    
  });
  it('should display list of devs', () => {
    cy.visit('http://172.26.248.184:3000/about')
    cy.get('#devs').should('be.visible')
    
  });
  

















  it('should display favorite volcanoes title', () => {
    cy.visit('http://172.26.248.184:3000/favorites')
    cy.get('#wrapperFavs > #title').should('be.visible')
    
  });
  it('should display favorites list element', () => {
    cy.visit('http://172.26.248.184:3000/favorites')
    cy.get('#favs').should('be.visible')
    
  });
  it('should display volcano of the day image', () => {
    cy.visit('http://172.26.248.184:3000/daily')
    cy.get(':nth-child(2) > img')
    
  });
  it('should display layer control', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('.leaflet-draw-draw-polyline').should('be.visible')
    
  });
  it('should display print button', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('.leaflet-draw-draw-polyline').should('be.visible')
    
  });
  it('should display save button', () => {
    cy.visit('http://172.26.248.184:3000/')
    cy.get('.leaflet-draw-draw-polyline').should('be.visible')
    
  });
});

// describe('Draw & Edit Polygons', () => {
  
//   it('correctly draws a polyline', () => {
//     cy.visit('http://172.26.248.184:3000/')
//     cy.get('.leaflet-draw-draw-polyline').click
//     cy.get('#theMap')
//     cy.get('.leaflet-draw-draw-polygon').click
//     cy.get('#theMap')
//       .click(200, 250)
//       .click(300, 250)
//       .click(200, 250);
    
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