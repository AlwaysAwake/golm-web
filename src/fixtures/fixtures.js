export default {
  polls: {
    normal: [{
      id: 1,
      title: 'leefwang vs singdong',
      desc: 'Who has the better face between leefwang and singdong',
      img: 'http://placehold.it/100x100',
    }, {
      id: 2,
      title: 'leefwang vs singdong',
      desc: 'Who has the better face between leefwang and singdong',
      img: 'http://placehold.it/100x100',
    }, {
      id: 3,
      title: 'leefwang vs singdong',
      desc: 'Who has the better face between leefwang and singdong',
      img: 'http://placehold.it/100x100',
    }, {
      id: 4,
      title: 'leefwang vs singdong',
      desc: 'Who has the better face between leefwang and singdong',
      img: 'http://placehold.it/100x100',
    }, {
      id: 5,
      title: 'leefwang vs singdong',
      desc: 'Who has the better face between leefwang and singdong',
      img: 'http://placehold.it/100x100',
    }, {
      id: 6,
      title: 'leefwang vs singdong',
      desc: 'Who has the better face between leefwang and singdong',
      img: 'http://placehold.it/100x100',
    }],
    premium: [{
      id: 7,
      title: 'Hyundai vs Samsung',
      desc: 'Which advertisement influences you better?',
      img: 'http://placehold.it/180x180',
    }, {
      id: 8,
      title: 'Hyundai vs Samsung',
      desc: 'Which advertisement influences you better?',
      img: 'http://placehold.it/180x180',
    }, {
      id: 9,
      title: 'Hyundai vs Samsung',
      desc: 'Which advertisement influences you better?',
      img: 'http://placehold.it/180x180',
    }, {
      id: 10,
      title: 'Hyundai vs Samsung',
      desc: 'Which advertisement influences you better?',
      img: 'http://placehold.it/180x180',
    }, {
      id: 11,
      title: 'Hyundai vs Samsung',
      desc: 'Which advertisement influences you better?',
      img: 'http://placehold.it/180x180',
    }, {
      id: 12,
      title: 'Hyundai vs Samsung',
      desc: 'Which advertisement influences you better?',
      img: 'http://placehold.it/180x180',
    }],
  },
  poll: {
    id: 20,
    title: 'JJazang vs JJamppong',
    description: 'Which lunch do you prefer, JJazang vs JJamppoing',
    type: 'normal',
    user_id: 1,
    answer_A: 'JJazang',
    answer_B: 'JJamppong',
    img_A: 'http://placehold.it/100x100',
    img_B: 'http://placehold.it/200x200',
    description_A: 'JJazang is the best food in the world',
    description_B: 'JJamppong, what a beautiful food',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    poll_histories: [{
      user: {
        id: 4,
        name: 'KooDing',
      },
      poll_id: 20,
      comment: 'Delicious jjazang',
      answer: 'A',
    }, {
      user: {
        id: 5,
        name: 'SeungDong',
      },
      poll_id: 20,
      comment: 'JJamppong is the best food in the world',
      answer: 'B',
    }],
  },
};
