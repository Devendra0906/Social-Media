const data = [
  {
    id: 1,
    user: {
      userId: 1,
      userName: 'Chetan Godhani',
      userProfile: 'https://i.pinimg.com/originals/c4/a1/13/c4a1131a2b1c5e4963f887e6ceaa09cd.jpg',
    },
    isLiked: true,
    createdAt: 1567661136000,
    group: {
      groupId: 1,
      groupName: 'Social Group',
    },
    images: [
      {
        imageId: 1,
        path: 'https://i.pinimg.com/originals/c4/a1/13/c4a1131a2b1c5e4963f887e6ceaa09cd.jpg',
      }
    ],
    videos: [
      {
        videoId: 1,
        path: '/demo.mp4'
      },
      {
        videoId: 2,
        path: '/demo2.mp4'
      }
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    comments: [
      {
        commentId: 1,
        isLiked: true,
        userId: 1,
        userName: 'Chetan Godhani',
        userProfile: 'https://i.pinimg.com/originals/c4/a1/13/c4a1131a2b1c5e4963f887e6ceaa09cd.jpg',
        comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        createdAt: 1567661136000,
        replies: [
          {
            commentId: 2,
            isLiked: true,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://i.pinimg.com/originals/c4/a1/13/c4a1131a2b1c5e4963f887e6ceaa09cd.jpg',
            comment: 'Test 2',
            createdAt: 1567661136000,
          },
          {
            commentId: 3,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136000,
          },
        ]
      },
      {
        commentId: 2,
        isLiked: false,
        userId: 1,
        userName: 'Chetan Godhani',
        userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
        comment: 'Test 2',
        createdAt: 1567661136000,
        replies: []
      },
      {
        commentId: 3,
        isLiked: false,
        userId: 1,
        userName: 'Chetan Godhani',
        userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
        comment: 'Test 3',
        createdAt: 1567661136000,
        replies: [
          {
            commentId: 2,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136000,
          },
          {
            commentId: 3,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136000,
          },
        ]
      },
      {
        commentId: 4,
        isLiked: false,
        userId: 1,
        userName: 'Chetan Godhani',
        userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
        comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        createdAt: 1567661136000,
        replies: []
      },
      {
        commentId: 5,
        isLiked: false,
        userId: 1,
        userName: 'Chetan Godhani',
        userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
        comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        createdAt: 1567661136000,
        replies: []
      }
    ]
  },
  {
    id: 2,
    user: {
      userId: 1,
      userName: 'Chetan Godhani',
      userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
    },
    isLiked: true,
    createdAt: 1567661136000,
    group: {
      groupId: 1,
      groupName: 'Social Group',
    },
    images: [
      {
        imageId: 1,
        path: 'https://via.placeholder.com/1500',
      }
    ],
    videos: [],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    comments: [
      {
        commentId: 3,
        isLiked: false,
        userId: 1,
        userName: 'Chetan Godhani',
        userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
        comment: 'Test 3',
        createdAt: 1567661136000,
        replies: [
          {
            commentId: 2,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136000,
          },
          {
            commentId: 3,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136000,
          },
        ]
      }
    ]
  },
  {
    id: 3,
    user: {
      userId: 1,
      userName: 'Chetan Godhani',
      userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
    },
    isLiked: false,
    createdAt: 1567661136000,
    group: {
      groupId: 1,
      groupName: 'Social Group',
    },
    images: [],
    videos: [
      {
        videoId: 1,
        path: '/demo.mp4'
      },
      {
        videoId: 2,
        path: '/demo2.mp4'
      }
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    comments: [
      {
        commentId: 5,
        isLiked: false,
        userId: 1,
        userName: 'Chetan Godhani',
        userProfile: 'https://i.pinimg.com/originals/07/6f/03/076f03fa62c4edecc35b8d3503cd0d8a.jpg',
        comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        createdAt: 1567661136000,
        replies: []
      }
    ]
  }
]

module.exports = data;
