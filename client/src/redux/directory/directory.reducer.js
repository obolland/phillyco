const INITIAL_STATE = {
    sections: [
        {
          title: 'prints',
          imageUrl: 'https://i.lensdump.com/i/I1jed0.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 't-shirts', 
          imageUrl: 'https://i2.lensdump.com/i/I1jobQ.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'lifestyle',
          imageUrl: 'https://i2.lensdump.com/i/I1jvaq.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i2.lensdump.com/i/I1jqi2.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i1.lensdump.com/i/I1j9N9.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;