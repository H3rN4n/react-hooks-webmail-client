const Api = {
  getByIndex: (index) => {
    return Api.invoicesList[index];
  },
  add: (params) => {
    //@todo: validate params
    Api
      .invoiceList
      .push(params);
  },
  invoicesList: [
    {
      id: 1,
      image: '',
      subject: 'Email 1',
      recipient: 'Pepe',
      content: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pin' +
          'nace holystone mizzenmast quarter crow\' s nest nipperkin grog yardarm hempen ha' +
          'lter furl.Swab barque interloper chantey doubloon starboard grog black jack gang' +
          'way rutters.Deadlights jack lad schooner scallywag dance the hempen jig carouser' +
          ' broadside cable strike colors.Bring a spring upon her cable holystone blow the ' +
          'man down spanker Shiver me timbers to go on account lookout wherry doubloon chas' +
          'e.Belay yo - ho - ho keelhaul squiffy black spot yardarm spyglass sheet transom ' +
          'heave to.Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway.Ca' +
          'se shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow' +
          ' crow \'s nest rutters. Fluke jib scourge of the seven seas boatswain schooner g' +
          'aff booty Jack Tar transom spirits.'
    }, {
      id: 2,
      image: '',
      subject: 'Email 2',
      recipient: 'Pepe',
      content: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pin' +
          'nace holystone mizzenmast quarter crow\' s nest nipperkin grog yardarm hempen ha' +
          'lter furl.Swab barque interloper chantey doubloon starboard grog black jack gang' +
          'way rutters.Deadlights jack lad schooner scallywag dance the hempen jig carouser' +
          ' broadside cable strike colors.Bring a spring upon her cable holystone blow the ' +
          'man down spanker Shiver me timbers to go on account lookout wherry doubloon chas' +
          'e.Belay yo - ho - ho keelhaul squiffy black spot yardarm spyglass sheet transom ' +
          'heave to.Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway.Ca' +
          'se shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow' +
          ' crow \'s nest rutters. Fluke jib scourge of the seven seas boatswain schooner g' +
          'aff booty Jack Tar transom spirits.'
    }, {
      id: 3,
      image: '',
      subject: 'Super mega dupper Protein',
      recipient: 'MProteing',
      content: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pin' +
          'nace holystone mizzenmast quarter crow\' s nest nipperkin grog yardarm hempen ha' +
          'lter furl.Swab barque interloper chantey doubloon starboard grog black jack gang' +
          'way rutters.Deadlights jack lad schooner scallywag dance the hempen jig carouser' +
          ' broadside cable strike colors.Bring a spring upon her cable holystone blow the ' +
          'man down spanker Shiver me timbers to go on account lookout wherry doubloon chas' +
          'e.Belay yo - ho - ho keelhaul squiffy black spot yardarm spyglass sheet transom ' +
          'heave to.Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway.Ca' +
          'se shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow' +
          ' crow \'s nest rutters. Fluke jib scourge of the seven seas boatswain schooner g' +
          'aff booty Jack Tar transom spirits.'
    }, {
      id: 4,
      image: '',
      subject: 'Quit Now!',
      recipient: 'Anti Tabbaco',
      content: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pin' +
          'nace holystone mizzenmast quarter crow\' s nest nipperkin grog yardarm hempen ha' +
          'lter furl.Swab barque interloper chantey doubloon starboard grog black jack gang' +
          'way rutters.Deadlights jack lad schooner scallywag dance the hempen jig carouser' +
          ' broadside cable strike colors.Bring a spring upon her cable holystone blow the ' +
          'man down spanker Shiver me timbers to go on account lookout wherry doubloon chas' +
          'e.Belay yo - ho - ho keelhaul squiffy black spot yardarm spyglass sheet transom ' +
          'heave to.Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway.Ca' +
          'se shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow' +
          ' crow \'s nest rutters. Fluke jib scourge of the seven seas boatswain schooner g' +
          'aff booty Jack Tar transom spirits.'
    }
  ]
}

export default Api;