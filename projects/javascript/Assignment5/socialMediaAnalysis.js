const users = [
  {
    id: 1,
    name: "John",
    location: "New York",
    friends: [2, 3, 4],
    posts: [
      { content: "Great day at Central Park!", timestamp: "2024-09-10T12:00:00", likes: 15 },
      { content: "Loving the vibes in NYC!", timestamp: "2024-09-15T08:30:00", likes: 8 },
      { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
    ]
  },
  {
    id: 2,
    name: "Alice",
    location: "San Francisco",
    friends: [1, 3],
    posts: [
      { content: "Hiking in the Bay Area!", timestamp: "2024-09-12T14:20:00", likes: 12 },
      { content: "Enjoying the sunny weather!", timestamp: "2024-09-14T11:10:00", likes: 6 }
    ]
  },
  {
    id: 3,
    name: "Emily",
    location: "Los Angeles",
    friends: [1, 2, 4],
    posts: [
      { content: "Beach day in LA!", timestamp: "2024-09-08T09:45:00", likes: 25 },
      { content: "Exploring Hollywood!", timestamp: "2024-09-16T16:55:00", likes: 5 }
    ]
  },
  {
    id: 4,
    name: "David",
    location: "Chicago",
    friends: [2],
    posts: [
      { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
      { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
    ]
  },
  {
    id: 5,
    name: "Sarah",
    location: "Seattle",
    friends: [3, 1],
    posts: [
      { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
      { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
    ]
  }
];

  function analyzeUserData(users) {
    const ONE_WEEK = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
    let activeUsers = 0;
    let totalPopularPosts = 0;
    let totalLikes = 0;
  
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      let userHasPopularPosts = false;
  
      for (let j = 0; j < user.posts.length; j++) {
        const post = user.posts[j];
        const postDate = new Date(post.timestamp);
  
        // Check if the post is recent and has enough likes
        if ((new Date() - postDate) <= ONE_WEEK && post.likes >= 10) {
          userHasPopularPosts = true;
          totalLikes += post.likes;
          totalPopularPosts++;
        }
      }
  
      // If the user has popular posts then count them as active
      if (userHasPopularPosts) {
        activeUsers++;
      }
    }
  
    return {
      activeUsers: activeUsers,
      totalPopularPosts: totalPopularPosts,
      totalLikes: totalLikes
    };
  }
  
  //calculate average likes
  const result = analyzeUserData(users);
  let averageLikesPerUser = 0;
  
  if (result.activeUsers > 0) {
    averageLikesPerUser = result.totalLikes / result.activeUsers;
  }
  

  console.log({
    activeUsers: result.activeUsers,
    totalPopularPosts: result.totalPopularPosts,
    totalLikes: result.totalLikes,
    averageLikesPerUser: averageLikesPerUser
  });
  